import {Component} from 'angular2/core';
import {FirstComponent} from "./dev/first.component";
import {SecondComponent} from "./dev/second.component";
import {ThirdComponent} from "./dev/third.component";

@Component({
    selector: 'my-app',
    template: `
                <div>
                     <table>
                        <tr>
                          <td colspan="2"><first></first></td>
                        </tr>
                        <tr>
                          <td><second></second></td>
                          <td><third></third></td>
                        </tr>
                     </table>
                </div>
              `,
    directives: [FirstComponent, SecondComponent, ThirdComponent]
})
export class AppComponent {
}