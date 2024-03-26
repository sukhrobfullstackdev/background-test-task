import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {
  @Input() label: string;
  @Input() model: any;
  @Input() field: string;
  @Input() required: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(value: string) {
    this.model[this.field] = value;
  }
}
