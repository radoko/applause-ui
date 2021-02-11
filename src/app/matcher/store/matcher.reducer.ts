import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {countriesLoadedSuccess, devicesLoadedSuccess, MatcherAction, matchLoadedSuccess} from './matcher.action';
import {Device} from '../model/device.model';
import {Match} from '../model/match.model';

export interface AppState {
  matcher: MatcherState;
}

export interface MatcherState {
  devices: Device[];
  countries: string[];
  testerMatches: Match[];
}

export const initialState: MatcherState = {
  devices: [],
  countries: [],
  testerMatches: [],
};

export function reducer(state: MatcherState = initialState, action: MatcherAction): MatcherState {
  switch (action.type) {
    case devicesLoadedSuccess: {
      return {
        ...state,
        devices: action.payload,
      };
    }
    case countriesLoadedSuccess: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case matchLoadedSuccess: {
      return {
        ...state,
        testerMatches: action.payload,
      };
    }
  }
  return state;
}

export const reducers: ActionReducerMap<AppState> = {
  matcher: reducer,
};

export const getState = createFeatureSelector<AppState>('matcher');
export const getMatcherState = createSelector(getState, (state: AppState) => state.matcher);

export const getDevices = createSelector(getMatcherState, (state: MatcherState) => state.devices);
export const getCountries = createSelector(getMatcherState, (state: MatcherState) => state.countries);
export const getTesterMatches = createSelector(getMatcherState, (state: MatcherState) => state.testerMatches);
