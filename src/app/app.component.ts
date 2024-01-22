import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet , Router} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterOutlet]
})
export class AppComponent implements OnInit {
  
  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.router.navigate(['/menu'])
  }
  
  title = 'sample';
 // ÷ division symbol for copying
  //ng deploy --base-href=/sample/
}
