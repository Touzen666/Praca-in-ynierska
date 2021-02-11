import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSliderModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatRadioModule,
  // MatGridListModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }
