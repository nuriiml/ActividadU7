import { Component } from '@angular/core';

@Component({
  selector: 'app-page-form2',
  templateUrl: './page-form2.component.html',
  styleUrls: ['./page-form2.component.css']
})
export class PageForm2Component {

  arrAutoescuela: any [] =[]
  isError=false 

 

  addAlumno(name: string, firstName: string, dni: string, email: string) {
    let alumno = {
      name: name,
      firstName: firstName,
      dni: dni,
      email: email
    };
   
    if(name.length ==0 || firstName.length ==0 || dni.length==0 ||email.length == 0 ) {
      this.isError=true
      return
    } else {
      this.isError=false
    }

    this.arrAutoescuela.push(alumno)
    
    //no se vacían los campos
    if (name.length >0 || firstName.length >0 || dni.length>0 ||email.length >0 ) {
      name = '',
      firstName = '',
      dni = '',
      email = ''
      console.log("entra");
    
    }
    
  }
  
}
  


