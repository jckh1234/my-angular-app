import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const ageBandCountNotMatchedValidator : ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const noOfIndividual:number = parseInt(control.get('noOfIndividual')?.value || 0);
    const noOfAdultAgeBandOne:number = parseInt(control.get('noOfAdultAgeBandOne')?.value || 0);
    const noOfAdultAgeBandTwo :number= parseInt(control.get('noOfAdultAgeBandTwo')?.value || 0) ;
    const noOfAdultAgeBandThree:number = parseInt(control.get('noOfAdultAgeBandThree')?.value || 0);
    console.log(noOfIndividual);
    console.log(noOfAdultAgeBandOne);
    console.log(noOfAdultAgeBandTwo);
    console.log(noOfAdultAgeBandThree);
    return noOfIndividual !== (noOfAdultAgeBandOne + noOfAdultAgeBandTwo + noOfAdultAgeBandThree) ? 
    {ageBandCountNoMatched: true} : null;
    
}