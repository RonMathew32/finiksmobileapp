import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
    allCampaign: [],
    currentCampaign: {},
    campaignId: null
  };

const CampaignReducer = (state = initialState, action) => {
    const {type, data} = action;
  
    switch (type) {
      case ACTION_TYPES.JOINED_CAMPAIGN.SET:
        return {
          ...state,
          allCampaign: data.joinedCampaigns.campaignJoined,
          campaignId: data.joinedCampaigns._id
        };

        case ACTION_TYPES.CURRENT_CAMPAIGN.SET:
          return {
            ...state,
            currentCampaign: data,
          };

          case ACTION_TYPES.EMPTY_CAMPAIGN.SET:
            return {
              ...state,
              ...initialState
            };
  
      default:
        return state;
}};
  
  export default CampaignReducer;