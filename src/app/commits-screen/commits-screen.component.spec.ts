import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsScreenComponent } from './commits-screen.component';

describe('CommitsScreenComponent', () => {
  let component: CommitsScreenComponent;
  let fixture: ComponentFixture<CommitsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
