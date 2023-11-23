import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
})
export class NavbarComponent {

  ngOnInit(): void {
    
  }
 


isbacked=false

  
  isToggled: boolean = false;

  btn() {
    this.isToggled = !this.isToggled;
  }


  isAccordionOpen: boolean = false;


  toggle(){
    this.isAccordionOpen = !this.isAccordionOpen;

   
  }

  
  
  
}
