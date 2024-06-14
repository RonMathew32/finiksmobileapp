import { ACTION_TYPES } from './actionTypes';

export const getCanvassingSearchByName = data => ({ type: ACTION_TYPES.CANASSING_SEARCH_VOTER_BY_NAME.GET, data });

export const setCanvassingSearchByName = data => ({ type: ACTION_TYPES.CANASSING_SEARCH_VOTER_BY_NAME.SET, data });

export const getCanvassingFilters = data => ({ type: ACTION_TYPES.CANVASSING_FILTERS.GET, data });

export const setCanvassingFilters = data => ({ type: ACTION_TYPES.CANVASSING_FILTERS.SET, data });


export const setEmptyCanvassing = data => ({ type: ACTION_TYPES.EMPTY_CANVASSING.SET, data });
