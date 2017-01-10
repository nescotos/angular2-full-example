//Manually created

import {Routes} from '@angular/router';
import {MathComponent} from './math/math.component';
import {OtherComponent} from './other/other.component';

export const routes: Routes  = [
  {path: "", component: MathComponent},
  {path: "other", component: OtherComponent}
]
