import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';

import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {
  trips!: Trip[];
  message: string = '';


  constructor(private tripDataService: TripDataService, private router: Router, private authenticationService: AuthenticationService) {
    console.log('trip-listing constructor');
  }

  public isLoggedIn()
  {
  return this.authenticationService.isLoggedIn();
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
  
  private getStuff(): void {
    this.tripDataService.getTrips()
    .subscribe({
      next: (value: any) => {
        this.trips = value;
        if(value.length > 0)
        {
          this.message = 'There are ' + value.length + ' trips available.';
        }
        else{
          this.message = 'There were no trips retrieved from the databasee';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error.message);
      }
    })
  }
  ngOnInit(): void {
    console.log('ngOnInIt');
    this.getStuff();
  }

  onDelete(tripCode: string): void {
    this.ngOnInit();
  }

}
