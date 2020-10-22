import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StadiumPage } from './stadium.page';

describe('StadiumPage', () => {
  let component: StadiumPage;
  let fixture: ComponentFixture<StadiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StadiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
