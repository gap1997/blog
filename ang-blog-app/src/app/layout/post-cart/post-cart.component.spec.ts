import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCartComponent } from './post-cart.component';

describe('PostCartComponent', () => {
  let component: PostCartComponent;
  let fixture: ComponentFixture<PostCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCartComponent]
    });
    fixture = TestBed.createComponent(PostCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
