import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteComponentA } from './route-component-a.component';

describe('RouteComponentA', () => {
  let component: RouteComponentA;
  let fixture: ComponentFixture<RouteComponentA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteComponentA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteComponentA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
