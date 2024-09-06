import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-component-b',
  standalone: true,
  template: `
    <div>
      <h2>Component B</h2>
      <p>Received Value: {{ receivedValue }}</p>
    </div>
  `,
  styleUrls: ['./route-component-b.component.css']
})
export class RouteComponentB implements OnInit {
  receivedValue: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.receivedValue = params.get('value');
    });
  }
}
