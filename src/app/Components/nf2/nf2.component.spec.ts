import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NF2Component } from './nf2.component';

describe('NF2Component', () => {
  let component: NF2Component;
  let fixture: ComponentFixture<NF2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NF2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
