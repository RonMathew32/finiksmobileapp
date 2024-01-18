import { ACTION_TYPES } from './actionTypes';

export const getVoterList = data => ({ type: ACTION_TYPES.VOTER_LIST.GET, data });

export const setVoterList = data => ({ type: ACTION_TYPES.VOTER_LIST.SET, data });

export const getCustomTags = data => ({ type: ACTION_TYPES.CUSTOM_TAGS.GET, data });

export const setCustomTags = data => ({ type: ACTION_TYPES.CUSTOM_TAGS.SET, data });

export const getCampaignTags = data => ({ type: ACTION_TYPES.CAMPAIGN_TAGS.GET, data });

export const setCampaignTags = data => ({ type: ACTION_TYPES.CAMPAIGN_TAGS.SET, data });

export const getSurveyList = data => ({ type: ACTION_TYPES.SURVEY_LIST.GET, data });

export const setSurveyList = data => ({ type: ACTION_TYPES.SURVEY_LIST.SET, data });

export const getScript = data => ({ type: ACTION_TYPES.SCRIPT.GET, data });

export const setScript = data => ({ type: ACTION_TYPES.SCRIPT.SET, data });

export const setCurrentVoter = data => ({ type: ACTION_TYPES.CURRENT_VOTER.SET, data });

export const setUndoneVoters = data => ({ type: ACTION_TYPES.UNDONE_VOTERS.SET, data });

export const setVotersTag = data => ({ type: ACTION_TYPES.VOTERS_TAG.SET, data });





