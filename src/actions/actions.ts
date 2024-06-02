'use server';

import { cookies } from 'next/headers';
import { useAppSelector } from '@/redux/hooks';
// import { cookies } from 'next/headers';

/**
 * Creates a new user
 *
 * @param email The email of the user.
 * @param username The username of the user.
 * @param password The password of the user.
 * @returns a boolean indicating if the user was created successfully.
 */
// export async function createUser(
//   email: string,
//   username: string,
//   password: string
// ): Promise<boolean> {
//   const baseURL = process.env.API_V1_BASE_URL;
//   if (!baseURL) {
//     console.error("API_BASE_URL is not defined.");
//     return false;
//   }

//   const url = `${baseURL}/users`;

//   try {
//     const response = await axios.post(url, {
//       email,
//       username,
//       password,
//     });

//     if (response.status === 200) {
//       return true;
//     }
//   } catch (error: any) {
//     console.log(231);
//     console.log(error);
//     console.error(error.message);
//     return false;
//   }

//   return false;
// }

/**
 * Validates the user's credentials.
 *
 * @param username The username of the user.
 * @param password The password of the user.
 */

export async function signInUser(username: string, password: string) {
  const baseURL = process.env.API_BASE_URL;

  if (!baseURL) {
    console.error('API_BASE_URL is not defined.');
    return;
  }

  const url = `${baseURL}/api/v1/account/signin`;
  console.log(url);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      cache: 'no-store',
      body: new URLSearchParams({
        username,
        password
      }).toString()
    });

    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.success === true) {
      const accessToken = responseJson.data.token_data.access_token;
      const userData = responseJson.data.user_data;
      cookies().set('access_token', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: true
      });
      return userData;
    }
  } catch (error: any) {
    console.error(error.message);
  }
  return false;
}

export async function getCurrentUser(token: string) {
  const baseURL = process.env.API_BASE_URL;
  if (!baseURL) {
    console.error('API_BASE_URL is not defined.');
    return;
  }

  const url = `${baseURL}/api/v1/account/info`;
  //   const token = cookies().get('access_token')?.value;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`
      },
      cache: 'no-store'
    });

    const responseJson = await response.json();
    if (responseJson.success === true) {
      console.log(responseJson);
      console.log('getCurrentUser');
      return responseJson;
    }
  } catch (error: any) {
    console.error(error.message);
  }
  return false;
}

// export async function isSignInUser() {
//   const accessToken = cookies().get('access_token')?.value;
//   return !!accessToken;
// }

/**
 * Logs out the user.
 */

export async function signOutUser() {
  // cookies().set("jwt", "", { httpOnly: true });
  // redirect("/login");
  cookies().delete('access_token');
  return null;
}
