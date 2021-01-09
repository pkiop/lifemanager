/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAuction = /* GraphQL */ `
  mutation CreateAuction(
    $input: CreateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    createAuction(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAuction = /* GraphQL */ `
  mutation UpdateAuction(
    $input: UpdateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    updateAuction(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAuction = /* GraphQL */ `
  mutation DeleteAuction(
    $input: DeleteAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    deleteAuction(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTimeRecode = /* GraphQL */ `
  mutation CreateTimeRecode(
    $input: CreateTimeRecodeInput!
    $condition: ModelTimeRecodeConditionInput
  ) {
    createTimeRecode(input: $input, condition: $condition) {
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
export const updateTimeRecode = /* GraphQL */ `
  mutation UpdateTimeRecode(
    $input: UpdateTimeRecodeInput!
    $condition: ModelTimeRecodeConditionInput
  ) {
    updateTimeRecode(input: $input, condition: $condition) {
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
export const deleteTimeRecode = /* GraphQL */ `
  mutation DeleteTimeRecode(
    $input: DeleteTimeRecodeInput!
    $condition: ModelTimeRecodeConditionInput
  ) {
    deleteTimeRecode(input: $input, condition: $condition) {
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
