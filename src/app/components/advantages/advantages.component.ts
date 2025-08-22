import { Component } from '@angular/core';

@Component({
    selector: 'app-advantages',
    templateUrl: './advantages.component.html',
    styleUrls: ['./advantages.component.css'],
})
export class AdvantagesComponent {
    title: string = 'Automated portfolio tracking';

    text: string = 'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.';

    quote: { text: string; author: string } = {
        text: 'Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.',
        author: 'Mike Taylor, Web Designer',
    };

    items: Array<any> = [
        {
            image: 'assets/images/icons/adv-icon-1.svg',
            title: 'Connect wallets & companies',
            text: 'Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.',
        },
        {
            image: 'assets/images/icons/adv-icon-2.svg',
            title: 'Review transactions',
            text: 'Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.',
        },
        {
            image: 'assets/images/icons/adv-icon-3.svg',
            title: 'Get income insights',
            text: 'Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.',
        },
    ];
}
