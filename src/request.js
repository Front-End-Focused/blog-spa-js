import config from './config';

async function request(resource) {
  try {
    const response = await fetch(`${config.baseURL}/${resource}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export default request;
