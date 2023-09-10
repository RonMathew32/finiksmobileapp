import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: '',
  biometric: false,
  userId: null,
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveUser: (state, action) => {
      state.user = action.payload;
      state.userId = action.payload.id;
    },
    removeUser: (state, action) => {
      state.token = '';
      state.user = null;
    },
    updateBiometrics: (state, action) => {
      state.biometric = action.payload;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {saveUser, removeUser, saveToken, updateBiometrics} =
  userReducer.actions;

// Export the slice reducer as the default export
export default userReducer.reducer;
