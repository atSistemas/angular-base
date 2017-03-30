import { UserModel } from '../../../account/models/user.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gt-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuBarComponent {

  @Output() menuItemClicked = new EventEmitter();
  @Output() newEstimate = new EventEmitter();
  @Output() logout = new EventEmitter();

  @Input() loggedUser: UserModel;

  doNewEstimate() {
    this.newEstimate.emit();
    this.closeSideNav();
  }

  doLogout() {
    this.logout.emit();
  }

  closeSideNav() {
    this.menuItemClicked.emit();
  }
}
