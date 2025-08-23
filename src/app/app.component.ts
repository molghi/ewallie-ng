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
        bigTitle: 'Track your payments effortlessly anywhere',
        text: 'Manage your finances quickly, securely, and with complete transparency.',
        checks: ['Get an overview at a glance', 'Deposit funds easily and safely', 'Access live support anytime'],
    };

    whyReversed: WhyContent = {
        image: 'assets/images/content/why-2.png',
        title: 'WHY CHOOSE US',
        bigTitle: 'Save money with smarter transactions',
        text: 'Keep your payments efficient, transparent, and cost-effective every time.',
        quote: {
            text: 'Using this system has reduced my transaction costs and simplified my workflow. Everything is clear and fast',
            author: 'Jim Smith, Web Designer',
        },
    };
}
