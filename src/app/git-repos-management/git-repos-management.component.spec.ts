import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitReposManagementComponent } from './git-repos-management.component';

describe('GitReposManagementComponent', () => {
  let component: GitReposManagementComponent;
  let fixture: ComponentFixture<GitReposManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitReposManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitReposManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
