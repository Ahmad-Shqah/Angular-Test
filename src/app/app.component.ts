import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { VacationsComponent } from './vacations/vacations.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,VacationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task2';
  isHighlighted: boolean = false;
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}

