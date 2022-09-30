import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { NgForm } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import * as _ from "lodash";
import { Payment } from "../../model/payment";
import { PaymentsService } from "../../services/payments.service";
import { PlanesService } from 'src/app/planes/services/planes.service';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, AfterViewInit {
	plans: any = [];
	paymentData: Payment;
	dataSource: MatTableDataSource<any>;
	displayedColumns: string[] = ['id', 'plan', 'description', 'discount', 'actions'];
	@ViewChild('paymentForm', { static: false })
	paymentForm!: NgForm;

	@ViewChild(MatPaginator, { static: true })
	paginator!: MatPaginator;

	@ViewChild(MatSort)
	sort!: MatSort;

	isEditMode = false;
	constructor(private paymentsService: PaymentsService, private planesService: PlanesService) {
		this.paymentData = {} as Payment;
		this.dataSource = new MatTableDataSource<any>();
	}

	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.getAllPayments();
		this.planesService.getAll().subscribe((response: any) => {
			this.plans = response;
		})
	}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
	}

	getAllPayments() {
		this.paymentsService.getAll().subscribe((response: any) => {
			this.dataSource.data = response;
		}
		);
	}

	editItem(element: Payment) {
		this.paymentData = _.cloneDeep(element);
		this.isEditMode = true;
	}

	cancelEdit() {
		this.isEditMode = false;
		this.paymentForm.resetForm();
	}

	deleteItem(id: number) {
		this.paymentsService.delete(id).subscribe(() => {
			this.dataSource.data = this.dataSource.data.filter((o: Payment) => {
				return o.id !== id ? o : false;
			});
		});
		console.log(this.dataSource.data);
	}
	addPayment() {
		this.paymentData.id = 0;
		this.paymentsService.create(this.paymentData).subscribe((response: any) => {
			this.dataSource.data.push({ ...response });
			this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
		});
	}
	updatePayment() {
		this.paymentsService.update(this.paymentData.id, this.paymentData).subscribe((response: any) => {
			this.dataSource.data = this.dataSource.data.map((o: Payment) => {
				if (o.id === response.id) {
					o = response;
				}
				return o;
			});
		});
	}
	onSubmit() {
		if (this.paymentForm.form.valid) {
			console.log('valid');
			if (this.isEditMode) {
				console.log('about to update');
				this.updatePayment();
			} else {
				console.log('about to add');
				this.addPayment();
			}
			this.cancelEdit();
		} else {
			console.log('Invalid data');
		}
	}



}
