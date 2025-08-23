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
    bigTitle: string = 'Effortless freelance payment management';

    text: string = 'Simplify your finances and focus on work. Simplify your finances and focus on work.';

    buttons: Array<Button> = [
        { text: 'Get Started', link: '#', type: 'regular' },
        { text: 'See How It Works', link: '#', type: 'play' },
    ];

    checks: Array<string> = ['Quick setup, zero hassle', 'Fast, secure, and reliable'];

    image: string = 'assets/images/content/hero.png';
}
