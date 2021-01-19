import { ApolloLink } from 'apollo-link';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';
import { AUTH_TYPE } from 'aws-appsync';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import appSyncConfig from 'aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import { userVar } from 'graphql/localState';

Amplify.configure(appSyncConfig);

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;
const auth = {
  type: appSyncConfig.aws_appsync_authenticationType as AUTH_TYPE,
  jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
};
const link = ApolloLink.from([
  createAuthLink({ url, region, auth } as any) as any,
  createHttpLink({ uri: url }),
]);

const typeDefs = gql`
  extend type User {
    username: String!
    selectedDate: Date!
  }

  extend type Query {
    getUser: User!
  }

  extend type Mutation {
    setUser(username: String!): Boolean!
  }
`;

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getUser: {
          read() {
            return userVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  link,
  cache,
  typeDefs,
} as any);

export default client;
