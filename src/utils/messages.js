export const response = (res, { status, code }, data = {}) => {
  return res.status(status).json({ code, data });
};

const ERROR = {
  ACCESS_DENIED: {
    code: 'ACCESS_DENIED',
    status: 403,
  },

  USER: {
    FETCH: {
      code: 'USER_FETCH_FAILED',
      status: 500,
    },
    UPDATE: {
      code: 'USER_UPDATE_FAILED',
      status: 500,
    },
    DELETE: {
      code: 'USER_DELETE_FAILED',
      status: 500,
    },
    NOT_FOUND: {
      code: 'USER_NOT_FOUND',
      status: 404,
    },
    USERNAME_EXISTS: {
      code: 'USER_USERNAME_EXISTS',
      status: 400,
    },
    USERNAME_REQUIRED: {
      code: 'USER_USERNAME_REQUIRED',
      status: 400,
    },
  },

  USERS: {
    FETCH: {
      code: 'USERS_FETCH_FAILED',
      status: 500,
    },
    NO_USERS: {
      code: 'USERS_NO_USERS',
      status: 404,
    },
  },

  AUTH: {
    CREATE: {
      code: 'AUTH_CREATE_FAILED',
      status: 500,
    },
    LOGIN: {
      code: 'AUTH_LOGIN_FAILED',
      status: 500,
    },
    CREDENTIALS_REQUIRED: {
      code: 'AUTH_CREDENTIALS_REQUIRED',
      status: 400,
    },
    NAME_REQUIRED: {
      code: 'AUTH_NAME_REQUIRED',
      status: 400,
    },
    INVALID_PASSWORD: {
      code: 'AUTH_PASSWORD_INVALID',
      status: 400,
    },
  },

  NOTE_GROUP: {
    FETCH: {
      code: 'NOTE_GROUP_FETCH_FAILED',
      status: 500,
    },
    CREATE: {
      code: 'NOTE_GROUP_CREATE_FAILED',
      status: 500,
    },
    UPDATE: {
      code: 'NOTE_GROUP_UPDATE_FAILED',
      status: 500,
    },
    DELETE: {
      code: 'NOTE_GROUP_DELETE_FAILED',
      status: 500,
    },
    NOT_FOUND: {
      code: 'NOTE_GROUP_NOT_FOUND',
      status: 404,
    },
    ADD_USER: {
      code: 'NOTE_GROUP_ADD_USER_FAILED',
      status: 500,
    },
    REMOVE_USER: {
      code: 'NOTE_GROUP_REMOVE_USER_FAILED',
      status: 500,
    },
  },

  NOTE_GROUPS: {
    FETCH: {
      code: 'NOTE_GROUPS_FETCH_FAILED',
      status: 500,
    },
  },

  NOTE: {
    FETCH: {
      code: 'NOTE_FETCH_FAILED',
      status: 500,
    },
    CREATE: {
      code: 'NOTE_CREATE_FAILED',
      status: 500,
    },
    UPDATE: {
      code: 'NOTE_UPDATE_FAILED',
      status: 500,
    },
    MOVE: {
      code: 'NOTE_MOVE_FAILED',
      status: 500,
    },
    DELETE: {
      code: 'NOTE_DELETE_FAILED',
      status: 500,
    },
    NOT_FOUND: {
      code: 'NOTE_NOT_FOUND',
      status: 404,
    },
  },

  NOTES: {
    FETCH: {
      code: 'NOTES_FETCH_FAILED',
      status: 500,
    },
  },
};

export { ERROR };

const SUCCESS = {
  USER: {
    FETCH: {
      code: 'USER_FETCHED',
      status: 200,
    },
    UPDATE: {
      code: 'USER_UPDATED',
      status: 200,
    },
    DELETE: {
      code: 'USER_DELETED',
      status: 200,
    },
    FIND: {
      code: 'USER_FOUND',
      status: 200,
    },
  },

  USERS: {
    FETCH: {
      code: 'USERS_FETCHED',
      status: 200,
    },
  },

  AUTH: {
    CREATE: {
      code: 'AUTH_CREATED',
      status: 201,
    },
    LOGIN: {
      code: 'AUTH_LOGIN',
      status: 200,
    },
    LOGOUT: {
      code: 'AUTH_LOGOUT',
      status: 200,
    },
  },

  NOTE_GROUP: {
    FETCH: {
      code: 'NOTE_GROUP_FETCHED',
      status: 200,
    },
    CREATE: {
      code: 'NOTE_GROUP_CREATED',
      status: 201,
    },
    UPDATE: {
      code: 'NOTE_GROUP_UPDATED',
      status: 200,
    },
    DELETE: {
      code: 'NOTE_GROUP_DELETED',
      status: 200,
    },
    FIND: {
      code: 'NOTE_GROUP_FOUND',
      status: 200,
    },
    ADD_USER: {
      code: 'NOTE_GROUP_ADDED_USER',
      status: 200,
    },
    REMOVE_USER: {
      code: 'NOTE_GROUP_REMOVED_USER',
      status: 200,
    },
  },

  NOTE_GROUPS: {
    FETCH: {
      code: 'NOTE_GROUPS_FETCHED',
      status: 200,
    },
  },

  NOTE: {
    FETCH: {
      code: 'NOTE_FETCHED',
      status: 200,
    },
    CREATE: {
      code: 'NOTE_CREATED',
      status: 201,
    },
    UPDATE: {
      code: 'NOTE_UPDATED',
      status: 200,
    },
    FIND: {
      code: 'NOTE_FOUND',
      status: 200,
    },
    DELETE: {
      code: 'NOTE_DELETE',
      status: 200,
    },
    MOVE: {
      code: 'NOTE_MOVED',
      status: 200,
    },
  },

  NOTES: {
    FETCH: {
      code: 'NOTES_FETCHED',
      status: 200,
    },
  },
};

export { SUCCESS };
