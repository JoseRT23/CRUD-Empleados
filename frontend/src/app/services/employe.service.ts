import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employes } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  URL_API = 'http://localhost:5000/employes';

  selectedEmployes: Employes = {
    name: '',
    office: '',
    position: '',
    salary: 0
  };

  employes!: Employes[];

  constructor(private http: HttpClient) { }

  getEmployes() {
    return this.http.get<Employes[]>(this.URL_API);
  }

  createEmploye(employe: Employes) {
    return this.http.post(this.URL_API, employe);
  }

  updateEmploye(employe: Employes) {
    return this.http.put(`${this.URL_API}/${employe._id}`, employe)
  }

  deleteEmploye(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
