import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvstkComponent } from './detail-mvstk.component';

describe('DetailMvstkComponent', () => {
  let component: DetailMvstkComponent;
  let fixture: ComponentFixture<DetailMvstkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMvstkComponent]
    });
    fixture = TestBed.createComponent(DetailMvstkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
