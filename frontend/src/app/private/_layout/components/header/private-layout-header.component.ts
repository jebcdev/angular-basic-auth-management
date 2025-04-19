import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrivateLayoutNavbarComponent } from '../navbar/private-layout-navbar.component';

@Component({
  selector: 'private-layout-header',
  imports: [PrivateLayoutNavbarComponent],
  templateUrl: './private-layout-header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateLayoutHeaderComponent {

}

export default PrivateLayoutHeaderComponent;