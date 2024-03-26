import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit {
  @Input() label: string;
  @Input() model: any;
  @Input() field: string;
  @Input() required: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNumberChange(value: number) {
    this.model[this.field] = value;
  }
}
