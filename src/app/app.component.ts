import { Component } from '@angular/core';
import { HttpService } from './http.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World  from Angular 2. Yeeeeeeeeeeeehaaaaaaaaaaaa';
  public dogs;
  constructor(private httpService:HttpService, private router:Router){
    this.httpService.getRequest().subscribe(response => {
      this.dogs = response;
      console.log(this.dogs[0]);
    }, error => {
      alert('Error');
    })
  }

  public showAlert = function(message){
    console.log(message);
    alert(message);
  }


  public goToOther(){
    this.router.navigate(['/other']);
  }

  public createDog = function(name, breed){
    this.httpService.postRequest(name, breed).subscribe(response =>{
      if(response['success']){
        this.dogs.push({name: name, breed: breed, id: this.dogs.length + 1});
        alert(response['message']);
      }else{
        alert(response['message'])
      }
    })
  }
}
