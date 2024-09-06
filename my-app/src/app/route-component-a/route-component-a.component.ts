import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-route-component-a',
  standalone: true,
  imports: [FormsModule],  // Import FormsModule here
  template: `
    <div>
      <h2>Component A</h2>
      <input type="text" [(ngModel)]="inputValue" placeholder="Enter something" />
      <button (click)="navigateToComponentB()">Go to Component B</button>
    </div>
  `,
  styleUrls: ['./route-component-a.component.css']
})
export class RouteComponentA {
  inputValue: string = '';

  constructor(private router: Router) {}

  navigateToComponentB() {
    this.router.navigate(['/component-b'], { queryParams: { value: this.inputValue } });
  }
}
