import { Component } from '@angular/core';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css'],
  standalone: true,
})
export class VacationsComponent {
  title: string = 'Vacation Requests';
  vacationName: string = '';
  vacationDuration: number = 0;
  isApproved: boolean = false;

  // Sample vacation requests
  vacationRequests = [
    { name: 'Family Trip', duration: 7, approved: true },
    { name: 'Beach Holiday', duration: 5, approved: false },
    { name: 'Mountain Climbing', duration: 3, approved: true }
  ];

  // Method to toggle approval status
  toggleApproval(index: number): void {
    this.vacationRequests[index].approved = !this.vacationRequests[index].approved;
  }
}
