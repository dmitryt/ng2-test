import { Component, OnInit, Input } from '@angular/core';
import { StoreItem } from '../models';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  @Input() selectedItem:StoreItem;
  constructor() { }

  ngOnInit() {
  }

}
