import {Component, OnInit} from '@angular/core';
import {MatcherFacadeService} from '../../store/matcher-facade.service';

@Component({
  selector: 'app-matcher-table',
  templateUrl: './matcher-table.component.html',
  styleUrls: ['./matcher-table.component.css']
})
export class MatcherTableComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'bugs'];

  constructor(public matcherFacadeService: MatcherFacadeService) {
  }

  ngOnInit(): void {
  }

}
