import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormloginComponent } from './formlogin.component';
import { format } from 'url';

describe('FormloginComponent', () => {
  let component: FormloginComponent;
  let fixture: ComponentFixture<FormloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
