import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTwangUi } from './ngx-twang-ui';

describe('NgxTwangUi', () => {
  let component: NgxTwangUi;
  let fixture: ComponentFixture<NgxTwangUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTwangUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTwangUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
