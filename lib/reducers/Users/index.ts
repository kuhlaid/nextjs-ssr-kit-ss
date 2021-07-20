import { HYDRATE } from "next-redux-wrapper";
import * as constants from "lib/constants";
import { AnyAction } from "lib/types";

export type UserReducerState = {
  data: [];
  isLoading: boolean;
};

export const initialState: UserReducerState = {
  data: [],
  isLoading: true
};

/**
 * @param {object} state - an object containing data and isLoading state.
 * @param {object} action - type and payload to be reduced.
 * @returns {UserReducerState} USERS state.
 */
const userReducer = (
  state: UserReducerState = initialState,
  { payload, type }: AnyAction
): UserReducerState => {
  switch (type) {
    case HYDRATE: {
      return { ...state, ...payload.users };
    }
    case constants.USERS_RESET:
    case constants.USERS_FETCH: {
      return initialState;
    }
    case constants.USERS_SET_DATA: {
      return {
        ...state,
        data: payload,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
