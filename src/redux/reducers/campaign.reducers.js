import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
    allCampaign: [],
    currentCampaign: {},
  };

const CampaignReducer = (state = initialState, action) => {
    const {type, data} = action;
  
    switch (type) {
      case ACTION_TYPES.JOINED_CAMPAIGN.SET:
        return {
          ...state,
          allCampaign: data.joinedCampaigns.campaignJoined,
        };

        case ACTION_TYPES.CURRENT_CAMPAIGN.SET:
          return {
            ...state,
            currentCampaign: data,
          };
  
      default:
        return state;
}};
  
  export default CampaignReducer;