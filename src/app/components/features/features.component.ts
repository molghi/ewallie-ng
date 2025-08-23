import { Component } from '@angular/core';

interface Item {
    type: string;
    title: string;
    image?: string;
    text?: string;
}

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
    title: string = 'Features that blow your mind';

    text: string = 'Discover the tools and capabilities designed to make your workflow seamless.';

    items: Array<Item> = [
        {
            type: 'big',
            title: 'Connect everything instantly',
            image: 'assets/images/icons/adv-icon-2.svg',
            text: 'Link accounts and services without any hassle',
        },
        {
            type: 'big',
            title: 'Real-time analytics',
            image: 'assets/images/icons/adv-icon-1.svg',
            text: 'See updates and trends the moment they happen.',
        },
        { type: 'little', title: 'Smart notifications' },
        { type: 'little', title: 'Customizable settings' },
    ];
}
