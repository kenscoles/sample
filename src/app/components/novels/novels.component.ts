import { Component, inject } from '@angular/core';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-novels',
  standalone: true,
  imports: [],
  templateUrl: './novels.component.html',
  styleUrl: './novels.component.css'
})
export class NovelsComponent {
 state = inject(StateService)
 
  novels = [
    { title: 'Whose Body?', published: '1923'},
    { title: 'Clouds of Witness', published: '1926'},
    { title: 'Unnatural Death', published: '1927'},
    { title: 'The Unpleasantness at the Bellona Club', published: '1928'},
    { title: 'Strong Poison', published: '1930'},
    { title: 'The Five Red Herrings', published: '1931'},
    { title: 'Have His Carcase', published: '1932'},
    { title: 'Murder Must Advertise', published: '1933'},
    { title: 'The Nine Tailors', published: '1934'},
    { title: 'Gaudy Night', published: '1935'},
    { title: "Busman's Honeymoon", published: '1937'}

  ]
}
