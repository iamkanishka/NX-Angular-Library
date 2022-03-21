import { Component } from '@angular/core';
import {getStatus} from '@nx-ng-lib/todo-util'
@Component({
  selector: 'nx-ng-lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  status = getStatus("Active")

}
