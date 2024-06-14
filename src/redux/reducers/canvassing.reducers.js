import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
  canvassingSearchByName: {},
    canvassingFilters: {}
  };

const CanvassingReducer = (state = initialState, action) => {
    const {type, data} = action;
  
    switch (type) {
      case ACTION_TYPES.CANASSING_SEARCH_VOTER_BY_NAME.SET:
        return {
          ...state,
          canvassingSearchByName: data,
        };
        case ACTION_TYPES.CANVASSING_FILTERS.SET:
          return {
            ...state,
            canvassingFilters: data,
          };

          case ACTION_TYPES.EMPTY_CANVASSING.SET:
            return {
              ...state,
              ...initialState
            };
  
      default:
        return state;
}};
  
  export default CanvassingReducer;