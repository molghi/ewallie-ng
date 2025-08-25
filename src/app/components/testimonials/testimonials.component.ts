import { Component } from '@angular/core';

interface Slide {
    text: string;
    name: string;
    image: string;
}

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
    title: string = 'Testimonials';

    text: string = 'See what our clients say about our services and experience';

    slides: Array<Slide> = [
        {
            text: 'Working with this platform simplified all my tasks effortlessly. Highly recommend it!',
            name: 'Steve Paul, Web Snap',
            image: 'assets/images/content/testi-2.jpg',
        },
        {
            text: 'The insights I get every day save me so much time and stress.',
            name: 'Mika Taylor, Web Designer',
            image: 'assets/images/content/testi-3.jpg',
        },
        {
            text: 'Reliable, fast, and easy to use. I couldn’t ask for more.',
            name: 'Jane Doe, Systems Engineer',
            image: 'assets/images/content/testi.jpg',
        },
        {
            text: 'The insights I get every day save me so much time and stress.',
            name: 'Mika Taylor, Web Designer',
            image: 'assets/images/content/testi-3.jpg',
        },
    ];
}
