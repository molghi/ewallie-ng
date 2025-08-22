import { Component } from '@angular/core';

@Component({
    selector: 'app-cta',
    templateUrl: './cta.component.html',
    styleUrls: ['./cta.component.css'],
})
export class CtaComponent {
    title: string = 'Discover a better way to manage spendings';

    buttonText: string = 'Get Started Now';
}
