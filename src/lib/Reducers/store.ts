import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from './AuthSlice/AuthSlice';
import { CategorySlice } from './CategorySlice/CategorySlice';
import { bankDetailSlice } from './UserPayOption/PayOptionslice';
 // Assuming you have a combined reducer

const store = configureStore({
  reducer: {
    AuthSlice:AuthSlice.reducer,
    CategorySlice:CategorySlice.reducer,
    PayoutOptionSlice:bankDetailSlice.reducer,
  }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
