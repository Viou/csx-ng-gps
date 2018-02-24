import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule} from
'@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
], exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
],
  declarations: []
})
export class MaterialModule { }