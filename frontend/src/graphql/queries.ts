/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimeRecode = /* GraphQL */ `
  query GetTimeRecode($id: ID!) {
    getTimeRecode(id: $id) {
      id
      userId
      title
      startTime {
        hour
        min
      }
      endTime {
        hour
        min
      }
      category
      isActive
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTimeRecodes = /* GraphQL */ `
  query ListTimeRecodes(
    $filter: ModelTimeRecodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeRecodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        title
        startTime {
          hour
          min
        }
        endTime {
          hour
          min
        }
        category
        isActive
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
