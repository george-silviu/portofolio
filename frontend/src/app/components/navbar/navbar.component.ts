import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgComponentOutlet } from "@angular/common";
import { ObjectsColumn } from '@primeicons/angular/objects-column';
import { FolderOpen } from '@primeicons/angular/folder-open';
import { FileEdit } from '@primeicons/angular/file-edit';
import { Bookmark } from '@primeicons/angular/bookmark';
import { Github } from '@primeicons/angular/github';
import { Linkedin } from '@primeicons/angular/linkedin';
import { AddressBook } from '@primeicons/angular/address-book';
import { AlignJustify } from '@primeicons/angular/align-justify';
import { Times } from '@primeicons/angular/times';

@Component({
    standalone: true,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [
        RouterLink,
        RouterLinkActive,
        Github,
        Linkedin,
        AddressBook,
        NgComponentOutlet,
        AlignJustify,
        Times
    ]
})
export class Navbar {
    isMobileNavigationDisplayed: boolean = false;
    navLinks = [
        {
            pageName: "Dashboard",
            navigateTo: "/",
            icon: ObjectsColumn,
            count: 0
        },
        {
            pageName: "Proiecte",
            navigateTo: "projects",
            icon: FolderOpen,
            count: 1
        }, {
            pageName: "Notițe",
            navigateTo: "/notes",
            icon: FileEdit,
            count: 2
        }, {
            pageName: "Resurse",
            navigateTo: "resources",
            icon: Bookmark,
            count: 3
        },
    ]

    onMobileMenuClick() {
        this.isMobileNavigationDisplayed = !this.isMobileNavigationDisplayed;
    }

    handleMobileNavClick() {
        this.isMobileNavigationDisplayed = false;
    }

    handleNavigateToDashboard() {
        if (this.isMobileNavigationDisplayed === true) {
            this.isMobileNavigationDisplayed = false;
        }
    }
}