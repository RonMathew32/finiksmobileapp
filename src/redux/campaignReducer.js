import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: null,
};

const campaignReducer = createSlice({
  name: 'campaignReducer',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {setLoading} = campaignReducer.actions;

// Export the slice reducer as the default export
export default campaignReducer.reducer;
