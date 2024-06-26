import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  state = inject(StateService)

  isPhonePortrait = false;
  msg = '';

  constructor(private responsive: BreakpointObserver,
  ) {
    this.state.showMenuButton.set(false) // hides the app comp toolbar
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => // register a destroy callback
    this.state.showMenuButton.set(true) // shows app comp toolbar when menu closes
    );
    
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.responsive.observe(['(max-width: 400px)'])
      .subscribe(result => {
        console.log(result)
        if (result.matches) {
          console.log("screens matches HandsetPortrait");
          this.isPhonePortrait = true;
          this.msg = "screen matches HandsetPortrait"
        }
        else {
          this.msg = "default screen"
          this.isPhonePortrait = false;
        }

      });
  }
  public screenWidth: any;
  public screenHeight: any;


}
