import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Plan} from "../../model/plan";
import {MatTableDataSource} from "@angular/material/table";
import {PlanesService} from "../../services/planes.service";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import * as _ from "lodash";


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit,AfterViewInit {

  planData: Plan;
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[]=['id','name','description','service','nameCity','nameCountry','startDate','endDate','price', 'actions'];

  @ViewChild('planForm', { static: false })
  planForm!: NgForm;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private planesService: PlanesService) {
    this.planData={}as Plan;
    this.dataSource=new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator=this.paginator;
    this.getAllPlanes();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllPlanes(){
    this.planesService.getAll().subscribe((response:any)=>{
      this.dataSource.data=response;
      }
    );
  }

  editItem(element: Plan) {
    this.planData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.planForm.resetForm();
  }

  deleteItem(id: number) {
    this.planesService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Plan) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }
  addPlan() {
    this.planData.id = 0;
    this.planesService.create(this.planData).subscribe((response: any) => {
      this.dataSource.data.push({ ...response });
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }
  updatePlan() {
    this.planesService.update(this.planData.id, this.planData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Plan) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }
  onSubmit() {
    if (this.planForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updatePlan();
      } else {
        console.log('about to add');
        this.addPlan();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }

}
