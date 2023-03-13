import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { GetQuote } from '../state/app-state';
import { ageBandCountNotMatchedValidator } from '../validator/age-band-count-not-match.directive';
import { familyMemberCountValidator } from '../validator/family-member-count.directive';
@Component({
  selector: 'app-get-quote-form',
  templateUrl: './get-quote-form.component.html',
  styleUrls: ['./get-quote-form.component.css']
})
export class GetQuoteFormComponent {

  getQuoteForm = this.fb.group({
    plan: ['S', [
      Validators.required, 
      Validators.pattern(/(S|A)/)
    ]],
    destination: ['A', [
      Validators.required, 
      Validators.pattern(/(A|G)/)
    ]],
    individualOrFamily: ['IO', [
      Validators.required, 
      Validators.pattern(/(IO|IF)/)
    ]],
    noOfIndividual: [0, Validators.required],
    noOfChild: [0, Validators.required],
    startDate: [''],
    endDate:[''],
    noOfAdultAgeBandOne: [0],
    noOfAdultAgeBandTwo: [0],
    noOfAdultAgeBandThree: [0],

  }, {validators: [ageBandCountNotMatchedValidator, familyMemberCountValidator]})

  
  onSubmit() {
    if (!this.getQuoteForm.valid){
      alert('Invalid Input');
      //go to next page
      
    } else {
      this.store.dispatch(new GetQuote());
    }
  }



  constructor(private fb: FormBuilder, private store: Store){

  }
}
