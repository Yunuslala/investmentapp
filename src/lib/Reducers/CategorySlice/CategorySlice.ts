import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Category {
  name:string,
  createdAt:string,
  _id:string
}

interface AuthState {
  CategoryData: Category[];
}

const initialState: AuthState = {
  CategoryData: [],
 
}

export const CategorySlice = createSlice({
  name: 'UserProfile',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      console.log("CategoryData",action.payload)
      state.CategoryData = action.payload;
    }
  },
});

export const { setCategories} = CategorySlice.actions;

// Async Thunks and other async logic can be added here
