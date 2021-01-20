/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimeRecode = /* GraphQL */ `
  query GetTimeRecode($id: ID!) {
    getTimeRecode(id: $id) {
      id
      userId
      date
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
    $date: AWSDate
  ) {
    listTimeRecodes(date: $date) {
      items {
        id
        userId
        date
        title
        category
        isActive
        startTime {
          hour
          min
        }
	      endTime {
          hour
          min
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser {
    getUser {
      items {
        username
        categoryList{
          labelName
          color
        }
        owner
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        categoryList {
          labelName
          color
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
