import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Board } from './board';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.css'],
  standalone : true,
  imports: [CommonModule, BoardComponent]
})
export class MastermindComponent {
  title = 'mastermind';
}
