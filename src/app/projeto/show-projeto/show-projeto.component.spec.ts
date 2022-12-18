import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjetoComponent } from './show-projeto.component';

describe('ShowProjetoComponent', () => {
  let component: ShowProjetoComponent;
  let fixture: ComponentFixture<ShowProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProjetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
