import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  selectedMenu: string = 'Uk &Ireland';

  selectMenu(menu: string): void {
    this.selectedMenu = menu;
  }
  isMenuSelected(menu: string): boolean {
    return this.selectedMenu === menu;
  }

}
