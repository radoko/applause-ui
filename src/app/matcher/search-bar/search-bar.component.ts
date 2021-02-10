import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatcherFacadeService} from '../store/matcher-facade.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public matcherFacadeService: MatcherFacadeService) {
  }


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
        country: [''],
        device: [''],
      }
    );
  }
}
