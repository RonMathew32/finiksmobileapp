import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: null,
  allcampaign: null,
  campaign: null,
};

const campaignReducer = createSlice({
  name: 'campaignReducer',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    AllCampaigns: (state, action) => {
      state.allcampaign = action.payload;
    },
    CurrentCampaign: (state, action) => {
      state.campaign = action.payload;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {setLoading, AllCampaigns, CurrentCampaign} =
  campaignReducer.actions;

// Export the slice reducer as the default export
export default campaignReducer.reducer;
