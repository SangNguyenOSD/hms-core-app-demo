import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUser } from 'hms-core/lib/login/models/login-user.model';
import { Router } from '@angular/router';
import { SideBar } from 'hms-core/lib/sidebar/models/sidebar.model';
import { Footer } from 'hms-core/lib/footer/models/footer.model';
import { Header } from 'hms-core/lib/header/models/header.model';
import { LoginSignal } from 'hms-core/lib/login/models/login-signal.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private adminUser = environment.userAdmin;
    public headerData: Header = {
        logo: {
            imgUrl: '/favicon.ico',
            alt: 'HMS LOGO',
            homePageUrl: ''
        },
        title: 'HMS 1.0',
        menu: [
            {
                displayText: 'Home',
                url: '/dashboard'
            },
            {
                displayText: 'About',
                url: '/about'
            },
            {
                displayText: 'Contact',
                url: '/contact'
            },
        ],
        user: {
            firstName: '',
            lastName: '',
            email: '',
            avatarUrl: 'assets/images/avatar-1.png'
        },
        userMenuLanguage: {
            profile: 'Profile',
            changePassword: 'Change Password',
            signOut: 'Sign Out'
        }
    };
    public footerData: Footer = {
        copyRightText: 'Copyright 2014 by Vingroup. All rights reserved.',
        logo: {
            imgUrl: '/favicon.ico',
            alt: 'HMS LOGO',
            homePageUrl: ''
        }
    };
    public sideBarData: SideBar = {
        title: 'HMS 1.0',
        menu: [
            {
                displayText: 'Home',
                url: '/dashboard'
            },
            {
                displayText: 'About',
                url: '/about'
            },
            {
                displayText: 'Contact',
                url: '/contact'
            },
        ],
    };
    public loginSignal: LoginSignal = {
        isValid: true,
        invalidMessage: 'Invalid your Email or Password.'
    };

    public isLoginSuccess: boolean;

    public constructor(
        private router: Router
    ) { }

    public onSignIn(logInUser: LoginUser): void {
        const isSameEmail: boolean = logInUser.email === this.adminUser.email;
        const isSamePassword: boolean = logInUser.password === this.adminUser.password;
        if (!isSameEmail || !isSamePassword) {
            this.isLoginSuccess = false;
            this.loginSignal.isValid = false;
            return;
        }
        this.headerData.user.lastName = this.adminUser.lastName ? this.adminUser.lastName : '';
        this.headerData.user.firstName = this.adminUser.firstName ? this.adminUser.firstName : '';
        this.headerData.user.email = this.adminUser.email;
        this.loginSignal.isValid = true;
        this.isLoginSuccess = true;
    }

    public onSearch(searchTerm: string): void {
        console.log(searchTerm);
    }

    public onUpdateProfile() {
        console.log('User would like to update his/her profile now !!!!');
    }

    public onChangePassword() {
        console.log('User would like to change his/her password now !!!!');
    }

    public onSignOut() {
        console.log('User would like to sign out now !!!!');
    }
}
