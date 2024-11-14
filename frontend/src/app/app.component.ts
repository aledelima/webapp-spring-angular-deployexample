import { Component, OnInit } from '@angular/core';
import { GreetService } from './greet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  greeting: string | undefined;

  constructor(private greetService: GreetService) {}

  getGreet() {
    // Call the greet endpoint when the button is clicked
    this.greetService.getGreeting().subscribe(
      (response) => (this.greeting = response),
      (error) => console.error('Error fetching greeting:', error)
    );
  }
}
