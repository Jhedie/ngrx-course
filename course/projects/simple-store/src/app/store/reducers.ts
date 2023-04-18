import { SidenavAction, SidenavActionTypes } from './actions';
import { State } from './store';
//set the initial state of the sidenav
export const initialSidenavState = { hidden: false };
// the reducer Function takes 2 arguments, the current state and action being performed
// the function then returns a new state
export const sidenavReducer = (
  state: State = initialSidenavState,
  action: SidenavAction
): State => {
  switch (action.type) {
    case SidenavActionTypes.HideSidenav:
      return {
        ...state,
        hidden: false,
      };
    case SidenavActionTypes.ShowSidenav:
      return {
        ...state,
        hidden: true,
      };
    default:
      return state;
  }
};
