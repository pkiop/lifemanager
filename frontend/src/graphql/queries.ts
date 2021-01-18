/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimeRecode = /* GraphQL */ `
  query GetTimeRecode($id: ID!) {
    getTimeRecode(id: $id) {
      id
      date
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
export const listOneDateRecode = /* GraphQL */ `
  query ListOneDateRecode($date: AWSDate!) {
    listOneDateRecode(date: $date) {
      items {
        id
        date
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
export const listTimeRecodes = /* GraphQL */ `
  query ListTimeRecodes(
    $filter: ModelTimeRecodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeRecodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
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
