import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldUserComponent } from './form-field-user.component';

describe('FormFieldTaskComponent', () => {
  let component: FormFieldUserComponent;
  let fixture: ComponentFixture<FormFieldUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldUserComponent]
    });
    fixture = TestBed.createComponent(FormFieldUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
