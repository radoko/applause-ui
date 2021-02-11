import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/matcher.reducer';
import {MatcherEffect} from './store/matcher.effect';
import {MatButtonModule} from '@angular/material/button';
import {MatcherTableComponent} from './components/matcher-table/matcher-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [SearchBarComponent, MatcherTableComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    StoreModule.forFeature('matcher', reducers),
    EffectsModule.forFeature([MatcherEffect]),
  ],
  exports: [SearchBarComponent, MatcherTableComponent],
})
export class MatcherModule {
}
