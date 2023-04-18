import { Action } from './store';

export enum SidenavActionTypes {
  HideSidenav = '[Sidenav] Hide Sidenav',
  ShowSidenav = '[Sidenav] Show Sidenav',
}

export class HideSidenav implements Action {
  readonly type: string = SidenavActionTypes.HideSidenav;
}

export class ShowSidenav implements Action {
  readonly type: string = SidenavActionTypes.ShowSidenav;
}

//the below will the action type to be specified when defining a reducer Function for the sidenav state
export type SidenavAction = HideSidenav | ShowSidenav;
