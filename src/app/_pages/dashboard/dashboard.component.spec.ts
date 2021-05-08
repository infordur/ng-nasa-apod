import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NasaService } from 'src/app/_services/nasa.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let nasa_service: NasaService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [DashboardComponent],
        }).compileComponents();
        nasa_service = TestBed.inject(NasaService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Start Date should be before End Date', () => {
        expect(component.start_date < component.end_date).toBeTrue();
    });

    it('Should call ngOnInit and fill apods[]', () => {
        spyOn(component, 'ngOnInit').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.apods).not.toBeNull();
            expect(component.apods.length).toBeGreaterThan(0);
        });
    });

    it('apods[] length should be 6', () => {
        spyOn(component, 'ngOnInit').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.apods).not.toBeNull();
            expect(component.apods.length).toEqual(6);
        });
    });
});
