import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameUsersComponent } from './name-users.component';

describe('TaskNameComponent', () => {
  let component: NameUsersComponent;
  let fixture: ComponentFixture<NameUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameUsersComponent]
    });
    fixture = TestBed.createComponent(NameUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
