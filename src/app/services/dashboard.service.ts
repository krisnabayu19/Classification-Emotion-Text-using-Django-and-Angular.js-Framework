import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataDashboard, HasilCheck} from '../models/dashboard.model';

// Url API
const baseUrlDataDashboard ='http://localhost:8000/api/dataDashboard';
const baseUrlCheckEmotion ='http://localhost:8000/api/dataCheckEmotion';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  // Get all data test from API
  getAllData(): Observable<DataDashboard> {
    return this.http.get<DataDashboard>(baseUrlDataDashboard);
  }

  // Create data from API
  cekData(data: any): Observable<any> {
    return this.http.post(baseUrlCheckEmotion, data);
  }

  // Get all data test from API
  getCheck(): Observable<HasilCheck> {
    return this.http.get<HasilCheck>(baseUrlCheckEmotion);
  }
 
}
