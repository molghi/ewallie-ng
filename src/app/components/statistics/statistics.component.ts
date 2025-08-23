import { Component } from '@angular/core';

interface Item {
    type: string;
    bigText: string;
    smallText: string;
}

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
    text: string = 'See our platform’s impressive achievements';

    items: Array<Item> = [
        { type: 'person icon', bigText: '1M+', smallText: 'Active Users' },
        { type: 'star icon', bigText: '30K+', smallText: '5-Star Reviews' },
        { type: 'star icon', bigText: '$252M', smallText: 'Transactions Completed' },
    ];
}
