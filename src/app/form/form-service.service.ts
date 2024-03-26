import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {


  constructor() { }

  generateFormStructure(jsonData: any) {
    return jsonData.map(field => {
      return {
        type: field.type,
        label: field.label,
        choices: field.choices,
        required: field.required,
        field: field.field
      };
    });
  }
}
