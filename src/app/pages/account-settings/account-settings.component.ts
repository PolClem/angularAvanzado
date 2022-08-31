import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingservice: SettingsService) { }

  ngOnInit(): void {
    this.settingservice.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settingservice.changeTheme(theme);
  }

}
