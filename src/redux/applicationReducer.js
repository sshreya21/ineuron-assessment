import { getValue } from "../utils/commonUtils";

export const initialState = {};

export function applicationReducer(state, action) {
  if (state === undefined) {
    state = initialState;
  }
  const type = action.type.substring(0, action.type.lastIndexOf("_"));
  switch (action.type) {
    case type + "_PENDING":
      return Object.assign({}, state, {
        [action.readProps || type.toLowerCase()]: {
          data: getValue(action, "action.data"),
          loading: true,
          error: false,
        },
      });
    case type + "_FAILURE":
      return Object.assign({}, state, {
        [action.readProps || type.toLowerCase()]: {
          data: getValue(action, "action.data"),
          loading: false,
          error: true,
        },
      });
    case type + "_SUCCESS":
      return Object.assign({}, state, {
        [action.readProps || type.toLowerCase()]: {
          data: getValue(action, "action.data"),
          loading: false,
          error: false,
        },
      });
    default:
      return state;
  }
}
