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
    this.state.isMenu.set(true);
    const destroyRef = inject(DestroyRef);
    // register a destroy callback
    destroyRef.onDestroy(() =>
    this.state.isMenu.set(false));
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
