import { Component } from '@angular/core';

interface Item {
    q: string;
    a: string;
}

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
    title: string = 'Frequently asked questions';

    activeQna: number = 0;

    changeActiveQna(index: number) {
        this.activeQna = index;
    }

    qna: Array<Item> = [
        {
            q: 'How secure is my data?',
            a: 'We use industry-standard encryption and security protocols to protect your information.',
        },
        {
            q: 'Can I cancel my subscription anytime?',
            a: 'Yes, you can cancel or change your subscription at any time without penalties.',
        },
        {
            q: 'How do I track my payments?',
            a: 'Our dashboard provides real-time updates and reports on all your transactions.',
        },
        {
            q: 'Are there any hidden fees?',
            a: 'No, all fees are clearly listed and there are no unexpected charges.',
        },
        {
            q: 'How can I get support quickly?',
            a: 'Our support team is available 24/7 via chat, email, or phone.',
        },
    ];

    askBlock = {
        icon: 'assets/images/icons/msg-icon.svg',
        title: 'Have more questions?',
        text: 'Discover end-to-end payment solutions and get help whenever you need it.',
        buttonText: 'Contact Support',
    };
}
