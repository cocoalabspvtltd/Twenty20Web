import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  selectedGender: any;
  selectedImage: any
  regForm: any;
  errorMsg:any;
  msg:any
  genders: string[] = ['പുരുഷൻ', 'സ്ത്രീ', 'മറ്റ്'];
// Panchayats under Kaipamangalam



  errorStatus:any
  mobileError: any;
  ageError: any
  incomeError: any
  wardError: any
  panchayats:any
  file:any
  confirmError:any
  nameError: any
  constituencylist: any;
  const: any;
  pan: any;
  isChecked:any
  termError: any
  constructor(private Apiservice:ServiceService,private router: Router,private fb: FormBuilder){
    this.regForm = this.fb.group({
      username: ['', Validators.required], 
      age: ['', Validators.required],
      gender: ['', Validators.required],    
      constituency: ['', Validators.required],
      income: ['', Validators.required],
      phone: ['', Validators.required],
      ward: ['', Validators.required],
      panchayath: ['', Validators.required],
      terms: ['', Validators.required],
      password: ['', Validators.required,Validators.minLength(4),],
      image: [null],
      password_confirm:['', Validators.required],
    });
    this.mobileError="";
    this.ageError="";
    this.incomeError="";
    this.wardError="";
    this.confirmError="";
    this.selectedImage="";
    this.constituency();
  }
  constituency(){
    this.Apiservice.constituency().subscribe(
      (res:any) => {   
        if(res.success==true){ 
          //console.log('con',res)
          this.constituencylist=res.data;
          
        }
      })
  }
   validatePhoneNumber() {
    // const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    // let d= regex.test(this.regForm.value.phone);  
    //    if(d){
    //   this.errorStatus=true;
    //   this.mobileError="";
    // }else{

    //     this.mobileError="ദയവായി 10 അക്ക മൊബൈൽ നമ്പർ നൽകുക";
    // }
    console.log('number');
    const regex = /^[0-9]+$/;
    let d= this.regForm.value.phone;
          if(regex.test(d)){
            // const regex1 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            //   if(d){
            //   this.errorStatus=true;
            //   this.mobileError="";
            // }else{
            //     this.mobileError="ദയവായി 10 അക്ക മൊബൈൽ നമ്പർ നൽകുക";
            // }
            this.errorStatus=true;
            this.mobileError="";
          }else{
            this.mobileError=" ദയവായി നമ്പറുകൾ നൽകുക";
            this.errorStatus=false;
          }        
   
  }
  validateage(){
    const regex = /^[0-9]+$/;
    let d= regex.test(this.regForm.value.age);  
       if(d){
      this.errorStatus=true;
      this.ageError="";
    }else{
      this.errorStatus=false;
        this.ageError="നിബന്ധനകളും വ്യവസ്ഥകളും ദയവായി ടിക്ക് ചെയ്യുക";
    }
   
  }
  validatename(){
    const regex = /^[0-9]+$/;
    let d= regex.test(this.regForm.value.username);  
       if(d){
      this.errorStatus=true;
      this.nameError="ദയവായി അക്ഷരങ്ങൾ നൽകുക";
    }else{
      this.nameError="";
      this.errorStatus=false;
    }        
  
  }
  validateIncome(){
    const regex = /^\d+(\.\d{1,2})?$/;
    let d= regex.test(this.regForm.value.income);  
       if(d){
      this.errorStatus=true;
      this.incomeError="";
    }else{
      this.errorStatus=false;
        this.incomeError="വാർഷിക വരുമാനം പരിശോധിക്കുക";
    }
   
  }
  validateward(){
    const regex = /^[0-9]{1,3}$/;
    let d= regex.test(this.regForm.value.ward);  
       if(d){
      this.errorStatus=true;
      this.wardError="";
    }else{
      this.errorStatus=false;
        this.wardError="ദയവായി വാർഡ് നമ്പറുകൾ നൽകുക";
    }
   
  }
  onFirstDropdownChange(event: any) {
    this.panchayats = ''; // Reset panchayats
    const selectedAssembly = event.target.value;

    if (selectedAssembly) {
        for (let i = 0; i < this.constituencylist.length; i++) {
            if (this.constituencylist[i].name === selectedAssembly) {
                this.const = this.constituencylist[i].id;

                if (this.const) {
                    this.Apiservice.panchayath(this.const).subscribe(
                        (res: any) => {
                            this.panchayats = res.data; // Assign response data to panchayats
                        },
                        (error) => {
                            console.error('Error fetching panchayats:', error);
                        }
                    );
                }

                break; // Exit the loop once the correct constituency is found
            }
        }

        // Set errorStatus based on the value of `this.const`
        if (this.const) {
            this.errorStatus = false; // Reset error status if a valid constituency is found
        } else {
            this.errorStatus = true; // Set error status if no constituency was found
        }
    } else {
        this.panchayats = []; // Clear panchayats if no assembly is selected
        this.errorStatus = true; // Set error status for invalid input
    }
}

  onsecondDropdownChange(event: any) { 
    if(event){
      
      console.log(event.target.value)
      this.pan = event.target.value;
      // for(let i=0;i<this.constituencylist.length;i++){ 
      //   if(this.panchayats[i].name==pan) {      
      //      //console.log('const',this.constituencylist[i].id);
      //      this.pan=this.panchayats[i].id;
      //     // console.log('pan',this.pan)           
      //      }
      // }   
      // if( this.pan!="")  {
      //   this.errorStatus=true;
      // }else{
      //   this.errorStatus=false;
      // }
    }
    else {
      this.panchayats = [];
    }
  }
  onFileSelect(event: Event): void {
    // const input = event.target as HTMLInputElement;

    // if (input.files && input.files[0]) {
    //  this.file = input.files[0];
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     this.selectedImage = reader.result;
    //   };

    //   reader.readAsDataURL(this.file);
    // }

 this.file = (event.target as HTMLInputElement).files?.[0];
    if (this.file ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = e.target?.result;
      };
      reader.readAsDataURL(this.file );
      this.regForm.patchValue({ image: this.file  });
    }
  }
  captureImage(): void {
    const cameraInput = document.querySelector('input[capture="camera"]') as HTMLInputElement;
    cameraInput?.click();
  }

  confirm(){
    if(this.regForm.value.password_confirm.length>0){
     // console.log('confirm')
      if(this.regForm.value.password_confirm==this.regForm.value.password){
        this.errorStatus=true;
        this.confirmError="";
      }else{
        this.confirmError="Invalid confirm password";
        this.errorStatus=false;
    }
    }else{
     // console.log('confirm1')
    }
    
  }

  onCheckboxChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.isChecked = inputElement.checked ? 1 : 0;
    //console.log('Checkbox value:', this.isChecked);
    if(this.isChecked){
      this.errorStatus=true;
      this.termError="";
    }
    else{
      this.termError="";
    }

  }
  register(){
   
    this.errorMsg="";
    this.msg="";
    if(this.regForm.value.username==""||this.regForm.value.age==""||this.regForm.value.phone=="" ||this.regForm.value.income==""||
     this.regForm.value.ward==""||
      this.regForm.value.password==""
   ){
     this.errorMsg="ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക";
   }else{
    if(this.pan==""){
      this.errorMsg="ദയവായി പഞ്ചായത്ത്, മുനിസിപ്പാലിറ്റി, കോര്‍പ്പറേഷന്‍ തിരഞ്ഞെടുക്കുക";
    }
     if(this.errorStatus==true){
       let data={
         name:this.regForm.value.username,
         gender: this.regForm.value.gender,
         phone_number:this.regForm.value.phone,
         annual_income:this.regForm.value.income,
         profile_photo:this.selectedImage,
         age:this.regForm.value.age,
         constituency:this.const,
         'panchayath/muncipality/corporation':this.pan,
         ward:this.regForm.value.ward,
         terms_and_conditions:this.regForm.value.terms,
         password:this.regForm.value.password,   
         password_confirmation:  this.regForm.value.password_confirm  
       }
       console.log('data',data)
       const formData = new FormData();
 
       formData.append('name', this.regForm.value.username);
       formData.append('gender', this.regForm.value.gender);
       formData.append('phone_number', this.regForm.value.phone);
       formData.append('annual_income', this.regForm.value.income);
       formData.append('age', this.regForm.value.age);
       formData.append('constituency', this.const);
       formData.append('panchayath/muncipality/corporation', this.pan);
       formData.append('ward', this.regForm.value.ward);
       formData.append('terms_and_conditions', this.isChecked);
       formData.append('password', this.regForm.value.password);
       formData.append('password_confirmation', this.regForm.value.password_confirm);
   
       // Append the profile photo file if available
       if (this.selectedImage) {
         formData.append('profile_photo',  this.file,this.file.name);
       }
 
 
      // console.log('data',data)
       this.Apiservice.register(formData).subscribe(
         (res:any) => {   
           console.log(res)       
         if(res.success==true){           
           this.msg=res.message;
           this.regForm.reset();
           this.selectedImage="";
           setTimeout(() => {
            this.router.navigateByUrl('/login');
          }, 3000);
           
         }else{
           this.errorMsg=res.data['phone_number'][0];
           //this.errorMsg=""           
         }
         (error: any) => {             
           //  this.errorMsg=error;
            this.errorMsg="ദയവായി ഫോം ശരിയായി പൂരിപ്പിച്ചിട്ടുണ്ടോ എന്ന് പരിശോധിക്കുക";      
         }
       })
     }
    }
         
    }
}
