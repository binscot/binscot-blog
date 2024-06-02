import { signOutUser } from '@/actions/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cookies } from 'next/headers';

type InitialState = {
  value: UserState;
};

// 유저 상태를 정의할 타입을 만든다.
type UserState = {
  isSignIn: boolean;
  joinType: string;
  username: string;
  uid: string;
  isAdmin: boolean;
  createdAt: string;
  gender: string;
};

// 로그인 되지 않은 상태
const initialState = {
  value: {
    isSignIn: false,
    joinType: '',
    username: '',
    uid: '',
    isAdmin: false,
    createdAt: '',
    gender: ''
  } as UserState
} as InitialState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      const userData = action.payload;
      console.log('!==================');
      console.log(userData);
      console.log('!==================');
      state.value = {
        isSignIn: true, // 로그인 했으니까 true
        username: userData.username,
        uid: userData._id,
        joinType: userData.join_type,
        isAdmin: userData.admin,
        createdAt: userData.created_at,
        gender: userData.gender
      };
    },
    signOut: () => {
      signOutUser();
      return initialState;
    }
  }
});

export const { setUser, signOut } = authSlice.actions;

export default authSlice.reducer;
