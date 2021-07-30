import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { MaterialModule } from '../material/material.module';
import { GridComponent } from './grid/grid.component';
import { EditTableRowComponent } from './edit-table-row/edit-table-row.component';


@NgModule({
  declarations: [
    GridComponent,
    EditTableRowComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MaterialModule
  ]
})
export class TableModule { }
