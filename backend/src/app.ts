import { GraphQLServer } from 'graphql-yoga';

type Recode = {
  userId: String;
  title: String;
  startTime: [number];
  endTime?: [number];
  category: String;
  isActivate: Boolean;
};
const typeDefs = `

  type Recode {
    userId: String!,
    title: String!,
    startTime: [Int]!,
    endTime: [Int],
    category: String!,
    isActivate: Boolean!
  }

  type Query {
    hello(name: String): String!,
    bye(a: String, b:String): String!
  }

  type Mutation {
    addRecode(userId: String): Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,
    bye: (_: any, { a, b }: any) => `${a} ${b}`,
  },
  Mutation: {
    addRecode: (userId: string) => true,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
