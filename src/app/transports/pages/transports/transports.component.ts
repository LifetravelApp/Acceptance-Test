import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { NgForm } from "@angular/forms";
import { Transport } from "../../model/transport";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { TransportsService } from '../../services/transports.service';
import * as _ from "lodash";
import * as moment from 'moment';
import {AgenciesService} from "../../../agencies/services/agencies.service";
@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.css']
})
export class TransportsComponent implements OnInit, AfterViewInit {

  agencies: any = [];
  transportData: Transport;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'type', 'seats', 'departureDate','returnDate', 'price',"agencyId", "images","actions"];

  @ViewChild('transportForm', { static: false })
  transportForm!: NgForm;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private transportsService: TransportsService, private agenciesService: AgenciesService) {
    this.transportData = {} as Transport;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllTransports();
    this.agenciesService.getAll().subscribe((response: any) => {
      this.agencies = response.content;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllTransports() {
    this.transportsService.getAll().subscribe((response: any) => {
      console.table(response.content)
      this.dataSource.data = response.content;
    });
  }

  editItem(element: Transport) {
    this.transportData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.transportForm.resetForm();
  }

  deleteItem(id: number) {
    this.transportsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Transport) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addTransport() {

    this.transportsService.create(this.transportData).subscribe((response: any) => {
      this.dataSource.data.push({ ...response });
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateTransport() {
    this.transportsService.update(this.transportData.id, this.transportData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Transport) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onSubmit() {
    if (this.transportForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateTransport();
      } else {
        console.log('about to add');
        this.addTransport();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}
