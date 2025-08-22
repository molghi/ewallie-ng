import { Component } from '@angular/core';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
    title: string = 'Over 32k+ software businesses growing with eWallie!';

    images: Array<string> = [
        'assets/images/content/partner-1.svg',
        'assets/images/content/partner-2.svg',
        'assets/images/content/partner-3.svg',
        'assets/images/content/partner-4.svg',
        'assets/images/content/partner-5.svg',
        'assets/images/content/partner-6.svg',
        'assets/images/content/partner-7.svg',
    ];
}
