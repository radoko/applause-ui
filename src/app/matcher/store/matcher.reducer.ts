import {ActionReducerMap, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {countriesLoadedSuccess, devicesLoadedSuccess, searchSuccess} from './matcher.action';

export interface AppState {
  matcher: MatcherState;
}

export interface MatcherState {
  devices: string[];
  countries: string[];
}

export const initialState: MatcherState = {
  devices: ['Apple', 'Samsung'],
  countries: ['Poland', 'USA'],
};

const reducer = createReducer(
  initialState,
  on(countriesLoadedSuccess, (state) => state),
  on(devicesLoadedSuccess, (state) => state),
  on(searchSuccess, (state) => state)
);

export const reducers: ActionReducerMap<AppState> = {
  matcher: reducer,
};

export const getState = createFeatureSelector<AppState>('matcher');
export const getMatcherState = createSelector(getState, (state: AppState) => state.matcher);

export const getDevices = createSelector(getMatcherState, (state: MatcherState) => state.devices);
export const getCountries = createSelector(getMatcherState, (state: MatcherState) => state.countries);
