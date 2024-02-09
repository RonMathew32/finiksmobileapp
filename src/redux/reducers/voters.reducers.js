import {ACTION_TYPES} from '../actions/actionTypes';

const initialState = {
  campaignTags: [],
  customTags: [],
  votersList: [],
  survey: [],
  script: [],
  campaignOwnerID: null,
  currentVoter: {},
  unDoneVoters: [],
  votersTag: [],
  listId: '',
  scriptId: '',
  listDone: false
};

const VotersReducer = (state = initialState, action) => {
  const {type, data} = action;

  switch (type) {
    case ACTION_TYPES.CAMPAIGN_TAGS.SET:
      return {
        ...state,
        campaignTags: data.tags,
      };
      
    case ACTION_TYPES.CUSTOM_TAGS.SET:
      return {
        ...state,
        customTags: data.tags,
      };

    case ACTION_TYPES.VOTER_LIST.SET:
      return {
        ...state,
        votersList: data.list.voters,
        listId: data.list._id,
        listDone: data.listDone
      };

    case ACTION_TYPES.SURVEY_LIST.SET:
      return {
        ...state,
        survey: data.survey.surveyQuestions,
      };

    case ACTION_TYPES.SCRIPT.SET:
      console.log(data, 'SCRIPT');
      return {
        ...state,
        script: data.script,
        campaignOwnerID: data.script.campaignOwnerId
      };

    case ACTION_TYPES.CURRENT_VOTER.SET:
      return {
        ...state,
        currentVoter: data,
      };

    case ACTION_TYPES.UNDONE_VOTERS.SET:
        return {
          ...state,
          unDoneVoters: data,
        };
        
    case ACTION_TYPES.VOTERS_TAG.SET:
        return {
          ...state,
          votersTag: data,
        };

    case ACTION_TYPES.SCRIPT_ID.SET:
        return {
          ...state,
          scriptId: data,
        };

    case ACTION_TYPES.EMPTY_VOTERS.SET:
        return {
          ...state,
          ...initialState,
        };

    default:
      return state;
  }
};

export default VotersReducer;
