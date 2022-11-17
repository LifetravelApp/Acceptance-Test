import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Review } from "../model/review";

@Injectable({
	providedIn: 'root'
})
export class ReviewsService {

	// Reviews Endpoint
	basePath = 'http://localhost:8080/api/v1/reviews';

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
		})
	}
	constructor(private http: HttpClient) { }

	// API Error Handling
	handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// Default error handling
			console.log(`An error occurred: ${error.error.message} `);
		} else {
			// Unsuccessful Response Error Code returned from Backend
			console.error(
				`Backend returned code ${error.status}, body was: ${error.error}`
			);
		}
		// Return Observable with Error Message to Client
		return throwError(() => new Error('Something happened with request, please try again later'));
	}

	// Create Review
	create(item: any): Observable<Review> {
		return this.http.post<Review>(this.basePath, JSON.stringify(item), this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}

	// Get Review by id
	getById(id: any): Observable<Review> {
		return this.http.get<Review>(`${this.basePath}/${id}`, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}

	// Get All Reviews
	getAll(): Observable<Review> {
		return this.http.get<Review>(this.basePath, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}

	// Update Review
	update(id: any, item: any): Observable<Review> {
		return this.http.put<Review>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}

	// Delete Review
	delete(id: any) {
		return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}
}
