import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent {
  autoescuelaForm: FormGroup
  arrAutoescuela: any[] = []
  isError=false;

  constructor (private fb: FormBuilder) {
    this.autoescuelaForm = this.fb.group({
      'name': ['', Validators.required],
      'firstName': ['', Validators.required],
      'dni' : ['', Validators.required],
      'email': ['', Validators.required]
    })
  }

  sendData(){
    let nombreMat = this.autoescuelaForm.value.name
    let apellidoMat = this.autoescuelaForm.value.firstName
    let DNIMat = this.autoescuelaForm.value.dni
    let emailMat = this.autoescuelaForm.value.email

    if(nombreMat.length ==0 || apellidoMat.length ==0 || DNIMat.length==0 ||emailMat.length == 0 ) {
      this.isError=true
      return
    } else {
      this.isError=false
    }
    this.arrAutoescuela.push({id: this.arrAutoescuela.length, name: nombreMat, firstName: apellidoMat, dni:DNIMat, email:emailMat})

    this.autoescuelaForm.patchValue({ name: "", firstName: "", dni: "", email:""})
  }

  deleteAlumno(id:number) {
    this.arrAutoescuela = this.arrAutoescuela.filter(a => a.id != id)
  }
}
