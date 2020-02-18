import { FormGroup } from '@angular/forms'

//to make dynamic validation(i.e makaing reuseable) we are using static function

export class MUSTMATCH {
    static mustMatch(controlname: string, matchingcontrolname: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlname];
            const matchingcontrol = formGroup.controls[matchingcontrolname]

            if (matchingcontrol.errors && !matchingcontrol.errors.mustMatch) {
                return;
            }


            if (control.value !== matchingcontrol.value) {
                matchingcontrol.setErrors({ mustMatch: true });
            }
            else {
                matchingcontrol.setErrors(null)
            }
        }

    }
}
//this is without using static function and class. so it is not reuseable.

/*export function mustMatch (controlname: string, matchingcontrolname: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlname];
        const matchingcontrol = formGroup.controls[matchingcontrolname]

        if (matchingcontrol.errors && !matchingcontrol.errors.mustMatch) {
            return;
        }


        if (control.value !== matchingcontrol.value) {
            matchingcontrol.setErrors({ mustMatch: true });
        }
        else {
            matchingcontrol.setErrors(null)
        }
    }

}*/