import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StateService } from 'src/app/shared/services/state.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { first } from 'rxjs';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  state = inject(StateService)
  destroyRef = inject(DestroyRef); // this needs to be declared
  isPhonePortrait = false;
  msg = '';
  #destroyRef = inject(DestroyRef); // this needs to be declared

  constructor(private responsive: BreakpointObserver,
  ) {
    this.state.showMenuButton.set(false) // hides the app comp toolbar
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => // register a destroy callback
    {
      this.state.showMenuButton.set(true) // shows app comp toolbar when menu closes
      console.log("MENU destroyed")
    }
    
    );

  }

  ngOnInit(): void {
    //this.screenWidth = window.innerWidth;
    //this.screenHeight = window.innerHeight;
    this.responsive.observe(['(max-width: 400px)'])//.pipe(first())
   .pipe(takeUntilDestroyed(this.#destroyRef)) //this.#destroyRef has to be inserted here
      .subscribe(result => {
        console.log(result)
        if (result.matches) {
          console.log("screens matches HandsetPortrait");
          this.isPhonePortrait = true;
          this.msg = "screen matches HandsetPortrait"
          this.state.mobile.set(true)
        }
        else {
          this.msg = "default screen"
          this.isPhonePortrait = false;
          this.state.mobile.set(false)
        }

      });
  }
 

}


