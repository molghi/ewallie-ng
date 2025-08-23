import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
    selector: 'app-pop-up-login',
    templateUrl: './pop-up-login.component.html',
    styleUrls: ['./pop-up-login.component.css'],
})
export class PopUpLoginComponent {
    constructor(private shared: SharedService) {}

    isActive: boolean = false;

    title: string = 'Sign Up';
    btnText: string = 'Sign Up';

    fields: Array<any> = [
        { kind: 'input', type: 'text', placeholder: 'Your Name' },
        { kind: 'input', type: 'password', placeholder: 'Your Password' },
    ];

    closeForm() {
        this.isActive = false;
    }

    ngOnInit() {
        this.shared.action$.subscribe(() => {
            this.isActive = !this.isActive;
        });
    }
}
