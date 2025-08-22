import { Component } from '@angular/core';

interface Item {
    type: string;
    title: string;
    image?: string;
    text?: string;
}

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
    title: string = 'Features that blow mind';

    text: string =
        'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.';

    items: Array<Item> = [
        {
            type: 'big',
            title: 'Really boy law county she unable her sister',
            image: 'assets/images/icons/adv-icon-2.svg',
            text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
        },
        {
            type: 'big',
            title: 'Among sex are leave law built now',
            image: 'assets/images/icons/adv-icon-1.svg',
            text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
        },
        { type: 'little', title: 'Merits behind on afraid or warmly' },
        { type: 'little', title: 'Believing neglected so so allowance existence' },
    ];
}
