import { ACTION_TYPES } from './actionTypes';

export const getCanvassingListByName = data => ({ type: ACTION_TYPES.CANASSING_BY_NAME.GET, data });

export const setCanvassingListByName = data => ({ type: ACTION_TYPES.CANASSING_BY_NAME.SET, data });



export const setEmptyCanvassing = data => ({ type: ACTION_TYPES.EMPTY_CANVASSING.SET, data });
