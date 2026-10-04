import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Search } from '@primeicons/angular/search';
import { NoteCard } from '../../components/note-card/note-card';

type FILTER_TYPE = "ALL" | "ACTIVE" | "ARCHIVED" | "DELIVERED";

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes.page.html',
  styleUrl: './notes.page.scss',
  imports: [FormsModule, Search, NoteCard]
})
export class NotesPage {

  notes = [
    {
      title: "Why I draw borders with box-shadow",
      timestamp: "02.06.2026",
      readingTime: 6,
      description: "Inset shadows as hairlines: no layout shift, stackable, and they play nicely with border-radius.",
      tags: ["CSS", "Angular"]
    },
    {
      title: "Why I draw borders with box-shadow",
      timestamp: "02.06.2026",
      readingTime: 6,
      description: "Inset shadows as hairlines: no layout shift, stackable, and they play nicely with border-radius.",
      tags: ["CSS", "Angular"]
    },
    {
      title: "Why I draw borders with box-shadow",
      timestamp: "02.06.2026",
      readingTime: 6,
      description: "Inset shadows as hairlines: no layout shift, stackable, and they play nicely with border-radius.",
      tags: ["CSS", "Angular"]
    },
    {
      title: "Why I draw borders with box-shadow",
      timestamp: "02.06.2026",
      readingTime: 6,
      description: "Inset shadows as hairlines: no layout shift, stackable, and they play nicely with border-radius.",
      tags: ["CSS", "Angular"]
    }
  ];

  searchText = '';
  selectedFilter: FILTER_TYPE = "ALL";

  changeSelectedFilter(filter: FILTER_TYPE) {
    this.selectedFilter = filter;
  }
}
