import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecondComponent} from './second.component';
import {FirstDependencyService} from "../services/first-dependancy.service";
import {ReactiveFormsModule} from "@angular/forms";

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  const fakeFirstDependencyService = jasmine.createSpyObj('fakeFirstDep', ['start', 'startSecond']);

  beforeEach(async () => {
    TestBed.overrideComponent(SecondComponent,
      {
        set:
          {
            providers: [
              {
                provide: FirstDependencyService,
                useValue: fakeFirstDependencyService
              }
            ]
          }
      })
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SecondComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fakeFirstDependencyService.startSecond.and.callFake(() => console.log('it is a fake startSecond'))
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
