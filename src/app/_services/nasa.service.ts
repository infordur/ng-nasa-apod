import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class NasaService {
    API_URL: string = `${environment.API_URL}?api_key=${environment.API_KEY}`;

    constructor(private http: HttpClient) {}

    getApodsFromTo(start_date, end_date) {
        const url = `${this.API_URL}&start_date=${start_date}&end_date=${end_date}`;
        return this.http.get(url);
    }

    getApod(date) {
        const url = `${this.API_URL}&date=${date}`;
        return this.http.get(url);
    }
}
