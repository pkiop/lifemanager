/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addTimeRecode = /* GraphQL */ `
  mutation AddTimeRecode(
    $userId: String!
    $title: String!
    $startTime: AddRecodeTime!
    $endTime: AddRecodeTime!
    $category: String!
    $isActive: Boolean!
  ) {
    AddTimeRecode(
      userId: $userId
      title: $title
      startTime: $startTime
      endTime: $endTime
      category: $category
      isActive: $isActive
    ) {
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
    }
  }
`;
export const deleteTimeRecodeById = /* GraphQL */ `
  mutation DeleteTimeRecodeById($id: ID!) {
    DeleteTimeRecodeById(id: $id) {
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
    }
  }
`;
