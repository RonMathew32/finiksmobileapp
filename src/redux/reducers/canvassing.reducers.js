import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
    canvassingListByName: [],
  };

const CanvassingReducer = (state = initialState, action) => {
    const {type, data} = action;
  
    switch (type) {
      case ACTION_TYPES.CANASSING_BY_NAME.SET:
        return {
          ...state,
          canvassingListByName: data,
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