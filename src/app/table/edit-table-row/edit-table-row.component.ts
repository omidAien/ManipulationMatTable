import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../grid/grid.component';


interface Data {
  element: PeriodicElement,
  index: number
}

@Component({
  selector: 'app-edit-table-row',
  templateUrl: './edit-table-row.component.html',
  styleUrls: ['./edit-table-row.component.scss']
})
export class EditTableRowComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<EditTableRowComponent>, @Inject(MAT_DIALOG_DATA) public data: Data) { }

  changeData = {
    position: this.data.element.position,
    name: "omid",
    weight: 78 + this.data.index,
    edit: "Edit"
  }

  ngOnInit() {

  }

}
