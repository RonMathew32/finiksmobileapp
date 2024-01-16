import {BASE_URL} from '@env';

const ApiCall = async ({ params, route, verb, body, headers }) => {
  try {
    const response = await fetch(`${BASE_URL}/${route}`, {
      method: verb,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });
    const {status} = response
    const data = await response.json();
    return {payload: data, status};
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const ApiCallWithFormData = async ({params, route, verb, token, body}) =>
  await baseApiCall({
    params,
    route,
    verb,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + token,
    },
    body,
  });

export {ApiCall, ApiCallWithFormData};
