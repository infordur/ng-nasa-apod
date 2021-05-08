import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { NasaService } from './nasa.service';
import {
    HttpTestingController,
    HttpClientTestingModule,
} from '@angular/common/http/testing';
import { Apod } from '../_interfaces/apod';

describe('NasaService', () => {
    let service: NasaService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [NasaService],
        });
        service = TestBed.inject(NasaService);
        http = TestBed.inject(HttpTestingController);
    });

    it('Should be created', () => {
        expect(service).toBeTruthy();
    });

    it('API KEY must be defined', () => {
        const api_key = environment.API_KEY;
        expect(api_key).toBeDefined();
        expect(api_key).not.toBeNull();
    });

    it('Should return an NASA apods array', () => {
        const apods = service.getApodsFromTo('2021-01-01', '2021-01-08');
        apods.subscribe((res: Apod[]) => {
            expect(res).not.toBeNull();
            expect(res.length).toEqual(6);
        });
    });

    it('Should return a NASA APOD', () => {
        const apod = service.getApod('2021-01-01');
        apod.subscribe((res) => {
            expect(res).not.toBeNull();
        });
    });
});
