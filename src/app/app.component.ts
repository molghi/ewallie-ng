import { Component } from '@angular/core';

export interface WhyContent {
    image: string;
    title: string;
    bigTitle: string;
    text: string;
    checks?: Array<string>;
    quote?: { text: string; author: string };
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'ewallie';

    whyRegular: WhyContent = {
        image: 'assets/images/content/why-1.png',
        title: 'WHY CHOOSE US',
        bigTitle: 'Track your payments on the go with the best way possible',
        text: 'Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.',
        checks: ['Get Overview at a glance', 'Deposit funds easily, securlity', 'Get Live Support'],
    };

    whyReversed: WhyContent = {
        image: 'assets/images/content/why-2.png',
        title: 'WHY CHOOSE US',
        bigTitle: 'Save money with proper transaction',
        text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.',
        quote: {
            text: 'Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows.',
            author: 'Mike Taylor, Web Designer',
        },
    };
}
