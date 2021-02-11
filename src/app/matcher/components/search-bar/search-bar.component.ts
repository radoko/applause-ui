import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatcherFacadeService} from '../../store/matcher-facade.service';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {Device} from '../../model/device.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;
  countriesOptions: string[];
  devicesOptions: Device[];

  constructor(private formBuilder: FormBuilder, public matcherFacadeService: MatcherFacadeService) {
  }

  ngOnInit(): void {
    this.matcherFacadeService.loadDevices().subscribe(devices => this.devicesOptions = devices);
    this.matcherFacadeService.loadCountries().subscribe(countries => this.countriesOptions = countries);
    this.searchForm = this.formBuilder.group({
        countries: ['', [Validators.required]],
        devices: ['', [Validators.required]],
      }
    );
  }

  searchMatch(): void {
    this.matcherFacadeService.searchMatch(this.countriesControl.value, this.devicesControl.value);
  }

  toogleAllCountries($event: MatCheckboxChange): void {
    if ($event.checked) {
      this.countriesControl.patchValue(this.countriesOptions);
    } else {
      this.countriesControl.patchValue([]);
    }
  }

  toogleAllDevices($event: MatCheckboxChange): void {
    if ($event.checked) {
      this.devicesControl.patchValue(this.devicesOptions.map(deivce => deivce.id));
    } else {
      this.devicesControl.patchValue([]);
    }
  }

  get countriesControl(): AbstractControl {
    return this.searchForm.controls.countries;
  }

  get devicesControl(): AbstractControl {
    return this.searchForm.controls.devices;
  }

  isAllSelected(options: any[], selectedValues: any[]): boolean {
    return options.length === selectedValues.length;
  }

  isAnySelected(selectedValues: any[]): boolean {
    return selectedValues.length > 0;
  }
}
