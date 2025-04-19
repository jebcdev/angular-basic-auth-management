import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'front-home-page',
  imports: [RouterLink],
  templateUrl: './front-home-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrontHomePageComponent {
  currentYear = new Date().getFullYear();

}


export default FrontHomePageComponent;