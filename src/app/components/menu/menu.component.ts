import { Component, DestroyRef, OnInit, inject, ElementRef } from '@angular/core';
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
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  state = inject(StateService)
  private elementRef = inject(ElementRef)
  destroyRef = inject(DestroyRef); // this needs to be declared
  isPhonePortrait = false;
  msg = '';

  constructor(private responsive: BreakpointObserver,
  ) {
    this.state.showMenuButton.set(false) // hides the app comp toolbar
    //const destroyRef = inject(DestroyRef);
    this.destroyRef.onDestroy(() => // register a destroy callback
    {
      this.state.showMenuButton.set(true) // shows app comp toolbar when menu closes
      console.log("MENU destroyed")
    }

    );

  }

  ngOnInit(): void {
    //this.screenWidth = window.innerWidth;
    //this.screenHeight = window.innerHeight;
    const breakpoint = getComputedStyle(this.elementRef.nativeElement).getPropertyValue('--breakpointForMobile');
    this.responsive.observe(`(max-width: ${breakpoint})`)
      .pipe(takeUntilDestroyed(this.destroyRef)) //this.#destroyRef has to be inserted here
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


