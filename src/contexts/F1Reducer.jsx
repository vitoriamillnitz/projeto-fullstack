export const ACTIONS = {
  FETCH_START: 'fetch_start',
  FETCH_SUCCESS: 'fetch_success',
  FETCH_ERROR: 'fetch_error',
  SET_VALIDATION_ERROR: 'set_validation_error',
  CLEAR_ERROR: 'clear_error',
};

export const initialState = {
  loading: false, 
  data: null,     
  error: null,    
  validationError: null, 
};

export function f1Reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
        validationError: null,
      };

    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };

    case ACTIONS.FETCH_ERROR: 
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };

    case ACTIONS.SET_VALIDATION_ERROR: 
      return {
        ...state,
        validationError: action.payload,
      };

    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
        validationError: null,
      };

    default:
      return state;
  }
}