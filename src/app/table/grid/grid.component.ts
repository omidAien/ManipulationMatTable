import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditTableRowComponent } from '../edit-table-row/edit-table-row.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  edit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, edit: 'Edit'},
  {position: 2, name: 'Helium', weight: 4.0026, edit: 'Edit'},
  {position: 3, name: 'Lithium', weight: 6.941, edit: 'Edit'},
  {position: 4, name: 'Beryllium', weight: 9.0122, edit: 'Edit'},
  {position: 5, name: 'Boron', weight: 10.811, edit: 'Edit'},
  {position: 6, name: 'Carbon', weight: 12.0107, edit: 'Edit'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, edit: 'Edit'},
  {position: 8, name: 'Oxygen', weight: 15.9994, edit: 'Edit'},
  {position: 9, name: 'Fluorine', weight: 18.9984, edit: 'Edit'},
  {position: 10, name: 'Neon', weight: 20.1797, edit: 'Edit'},
];


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'edit'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatTable) table: MatTable<PeriodicElement>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private matDialog: MatDialog) { }

  ngOnInit() {}

  editRow(element:PeriodicElement, index:number) {
    
    const dialogRef = this.matDialog.open(EditTableRowComponent, {
      data: { element: element, index: index },
      width: '300px',
      height: '300px',
    })

    dialogRef.afterClosed().subscribe((result: PeriodicElement) => {

      const allRows = document.querySelector("tbody")?.querySelectorAll("tr");

      const data = this.dataSource.data;
      data.splice(index, 1, result);

      this.dataSource.data = data;
      // this.table.renderRows();
  
      // const rowEdited = allRows?.item(result.position - 1)! as HTMLTableRowElement;

      // rowEdited.querySelectorAll("td.mat-cell").forEach((tdMatCell) => {

      //   const element = (tdMatCell)! as HTMLTableCellElement;
      //   element.innerText = "omid";

      // })

    })

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  sortData(sort: Sort) {

    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }
    
    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const activeColumn = sort.active;

      return this.compare(a[activeColumn], b[activeColumn], isAsc);

    });

  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
