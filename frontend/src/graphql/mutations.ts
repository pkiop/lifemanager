/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTimeRecode = /* GraphQL */ `
  mutation CreateTimeRecode(
    $input: CreateTimeRecodeInput!
    $condition: ModelTimeRecodeConditionInput
  ) {
    createTimeRecode(input: $input, condition: $condition) {
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
export const updateTimeRecode = /* GraphQL */ `
  mutation UpdateTimeRecode(
    $input: UpdateTimeRecodeInput!
    $condition: ModelTimeRecodeConditionInput
  ) {
    updateTimeRecode(input: $input, condition: $condition) {
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
export const deleteTimeRecode = /* GraphQL */ `
  mutation DeleteTimeRecode(
    $input: DeleteTimeRecodeInput!
    $condition: ModelTimeRecodeConditionInput
  ) {
    deleteTimeRecode(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      categoryList
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      categoryList
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      categoryList
      createdAt
      updatedAt
      owner
    }
  }
`;
