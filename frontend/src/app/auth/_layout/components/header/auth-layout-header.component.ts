import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthLayoutNavBarComponent } from '../nav-bar/auth-layout-nav-bar.component';

@Component({
  selector: 'auth-layout-header',
  imports: [AuthLayoutNavBarComponent], 
  templateUrl: './auth-layout-header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutHeaderComponent {

}
