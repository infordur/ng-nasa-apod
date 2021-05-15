import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NasaService } from 'src/app/_services/nasa.service';

@Component({
    selector: 'app-apod-details',
    templateUrl: './apod-details.component.html',
    styleUrls: ['./apod-details.component.scss'],
})
export class ApodDetailsComponent implements OnInit, OnDestroy {
    destroy$: Subject<boolean> = new Subject();

    apod;

    constructor(
        private activatedRoute: ActivatedRoute,
        private nasaService: NasaService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(takeUntil(this.destroy$))
            .subscribe((params) => {
                const id = params['id'];

                this.nasaService
                    .getApod(id)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((apod) => {
                        this.apod = apod;
                        console.log(this.apod);
                    });
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
