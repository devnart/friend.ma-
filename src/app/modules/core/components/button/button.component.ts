import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;
  @Input() loading: boolean = false;
  @Input() icon: boolean = false;
  @Input() center: boolean = false;
  @Input() disabled: boolean = false;

  @Output() click: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.click.emit();
  }

}
