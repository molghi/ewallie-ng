import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    copy: string = 'Copyright @ eWallie! 2022. All Rights Reserved.';

    columns: Array<any> = [
        {
            type: 'general',
            title: 'eWallie',
            text: 'Finance helps companies manage payments easily.',
            socials: [
                { link: 'https://linkedin.com', icon: 'assets/images/icons/in.svg' },
                { link: 'https://facebook.com', icon: 'assets/images/icons/messenger.svg' },
                { link: 'https://twitter.com', icon: 'assets/images/icons/twi.svg' },
                { link: 'https://google.com', icon: 'assets/images/icons/twoo.svg' },
            ],
        },
        { type: 'links', title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Pricing'] },
        {
            type: 'links',
            title: 'Resources',
            links: ['Proposal Template', 'Invoice Template', 'Tutorial', 'How to write a contract'],
        },
        {
            type: 'subscribe',
            title: 'Join Our Newsletter',
            text: `* We'll send you weekly updates for your better finance management.`,
            placeholder: 'Your email address',
            buttonText: 'Subscribe',
        },
    ];
}
