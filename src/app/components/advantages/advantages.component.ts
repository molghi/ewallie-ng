import { Component } from '@angular/core';

@Component({
    selector: 'app-advantages',
    templateUrl: './advantages.component.html',
    styleUrls: ['./advantages.component.css'],
})
export class AdvantagesComponent {
    title: string = 'Automated portfolio tracking';

    text: string = 'Monitor your assets effortlessly and in real time.';

    quote: { text: string; author: string } = {
        text: 'Tracking my entire portfolio has never been easier. Everything updates automatically, and I always know where I stand.',
        author: 'Mike Taylor, Web Designer',
    };

    items: Array<any> = [
        {
            image: 'assets/images/icons/adv-icon-1.svg',
            title: 'Connect wallets & companies',
            text: 'Link all your accounts and wallets quickly for seamless tracking',
        },
        {
            image: 'assets/images/icons/adv-icon-2.svg',
            title: 'Review transactions',
            text: 'View every transaction in one place and stay on top of your finances',
        },
        {
            image: 'assets/images/icons/adv-icon-3.svg',
            title: 'Get income insights',
            text: 'View every transaction in one place and stay on top of your finances',
        },
    ];
}
