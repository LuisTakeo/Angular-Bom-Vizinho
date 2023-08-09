import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-voluntario',
  templateUrl: './cadastrar-voluntario.component.html',
  styleUrls: ['./cadastrar-voluntario.component.scss']
})
export class CadastrarVoluntarioComponent {
  novoVoluntario = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    email: new FormControl(''),
    celular: new FormControl(''),
    dataNascimento: new FormControl(''),
    endereco: new FormControl(''),
    cep: new FormControl(''),
    senha: new FormControl(''),
    senhaConfirm: new FormControl(''),
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.novoVoluntario.value);
  }
}
