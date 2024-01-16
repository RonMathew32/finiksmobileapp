import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
    allCampaign: null,
    campaign: null,
  };

const CampaignReducer = (state = initialState, action) => {
    const {type, data} = action;
  
    switch (type) {
      case ACTION_TYPES.JOIN_CAMPAIGN.SET:
        return {
          ...state,
          allCampaign: data.campaign,
        };
  
      default:
        return state;
}};
  
  export default CampaignReducer;