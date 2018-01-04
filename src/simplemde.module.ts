import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { SimpleMDEComponent } from './simplemde.component';
import { SIMPLEMDE_DEFAULT_OPTIONS } from './simplemde_default_options';

@NgModule({
  declarations: [SimpleMDEComponent],
  exports: [SimpleMDEComponent],
  imports: [CommonModule],
  providers: [
    {
      provide: SIMPLEMDE_DEFAULT_OPTIONS,
      useValue: {}
    }
  ]
})
export class SimpleMDEModule {}
