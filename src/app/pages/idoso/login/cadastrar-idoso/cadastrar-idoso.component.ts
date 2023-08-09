import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-idoso',
  templateUrl: './cadastrar-idoso.component.html',
  styleUrls: ['./cadastrar-idoso.component.scss']
})
export class CadastrarIdosoComponent {
  novoIdoso = new FormGroup({
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
    console.warn(this.novoIdoso.value);
  }
}
