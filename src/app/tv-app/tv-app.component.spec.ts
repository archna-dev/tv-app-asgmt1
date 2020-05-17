import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvAppComponent } from './tv-app.component';

describe('TvAppComponent', () => {
  let component: TvAppComponent;
  let fixture: ComponentFixture<TvAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
