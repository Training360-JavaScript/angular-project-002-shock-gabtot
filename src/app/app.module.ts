import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { IconComponent } from './common/icon/icon.component';
import { ActionButtonComponent } from './common/action-button/action-button.component';
import { ActionButtonGroupComponent } from './common/action-button-group/action-button-group.component';
import { DataCellComponent } from './common/data-cell/data-cell.component';
import { DataRowComponent } from './common/data-row/data-row.component';
import { DataListComponent } from './common/data-list/data-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserListComponent,
    FilterPipe,
    SorterPipe,
    IconComponent,
    ActionButtonComponent,
    ActionButtonGroupComponent,
    DataCellComponent,
    DataRowComponent,
    DataListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
