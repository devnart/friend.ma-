import { Component, OnInit,AfterViewInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,DoCheck {

  home : boolean = this.isHome();
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('header init');
    this.isHome();
  }

  ngDoCheck(): void {
    if(this.router.url != '/'){ 
      this.home = false;
    } else {
      this.home = true;
    }
  }
  

  isHome(): boolean {
    return this.router.url === '/';
  }
}
