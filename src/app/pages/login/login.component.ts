import { Component,ChangeDetectorRef } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators ,} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: any;
  errorMsg: any;
  msg: any;
  data: any;
  user:any;
  token: any;
status:any
  errorStatus: any
  mobileError: any
  constructor(private Apiservice:ServiceService,private router: Router,private fb: FormBuilder){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      
    });
    this.status=1;
    this.mobileError="";
  }
  
 
   


  login1(): void {
    localStorage.clear();
    localStorage.removeItem('token'); 
    this.msg="";
    this.errorMsg="";
      if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;    
      this.errorMsg="";
        let data={
              'phone_number'   :this.loginForm.value.username,
              'password':this.loginForm.value.password
        }
      
      this.Apiservice.login(data).subscribe(
          (res:any) => {   
            console.log(res)        
          if(res.success==true){ 
            this.status=1;
            this.errorMsg="";            
            this.msg=res.message;
            this.data=res.data;
            const arrayJson = JSON.stringify(this.data);
            this.token=res.data.token;
            localStorage.setItem('store_id',res.data.id); 
            localStorage.setItem('user',arrayJson)
            localStorage.setItem('token',this.token);  
            var loginToken = localStorage.getItem('token');
            console.log(loginToken)
            this.loginForm.reset;

            localStorage.setItem('logged','true')
           // this.router.navigateByUrl('/home');
          }else{
            this.status=0;
            // this.errorMsg=res.data['phone_number'][0];            
             this.errorMsg="ദയവായി നിങ്ങളുടെ ഫോൺ നമ്പറും പാസ്‌വേഡും പരിശോധിക്കുക.";            
          }
          (error: any) => {             
            // this.errorMsg=error;
            console.log('error',error)
            this.errorMsg="ദയവായി നിങ്ങളുടെ ഫോൺ നമ്പറും പാസ്‌വേഡും പരിശോധിക്കുക.";  
          }
       
        // (error: any) => {
        //   this.status=0;
        //   console.error('Login error:', error);
        //   this.errorMsg = error.error.message || "ദയവായി നിങ്ങളുടെ ഫോൺ നമ്പറും പാസ്‌വേഡും പരിശോധിക്കുക.";
        // }
      });

     

    }     
     else {
            // this.errorMsg="please fill all the fields";
            this.errorMsg="ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക";        }
  
  }
  validatePhoneNumber() {
    this.mobileError="";
    
       const regex = /^[0-9]+$/;
       let d= this.loginForm.value.username;
          if(regex.test(d)){           
            this.errorStatus=true;
            this.mobileError="";
          }else{
            this.mobileError=" ദയവായി നമ്പറുകൾ നൽകുക";
          }
 
}


login(): void {
  // Clear any existing data in local storage and reset messages
  localStorage.clear();
  this.msg = "";
  this.errorMsg = "";

  // Check if the form is valid
  if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const data = {
          phone_number: username,
          password: password
      };
console.log(data)
      this.Apiservice.login(data).subscribe({    
        
        next: (res: any) => {
          console.log(res)
          if (res?.success) {
            this.status = 1;
            this.msg = res.message || 'Login successful';
            this.data = res.data;
            const arrayJson = JSON.stringify(this.data);
            this.token = this.data?.token;
      
            localStorage.setItem('store_id', this.data?.id || '');
            localStorage.setItem('user', arrayJson);
            localStorage.setItem('token', this.token || '');
            localStorage.setItem('logged', 'true');
      
            this.loginForm.reset();
            this.router.navigateByUrl('/home');
          } else {
            this.status = 0;
            this.errorMsg = res.data  ; 
            this.errorMsg = res.data.phone_number;  
            console.log('false',res)
            

          }
        },
        error: (error: any) => {
          console.log(error)
          this.status = 0;
          this.errorMsg = error?.error?.message || 'ദയവായി നിങ്ങളുടെ ഫോൺ നമ്പറും പാസ്‌വേഡും പരിശോധിക്കുക.';
        },
        complete: () => {
          // Optional complete callback, if you want to execute some code when the observable completes.
        }
      });
      
      
  } else {
      // Handle case where form is invalid
      this.errorMsg = "ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക";
  }
}




}

