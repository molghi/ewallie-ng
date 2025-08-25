import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    copy: string = 'Copyright: © eWallie! 2022. All Rights Reserved.';

    columns: Array<any> = [
        {
            type: 'general',
            title: 'eWallie',
            text: 'Simplifying finance management for businesses',
            socials: [
                { link: 'https://linkedin.com', icon: 'assets/images/icons/in.svg' },
                { link: 'https://facebook.com', icon: 'assets/images/icons/messenger.svg' },
                { link: 'https://twitter.com', icon: 'assets/images/icons/twi.svg' },
                { link: 'https://google.com', icon: 'assets/images/icons/twoo.svg' },
            ],
        },
        { type: 'links', title: 'Company', links: ['About eWallie', 'Join Our Team', 'Insights & Articles', 'Plans & Pricing'] },
        {
            type: 'links',
            title: 'Resources',
            links: ['Proposal Templates', 'Invoice Templates', 'How-to Guides', 'Contract Writing Tips'],
        },
        {
            type: 'subscribe',
            title: 'Join Our Newsletter',
            text: `* Receive weekly tips to manage your finances better.`,
            placeholder: 'Enter your email',
            buttonText: 'Subscribe',
        },
    ];

    activeCol: number = -1;

    toggleColumn(index: number) {
        if (this.activeCol === index) this.activeCol = -1;
        else this.activeCol = index;
    }
}
