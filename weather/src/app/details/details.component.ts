import { Component, OnInit, Input } from '@angular/core';

class StoreItem {
  title: string;
}

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
  selectedType:string;
  store:Array<StoreItem>;

  ngOnInit() {
    let selectedItem = this.data.types[0];
    if (selectedItem) {
      this.setType(selectedItem.key);
    }
  }

  setType(type:string) :void {
    this.selectedType = type;
    this.store = this.data.store[this.selectedType];
  }

}
