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

    text: string =
        'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.';

    slides: Array<Slide> = [
        {
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus maiores ut numquam omnis.',
            name: 'Steve Paul, Web Snap',
            image: 'assets/images/content/testi-2.jpg',
        },
        {
            text: 'Wise busy past both park when an ye no. Nay likely her length sooner.',
            name: 'Mika Taylor, Web Designer',
            image: 'assets/images/content/testi-3.jpg',
        },
        {
            text: 'Past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows. Blessing welcomed ladyship.',
            name: 'Jane Doe, Systems Engineer',
            image: 'assets/images/content/testi.jpg',
        },
    ];
}
