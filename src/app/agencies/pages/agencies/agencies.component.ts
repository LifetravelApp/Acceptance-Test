import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { NgForm } from "@angular/forms";
import { Agency } from "../../model/agency";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { AgenciesService } from '../../services/agencies.service';
import * as _ from "lodash";
@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit, AfterViewInit {

  agencyData: Agency;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'location', 'ruc', 'email', 'phone', 'actions'];

  @ViewChild('agenciesForm', { static: false })
  agenciesForm!: NgForm;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private agenciesService: AgenciesService) {
    this.agencyData = {} as Agency;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllAgency();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllAgency() {
    this.agenciesService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: Agency) {
    this.agencyData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.agenciesForm.resetForm();
  }

  deleteItem(id: number) {
    this.agenciesService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Agency) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addAgency() {
    this.agencyData.id = 0;
    this.agenciesService.create(this.agencyData).subscribe((response: any) => {
      this.dataSource.data.push({ ...response });
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateAgency() {
    this.agenciesService.update(this.agencyData.id, this.agencyData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Agency) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onSubmit() {
    if (this.agenciesForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateAgency();
      } else {
        console.log('about to add');
        this.addAgency();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}
