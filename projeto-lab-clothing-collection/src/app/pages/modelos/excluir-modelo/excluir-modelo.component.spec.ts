import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirModeloComponent } from './excluir-modelo.component';

describe('ExcluirModeloComponent', () => {
  let component: ExcluirModeloComponent;
  let fixture: ComponentFixture<ExcluirModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirModeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
