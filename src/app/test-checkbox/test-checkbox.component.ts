import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() model: any;
  @Input() field: string;
  @Input() required: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxChange(value: boolean) {
    this.model[this.field] = value;
  }
}
