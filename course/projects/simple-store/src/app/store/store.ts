import { BehaviorSubject, Subscription } from 'rxjs';

export interface Action {
  type: string;
}

export interface ReducerMap {
  [key: string]: Function;
}

export interface State {
  [key: string]: any;
}

export class Store {
  //create a Subject that subscribers can subscribe to
  private state$ = new BehaviorSubject<State>(null);

  //The store will take a object consisting of reducers and a state object which by default can be empty
  constructor(public reducers: ReducerMap, private state: State = {}) {}

  // This is the code that will update the app state when an action is dispatched.
  dispatch(action: Action) {
    this.notify(action);
    this.state$.next(this.state);
  }

  //this is responsible for emitting a next notification to the state$ using the .next() method
  notify(action: Action) {
    // Loop through all of the reducers
    Object.keys(this.reducers).forEach((key) => {
      // then invokes the reducer() function for each slice of state, updating the state object.
      this.state[key] = this.reducers[key](this.state[key], action);
    });
  }

  /**
   * Subscribe to the state$ observable. This is the only way to get the current state.
   * @param next The callback function that is invoked when the state changes.
   * @param error The callback function that is invoked when an error occurs.
   * @param complete The callback function that is invoked when the store is destroyed.
   * @returns A Subscription object that can be used to unsubscribe from the state$ observable.
   */
  subscribe(
    next: (value: State) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription {
    return this.state$.subscribe(next, error, complete);
  }
}
