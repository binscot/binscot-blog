/* eslint-disable no-underscore-dangle */

'use server';

import { cookies } from 'next/headers';
import { UserInitialState, UserState } from '@/types';
import { sleep } from '@/utils/core';

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

export async function signInUser(username: string, password: string): Promise<UserState> {
  const baseURL = process.env.API_BASE_URL;

  if (!baseURL) {
    console.error('API_BASE_URL is not defined.');
    return UserInitialState;
  }

  const url = `${baseURL}/api/v1/account/signin`;
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
    if (responseJson.success === true) {
      const accessToken = responseJson.data.token_data.access_token;
      const refreshToken = responseJson.data.token_data.refresh_token;
      cookies().set('access_token', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: true
      });
      cookies().set('refresh_token', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: true
      });

      const userData = responseJson.data.user_data;
      const userInfo = {
        isSignIn: true,
        joinType: userData.join_type,
        username: userData.username,
        uid: userData._id,
        isAdmin: userData.admin,
        createdAt: userData.created_at,
        gender: userData.gender
      } as UserState;

      return userInfo;
    }
    return UserInitialState;
  } catch (error: any) {
    console.error(error.message);
  }
  return UserInitialState;
}

export async function getCurrentUser(): Promise<UserState> {
  const accessToken = cookies().get('access_token');
  if (!accessToken) {
    return UserInitialState;
  }
  const baseURL = process.env.API_BASE_URL;
  if (!baseURL) {
    console.error('API_BASE_URL is not defined.');
    return UserInitialState;
  }
  const url = `${baseURL}/api/v1/account/info`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${accessToken.value}`
      },
      cache: 'no-store'
    });

    const responseJson = await response.json();

    if (responseJson.success === true) {
      const userInfo = {
        isSignIn: true,
        joinType: responseJson.data.join_type,
        username: responseJson.data.username,
        uid: responseJson.data._id,
        isAdmin: responseJson.data.admin,
        createdAt: responseJson.data.created_at,
        gender: responseJson.data.gender
      } as UserState;
      return userInfo;
    }
    return UserInitialState;
  } catch (error: any) {
    console.error(error.message);
  }
  return UserInitialState;
}

export async function signOutUser() {
  cookies().delete('access_token');
  cookies().delete('refresh_token');
  return null;
}
