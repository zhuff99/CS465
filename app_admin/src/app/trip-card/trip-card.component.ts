import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {

  @Input('trip') trip: any;
  @Output() notifyDelete: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private authenticationService: AuthenticationService, private tripDataService: TripDataService) {}

  ngOnInit(): void {
    this.trip.start = this.trip.start.split('T')[0];
  }

  public isLoggedIn()
  {
  return this.authenticationService.isLoggedIn();
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    console.log("Deleting trip: " + JSON.stringify(trip));
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.tripDataService.deleteTrip(trip.code)
      .subscribe({
        next: (value: any) => {
          console.log("Deleted trip: " + trip.code);
          this.notifyDelete.emit(this.trip.code);
        },
        error: (error: any) => {
          console.log("Error: " + JSON.stringify(error))
        }
      });
    }

}
