import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('search') search: ElementRef | undefined;

  searchQuery:any='';
  ngOnInit(): void {}
  searchItem() {
    this.searchQuery=this.search?.nativeElement.value;
  }
}
