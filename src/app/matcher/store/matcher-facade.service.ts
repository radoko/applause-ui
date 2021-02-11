import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCountries, getDevices, getTesterMatches, MatcherState} from './matcher.reducer';
import {Observable} from 'rxjs';
import {Device} from '../model/device.model';
import {LoadCountries, LoadDevice, SearchMatch} from './matcher.action';
import {Match} from '../model/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatcherFacadeService {

  devices$: Observable<Device[]> = this.store.select(getDevices);
  countries$: Observable<string[]> = this.store.select(getCountries);
  testerMatches$: Observable<Match[]> = this.store.select(getTesterMatches);

  constructor(private store: Store<MatcherState>) {
  }

  loadDevices(): Observable<Device[]> {
    this.store.dispatch(new LoadDevice());
    return this.devices$;
  }

  loadCountries(): Observable<string[]> {
    this.store.dispatch(new LoadCountries());
    return this.countries$;
  }

  searchMatch(countires: string[], devicesId: number[]): Observable<Match[]> {
    this.store.dispatch(new SearchMatch({selectedCountries: countires, selectedDevicesId: devicesId}));
    return this.testerMatches$;
  }
}
