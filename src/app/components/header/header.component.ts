import { Component, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', './hamburger.css'],
})
export class HeaderComponent {
    constructor(private shared: SharedService) {}

    toggleForm() {
        this.shared.triggerAction(); // Emit event
    }

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
                { title: 'About', link: '#' },
                { title: 'Explore', link: '#' },
                { title: 'Investigate', link: '#' },
                { title: 'Library', link: '#' },
                { title: 'For companies', link: '#' },
            ],
        },
        {
            title: 'Template',
            link: '',
            type: 'dropdown',
            dropdown: [
                { title: 'Standard', link: '#' },
                { title: 'Non-standard', link: '#' },
                { title: 'Dark Mode', link: '#' },
                { title: 'Simple', link: '#' },
                { title: 'Fashionable', link: '#' },
            ],
        },
        { title: 'Blog', link: '', type: 'link' },
        { title: 'Pricing', link: '', type: 'link' },
        { title: 'Sign In', link: '', type: 'hidden' },
        { title: 'Start Free', link: '', type: 'hidden' },
    ];

    goUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    isHamburgerShown: boolean = false;

    toggleHamburger() {
        this.isHamburgerShown = !this.isHamburgerShown;
        if (this.isHamburgerShown) document.body.classList.add('lock');
        else document.body.classList.remove('lock');
    }

    // isDropdownShown: boolean = false;
    whichDropdownShown: number = -1;

    toggleDropdown(index: number) {
        if (window.innerWidth > 768) return;
        if (this.whichDropdownShown === index) this.whichDropdownShown = -1;
        else this.whichDropdownShown = index;
    }

    // implement sticky header on scroll up
    // have a var for last position, listen to scroll, update the var, and compare to current position
    lastScrollPosition: number = 0;
    headerVisible: boolean = false; // for easier rendering
    scrollTopBtnVisible: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll < this.lastScrollPosition) {
            this.headerVisible = true; // scrolling up
            // document.body.style.paddingTop = '130px'; // 130px = header height
            if (currentScroll === 0) {
                // document.body.style.paddingTop = '0';
                this.headerVisible = false;
            }
        } else {
            // document.body.style.paddingTop = '0';
            this.headerVisible = false; // scrolling down
        }

        if (currentScroll > window.innerHeight) {
            // show back to top btn
            this.scrollTopBtnVisible = true;
        } else {
            // hide back to top btn
            this.scrollTopBtnVisible = false;
        }

        this.lastScrollPosition = currentScroll;
    }
}
