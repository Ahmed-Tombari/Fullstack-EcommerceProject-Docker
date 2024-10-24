import { FormControl, ValidationErrors } from "@angular/forms";

export class ShopValidators {

  // whitespace validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors | null {

    // check if the string only contains whitespace
    if ((control.value != null) && (control.value.trim().length === 0)) {

      // invalid, return error object
      return { 'notOnlyWhitespace': true };
    }
    
    // valid, return null
    return null;
  }
}


// import { FormControl, ValidationErrors } from "@angular/forms";

// export class ShopValidators {

//   // whitespace validation
//   static notOnlyWhitespace(control: FormControl): ValidationErrors | null {

//     // check if the string only contains whitespace
//     if ((control.value != null) && (control.value.trim().length === 0)) {

//       // invalid, return error object
//       return { 'notOnlyWhitespace': true };
//     }
    
//     // valid, return null
//     return null;
//   }
// }

