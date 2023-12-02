import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvstkArticleComponent } from './detail-mvstk-article.component';

describe('DetailMvstkArticleComponent', () => {
  let component: DetailMvstkArticleComponent;
  let fixture: ComponentFixture<DetailMvstkArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMvstkArticleComponent]
    });
    fixture = TestBed.createComponent(DetailMvstkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
