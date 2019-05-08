import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PersonServiceService } from '../../services/person-service.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  titulo = 'Modulo de persona';
  person: Person;
  message = 'Dato guardado';
  emaii = []
  telephone =  []

  public text: string;
  public phone: string;

  constructor(public rest: PersonServiceService) {
    this.rest.setPerson(this.person);
    this.person = new Person('','','','','',null,'',null,'','',null,'','',null,'','','','','','',null,'','',null)
  }

  ngOnInit() {
    this.getData();
  }

  onSumit() {
    this.addEmail();
    this.addPhone();
    this.person.email = this.emaii;
    this.person.otherNumber = this.telephone;
    this.rest.setPerson(this.person).subscribe(res => {
      console.log(res);
    });
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }
  addEmail(){
    this.emaii.push(this.person.email);
    // console.log("Datos guardados", this.emaii)
    // this.person.email = this.emaii;
    // this.emaii.push(this.person.email);
    // this.person.email.push({Email: this.emaii});
    
    
    
    // console.log(this.person.email);
    console.log(this.emaii);
    this.text = ""
  }

  addPhone(){
    this.telephone.push(this.person.otherNumber);
    // this.person.otherNumber.push({Number:"45454545"});

    console.log("datos guardados de phone",this.telephone);
    this.phone = "";
  }
}
