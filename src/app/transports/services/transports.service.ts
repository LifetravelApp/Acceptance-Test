import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Transport } from "../model/transport";

@Injectable({
	providedIn: 'root'
})
export class TransportsService {

	// Transports Endpoint
	basePath = 'http://localhost:8080/api/v1/transports';

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

	// Create Transport
	create(item: any): Observable<Transport> {
		return this.http.post<Transport>(this.basePath, JSON.stringify(item), this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}

	// Get Transport by id
	getById(id: any): Observable<Transport> {
		return this.http.get<Transport>(`${this.basePath}/${id}`, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}

	// Get All Transports
	getAll(): Observable<Transport> {
		return this.http.get<Transport>(this.basePath, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}

	// Update Transport
	update(id: any, item: any): Observable<Transport> {
		return this.http.put<Transport>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}

	// Delete Transport
	delete(id: any) {
		return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError));
	}
}
