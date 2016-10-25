import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { StoreItem } from '../models';

class TypeItem {
  key: string;
  label: string;
}

class Data {
  types: Array<TypeItem>;
  store: Object;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() data:Data;
  @Input() selectedItem:StoreItem;
  @Output() setSelected;

  selectedType:string;
  store:Array<StoreItem>;

  constructor() {
    this.setSelected = new EventEmitter();
  }

  ngOnInit() {
    let selectedType = this.data.types[0];
    if (selectedType) {
      this.setType(selectedType.key);
      let selectedItem = this.store[0];
      if (selectedItem) {
        this.selectItem(selectedItem);
      }
    }
  }

  setType(type:string) :void {
    this.selectedType = type;
    this.store = this.data.store[this.selectedType];
  }

  selectItem(item) {
    this.setSelected.emit(item);
  }

}
