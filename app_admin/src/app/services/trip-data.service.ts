import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';
import { Inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage) { }
  url = 'http://localhost:3000/api/trips';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    // console.log('Inside TripDataService::getTrips');
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip): Observable<Trip> {
    // console.log('Inside TripDataService::addTrips');
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

  deleteTrip(tripCode: string): Observable<Trip> {
    // console.log('Inside TripDataService::deleteTrips');
    console.log("Deleting: " + tripCode);
    return this.http.delete<Trip>(this.url + '/' + tripCode);
  }
  // Call to our /login endpoint, returns JWT
  login(user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripDataService::login');
    return this.handleAuthAPICall('login', user, passwd);
  }
  // Call to our /register endpoint, creates user and returns JWT
  register(user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripDataService::register');
    return this.handleAuthAPICall('register', user, passwd);
  }
  // helper method to process both login and register methods
  handleAuthAPICall(endpoint: string, user: User, passwd: string):
    Observable<AuthResponse> {
    // console.log('Inside TripDataService::handleAuthAPICall');
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };
    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint,
      formData);
  }
  
}
