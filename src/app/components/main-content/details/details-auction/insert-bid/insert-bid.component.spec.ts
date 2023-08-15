import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBidComponent } from './insert-bid.component';

describe('InsertBidComponent', () => {
  let component: InsertBidComponent;
  let fixture: ComponentFixture<InsertBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertBidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
