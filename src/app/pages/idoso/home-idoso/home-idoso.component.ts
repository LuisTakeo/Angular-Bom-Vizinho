import { Component } from '@angular/core';

import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-home-idoso',
  templateUrl: './home-idoso.component.html',
  styleUrls: ['./home-idoso.component.scss'],
  standalone: true,
  imports: [CardComponent]
})
export class HomeIdosoComponent {

}
