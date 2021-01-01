// import AWSAppSyncClient, { defaultDataIdFromObject } from 'aws-appsync';
// import appSyncConfig from './aws-exports';

// const client = new AWSAppSyncClient({
//   url: appSyncConfig.aws_appsync_graphqlEndpoint,
//   region: appSyncConfig.aws_appsync_region,
//   auth: {
//     type: 'AMAZON_COGNITO_USER_POOLS',
//     apiKey: appSyncConfig.aws_appsync_apiKey,
//   } as any,
//   cacheOptions: {
//     dataIdFromObject: (obj: any) => {
//       const id = defaultDataIdFromObject(obj);

//       if (!id) {
//         const { __typename: typename } = obj;
//         switch (typename) {
//         case 'Comment':
//           return `${typename}:${obj.commentId}`;
//         default:
//           return id;
//         }
//       }

//       return id;
//     },
//   },
// });

// export default client;

import { ApolloLink } from 'apollo-link';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import appSyncConfig from 'aws-exports';

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;
const auth = {
  type: 'AMAZON_COGNITO_USER_POOLS',
  apiKey: appSyncConfig.aws_appsync_apiKey,
};
const link = ApolloLink.from([
  createAuthLink({ url, region, auth } as any) as any,
  createHttpLink({ uri: url }),
]);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
} as any);

export default client;
