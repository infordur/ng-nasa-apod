import { Component, OnDestroy, OnInit } from '@angular/core';
import { NasaService } from 'src/app/_services/nasa.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import { Apod } from 'src/app/_interfaces/apod';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
    start_date: string;
    end_date: string;

    apods: Apod[] = [];

    destroy$: Subject<boolean> = new Subject();

    constructor(private nasaService: NasaService) {}

    ngOnInit() {
        const today_date = moment();
        const date_6_days_before = moment().subtract(5, 'days');

        // Format dates to recpect format "YYYY-MM-DD", ej: "2021-09-21"
        const format = 'YYYY-MM-DD';
        this.start_date = date_6_days_before.format(format);
        this.end_date = today_date.format(format);

        this.nasaService
            .getApodsFromTo(this.start_date, this.end_date)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response: Apod[]) => {
                this.apods = response;
            });
    }

    ngOnDestroy(): void {
        // unsubscribe destroy$ var to prevent memory leaks
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
