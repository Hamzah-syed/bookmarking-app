const { gql, ApolloServer } = require("apollo-server-lambda");
const faunadb = require("faunadb"),
  q = faunadb.query;

const typeDefs = gql`
  type Query {
    bookmarks: [Bookmark]
  }
  type Mutation {
    add_bookmark(title: String!, description: String!, url: String!): Bookmark
  }
  type Bookmark {
    id: ID!
    title: String!
    description: String!
    createdAt: String!
    url: String!
  }
`;

const resolvers = {
  Query: {
    bookmarks: async (root, args, context) => {
      try {
        var adminClient = new faunadb.Client({
          secret: "fnAD5ewep5ACBwusq138HQJPvj_5PMi1QZhmNMwJ",
        });
        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index("all_bookmarks"))),
            q.Lambda((x) => q.Get(x))
          )
        );

        return result.data.map((d) => {
          return {
            id: d.ref.id,
            title: d.data.title,
            description: d.data.description,
            url: d.data.url,
            createdAt: d.data.createdAt,
          };
        });
      } catch (err) {
        console.log(err);
        return err.toString();
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler();
