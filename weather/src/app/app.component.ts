import { Component } from '@angular/core';
import { StoreItem } from './models';

import fixtures from './fixtures';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItem:StoreItem;
  title = 'app works!';
  data = fixtures;
}
