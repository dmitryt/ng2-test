import { Component, OnInit, Input } from '@angular/core';
import { StoreItem } from '../models';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() selectedItem:StoreItem;
  constructor() {

  }

  ngOnInit() {

  }

}
