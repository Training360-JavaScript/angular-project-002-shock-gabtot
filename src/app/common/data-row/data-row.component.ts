import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() dataRow: User = new User();
  @Input() isSelected!: Boolean;

  dataRowShadow: User = new User();
  dataChanged: boolean = false;

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter();
  @Output() updateClick: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  keys: string[] = 'id,name,email,address,active'.split(',');

  constructor() {
  }

  ngOnInit(): void {
    this.dataRowShadow = { ...this.dataRow };
  }

  onSelectClicked(): void {
    this.selectClick.emit();
  }

  onDataChanged() : void {
    this.dataChanged =
      JSON.stringify(this.dataRow) !== JSON.stringify(this.dataRowShadow)
  }

  onUpdateClicked(): void {
    this.dataRow.address = this.dataRowShadow.address;
    this.dataRow.email = this.dataRowShadow.email;
    this.dataRow.name = this.dataRowShadow.name;
    this.dataRow.active = this.dataRowShadow.active;
    this.updateClick.emit();
    this.onDataChanged();
  }

  onDeleteClicked(): void {
    this.deleteClick.emit(this.dataRow);
  }

  onCancelClicked(): void {
    this.ngOnInit();
    this.onDataChanged();
  }

}
