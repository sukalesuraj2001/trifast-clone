import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent {
  @ViewChild('search') search: ElementRef | undefined;

  searchQuery:any='';
  ngOnInit(): void {}
  searchItem() {
    this.searchQuery=this.search?.nativeElement.value;
  }
}
