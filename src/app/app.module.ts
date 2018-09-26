import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { AlltriggersSummaryComponent } from './alltriggers-summary/alltriggers-summary.component';
import { FailtriggersListComponent } from './failtriggers-list/failtriggers-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TriggersService} from './service/all-triggers-summary.service';
import { FailedtriggersSummaryComponent } from './failedtriggers-summary/failedtriggers-summary.component';
import { EchartDemoComponent } from './echart-demo/echart-demo.component';
import { FailedtriggerDetailComponent } from './failedtrigger-detail/failedtrigger-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlltriggersSummaryComponent,
    FailtriggersListComponent,
    FailedtriggersSummaryComponent,
    EchartDemoComponent,
    FailedtriggerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxEchartsModule
  ],
  providers: [
    TriggersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
