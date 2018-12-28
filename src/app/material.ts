import {
    NgModule
} from '@angular/core';

import {
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

@NgModule({
    imports: [MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatListModule],
    exports: [MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatCardModule,
            MatGridListModule]
})
export class MaterialModule { }
