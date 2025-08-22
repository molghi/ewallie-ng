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
            q: 'The expense windows adapted sir. Wrong widen drawn.',
            a: 'Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.',
        },
        {
            q: 'Six curiosity day assurance bed necessary?',
            a: 'Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Offending belonging promotion provision an be oh consulted ourselves it.',
        },
        {
            q: 'Produce say the ten moments parties?',
            a: 'Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.',
        },
        {
            q: 'Simple innate summer fat appear basket his desire joy?',
            a: 'Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. promotion provision an be oh consulted ourselves it. Blessing',
        },
        {
            q: 'Outward clothes promise at gravity do excited?',
            a: 'Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.',
        },
    ];

    askBlock = {
        icon: 'assets/images/icons/msg-icon.svg',
        title: 'Do you have more questions?',
        text: 'End-to-end payments and financial management in a single solution. Meet the right platform to help realize.',
        buttonText: 'Shoot a Direct Mail',
    };
}
