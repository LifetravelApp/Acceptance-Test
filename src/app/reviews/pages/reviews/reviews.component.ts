import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { NgForm } from "@angular/forms";
import { Review } from "../../model/review";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ReviewsService } from '../../services/reviews.service';
import * as _ from "lodash";
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit, AfterViewInit {

  reviewData: Review;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id',"comment","rating","date" ,"actions"];

  @ViewChild('reviewForm', { static: false })
  reviewForm!: NgForm;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private reviewsService: ReviewsService) {
    this.reviewData = {} as Review;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllReviews();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllReviews() {
    this.reviewsService.getAll().subscribe((response: any) => {
      console.table(response.content)
      this.dataSource.data = response.content;
    });
  }

  editItem(element: Review) {
    this.reviewData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.reviewForm.resetForm();
  }

  deleteItem(id: number) {
    this.reviewsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Review) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addReview() {
    this.reviewsService.create(this.reviewData).subscribe((response: any) => {
      this.dataSource.data.push({ ...response });
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateReview() {
    this.reviewsService.update(this.reviewData.id, this.reviewData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Review) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onSubmit() {
    if (this.reviewForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateReview();
      } else {
        console.log('about to add');
        this.addReview();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}
