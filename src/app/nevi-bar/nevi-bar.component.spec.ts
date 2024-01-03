import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeviBarComponent } from './nevi-bar.component';

describe('NeviBarComponent', () => {
  let component: NeviBarComponent;
  let fixture: ComponentFixture<NeviBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeviBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeviBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
