import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { ObjectsColumn } from '@primeicons/angular/objects-column';
import { FolderOpen } from '@primeicons/angular/folder-open';
import { FileEdit } from '@primeicons/angular/file-edit';
import { Bookmark } from '@primeicons/angular/bookmark';
import { Github } from '@primeicons/angular/github';
import { Linkedin } from '@primeicons/angular/linkedin';
import { AddressBook } from '@primeicons/angular/address-book';

@Component({
    standalone: true,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [
        RouterLink,
        RouterLinkActive,
        ObjectsColumn,
        FolderOpen,
        FileEdit,
        Bookmark,
        Github,
        Linkedin,
        AddressBook
    ]
})
export class Navbar {

}