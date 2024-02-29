import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyCardComponent } from './candy-card.component';

describe('CandyCardComponent', () => {
  let component: CandyCardComponent;
  let fixture: ComponentFixture<CandyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
