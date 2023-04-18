import { Component, OnInit } from '@angular/core';
import { Resort } from './store/models';
import { initialSidenavState } from './store/reducers';
import { store } from './store';
import { Store } from './store/store';
import { HideSidenav, ShowSidenav } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  resorts: Resort[] = [];

  // todo: declare sidenavHidden boolean property
  sidenavHidden = initialSidenavState.hidden;
  // todo: define store property
  store: Store;

  ngOnInit() {
    // todo: obtain reference to store instance
    this.store = store;
    // todo: dispatch action to load resorts
    // todo: subscribe to state changes and update resorts and sidenavHidden properties
    // hint: you may want to log out the state in the subscribe() next notification callback
    this.store.subscribe((state) => {
      if (state) {
        this.sidenavHidden = state.sidenav.hidden;
      }
      console.log(state);
    });
  }

  hideSidenav() {
    console.log('hide side nav');
    // todo: dispatch action to hide sidenav
    this.store.dispatch(new HideSidenav());
  }

  identifyResort(resort: Resort) {
    return resort.id;
  }

  showSidenav() {
    console.log('show side nav');

    // todo: dispatch action to show sidenav
    this.store.dispatch(new ShowSidenav());
  }
}
