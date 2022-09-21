import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroeleitoresComponent } from './cadastroeleitores.component';

describe('CadastroeleitoresComponent', () => {
  let component: CadastroeleitoresComponent;
  let fixture: ComponentFixture<CadastroeleitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroeleitoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroeleitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
