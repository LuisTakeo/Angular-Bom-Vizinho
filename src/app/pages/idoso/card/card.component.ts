import { Component, Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule]
})
export class CardComponent {
  @Input()
  titleCard:string = "Nome do serviço";
  @Input()
  description:string = "Descrição";

}
