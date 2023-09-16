import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { Pais } from 'src/app/models/pais.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent {

  lstPais : Pais[] = [];

  objEmpleado : Empleado = {

    
      nombres:"",
      fechaNacimiento:"",
      estado:-1,
      fechaRegistro:"",
      pais:{
        idPais:-1,
      }

  };

  constructor(private paisService: PaisService, private empleadoService:EmpleadoService){
    this.paisService.listapais().subscribe(
          x => this.lstPais = x
    );
}

registraEmpleado(){
  this.empleadoService.registraEmpleado(this.objEmpleado).subscribe(
    x =>  Swal.fire({icon: 'info',title: 'Resultado del Registro - Gutierrez',text: x.errores}) 
  );
  
}

}
