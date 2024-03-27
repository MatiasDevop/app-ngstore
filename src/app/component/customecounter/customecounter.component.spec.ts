import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomecounterComponent } from './customecounter.component';

describe('CustomecounterComponent', () => {
  let component: CustomecounterComponent;
  let fixture: ComponentFixture<CustomecounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomecounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
