import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface UserLogin {
  Region?:string,
  Country?:string,
  _id?:string,
  State?:string,
  City?: string,
  zipCode?:string,
  Intrests?:Array<string>,
  Category?: string,
  FirstName?: string,
  MiddleName?:string,
  LastName?:string,
  email?: string,
  Contact?: string,
  ReferalId?:string,
  avatar?:string,
  IdCard?:string,
  role?:string,
  createdAt?:string
}

interface AuthState {
  UserLogin: UserLogin;
  isLogged: boolean;
}

const initialState: AuthState = {
  UserLogin: {},
  isLogged: false,
}

export const AuthSlice = createSlice({
  name: 'UserProfile',
  initialState,
  reducers: {
    setLoggin: (state, action: PayloadAction<UserLogin>) => {
      console.log("userlogin",action.payload)
      state.isLogged = true;
      state.UserLogin = action.payload;
    },
    logOut: (state) => {
      state.isLogged = false;
      state.UserLogin = {}; // Corrected typo from UserLogin={} to state.UserLogin = {}
    }
  },
});

export const { setLoggin, logOut } = AuthSlice.actions;

// Async Thunks and other async logic can be added here
