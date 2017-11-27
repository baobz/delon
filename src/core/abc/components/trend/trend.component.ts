import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'trend',
    template: `
    <ng-content></ng-content>
    <span *ngIf="flag" class="{{flag}}"><i class="anticon anticon-caret-{{flag}}"></i></span>
    `,
    styleUrls: [ './trend.less' ],
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '[class.grey]': '!colorful'
    }
})
export class TrendComponent {

    @Input() flag: 'up' | 'down';

    @Input() colorful = true;

}
