import { Component, OnInit,OnChanges, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-simple-drop-down',
  templateUrl: './simple-drop-down.component.html',
  styleUrls: ['./simple-drop-down.component.scss']
})
export class SimpleDropDownComponent implements OnInit {
  state: boolean = false;
  @ViewChild('button') button: ElementRef;
  @ViewChild('span') span: ElementRef;
  @Input() items: any[];
  @Input() text: string = '';
  @Output() selectedItem: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

  ngOnChanges() {
    document.addEventListener('click', this.handleClick.bind(this));
  }

  toggle() {
    this.state = !this.state;
  }

  handleSelect(event: any) {

    this.span.nativeElement.innerText = event.target.innerText;
    this.state = false;
    this.selectedItem.emit(event.target.innerText);
  }
  
  // close if clicked outside
  handleClick(event: any) {
    if (this.button.nativeElement.contains(event.target)) {
      return;
    }

    this.state = false;
  }

}
