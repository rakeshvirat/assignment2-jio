import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectArchitectureComponent } from './project-architecture.component';

describe('ProjectArchitectureComponent', () => {
  let component: ProjectArchitectureComponent;
  let fixture: ComponentFixture<ProjectArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectArchitectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
