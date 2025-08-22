import { Component, Input } from '@angular/core';
import { WhyContent } from 'src/app/app.component';

@Component({
    selector: 'app-why',
    templateUrl: './why.component.html',
    styleUrls: ['./why.component.css'],
})
export class WhyComponent {
    @Input() type?: string = 'regular';
    @Input() content!: WhyContent;
}
