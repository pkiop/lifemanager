/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTimeRecode = /* GraphQL */ `
  subscription OnCreateTimeRecode {
    onCreateTimeRecode {
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
export const onUpdateTimeRecode = /* GraphQL */ `
  subscription OnUpdateTimeRecode {
    onUpdateTimeRecode {
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
export const onDeleteTimeRecode = /* GraphQL */ `
  subscription OnDeleteTimeRecode {
    onDeleteTimeRecode {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      categoryList
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      categoryList
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      categoryList
      createdAt
      updatedAt
      owner
    }
  }
`;
