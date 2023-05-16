import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
   
  },
  reducers: {
    updateToken: (state, action) => {
    
      state.token = action.payload
     
     },
     

    profiledata: (state, action) => {
      state.user = action.payload
    },
    
  }
});
export const {updateToken, profiledata } = userSlice.actions;

export const selectuser = (state) => state.user.user

export default userSlice.reducer