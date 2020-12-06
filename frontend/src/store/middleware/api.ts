const API_ROOT = 'https://api.github.com/';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (endpoint: any) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
    .then((response) => response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return {
        test: 'test',
      };
    }));
};

export const CALL_API = 'Call API';

export default (store: any) => (next: any) => (action: any) => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every((type) => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = (data: any) => {
    const finalAction = { ...action, ...data };
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint).then(
    (response) => next(actionWith({
      response,
      type: successType,
    })),
    (error) => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened',
    })),
  );
};
