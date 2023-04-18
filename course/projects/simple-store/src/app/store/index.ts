import { sidenavReducer } from './reducers';
import { ReducerMap, Store } from './store';

const reducers: ReducerMap = { sidenav: sidenavReducer };

export const store = new Store(reducers);
