import { Component } from '@angular/core';

@Component({
    selector: 'app-cta',
    templateUrl: './cta.component.html',
    styleUrls: ['./cta.component.css'],
})
export class CtaComponent {
    title: string = 'Simplify and optimize the way you manage money';

    buttonText: string = 'Start Now';
}
