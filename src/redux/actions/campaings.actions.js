import { ACTION_TYPES } from './actionTypes';

export const getJoinCampaign = data => ({ type: ACTION_TYPES.JOIN_CAMPAIGN.GET, data });

export const setJoinCampaign = data => ({ type: ACTION_TYPES.JOIN_CAMPAIGN.SET, data });

export const getCurrentCampaign = data => ({ type: ACTION_TYPES.CURRENT_CAMPAIGN.GET, data });

export const setCurrentCampaign = data => ({ type: ACTION_TYPES.CURRENT_CAMPAIGN.SET, data });

