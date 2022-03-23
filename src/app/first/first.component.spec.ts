import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FirstComponent} from './first.component';
import {By} from "@angular/platform-browser";
import {FirstDependencyService} from "../services/first-dependancy.service";

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  const fakeFirstDependencyService = jasmine.createSpyObj('fakeFirst', ['start']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers: [{
        provide: FirstDependencyService,
        useValue: fakeFirstDependencyService
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fakeFirstDependencyService.start.and.callFake(()=> console.log('it is a fake dependency'))

    component.user = {
      firstName: 'John',
      secondName: 'Weak'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Компонент выводит имя и фамилию через инпут', () => {
    component.user = {
      firstName: 'John',
      secondName: 'Doe'
    };
    expect(component.userFirstName).toBe('John')
    expect(component.userSecondName).toBe('Doe')
  })

  it('Комнонент должен отправлять события с именем пользователя', () => {
    const event = spyOn(component.buttonClicked, 'emit')
    component.clickOnButton();
    expect(event).toHaveBeenCalledWith('John')
  })

  it('Компонент должен отправлять событие, по клику на кнопку в шаблоне', () => {
    const event = spyOn(component.buttonClicked, 'emit')
    const button = fixture.debugElement.query(By.css('button'));
    event.calls.reset()
    button.nativeElement.click()
    expect(event).toHaveBeenCalledWith('John')
  })

  it('Добавляет класс fill, если заполнены имя и фамилия', () => {
    const newUser = {
      firstName: 'Olga',
      secondName: undefined
    };
    component.user = newUser;
    fixture.detectChanges()
    const firstSpan = fixture.debugElement.query(By.css('span.fill'))
    expect(firstSpan).toBeNull()

  })
});
