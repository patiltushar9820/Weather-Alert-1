import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectalertComponent } from './selectalert.component';

describe('SelectalertComponent', () => {
  let component: SelectalertComponent;
  let fixture: ComponentFixture<SelectalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
