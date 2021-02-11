import {Action} from '@ngrx/store';
import {Device} from '../model/device.model';
import {Match} from '../model/match.model';

export const loadDevice = '[Matcher] Load device';
export const devicesLoadedSuccess = '[Matcher] Devices list loaded';
export const loadCountries = '[Matcher] Load countries';
export const countriesLoadedSuccess = '[Matcher] Countries list loaded';
export const searchMatch = '[Matcher] Search Match';
export const matchLoadedSuccess = '[Matcher] Search finished';


export class LoadDevice implements Action {
  readonly type = loadDevice;
}

export class LoadDeviceSuccess implements Action {
  readonly type = devicesLoadedSuccess;

  constructor(public payload: Device[]) {
  }
}

export class LoadCountries implements Action {
  readonly type = loadCountries;
}

export class LoadCountriesSuccess implements Action {
  readonly type = countriesLoadedSuccess;

  constructor(public payload: string[]) {
  }
}

export class SearchMatch implements Action {
  readonly type = searchMatch;

  constructor(public payload: { selectedCountries: string[], selectedDevicesId: number[] }) {
  }
}

export class MatchLoadedSuccess implements Action {
  readonly type = matchLoadedSuccess;

  constructor(public payload: Match[]) {
  }
}


export type MatcherAction = LoadDevice | LoadDeviceSuccess | LoadCountries | LoadCountriesSuccess
  | SearchMatch | MatchLoadedSuccess;
