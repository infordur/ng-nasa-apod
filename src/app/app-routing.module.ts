import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodDetailsComponent } from './_pages/apod-details/apod-details.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'apod/:id',
        component: ApodDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
