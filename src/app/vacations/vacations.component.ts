import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-vacations',
  standalone: true, // Since it's a standalone component
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css']
})
export class VacationsComponent {
  searchText: string = '';
  vacationRequests = [
    { name: 'eyad ahmad', submittedOn: 'September 5, 2024', duration: '3 days', salary: '$300' },
    { name: 'Mohmmad Ali', submittedOn: 'September 7, 2024', duration: '7 days', salary: '$700' },
    { name: 'Ahmad Mahmud', submittedOn: 'September 5, 2024', duration: '10 days', salary: '$1000' },
    { name: 'Qusai Majeed', submittedOn: 'September 6, 2024', duration: '5 days', salary: '$500' },
    { name: 'Mahmud Ahmad', submittedOn: 'September 7, 2024', duration: '7 days', salary: '$700' },
    { name: 'Majeed Qusai', submittedOn: 'September 8, 2024', duration: '8 days', salary: '$800' },
    { name: 'Ahmad Qusai', submittedOn: 'September 9, 2024', duration: '6 days', salary: '$600' },
    { name: 'Mahmud Majeed', submittedOn: 'September 10, 2024', duration: '9 days', salary: '$900' },
    { name: 'Qusai Ahmad', submittedOn: 'September 11, 2024', duration: '4 days', salary: '$400' },
    { name: 'Majeed Ahmad', submittedOn: 'September 12, 2024', duration: '11 days', salary: '$1100' },
    { name: 'Mahmud Qusai', submittedOn: 'September 13, 2024', duration: '3 days', salary: '$300' },
    { name: 'Majeed Qusai', submittedOn: 'September 14, 2024', duration: '12 days', salary: '$1200' }
];

}
