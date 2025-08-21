import { Component } from '@angular/core';

interface Button {
    text: string;
    link: string;
    type: string;
}

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
    bigTitle: string = 'Managing freelance payments has never been easier';

    text: string = 'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.';

    buttons: Array<Button> = [
        { text: 'Get Started', link: '#', type: 'regular' },
        { text: 'See How It Works', link: '#', type: 'play' },
    ];

    checks: Array<string> = ['Free Register', 'Great Service'];

    image: string = 'assets/images/content/hero.png';
}
