import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { NgForm } from "@angular/forms";
import { Traveler } from "../../model/traveler";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { TravelersService } from '../../services/travelers.service';
import * as _ from "lodash";
@Component({
	selector: 'app-travelers',
	templateUrl: './travelers.component.html',
	styleUrls: ['./travelers.component.css']
})
export class TravelersComponent implements OnInit, AfterViewInit {

	travelerData: Traveler;
	dataSource: MatTableDataSource<any>;
	displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'email', 'phone', 'actions'];

	@ViewChild('travelerForm', { static: false })
	travelerForm!: NgForm;

	@ViewChild(MatPaginator, { static: true })
	paginator!: MatPaginator;

	@ViewChild(MatSort)
	sort!: MatSort;

	isEditMode = false;

	constructor(private travelersService: TravelersService) {
		this.travelerData = {} as Traveler;
		this.dataSource = new MatTableDataSource<any>();
	}

	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.getAllStudents();
	}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
	}

	getAllStudents() {
		this.travelersService.getAll().subscribe((response: any) => {
			this.dataSource.data = response;
		});
	}

	editItem(element: Traveler) {
		this.travelerData = _.cloneDeep(element);
		this.isEditMode = true;
	}

	cancelEdit() {
		this.isEditMode = false;
		this.travelerForm.resetForm();
	}

	deleteItem(id: number) {
		this.travelersService.delete(id).subscribe(() => {
			this.dataSource.data = this.dataSource.data.filter((o: Traveler) => {
				return o.id !== id ? o : false;
			});
		});
		console.log(this.dataSource.data);
	}

	addStudent() {
		this.travelerData.id = 0;
		this.travelersService.create(this.travelerData).subscribe((response: any) => {
			this.dataSource.data.push({ ...response });
			this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
		});
	}

	updateStudent() {
		this.travelersService.update(this.travelerData.id, this.travelerData).subscribe((response: any) => {
			this.dataSource.data = this.dataSource.data.map((o: Traveler) => {
				if (o.id === response.id) {
					o = response;
				}
				return o;
			});
		});
	}

	onSubmit() {
		if (this.travelerForm.form.valid) {
			console.log('valid');
			if (this.isEditMode) {
				console.log('about to update');
				this.updateStudent();
			} else {
				console.log('about to add');
				this.addStudent();
			}
			this.cancelEdit();
		} else {
			console.log('Invalid data');
		}
	}
}
