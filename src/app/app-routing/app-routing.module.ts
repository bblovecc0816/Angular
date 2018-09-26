import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AlltriggersSummaryComponent } from '../alltriggers-summary/alltriggers-summary.component';
import { FailtriggersListComponent } from '../failtriggers-list/failtriggers-list.component';
import { FailedtriggersSummaryComponent } from '../failedtriggers-summary/failedtriggers-summary.component';
import { EchartDemoComponent } from '../echart-demo/echart-demo.component';
import { FailedtriggerDetailComponent } from '../failedtrigger-detail/failedtrigger-detail.component';

const routes: Routes = [
  {path : 'alltriggersummary', component : AlltriggersSummaryComponent},
  {path : 'dashboard', component: FailtriggersListComponent},
  {path : 'failedtriggerssummary', component: FailedtriggersSummaryComponent},
  {path : 'demo', component: EchartDemoComponent},
  {path : 'failedtrigger/tcid/:tcid/date/:date', component: FailedtriggerDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
