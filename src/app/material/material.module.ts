import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list' 
@NgModule({
  declarations: [],
  imports: [CommonModule,],
  exports: [MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule,
    MatCardModule, MatInputModule, MatTableModule, MatSelectModule, MatTooltipModule,
     MatProgressSpinnerModule, MatBadgeModule, MatDialogModule, MatSliderModule,
     MatSlideToggleModule, MatFormFieldModule, MatCheckboxModule, DragDropModule,MatGridListModule
   ]
})
export class MaterialModule { }