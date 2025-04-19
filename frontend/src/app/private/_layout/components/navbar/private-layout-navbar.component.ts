import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { environment } from '@env/environment';

@Component({
  selector: 'private-layout-navbar',
  imports: [RouterLink],
  templateUrl: './private-layout-navbar.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLayoutNavbarComponent {
  private _authService: AuthService = inject(AuthService);
  private _router: Router = inject(Router);

  appName = computed<string>(() => environment.appName);

  public authStatus = computed(() => this._authService.authStatus());
  public userName = computed(() => this._authService.user()?.name);

  logout() {
    this._authService.logout();
    this._router.navigate(['/']);
  }
}

export default PrivateLayoutNavbarComponent;
