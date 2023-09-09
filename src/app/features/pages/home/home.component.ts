import {Component, OnInit} from '@angular/core';
import {BadgeResponse} from "../../../core/model/badge/response/badge-response";
import {BadgeService} from "../../../core/services/badge.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  badges: BadgeResponse[] = [];
  badge: BadgeResponse = new BadgeResponse();

  constructor(private _badgeService: BadgeService) {
  }

  ngOnInit(): void {

    this._badgeService.getAll().subscribe(
      {
        next: (response: BadgeResponse[]) => {
          this.badges = response;
        },
      }
    );
  }
}


