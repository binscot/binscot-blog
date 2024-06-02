interface PostCallProps {
  endpoint: string;
  body: any;
  customConfig?: any;
}

const apiUrl = process.env.API_V1_BASE_URL;

export default async function postCall(
  endpoint: PostCallProps['endpoint'],
  { body, ...customConfig }: PostCallProps['body'] & { customConfig?: any }
) {
  const headers = { 'Content-Type': 'application/json' };
  try {
    const url = `${apiUrl}/${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...headers,
        ...customConfig.headers
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    // console.log(data);
    if (!response.ok) {
      console.log('error');
    }
    if (response.ok) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    // console.log(error);
    return Promise.reject(error);
  }
}
