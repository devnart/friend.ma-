import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  ElementRef,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { cities } from 'src/CITIES';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  state: boolean = false;
  @ViewChild('button') button: ElementRef;
  @ViewChild('span') span: ElementRef;
  @Input() items: any[];
  @Input() text: string = '';
  @ViewChild('searchInput') searchInput: string;
  @Output() selectedItem: any = new EventEmitter();

  constructor(private elem: ElementRef,private router:Router) {}

  ngOnInit(): void {}

  ngOnChanges() {
    document.addEventListener('click', this.handleClick.bind(this));
  }
  toggle() {
    this.state = !this.state;
  }

  handleSearch(event: any) {
    const elements = this.elem.nativeElement.querySelectorAll('.menu-el-js');
    const searchValue = event.value.toLowerCase();

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const text = element.innerText.toLowerCase();
      if (text.indexOf(searchValue) > -1) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  }

  handleSelect(event: any) {
    this.span.nativeElement.innerText = event.target.innerText;
    this.state = false;
    this.router.navigate(['/city', event.target.innerText.toLowerCase()]);
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
