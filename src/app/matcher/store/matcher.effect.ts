import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient, HttpParams} from '@angular/common/http';
import {
  loadCountries,
  LoadCountriesSuccess,
  loadDevice,
  LoadDeviceSuccess,
  MatchLoadedSuccess,
  SearchMatch,
  searchMatch
} from './matcher.action';
import {map, switchMap} from 'rxjs/operators';
import {Device} from '../model/device.model';
import {Match} from '../model/match.model';

@Injectable()
export class MatcherEffect {

  constructor(private actions$: Actions,
              private http: HttpClient) {
  }

  loadDevices$ = createEffect(() => {
    return this.actions$.pipe(ofType(loadDevice),
      switchMap(() => this.http.get<Device[]>(`/api/query/devices`).pipe(
        map((devices: Device[]) => new LoadDeviceSuccess(devices)),
      )),
    );
  });

  loadCountries$ = createEffect(() => {
    return this.actions$.pipe(ofType(loadCountries),
      switchMap(() => this.http.get<string[]>(`/api/query/countries`).pipe(
        map((countries: string[]) => new LoadCountriesSuccess(countries)),
      )),
    );
  });

  searchUserMatch$ = createEffect(() => {
    return this.actions$.pipe(ofType(searchMatch),
      switchMap((action: SearchMatch) => {
        const selectedDevicesId = action.payload.selectedDevicesId;
        const selectedCountries = action.payload.selectedCountries;
        let params = new HttpParams();
        params = params.append('countries', selectedCountries.join(','));
        params = params.append('deviceIds', selectedDevicesId.join(','));
        return this.http.get<Match[]>(`/api/query/matches`, {params}).pipe(
          map((matches: Match[]) => new MatchLoadedSuccess(matches)),
        );
      }),
    );
  });

}
