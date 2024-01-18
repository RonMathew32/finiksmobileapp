import { ACTION_TYPES } from './actionTypes';

export const getJoinCampaign = data => ({ type: ACTION_TYPES.JOIN_CAMPAIGN.GET, data });

export const setJoinCampaign = data => ({ type: ACTION_TYPES.JOIN_CAMPAIGN.SET, data });

export const getJoinedCampaign = data => ({ type: ACTION_TYPES.JOINED_CAMPAIGN.GET, data });

export const setJoinedCampaign = data => ({ type: ACTION_TYPES.JOINED_CAMPAIGN.SET, data });

export const setCurrentCampaign = data => ({ type: ACTION_TYPES.CURRENT_CAMPAIGN.SET, data });

