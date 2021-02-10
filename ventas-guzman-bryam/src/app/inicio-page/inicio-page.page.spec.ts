import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioPagePage } from './inicio-page.page';

describe('InicioPagePage', () => {
  let component: InicioPagePage;
  let fixture: ComponentFixture<InicioPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
