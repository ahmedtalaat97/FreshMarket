import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  isLoading:boolean=false
apiError:string=''
isNotValid:boolean=false

constructor(private _authService:AuthService , private _router: Router){

if(localStorage.getItem('userToken')!=null){
  this._router.navigate(['/home'])
}
}


loginForm: FormGroup = new FormGroup({
 
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
 
})

login(form:FormGroup){
  console.log('hi',form);
  
  if(form.valid){
    this.isLoading=true
    this._authService.login(form.value).subscribe({
      next:(data)=>{console.log(data);
        this.isLoading=false
        localStorage.setItem('userToken',data.token)
        this._authService.getUserData()
      this._router.navigate(['/home'])
      },
      error:(err)=>{console.log(err.error.message);
        this.apiError=err.error.message
        this.isLoading=false
      }
    })
  }else{
    this.isNotValid=true
  }
}
}
