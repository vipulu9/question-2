import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteComponentBComponent } from './route-component-b.component';

describe('RouteComponentBComponent', () => {
  let component: RouteComponentBComponent;
  let fixture: ComponentFixture<RouteComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteComponentBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
