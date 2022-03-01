import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employes } from 'src/app/models/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']

})
export class EmployeComponent implements OnInit {
  
  constructor(public employeService: EmployeService) { }

  
  ngOnInit(): void {
    this.getEmployes();
  }

  getEmployes() {
    //llamar peticioones desde el service
    this.employeService.getEmployes().subscribe(
      res => {
          this.employeService.employes= res;
      }
    )
  }

  addEmploye(form: NgForm) {
    if(form.value._id){
      this.employeService.updateEmploye(form.value).subscribe(
        res => {
          this.getEmployes();
          form.reset()
        }
      )
    }else {
      this.employeService.createEmploye(form.value).subscribe(
        res => {
          this.getEmployes();
          form.reset();
        }
      )
    }
  }

  deleteEmploye(id: string) {
    if(confirm('Estas seguro?')) {
      this.employeService.deleteEmploye(id).subscribe(
        res => { 
            this.getEmployes();
        }
      )
    }
  }

  updateEmployee(employe: Employes) {
    this.employeService.selectedEmployes = employe
  }

}
