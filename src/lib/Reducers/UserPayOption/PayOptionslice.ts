import { bankprop } from '@/CustomComponents/AdminDashBoard/UsersPayOptions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface AuthState {
  bankdetail: bankprop;
}

const initialState: AuthState = {
  bankdetail:{}
 
}

export const bankDetailSlice = createSlice({
  name: 'PayOption',
  initialState,
  reducers: {
    setbankDetail: (state, action: PayloadAction<bankprop>) => {
      console.log("CategoryData",action.payload)
      state.bankdetail = action.payload;
    }
  },
});

export const { setbankDetail} = bankDetailSlice.actions;

// Async Thunks and other async logic can be added here
