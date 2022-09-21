import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrozonasComponent } from './cadastrozonas.component';

describe('CadastrozonasComponent', () => {
  let component: CadastrozonasComponent;
  let fixture: ComponentFixture<CadastrozonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrozonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrozonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
