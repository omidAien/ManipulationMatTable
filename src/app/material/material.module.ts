import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MaterialModule { }
