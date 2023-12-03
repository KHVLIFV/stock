import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientFounisseurComponent } from './detail-client-founisseur.component';

describe('DetailClientFounisseurComponent', () => {
  let component: DetailClientFounisseurComponent;
  let fixture: ComponentFixture<DetailClientFounisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailClientFounisseurComponent]
    });
    fixture = TestBed.createComponent(DetailClientFounisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
