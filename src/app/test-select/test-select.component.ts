import {Component, OnInit, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {
  @Input() label: string;
  @Input() choices: any[];
  @Input() model: any;
  @Input() field: string;
  @Input() required: boolean = false;
  showOptions: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectChange(value: string) {
    this.model[this.field] = value;
    this.showOptions = false;
    this.toggleDropdown();
  }

  toggleDropdown() {
    this.showOptions = !this.showOptions;
  }
}
