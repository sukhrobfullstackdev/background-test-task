import { Component } from '@angular/core';
import {FormServiceService} from "./form-service.service";
interface FormFieldBase {
  type: string;
  label: string;
  field: string;
  required?: boolean;
}

interface FormFieldSelect extends FormFieldBase {
  type: 'select';
  choices: string[];
}
type FormField = FormFieldBase | FormFieldSelect;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  formFields: any[];
  testForm: any = {};
  constructor(private formService: FormServiceService) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    const jsonData: Array<FormField> = [
      { type: 'input', label: 'Name', field: 'name', required: true },
      { type: 'input', label: 'Surname', field: 'surname', required: true },
      { type: 'input', label: 'Second Name', field: 'second_name', required: true },
      { type: 'number', label: 'Age', field: 'age', required: true },
      { type: 'number', label: 'Salary Expectation', field: 'salary', required: true },
      { type: 'select', label: 'Gender', field: 'gender', choices: ['Male', 'Female'], required: true },
      { type: 'checkbox', label: 'Agree to Terms', field: 'terms', required: true },
      { type: 'checkbox', label: 'Married?', field: 'married', required: true }
    ];

    this.formFields = this.formService.generateFormStructure(jsonData);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form Submitted:', this.testForm);
  }
}
