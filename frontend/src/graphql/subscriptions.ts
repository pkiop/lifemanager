/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote {
    onCreatePrivateNote {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote {
    onUpdatePrivateNote {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote {
    onDeletePrivateNote {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAuction = /* GraphQL */ `
  subscription OnCreateAuction {
    onCreateAuction {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAuction = /* GraphQL */ `
  subscription OnUpdateAuction {
    onUpdateAuction {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAuction = /* GraphQL */ `
  subscription OnDeleteAuction {
    onDeleteAuction {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTimeRecode = /* GraphQL */ `
  subscription OnCreateTimeRecode {
    onCreateTimeRecode {
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
export const onUpdateTimeRecode = /* GraphQL */ `
  subscription OnUpdateTimeRecode {
    onUpdateTimeRecode {
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
export const onDeleteTimeRecode = /* GraphQL */ `
  subscription OnDeleteTimeRecode {
    onDeleteTimeRecode {
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
