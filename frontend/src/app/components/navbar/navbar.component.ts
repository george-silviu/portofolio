import { Component } from "@angular/core";
import { ObjectsColumn } from '@primeicons/angular/objects-column';
import { FolderOpen } from '@primeicons/angular/folder-open';
import { FileEdit } from '@primeicons/angular/file-edit';
import { Bookmark } from '@primeicons/angular/bookmark';

@Component({
    standalone: true,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [
        ObjectsColumn,
        FolderOpen,
        FileEdit,
        Bookmark
    ]
})
export class Navbar {

}