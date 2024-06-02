interface GetCallProps {
  endpoint: string;
  data?: any;
  body?: any;
  customConfig?: any;
  query?: object;
  revalidate?: number;
  cache?: any;
}
const apiUrl = process.env.API_V1_BASE_URL;

export default async function getCall(
  endpoint: GetCallProps['endpoint'],
  {
    data = {},
    body,
    query = {},
    // revalidate will be after 4 min
    revalidate = 240,
    cache = 'default',
    ...customConfig
  }: GetCallProps['body'] & {
    data?: any;
    customConfig?: any;
    query?: object;
    revalidate?: number;
    cache?: any;
  }
) {
  const headers = { 'Content-Type': 'application/json' };
  try {
    let url = `${apiUrl}/${endpoint}`;

    if (data?.id) {
      url = `${url}/${data.id}`;
    }

    const searchParams = Object?.keys?.(query)?.length ? new URLSearchParams(query)?.toString() : null;

    if (searchParams) {
      url = `${url}?${searchParams}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...headers,
        ...customConfig.headers
      },
      next: {
        revalidate
      },
      ...(cache && { cache })
    });
    const result = await response.json();
    // console.log(data);

    if (response.ok) {
      return result;
    }
    throw new Error(response.statusText);
    // 임시
  } catch (error) {
    // console.log(error);
    return Promise.reject(error);
  }
}
