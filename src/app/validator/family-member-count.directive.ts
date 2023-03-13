import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const familyMemberCountValidator : ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const noOfIndividual:number = parseInt(control.get('noOfIndividual')?.value || 0);
    const noOfChild:number = parseInt(control.get('noOfChild')?.value || 0);
    const individualOrFamily = control.get('individualOrFamily')?.value || '';

    return (
        individualOrFamily == 'IF' && 
        (
            (noOfIndividual < 2 && noOfChild == 0)|| //only one individual with no chilren
            (noOfIndividual <= 0 || noOfIndividual > 2) || // no adult or adult > 2
            (noOfChild < 0) // invalid value
        )
    ) ? 
    {invalidFamilyMemberCount: true} : null;
    
}