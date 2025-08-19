import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    logo: string = 'eWallie';

    buttons: Array<any> = [
        { type: 'transparent', text: 'Sign In', link: '' },
        { type: 'filled', text: 'Start Free', link: '' },
    ];

    menu: Array<any> = [
        {
            title: 'Product',
            link: '',
            type: 'dropdown',
            dropdown: [
                { title: 'About', link: '' },
                { title: 'Explore', link: '' },
                { title: 'Investigate', link: '' },
                { title: 'Library', link: '' },
                { title: 'For companies', link: '' },
            ],
        },
        {
            title: 'Template',
            link: '',
            type: 'dropdown',
            dropdown: [
                { title: 'Standard', link: '' },
                { title: 'Non-standard', link: '' },
                { title: 'Dark Mode', link: '' },
                { title: 'Simple', link: '' },
                { title: 'Fashionable', link: '' },
            ],
        },
        { title: 'Blog', link: '', type: 'link' },
        { title: 'Pricing', link: '', type: 'link' },
    ];
}
