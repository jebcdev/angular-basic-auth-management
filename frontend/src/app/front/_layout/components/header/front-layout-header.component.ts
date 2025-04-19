import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrontLayoutNavBarComponent } from "../navbar/front-layout-nav-bar.component";

@Component({
  selector: 'front-layout-header',
  imports: [FrontLayoutNavBarComponent],
  templateUrl: './front-layout-header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrontLayoutHeaderComponent {

}
export default FrontLayoutHeaderComponent;