import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'front-home-page',
  imports: [],
  templateUrl: './front-home-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrontHomePageComponent {
  currentYear = new Date().getFullYear();

}


export default FrontHomePageComponent;