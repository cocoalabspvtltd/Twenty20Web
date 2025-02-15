import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  genders: string[] = ['പുരുഷൻ', 'സ്ത്രീ', 'മറ്റ്'];
  p: number = 1;
  // Panchayats under Kaipamangalam
  kaipamangalamPanchayats: string[] = [
    "കൈപ്പമംഗലം ",
    "ശ്രീനാരായണപുരം",
    "മതിലകം",
    "എടവിലങ്ങ് ",
    " എറിയാട്",
    " എടത്തിരുത്തി ",
  ];
  videoSrc: string = '';
  // Panchayats under Kodungallur
  kodungallurPanchayats: string[] = [
    "മാള ",
    "പൊയ്യ",
    "കുഴൂർ ",
    "അന്നമനട",
    "പുത്തൻചിറ",
    " വെള്ളാങ്ങല്ലൂർ ",
    "കൊടുങ്ങല്ലൂർ (മുനിസിപ്പാലിറ്റി)"
  ];
  
  join: boolean = true;
  errorMsg: any;
  msg: any;
  logged: any
  token: string | null;
  user: any
  userDetails: any;
  carddetails: any;
  image: any;
  member:any 
  check: any;
  memberForm: any;
  memberForm1: any;
  errorStatus:any;
  panchayath: any;
  selectedImage:any
  inputValue: any
  file:any
  memberdetails: any;
  memberuserdetails: any;
  date: any;
  mobileError: any
  promo: any
  panchayats:any
  edit: any
  whatsError: any
  ageError: any;
  nameError:any;
  emailError:any;
  incomeError: any
  jobError:any;
  balance: any;
  constituencylist: any;
  const: any;
  pan: any;
  transactionData: any;
  userRole:any
  panchayathform: any;
  wardform: any;
  reason: any
  formvalue:any;
  reportvalue: any;
  reviewData: any;
  panchayath_report: any
  ward_report: any
  reviewData1: any;
  view: any;
  wards: any;
  committee: any;
  month: any;
  visited: any;
  activity: any;
  meeting: any;
  report: any;
  view1: any;
  ward: any;
  wardname: any;
  constituencyname: any;
  mandalamform: any;
  madalam_report: any;
  reviewData3: any;
  reviewData4: any;
  reviewData5: any;
  no_ward: any;
  no_panchayath: any;
  ward_committees_added_in_corporation: any;
  ward_committees_added_in_municipality: any;
  ward_committees_added_in_panchayath: any;
  ward_committees_added_in_ward: any;
  ward_panchayath_mandalam_reporting: any;
  no_of_municipality: any;
  no_of_houses_visited: any;
  no_of_corporation: any;
  no_of_coordinators_in_ward: any;
  no_of_coordinators_in_panchayath: any;
  no_of_coordinators_in_municipality: any;
  no_of_coordinators_in_corporation: any;
  no_of_committees_ward: any;
  no_of_committees_panchayath: any;
  no_of_committees_municipality: any;
  no_of_committees_corporation: any;
  has_mandalam_office: any;
  is_meeting_conducted_in_constituency: any;
  is_meeting_conducted_in_corporation: any;
  is_meeting_conducted_in_muncipality: any;
  is_meeting_conducted_in_panchayath: any;
  is_meeting_conducted_in_ward: any;
  meeting_not_conducted_reason: any;
  total_ward_count: any;
  total_panchayath_count: any;
  total_municipality_count: any;
  total_count_of_wardCommittee_in_ward: any;
  total_count_of_wardCommittee_in_panchayath: any;
  total_count_of_wardCommittee_in_municipality: any;
  total_count_of_wardCommittee_in_corporation: any;
  total_corporation_count: any;
  no_of_house_visited: any;
  maxDate: any;
  page: number        = 1;
  count: number       = 0;
  tableSize: number   = 15;
  tableSizes: any     = [3, 6, 9, 12];
  itemsPerPage = 10; 
  length: any;
  numMembers: number = 0;
  membersArray:any
  surveyform: any;
  rowCount: any;
  is_executive: any;
  memberForm2: any;
  userDatas: any;
  privilage: any;
  numberOfRows: number = 1;
  rows: any[] = [];
  items: string[] = [];  // Array to hold list items
  newItem: string = '';  // Model for new item input
  imrovements: any;
  improvement: any;
  userInput: string = '';
  users: { age: number; name: string; vote: boolean }[] = [];
  columnNames = ['Age', 'Name', 'Vote'];
  const_status: any;
  pan_status: any;
  const1: any;
  pan1: any;
  survey_lists: any;
  errorStatus1: any
  surveyview: any;
  age1: any;
  name1: any;
  concerns1: any;
  constituency1: any;
  desired1: any;
  education_expenses1: any;
  family_members_count1: any;
  family_members_details1: any;
  food_expenses1: any;
  house_number1: any;
  key1: any;
  medicine1: any;
  mobile1: any;
  occupation1: any;
  panchayath1: any;
  political1: any;
  ward_number1: any;
  your_designation1: any;
  your_social1: any;
  filterForm:any
  filteredData: any;
  wards1: any;
  selectedWard: any;
  filteredData1: any;
  filterForm1:any
  id1: any;
  filterForm2: any
  filteredData2: any;
  filteredData3: any;
  filterForm3: any
  filteredData4: any;
  isLoading:any
  isFormVisible = false;  // Controls the form visibility (Initially, form is visible)
  filteredData11: any;
  checked: any
  surveyfilter: any
  isVideoFinished: boolean = false;
  myVideo: any;


  // Method to toggle the form visibility
  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
  }
  @ViewChild('myVideo', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
      constructor(private Apiservice:ServiceService,private router: Router,private fb: FormBuilder){        
        this.errorStatus=true;
        this.pan_status=0;
        this.const_status=0;
        this.filterForm = this.fb.group({
          panchayath: [''],
          ward: [''],
          startDate: [''],
          endDate: ['']
        });
        this.filterForm1= this.fb.group({          
          startDate: [''],
          endDate: ['']
        });
        this.filterForm2 = this.fb.group({
          panchayath: [''],         
          startDate: [''],
          endDate: ['']
        });
       
        this.filterForm3 = this.fb.group({
          ward: [''],
          panchayath: [''],         
          startDate: [''],
          endDate: ['']
        });
       
        this.surveyfilter= this.fb.group({          
          startDate: [''],
          endDate: ['']
        });
       
      // this.member=localStorage.removeItem('member');
      // console.log('member',this.member)
        this.memberForm = this.fb.group({
          username: ['', Validators.required], 
          age: ['', Validators.required],
          gender: ['', Validators.required],    
          constituency: ['', Validators.required],
          income: ['', Validators.required],
          phone: ['', Validators.required],
          ward: ['', Validators.required],
          panchayath: ['', Validators.required],
          terms: ['', Validators.required],
          password: ['', Validators.required],
          password_confirm:['', Validators.required],
          education: ['', Validators.required,Validators.minLength(1),],
          address: ['', Validators.required,Validators.minLength(3),],
          email: ['', Validators.required,Validators.minLength(3),],
          whatsapp: ['', Validators.required],
          day_joining: ['', Validators.required],
          year_of_experience: ['', Validators.required],
          join: [''],
          job:['', Validators.required]
        });
        this.memberForm1 = this.fb.group({
          username: ['', Validators.required], 
          age: ['', Validators.required],
          gender: ['', Validators.required],    
          constituency: ['', Validators.required],
          income: ['', Validators.required],
          phone: ['', Validators.required],
          ward: ['', Validators.required],
          panchayath: ['', Validators.required],
          terms: ['', Validators.required],
          password: ['', Validators.required],
          password_confirm:['', Validators.required],
          education: ['', [Validators.required,Validators.minLength(1)]],
          address: ['', [Validators.required,Validators.minLength(3)]],
          email: ['', [Validators.required,Validators.minLength(3)]],
          whatsapp: ['', Validators.required],
          day_joining: ['', Validators.required],
          year_of_experience: ['', Validators.required],
          is_willing_to_join: ['', Validators.required],
          job:['', Validators.required]
        });
      
      
        this.panchayathform = this.fb.group({
          panchayathName: ['', Validators.required], 
          no_wards: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], 
          date: ['', Validators.required], 
          no_wards_committees_appointed: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], 
          no_houses_visited: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], 
          activitiesConducted: this.fb.array([this.createActivityControl()]), 
          meeting_conducted: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], 
          reason: ['', Validators.required],
          ward_wise_reporting: ['', Validators.required],
          ward_committee_added_this_month: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], 
        });
        this.wardform = this.fb.group({
          wardName: [{ value: '', disabled: true }],
          panchayathName: ['',Validators.required],
          date: ['', Validators.required],
          no_houses_visited: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          meeting_conducted: ['', Validators.required],
          reason: [''],
          ward_wise_reporting: ['', [Validators.required]],
          activitiesConducted: this.fb.array([this.createActivityControl()])
        });

        this.mandalamform = this.fb.group({
          mandalamName                 : [{ value: '', disabled: true }],
          panchayathName               : ['',Validators.required],
          date                         : ['', Validators.required],

          no_of_panchayath             : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          no_of_municipality           : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          no_of_corporation            : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          no_of_ward                   : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],

          no_of_committees_panchayath  : ['', [Validators.required, Validators.pattern('^[0-9]+$')]], 
          no_of_committees_municipality: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          no_of_committees_corporation : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          no_of_committees_ward        : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],

          no_of_coordinators_in_panchayath        : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          no_of_coordinators_in_municipality      : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          no_of_coordinators_in_corporation       : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          no_of_coordinators_in_ward              : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],

          ward_committees_added_in_panchayath     : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          ward_committees_added_in_municipality   : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          ward_committees_added_in_corporation    : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          ward_committees_added_in_ward           : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],

          no_of_houses_visited                    : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          has_mandalam_office                     : ['', Validators.required],
          activitiesConducted: this.fb.array([this.createActivityControl()]),

          is_meeting_conducted_in_panchayath       : ['', Validators.required], 
          is_meeting_conducted_in_constituency     : ['', Validators.required], 
          is_meeting_conducted_in_municipality     : ['', Validators.required],
          is_meeting_conducted_in_corporation      : ['', Validators.required],
          is_meeting_conducted_in_ward             : ['', Validators.required],

          meeting_not_conducted_reason             : ['', Validators.required],
          ward_panchayath_mandalam_reporting       : ['', [Validators.required]],



         
          
        });

        this.surveyform = this.fb.group({          
          name                         : ['', [Validators.required,  Validators.pattern('^[A-Za-z\\s\\-\']+$')]],
          age                          : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          occupation                   : ['', Validators.required],
          mobile_number                : ['',  [Validators.required, Validators.pattern('^[0-9]{10,14}')]],
          house_number                 : ['', Validators.required,],
          ward_number                  : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          panchayath                   : ['', Validators.required],
          constituency                 : ['', Validators.required],
          family_members               : [1, Validators.required], // Initialize with default value
          family                       : this.fb.array([this.createFamilyMember()]) , // Start with one empty row       
          family_details               : ['', Validators.required],  
          concerns                     : this.fb.array([this.createConcern()]),
          desired_improvements         : this.fb.array([this.createImprovement()]),
          key_state_issues_to_change   : this.fb.array([this.createIssue()]),
          your_social_entitlements     : this.fb.array([this.createEntitlement()]),
          food_expenses                : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          medicine_expenses            : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          education_expenses           : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          political_membership         : ['', Validators.required],
          your_designation             : ['', Validators.required],
        });
        // this.surveyform.get('family_members')?.valueChanges.subscribe((value:any) => {
        //   this.updateRows(value);
        // });


              this.check=false;
              this.token=localStorage.getItem('token');
              this.user=localStorage.getItem('user');
              this.userDetails = JSON.parse(this.user);
              this.wardname=this.userDetails['ward_name']
              this.panchayath=this.userDetails['panchayath/muncipality/corporation']
              this.constituencyname=this.userDetails.constituency;
             //console.log(this.userDetails)          
             
              if(this.userDetails.profile_photo){
                this.image='https://cocoalabs.in/Twenty20/public/images/user/profile_photo/'+this.userDetails.profile_photo;
              }else{
                this.image=null
              }
            
              this.cardDetails();
              if (this.userDetails.constituency === 'കൊടുങ്ങല്ലൂർ') {
                this.videoSrc = 'https://cocoalabs.in/Twenty20/public/video/KODUNGALLOOR.mp4';
              }else if(this.userDetails.constituency === 'കൈപ്പമംഗലം'){
                this.videoSrc = 'https://cocoalabs.in/Twenty20/public/video/KAIPAMANGALAM.mp4';
              }
               else {
                // Default or other constituency videos
                this.videoSrc = 'https://cocoalabs.in/Twenty20/public/video/CHALAKKUDI.mp4';
               }   
        }
        ngOnInit(): void {
          this.setVideoSource();
          this.isLoading=false;
          this.filteredData11 =""
          this.maxDate = new Date().toISOString().split('T')[0];
          this.errorStatus1==0
          // this.userRole=this.userDetails.role;
          this.refreshOnce();
          this.filterForm.reset();
          this.filterForm1.reset();
          this.filterForm2.reset();
          // if(this.member==0||this.member==null){
          //   if(this.userDetails.is_executive_member==0){
          //    localStorage.setItem('member','0');
          //     this.check=0;           
          //   }else{
          //     if(this.edit==0){
          //       this.check=2;
          //       localStorage.setItem('member','1'); 
          //       this.memberDetails();  
              
          //     }  else{          
          //       this.check=3;
          //       localStorage.setItem('member','1'); 
          //       this.memberDetails();
          //     }       
          //     }
              
          // }
          // this.member=localStorage.getItem('member');
          // console.log('member',this.member);
          // console.log('check',this.check)
          this.userRoles();
          this.userAccount();
          this.constituency()
          this.transacrion();
          this.reports();      
          this.updateRows();
          this.survey_list();
        } 
        userRoles(){
          this.Apiservice.user_role().subscribe(
            (res:any) => {   
             // console.log('user-role',res) 
              this.is_executive=res.data.is_executive_member;
              this.userRole=res.data.role;
              this.userDatas=res.data;
              this.privilage=this.userDatas.privilege;              
            }
          )     
        }
        reports(){
          this.isLoading=true;
          setTimeout(() => {    
          if(this.userRole=='ward_member'){
            this.report_review1();
            this.panchayath_report=0;
            this.ward_report=1;
            this.checked=0;
          }else if(this.userRole=='panchayath_president'){
            this.report_review();
            this.report_review1();
            this.panchayath_report=1
            this.ward_report=0;
            this.checked=1;
            this.details2();
          }else if(this.userRole=='constituency_president'){
            this.report_review();
            this.report_review1();
            this.report_review2();
            this.madalam_report=1;
            this.details1();
          }else{
          //console.log('user')
          }
          this.isLoading = false;
        }, 3000); // 3000 milliseconds = 3 seconds
        }
        refreshOnce(): void {
          const hasRefreshed = localStorage.getItem('hasRefreshed');

          if (!hasRefreshed) {
            localStorage.setItem('hasRefreshed', 'true');
            window.location.reload();
          } else {
            localStorage.removeItem('hasRefreshed');
          }
        }
        constituency(){
          this.Apiservice.constituency().subscribe(
            (res:any) => {   
              if(res.success==true){ 
               // console.log('con',res)
                this.constituencylist=res.data;
                
              }
            })
        }
        cardDetails(){
          let data={user_id:this.userDetails.id}
          this.Apiservice.card(data).subscribe(
            (res:any) => {   
              if(res.success==true){ 
                //console.log(res) 
                this.carddetails=res.data[0];
                this.msg=res.message;   
                
              }else{
                this.errorMsg=res.data;           
              }
              (error: any) => {             
                this.errorMsg=error;
              }
            })
        }
        memberDetails(){
         // console.log('user.id',this.userDetails.id)
          this.Apiservice.editmember(this.userDetails.id).subscribe(
            (res:any) => {     
             // console.log('member',res)
              if(res.success==true){       
                this.memberdetails=res.data;
                this.date=this.memberdetails.day_joining_Twenty20;              
                this.memberuserdetails=res.data.user_data;
              //  console.log('edit',this.memberuserdetails) 
                this.panchayath=this.memberuserdetails['panchayath/muncipality/corporation'];
                this.join=this.memberdetails.is_willing_to_join;
               // console.log('this.join',this.memberdetails,this.join);                
              }
            })
        }
        logout(){
        // console.log(this.logged)
          localStorage.setItem('logged','false');
          localStorage.setItem('member','0');
          localStorage.clear();  
          this.router.navigateByUrl('/login'); 
          this.Apiservice.logout().subscribe(
            (res:any) => {   
              if(res.success==true){  
              //  console.log('logout',res)  
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                localStorage.removeItem('logged');
                this.router.navigateByUrl('/login'); 
                localStorage.clear();     
              this.msg=res.message;        
            
            
            }else{
              this.errorMsg=res.data;           
            }
            (error: any) => {             
              this.errorMsg=error;
            }
          })
        }
        membership(){
        this.check=1;
        }
        membership1(){
          this.check=3;
          this.memberDetails();  
        
        }
        register(){        
        this.errorMsg="";
        this.msg="";
        if(this.memberForm.value.address==""||
        this.memberForm.value.education==""|| 
        this.memberForm.value.day_joining==""||
        this.memberForm.value.year_of_experience==""
            ||this.memberForm.value.is_willing_to_join==""  
      ){
        this.errorMsg="ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക";
      }else{ 
          this.msg=""; 
          this.errorMsg="" ;
          const formData = new FormData();    
          formData.append('education', this.memberForm.value.education);
          formData.append('address', this.memberForm.value.address);
          formData.append('email', this.memberForm.value.email);
          formData.append('whatsappNumber', this.memberForm.value.whatsapp);
          formData.append('day_joining_Twenty20', this.memberForm.value.day_joining);
          formData.append('year_of_experience', this.memberForm.value.year_of_experience);
          formData.append('is_willing_to_join', this.memberForm.value.is_willing_to_join);
          if(this.memberForm1.value.job){
            formData.append('job', this.memberForm1.value.job);
          }
          else{
            formData.append('job', 'ഇല്ല');
          }
          
    
         // console.log('is_willing_to_join', this.memberForm.value.is_willing_to_join)
          this.Apiservice.member(formData).subscribe(
            (res:any) => {   
            //  console.log(res)       
            if(res.success==true){  
              this.member=localStorage.setItem('member','1');  
              setTimeout(() => {
                this.msg=res.message;
              }, 3000);       
             
             // this.memberForm.reset();
              localStorage.removeItem('member');
              localStorage.setItem('member','1');
              this.member=localStorage.getItem('member');
             // console.log(this.member)
              // this.edit=1;
               //this.check=3;
              //this.router.navigateByUrl('/home');
             this.ngOnInit()
          //console.log('new val',this.member)
              
              
            }else{
              this.errorMsg=res.data;           
            }
            (error: any) => {             
                this.errorMsg=error;
            }
          })
        }
        }
        update(){
          this.msg=""; 
          this.errorMsg="" ;
          console.log('data',this.memberForm1.value,this.pan,this.const)
          const formData = new FormData();
          
          if(this.errorStatus==true){
            formData.append('name', this.memberForm1.value.username);
            formData.append('gender', this.memberForm1.value.gender);
            formData.append('phone_number', this.memberForm1.value.phone);
            formData.append('annual_income', this.memberForm1.value.income);
            formData.append('age', this.memberForm1.value.age);
            if(this.const_status==1){
              formData.append('constituency', this.const);
            }else{
              formData.append('constituency', this.memberuserdetails.constituencyId);
            }
            if(this.pan_status==1){
              formData.append('panchayath/muncipality/corporation',this.pan);
            }else{
              formData.append('panchayath/muncipality/corporation', this.memberuserdetails['panchayath/muncipality/corporationId']);
            }
            
            formData.append('ward', this.memberForm1.value.ward);
            formData.append('education', this.memberForm1.value.education);
            formData.append('address', this.memberForm1.value.address);
            if(this.memberForm1.value.email!=null){
              formData.append('email', this.memberForm1.value.email);
            }
            if(this.memberForm1.value.email!=null){
              formData.append('whatsappNumber', this.memberForm1.value.whatsapp);
            }
          
            formData.append('day_joining_Twenty20', this.memberForm1.value.day_joining);
            formData.append('year_of_experience', this.memberForm1.value.year_of_experience);
            formData.append('is_willing_to_join', this.memberForm1.value.is_willing_to_join);
            if(this.memberForm1.value.job){
              formData.append('job', this.memberForm1.value.job);
            }
            else{
              formData.append('job', 'ഇല്ല');
            }
            
        
            // Append the profile photo file if available
            if (this.selectedImage) {
              formData.append('profile_photo',  this.file,this.file.name);
            }
  
            this.Apiservice.updatemember(formData,this.userDetails.id).subscribe(
              (res:any) => {   
                console.log('update',res)       
              if(res.success==true){  
                              localStorage.setItem('member','1');         
                this.msg=res.message;
                this.memberForm.reset();
                //this.router.navigateByUrl('/home');            
                setTimeout(() => {
                  this.msg = null;
                }, 2000);
          
                
              }else{
                this.errorMsg=res.message;           
              }
              (error: any) => {             
                this.errorMsg=error;
              }
            })
          }else{
            this.errorMsg="ദയവായി ഫോം ശരിയായി പൂരിപ്പിച്ചിട്ടുണ്ടോ എന്ന് പരിശോധിക്കുക"
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
            this.memberForm1.patchValue({ image: this.file  });
          }
        }
        captureImage(): void {
          const cameraInput = document.querySelector('input[capture="camera"]') as HTMLInputElement;
          cameraInput?.click();
        }
        validatewhatsNumber() {
        //  console.log('number');
          const regex = /^[0-9]+$/;
          let d= this.memberForm1.value.whatsapp;
        if(regex.test(d)){
          // const regex1 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;      
          // if(regex1.test(d)){      
          //   this.mobileError="";
          // }else{
          
          //   this.whatsError=" ദയവായി whatsapp Number  നൽകുക";
          // }
          this.whatsError=" ";
        }else{
          this.whatsError=" ദയവായി നമ്പറുകൾ നൽകുക";
          this.errorStatus=false;
        }

        
      
        }
        validatePhoneNumber() {
        //  console.log('number');
          const regex = /^[0-9]+$/;
          let d= this.memberForm1.value.phone;
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
          const regex = /^[0-9]$/;
          let d= regex.test(this.memberForm1.value.age);  
             if(d){
            this.errorStatus=true;
            this.ageError="";
          }else{
              this.ageError="ദയവായി നമ്പറുകൾ നൽകുക";
              this.errorStatus=false;
          }
         
        }
        validatename(){         
          const regex = /^[0-9]+$/;
          let d= regex.test(this.memberForm1.value.username);  
             if(d){
            
            this.errorStatus=false;
            this.nameError="ദയവായി അക്ഷരങ്ങൾ നൽകുക";
          }else{
            this.nameError="";
            this.errorStatus=true; 
          }        
          
        }
        validatemail(){
          const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          let d= regex.test(this.memberForm1.value.email);  
             if(d){
              this.emailError="";
              this.errorStatus=true;
          }else{ 
            this.errorStatus=true;                
            this.emailError="ദയവായി ഇമെയിൽ നൽകുക";
          }  
        }
        validatejob(){
          const regex = /^[0-9]+$/;
          let d= regex.test(this.memberForm1.value.job);  
             if(d){
              this.errorStatus=true;
              this.jobError="ദയവായി അക്ഷരങ്ങൾ നൽകുക";
          }else{
            this.errorStatus=true;
            this.jobError="";
             
          }  
        }
        validateincome(){
          this.incomeError="";
          const regex = /^[0-9]+$/;
          let d= regex.test(this.memberForm1.value.income);  
             if(d){
            this.errorStatus=true;
            this.incomeError="";
          }else{
            this.errorStatus=true;
              this.incomeError="ദയവായി അക്കങ്ങൾ  നൽകുക";
          }  
        }
        userAccount(){
          
          this.Apiservice.userAccountDetails().subscribe(
            (res:any) => {              
              if(res.success==true){       
                
                //console.log('user',res); 
                this.balance=res.data[0].balance;               
              }
            })
        }
        transacrion(){
          this.Apiservice.transaction().subscribe(
            (res:any) => {              
              if(res.success==true){       
                
                //console.log('transaction',res); 
                this.transactionData=res.data;
                            
              }
            })
          
        }
        onSubmit() {
         // console.log('Submitted value:', this.inputValue);
          let data={promoCode:this.inputValue}
          // Add further logic here, such as sending data to a service or updating state
          this.Apiservice.check(data).subscribe(
            (res:any) => {   
             // console.log(res)       
            if(res.success==true){  
                   // console.log('new val',this.member);
                    this.ngOnInit();
            }else{
              // this.errorMsg=res.data;  
              this.promo="Promocode പരിശോധിക്കുക";         
            }
            (error: any) => {             
              this.errorMsg=error;
            }
          })
        }
        onFirstDropdownChange(event: any) {
          this.panchayats = '';
          this.const='';
          this.const1='';
          this.const_status=1
           // console.log('con-form',event.target.value)
          const selectedAssembly = event.target.value;
          
          if(selectedAssembly){  
            this.const='';                 
            for(let i=0;i<this.constituencylist.length;i++){ 
              if(this.constituencylist[i].id===selectedAssembly)  
                {}     
               // console.log('const',this.constituencylist[i].id);
                this.const=this.constituencylist[i].id ;
                this.const1=this.constituencylist[i].name;
               // console.log('const',selectedAssembly);
                if(this.const){                  
                  this.Apiservice.panchayath(selectedAssembly).subscribe(
                    (res:any) => {   
                    //  console.log('pan',res)       
                      this.panchayats =res.data;
                  })
                }break;
            }
          
          }
          else {
            this.panchayats = [];
          }
        }
        onFirstDropdownChange1(event: any) {
          this.panchayats = '';
          this.const='';
          this.const1='';
          this.const_status=1
            //console.log('con-form',event.target.value)
          const selectedAssembly = event.target.value;
          
          if(selectedAssembly){  
            this.const='';                 
            for(let i=0;i<this.constituencylist.length;i++){ 
              if(this.constituencylist[i].name===selectedAssembly)  
                {     
               // console.log('const',this.constituencylist[i].id);
                this.const=this.constituencylist[i].id ;
                this.const1=this.constituencylist[i].name;
               // console.log('const',selectedAssembly);
                if(this.const){                  
                  this.Apiservice.panchayath(this.const).subscribe(
                    (res:any) => {   
                    //  console.log('pan',res)       
                      this.panchayats =res.data;
                  })
                }break;
            
          
          }
        }
      }
          else {
            this.panchayats = [];
          }
        } 
        onsecondDropdownChange(event: any) { 
          this.pan_status=1;
          if(event){
            this.pan="";
           // console.log('id',event.target.value);
            this.pan=event.target.value;
            //const pan = event.target.value;
            for(let i=0;i<this.panchayats.length;i++){ 
              if(this.panchayats[i].id==this.pan) {      
              //console.log('const',this.constituencylist[i].id);
                this.pan1=this.panchayats[i].name;
               //  console.log('pan',this.pan1)           
                }
            }     
          }
          else {
            this.panchayats = [];
          }
        }
        get activitiesArray1(): FormArray {
          return this.panchayathform.get('activitiesConducted') as FormArray;
        }
        createActivityControl1(): FormGroup {
          return this.fb.group({
            activity: [" "]
          });
        }
        addTextArea1() {
          this.activitiesArray1.push(this.createActivityControl1());
        }

        panchayathReport(){
          if(this.panchayathform.value.date==""||
             this.panchayathform.value.no_wards=="" ||
             this.panchayathform.value.no_wards_committees_appointed==""||
             this.panchayathform.value.ward_committee_added_this_month==""||
            //  this.panchayathform.value.no_houses_visited==""||
             this.panchayathform.value.meeting_conducted==""||
             this.panchayathform.value.ward_wise_reporting==""
          ){
            this.errorMsg="ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക";
          }else{
            this.errorMsg="";
            const activities_conducted = this.activitiesArray1.controls.map(control => control.get('activity')?.value || " ");
           // console.log('activities_conducted',activities_conducted)
            let data={
              user_id                          : this.userDetails.id ,
              constituency_id                  : this.userDetails.constituencyId,
              panchayath_id                    : this.userDetails.panchayathId,
              panchayath_name                  :this.panchayath,
              date:this.panchayathform.value.date,
              no_wards:this.panchayathform.value.no_wards,
              no_wards_committees_appointed:this.panchayathform.value.no_wards_committees_appointed,
              ward_committee_added_this_month:this.panchayathform.value.ward_committee_added_this_month,
              no_houses_visited:this.panchayathform.value.no_houses_visited,
              // activities_conducted:this.panchayathform.value.activities_conducted,
              activities_conducted: JSON.stringify(activities_conducted),
              meeting_conducted:this.panchayathform.value.meeting_conducted,
              reason:this.panchayathform.value.reason,
              ward_wise_reporting:this.panchayathform.value.ward_wise_reporting
            
            }
           // console.log('data',data)
            this.Apiservice.panchayath_report(data).subscribe(
              (res:any) => {              
                if(res.success==true){       
                  
                 // console.log('panchayath report',res); 
                  if(res.success==true){                    
                    this.msg=res.message;
                    this.panchayathform.reset();
                    setTimeout(() => {
                      this.ngOnInit();
                    }, 3000);
                  } else{
                    this.errorMsg=res.data;  
                    this.errorMsg='ദയവായി പരിശോധിക്കുക';         
                }
                (error: any) => {             
                    this.errorMsg=error;
                    this.errorMsg='ദയവായി പരിശോധിക്കുക';
                }      
              }
              })
            
          }
       
      
        
        }
        get activitiesArray(): FormArray {
          return this.wardform.get('activitiesConducted') as FormArray;
        }
        createActivityControl(): FormGroup {
          return this.fb.group({
            activity: [" "]
          });
        }
        addTextArea() {
          this.activitiesArray.push(this.createActivityControl());
        }

        get activitiesArray2(): FormArray {
          return this.mandalamform.get('activitiesConducted') as FormArray;
        }
        createActivityControl2(): FormGroup {
          return this.fb.group({
            activity: [" "]
          });
        }
        addTextArea2() {
          this.activitiesArray2.push(this.createActivityControl2());          
        }
        wardReport() {
          if (this.wardform.valid) {
            this.errorMsg="";
            // const activities_conducted = this.activitiesArray.controls.map(control => control.get('activity')?.value || '');
            const activities_conducted = this.activitiesArray.controls.map(control => control.get('activity')?.value || " ");
            if(this.wardform.value.meeting_conducted!='ഉണ്ട്'){
            this.reason=" ";
            }else{
              this.reason=this.wardform.value.reason;
            }
            const data = {
              user_id                          : this.userDetails.id ,
              constituency_id                  : this.userDetails.constituencyId,
              ward__no: this.userDetails.ward,
              ward_name: this.wardname,
              panchayath_id: this.userDetails.panchayathId,
              panchayath_name: this.panchayath,
              date: this.wardform.value.date,
              no_house_visited: this.wardform.value.no_houses_visited,
              activities_conducted: JSON.stringify(activities_conducted),
              meeting_conducted: this.wardform.value.meeting_conducted,        
              reason: this.reason,
              ward_wise_reporting: this.wardform.value.ward_wise_reporting
            };
            console.log(data)
            this.Apiservice.ward_report(data).subscribe(
              (res:any) => {              
                if(res.success==true){       
                  
                  console.log('ward report',res); 
                  if(res.success==true){                    
                    this.msg=res.message;
                    this.wardform.reset();
                    setTimeout(() => {
                      this.ngOnInit();
                    }, 3000);
                  } else{
                    this.errorMsg=res.data;           
                }
                (error: any) => {             
                    this.errorMsg=error;
                }      
              }
              })
          } else {
            this.errorMsg="ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക"
          }
        }      
        report_review() {  
          this.filterForm.reset(); 
          this.isLoading=true;    
          let id = this.userDetails.panchayathId;

          this.Apiservice.panchayathreview(id).subscribe(
            (res: any) => {              
              if (res.success === true) {       
               // console.log('review', res); 
               setTimeout(() => { 
                this.reviewData = res.data;
                this.filteredData = this.reviewData;
                this.length=this.reviewData.length;
                this.isLoading = false;
              }, 3000); // 3000 milliseconds = 3 seconds
                this.reviewData.sort((a:any, b:any) => {
                  return new Date(b.date).getTime() - new Date(a.date).getTime();
                 
                });
              }
            }
          );
          
        }
        report_review1() {  
          this.filterForm3.reset();     
          let data = this.userDetails.panchayathId
          setTimeout(() => {   
          this.Apiservice.panchayath_ward(data).subscribe(
            (res: any) => {   
              //console.log('reviews', res);           
              if (res.success === true) {      
                this.reviewData1 = res.data;
                this.filteredData11 = this.reviewData1;
                this.length=this.reviewData.length;
               // console.log('reviews ward', this.reviewData1); 
                typeof(this.reviewData1)                   
                this.reviewData1.sort((a:any, b:any) => {
                  return new Date(b.date).getTime() - new Date(a.date).getTime();
                });
              

              }
            }
          );
          this.isLoading = false;
        }, 3000); // 3000 milliseconds = 3 seconds
        } 
        report1(){        
        this.panchayath_report=1;
        this.ward_report=0;

        this.madalam_report=0;     
        }
        report2(){   
          this.filterForm3.reset();      
          this.ward_report=1;
          this.panchayath_report=0;
          this.madalam_report=0;
          let id=this.reviewData1[0].panchayath_id;
          //console.log('reviews ward', id); 
          this.getWardsByPanchayath(id);
        }
        report3(){          
          this.filterForm1.reset();
          this.ward_report=0;
          this.panchayath_report=0;
          this.madalam_report=1;
          this.report_review2();
        }
        report4(){
          this.isLoading=true;
          this.filterForm2.reset();          
          this.ward_report=0;
          this.panchayath_report=0;
          this.madalam_report=2;       
          let id=this.userDetails.constituencyId;         
         // console.log('this.id1',id)
         setTimeout(() => { 
          this.Apiservice.panchayath(id).subscribe(
            (res:any) => {   
            //  console.log('pan',res)       
              this.panchayats =res.data;
  
          })
          this.Apiservice.constituency_panchayath(id).subscribe(
            (res: any) => {   
            //  console.log('const-id', res);  
              this.reviewData4 = res.data;
              this.filteredData2 = this.reviewData4;
              this.length=this.reviewData4.length
            //  console.log('reviews', this.reviewData1); 
              this.reviewData4.sort((a:any, b:any) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              }); 
                     
            })
            this.isLoading = false;
          }, 3000); // 3000 milliseconds = 3 seconds

        }
        report5(){
          this.isLoading=true;
          this.ward_report=0;
          this.panchayath_report=0;
          this.madalam_report=3;
          let id=this.userDetails.constituencyId
          setTimeout(() => {   
          this.Apiservice.constituency_ward(id).subscribe(
            (res: any) => {                 
              this.reviewData5 = res.data;
              this.filteredData3 = this.reviewData5;
              this.length=this.reviewData5.length             
              this.reviewData5.sort((a:any, b:any) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();              
              }); 
              this.Apiservice.panchayath(id).subscribe(
                (res:any) => {   
                  //console.log('pan',res)       
                  this.panchayats =res.data;      
              })
            })
            this.isLoading = false;
          }, 3000); // 3000 milliseconds = 3 seconds
        }
        panchaythView(id:any){
         // console.log('view',id);
          this.view=""    
            this.Apiservice.panchayath_view(id).subscribe(
              (res: any) => {   
               // console.log('view', res);           
                if (res.success === true) {     
                this.view=res.data;        
                this.date= this.view.date;         
                this.wards=this.view.no_wards;        
                this.committee=this.view.no_wards_committees_appointed;
                this.month=this.view.ward_committee_added_this_month;
                this.visited=this.view.no_houses_visited;
                // this.activity=this.view.activities_conducted
                //const activiti = JSON.stringify(this.view.activities_conducted);
                //this.activity = JSON.parse(this.view.activities_conducted);
               // console.log(this.activity)
                this.meeting=this.view.meeting_conducted;
                this.reason=this.view.reason;
                this.report=this.view.ward_wise_reporting;  
                
                
              
        let activitiesData=this.view.activities_conducted;
        //console.log('type',typeof activitiesData)

        if (typeof activitiesData === 'string') {   
          this.activity = JSON.parse(activitiesData);
        } 
        else { 
          this.activity=this.view.activities_conducted
                }

        }

              })
        }
        wardView(id:any){
              console.log('wardview',id);
              this.view=""    
                this.Apiservice.ward_view(id).subscribe(
                  (res: any) => {   
                    console.log('ward', res);           
                    if (res.success === true) {     
                    this.view1=res.data;        
                    this.date= this.view1.date;         
                    this.ward= this.view1.ward_name;  
                    this.visited=this.view1.no_house_visited,
                    console.log('type',this.view1 )         
                    this.meeting=this.view1.meeting_conducted;
                    this.reason=this.view1.reason;
                    this.report=this.view1.ward_wise_reporting;  
                    
                    
                  
            let activitiesData=this.view1.activities_conducted;

            console.log('type', activitiesData,typeof activitiesData)
            
            if (typeof activitiesData === 'string') {   
              this.activity = JSON.parse(activitiesData);
            } 
            else { 
              this.activity=this.view.activities_conducted
                    }
            
            }
            
                  })
        }
        mandalamReport(){
          //console.log('mandalam',this.mandalamform.value)
            // const activities_conducted = this.activitiesArray.controls.map(control => control.get('activity')?.value || '');
            const activities_conducted = this.activitiesArray2.controls.map(control => control.get('activity')?.value || " ");
        if(
          this.mandalamform.value.date ==""||
          this.mandalamform.value.no_of_committees_panchayath ==""||
          this.mandalamform.value.no_of_committees_municipality ==""||
          this.mandalamform.value.no_of_committees_corporation ==""||
          this.mandalamform.value.no_of_committees_ward==""||

          this.mandalamform.value.no_of_coordinators_in_panchayath==""||
          this.mandalamform.value.no_of_coordinators_in_municipality==""||
          this.mandalamform.value.no_of_coordinators_in_corporation ==""||
          this.mandalamform.value.no_of_coordinators_in_ward=="" ||

          this.mandalamform.value.ward_committees_added_in_panchayath==null||
          this.mandalamform.value.ward_committees_added_in_municipality== null||
           this.mandalamform.value.ward_committees_added_in_corporation== null||
           this.mandalamform.value.ward_committees_added_in_ward== null||

          // this.mandalamform.value.no_of_houses_visited==""||
          this.mandalamform.value.has_mandalam_office==""||

          this.mandalamform.value.is_meeting_conducted_in_constituency==""||
          this.mandalamform.value.is_meeting_conducted_in_panchayath ==""||
          this.mandalamform.value.is_meeting_conducted_in_municipality==""||
          this.mandalamform.value.is_meeting_conducted_in_corporation==""|| 
          this.mandalamform.value.is_meeting_conducted_in_ward==""||
           this.mandalamform.value.ward_panchayath_mandalam_reporting ==""     
        
        ){
          this.errorMsg="ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക";
        }else{
             this.errorMsg="";
          let data={
            user_id                          : this.userDetails.id ,
            constituency_id                  : this.userDetails.constituencyId,
            constituency_name                : this.userDetails.constituency,
             report_date                     : this.mandalamform.value.date,
  
             no_of_panchayath                : this.total_panchayath_count,
             no_of_municipality              : this.total_municipality_count,
             no_of_corporation               : this.total_corporation_count,
             no_of_ward                      : this.total_ward_count,        
  
             no_of_committees_panchayath            : this.mandalamform.value.no_of_committees_panchayath,
             no_of_committees_municipality          : this.mandalamform.value.no_of_committees_municipality,
             no_of_committees_corporation           : this.mandalamform.value.no_of_committees_corporation,
             no_of_committees_ward                  : this.mandalamform.value.no_of_committees_ward,
  
             no_of_coordinators_in_panchayath       : this.mandalamform.value.no_of_coordinators_in_panchayath,
             no_of_coordinators_in_municipality     : this.mandalamform.value.no_of_coordinators_in_municipality,
             no_of_coordinators_in_corporation      : this.mandalamform.value.no_of_coordinators_in_corporation ,
             no_of_coordinators_in_ward             : this.mandalamform.value.no_of_coordinators_in_ward,
  
             ward_committees_added_in_panchayath    : this.mandalamform.value.ward_committees_added_in_panchayath,
             ward_committees_added_in_municipality  : this.mandalamform.value.ward_committees_added_in_municipality,
             ward_committees_added_in_corporation   : this.mandalamform.value.ward_committees_added_in_corporation,
             ward_committees_added_in_ward          : this.mandalamform.value.ward_committees_added_in_ward, 
             no_of_houses_visited                   : this.mandalamform.value.no_of_houses_visited,
  
             has_mandalam_office                    : this.mandalamform.value.has_mandalam_office,
             activities_conducted                   : JSON.stringify(activities_conducted),
             
            is_meeting_conducted_in_constituency    :this.mandalamform.value.is_meeting_conducted_in_constituency,          
            is_meeting_conducted_in_panchayath      : this.mandalamform.value.is_meeting_conducted_in_panchayath,
            is_meeting_conducted_in_muncipality     : this.mandalamform.value.is_meeting_conducted_in_municipality,
            is_meeting_conducted_in_corporation     : this.mandalamform.value.is_meeting_conducted_in_corporation, 
            is_meeting_conducted_in_ward            : this.mandalamform.value.is_meeting_conducted_in_ward,
            meeting_not_conducted_reason            : this.mandalamform.value.meeting_not_conducted_reason,
            ward_panchayath_mandalam_reporting      : this.mandalamform.value.ward_panchayath_mandalam_reporting
          }
         // console.log('data',data);
           
  
          this.Apiservice.mandalam(data).subscribe(
            (res:any) => {              
              if(res.success==true){       
                
              //  console.log('mandalam',res); 
                if(res.success==true){                    
                  this.msg=res.message;
                  this.mandalamform.reset();
                  setTimeout(() => {
                    this.ngOnInit();
                  }, 3000);
                } else{
                  this.errorMsg=res.data;           
              }
              (error: any) => {             
                  this.errorMsg=error;
              }      
            }
            })
        }
         
          
         
     
        }
        report_review2() {
          let data = this.userDetails.constituencyId
          this.Apiservice.constituencyreport(data).subscribe(
            (res: any) => {   
             // console.log('reviews const', res);           
              if (res.success === true) {       
              
                this.reviewData3 = res.data;

                //console.log('reviews const', this.reviewData1); 
                this.reviewData3.sort((a:any, b:any) => {
                  return new Date(b.date).getTime() - new Date(a.date).getTime();
                });
               this.filteredData1 = this.reviewData3;
               this.length=this.reviewData3.length
              }
            }
          );
        } 
        madalamView(id:any){
         // console.log('mandalam_view',id);
          this.view1=""    
            this.Apiservice.mandalam_view(id).subscribe(
              (res: any) => {   
               // console.log('mandalam_view', res);           
                if (res.success === true) {     
                this.view1=res.data;        
                this.date= this.view1.report_date; ;
                this.has_mandalam_office=this.view1.has_mandalam_office;  

                this.is_meeting_conducted_in_constituency=this.view1.is_meeting_conducted_in_constituency;             
                this.is_meeting_conducted_in_corporation=this.view1.is_meeting_conducted_in_corporation;
                this.is_meeting_conducted_in_muncipality=this.view1.is_meeting_conducted_in_muncipality;
                this.is_meeting_conducted_in_panchayath=this.view1.is_meeting_conducted_in_panchayath;
                this.is_meeting_conducted_in_ward=this.view1.is_meeting_conducted_in_ward;

                this.meeting_not_conducted_reason=this.view1.meeting_not_conducted_reason;
               
                this.no_of_committees_corporation=this.view1.no_of_committees_corporation;                
                this.no_of_committees_municipality=this.view1.no_of_committees_municipality;               
                this.no_of_committees_panchayath=this.view1.no_of_committees_panchayath;                
                this.no_of_committees_ward =this.view1.no_of_committees_ward;  
               
                this.no_of_coordinators_in_corporation=this.view1.no_of_coordinators_in_corporation;  
                this.no_of_coordinators_in_municipality=this.view1.no_of_coordinators_in_municipality;               
                this.no_of_coordinators_in_panchayath=this.view1.no_of_coordinators_in_panchayath;                
                this.no_of_coordinators_in_ward=this.view1.no_of_coordinators_in_ward;
               
                              
                this.no_of_houses_visited=this.view1.no_of_houses_visited;

                this.no_of_municipality=this.view1.no_of_municipality;                
                this.no_panchayath=this.view1.no_of_panchayath;  
                this.no_of_corporation=this.view1.no_of_corporation;              
                this.no_ward=this.view1.no_of_ward;

                this.ward_committees_added_in_corporation  = this.view1.ward_committees_added_in_corporation;               
                this.ward_committees_added_in_municipality  = this.view1.ward_committees_added_in_municipality;              
                this.ward_committees_added_in_panchayath    = this.view1.ward_committees_added_in_panchayath;              
                this.ward_committees_added_in_ward          = this.view1.ward_committees_added_in_ward;                
                this.ward_panchayath_mandalam_reporting     = this.view1.ward_panchayath_mandalam_reporting
               










                // this.ward= this.view1.ward_name;  
                // this.visited=this.view1.no_house_visited,
                // console.log('type',this.view1 )         
                // this.meeting=this.view1.meeting_conducted;
                // this.reason=this.view1.reason;
                // this.report=this.view1.ward_wise_reporting;  
                
                
              
        let activitiesData=this.view1.activities_conducted;

       // console.log('type', activitiesData,typeof activitiesData)
        
        if (typeof activitiesData === 'string') {   
          this.activity = JSON.parse(activitiesData);
        } 
        else { 
          this.activity=this.view.activities_conducted
                }
        
        }
        
              })
        }
        details1(){
          this.Apiservice.constituency_details().subscribe(
            (res: any) => { 
              //console.log('dres',res.data);                
                this.no_of_house_visited=res.data.no_of_house_visited;
                this.total_corporation_count=res.data.total_corporation_count;

                this.total_count_of_wardCommittee_in_corporation=res.data.total_count_of_wardCommittee_in_corporation;
                this.total_count_of_wardCommittee_in_municipality=res.data.total_count_of_wardCommittee_in_municipality;
                this.total_count_of_wardCommittee_in_panchayath=res.data.total_count_of_wardCommittee_in_panchayath;
                this.total_count_of_wardCommittee_in_ward=res.data.total_count_of_wardCommittee_in_ward;

                this.total_municipality_count=res.data.total_municipality_count;
                this.total_panchayath_count=res.data.total_panchayath_count;
                this.total_ward_count=res.data.total_ward_count;
            })
        }
        details2(){
          this.Apiservice.panchayath_details().subscribe(
            (res: any) => { 
              //console.log('dres',res.data);                
                this.no_of_house_visited=res.data.no_of_house_visited;                
                this.total_ward_count=res.data.total_ward_count;
            })
        }
        handlePageChange(event:any) {
          this.page = event;
        }
        onMembersInputChange() {
          //console.log('code')
          // Adjust the length of the array based on the number of members entered
          if (this.numMembers > this.membersArray.length) {
            for (let i = this.membersArray.length; i < this.numMembers; i++) {
              this.membersArray.push({ name: '', age: null, occupation: '' });
            }
          } else if (this.numMembers < this.membersArray.length) {
            this.membersArray.length = this.numMembers;
          }
        }
                 // Getter for family FormArray
            get family(): FormArray {
              return this.surveyform.get('family') as FormArray;
            }
            // Create a new form group for a family member
            createFamilyMember(): FormGroup {
              return this.fb.group({
                name   : ['',Validators.required],
                age    : ['', [Validators.required, Validators.min(0), Validators.max(120)]],
                is_in_voters_list  : [''] // Initialize with empty value or a default value if needed
              });
            }
            // Update the number of rows based on the number of family members
            updateRows(): void {
              const numRows = this.surveyform.get('family_members')?.value || 0;
              const familyArray = this.family;

              if (familyArray.length < numRows) {
                // Add new rows
                for (let i = familyArray.length; i < numRows; i++) {
                  familyArray.push(this.createFamilyMember());
                }
              } else if (familyArray.length > numRows) {
                // Remove excess rows
                while (familyArray.length > numRows) {
                  familyArray.removeAt(familyArray.length - 1);
                }
              }
            }
            // Method to retrieve and log family member data
            getFamilyMembers(): void {
              if (this.family) {
                this.family.controls.forEach((control, index) => {
                 // console.log(`Member ${index + 1}:`, control.value);
                });
              } else {
               // console.log('Family array is not initialized.');
              }

            }
            onValueChange(value: any, index: number, field: string): void {
             // console.log(`Changed ${field} of member ${index + 1}:`, value);
            }
        addItem(): void {
          if (this.newItem.trim()) {
            this.items.push(this.newItem);  // Add the new item to the array
            this.newItem = '';              // Clear the input field
          }
        }       
          // Getter for concerns FormArray
          get concerns(): FormArray {
            return this.surveyform.get('concerns') as FormArray;
          }
          // Create a new FormControl for concerns
          createConcern(): FormControl {
            return this.fb.control('', Validators.required);
          }
          // Add a new concern
          addConcern(): void {
            this.concerns.push(this.createConcern());
          }
          // Remove a concern at the given index
          removeConcern(index: number): void {
            if (this.concerns.length > 1) {
              this.concerns.removeAt(index);
            }
          }
          // Getter for the improvements FormArray
        get desired_improvements(): FormArray {
          return this.surveyform.get('desired_improvements') as FormArray;
        }
        // Create a new form control for an improvement, initialized with an empty string
        createImprovement(): FormControl {
          return this.fb.control('', Validators.required);  // Default to an empty string
        }
        // Add a new improvement
        addImprovement(): void {
          this.desired_improvements.push(this.createImprovement());
        }
        // Remove an improvement at the given index
        removeImprovement(index: number): void {
          if (this.desired_improvements.length > 1) {
            this.desired_improvements.removeAt(index);
          }
        }
          // Getter for the issues FormArray
          get key_state_issues_to_change(): FormArray {
            return this.surveyform.get('key_state_issues_to_change') as FormArray;
          }
          // Create a new form control for an issue
          createIssue(): FormControl {
            return this.fb.control('', Validators.required);
          }
          // Add a new issue
          addIssue(): void {
            this.key_state_issues_to_change.push(this.createIssue());
          }
          // Remove an issue at the given index
          removeIssue(index: number): void {
            if (this.key_state_issues_to_change.length > 1) {
              this.key_state_issues_to_change.removeAt(index);
            }
          }
          // Getter for the social entitlements FormArray
          get your_social_entitlements(): FormArray {
            return this.surveyform.get('your_social_entitlements') as FormArray;
          }

          // Create a new form control for a social entitlement
          createEntitlement(): FormControl {
            return this.fb.control('', Validators.required);
          }

          // Add a new social entitlement
          addEntitlement(): void {
            this.your_social_entitlements.push(this.createEntitlement());
          }

          // Remove a social entitlement at the given index
          removeEntitlement(index: number): void {
            if (this.your_social_entitlements.length > 1) {
              this.your_social_entitlements.removeAt(index);
            }
          }

          getAgeError(control: AbstractControl | null): string | null {
            if (!control) {
              return null;
            }
          
            if (control.hasError('required')) {
              return 'Age is required';
            }
            if (control.hasError('min')) {
              return 'Age must be a positive number';
            }
            if (control.hasError('max')) {
              return 'Age must be less than 120';
            }
            return null;
          }
          surveyReport() {
            const formData = this.surveyform.value;          
            if(formData.name==""||formData.age==""||formData.occupation==""||formData.mobile_number==""||formData.house_number==" "|| formData.ward_number==""||
              this.pan1==""||this.const==""||formData.family_members==""||formData.family==""||formData.concerns==""||formData.desired_improvements==""||
              formData.key_state_issues_to_change==""||formData.your_social_entitlements==""||formData.food_expenses==""|| formData.medicine_expenses==""||
              formData.education_expenses==""
            ){
              this.errorMsg="ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക";
            }else{
              this.errorMsg="";
              this.msg="";          
                                    // Get the values from the form
                            const foodExpenses =formData.food_expenses;
                            const education = formData.education_expenses;
                            const medicine = formData.medicine_expenses;

                            // Check if values are numbers
                            const isFoodExpensesValid = !isNaN(Number(foodExpenses)) && foodExpenses !== '';
                            const isEducationValid = !isNaN(Number(education)) && education !== '';
                            const isMedicineValid = !isNaN(Number(medicine)) && medicine !== '';

                            // Example of how you might handle invalid values
                            if (!isFoodExpensesValid) {
                             // console.log('Food expenses must be a valid number.');
                              this.errorStatus1==1;
                              this.errorMsg="ദയവായി ഭക്ഷണം ചെലവ് ശരിയായി നൽകുക"
                            }
                            if (!isEducationValid) {
                             // console.log('Education expenses must be a valid number.');
                              this.errorStatus1==1;
                              this.errorMsg="ദയവായി വിദ്യാഭ്യാസം ചെലവ് ശരിയായി നൽകുക"
                            }
                            if (!isMedicineValid) {
                             // console.log('Medicine expenses must be a valid number.');
                              this.errorStatus1==1;
                              this.errorMsg="ദയവായി മരുന്ന് ചെലവ് ശരിയായി നൽകുക"
                            }

              // Helper function to ensure proper JSON format
              function ensureJsonString(value: any): string {
                  if (typeof value === 'string') {
                      try {
                          JSON.parse(value);
                          return value; // Already valid JSON
                      } catch {
                          return JSON.stringify(value); // Not valid JSON, stringify it
                      }
                  }
                  return JSON.stringify(value); // Convert other types to JSON string
              }
          
             
          
              // Prepare data for submission
              let data = {
                  user_id: this.userDetails.id,
                  name: formData.name,
                  age: formData.age,
                  occupation: formData.occupation,
                  mobile_number: formData.mobile_number,
                  house_number: formData.house_number,
                  ward_number: formData.ward_number,
                  panchayath:this.pan,
                  constituency:  JSON.stringify(this.const),
                  family_members_count: formData.family_members,
                  family_members_details: ensureJsonString(formData.family),
                  concerns: ensureJsonString(formData.concerns),
                  desired_improvements_of_ward_or_panchayath: ensureJsonString(formData.desired_improvements),
                  key_state_issues_to_change: ensureJsonString(formData.key_state_issues_to_change),
                  your_social_entitlements: ensureJsonString(formData.your_social_entitlements),
                  food_expenses: formData.food_expenses,
                  medicine_expenses: formData.medicine_expenses,
                  education_expenses: formData.education_expenses,
                  political_membership: formData.political_membership,
                  your_designation: formData.your_designation
              };
                if(this.errorStatus1!=1){
                  this.errorMsg="";
                     // console.log('Data Prepared for Submission:', data);
                      let text = "നിങ്ങൾ ഫോറം സമർപ്പിക്കാൻ തൽപ്പമായിരിക്കുന്നു എന്ന് ഉറപ്പാണോ";
                      if (confirm(text) == true) {
                      this.Apiservice.survey_report(data).subscribe(
                          (res: any) => {
                             // console.log('API Response:', res);                  
                              if (res.success) {
                                    setTimeout(() => {
                                      this.msg = res.message;
                                  }, 3000);
                                              
                                  this.surveyform.reset();                                 
                                      let text1 = "അടുത്ത സർവേയ്ക്ക് നിങ്ങൾ തയ്യാറാണോ? ";
                                      if (confirm(text1) == true) {                                    
                                         //this.ngOnInit(); 
                                         this.surveyform.reset(); 
                                        
                                        } else {
                                          this.ngOnInit(); 
                                        }
                                      
                                } else {
                                        text = "You canceled!";
                               }
                                 
                              
                          },
                          (error: any) => {
                              this.errorMsg = error;
                             // console.error('API Error:', error);
                          }
                      );
                      } else {
                        text = "You canceled!";
                      }
                }else{
                          //console.log('not valid:', data);
               }
             
          
              // Submit data to API c
            
              


              
          }
            }
           survey_list(){
            this.surveyfilter.reset();
            this.Apiservice.survey_list().subscribe(
              (res: any) => {                  
                  this.survey_lists=res.data;
                  this.count = this.survey_lists.length;
                 console.log('survey:', this.count);
           }  )
        
        
          }
          survey_view(id:any){
            this.surveyview="";
           // console.log('view:',id);
            this.Apiservice.survey_view(id).subscribe(
              (res: any) => {   
                  this.surveyview=res.data;
             //   console.log('survey-view:', this.surveyview);
                this.age1=this.surveyview.age;
                this.name1=this.surveyview.name;               
                this.constituency1=this.surveyview.constituency;
                let activitiesData = this.surveyview.desired_improvements_of_ward_or_panchayath;
               // console.log(activitiesData);                
                // Check if the data is a string or an array/object
                if (typeof activitiesData === 'string') {
                  try {
                    // Parse the JSON string into an object or array
                    this.desired1 = JSON.parse(activitiesData);
                    //console.log('Parsed desired1:', this.desired1);
                  } catch (error) {
                    // Handle parsing error
                   // console.error('Error parsing JSON:', error);
                    this.desired1 = []; // Fallback to empty array if parsing fails
                  }
                } else if (Array.isArray(activitiesData)) {
                  // If it's already an array, just assign it
                  this.desired1 = activitiesData;
                  //console.log('Array desired1:', this.desired1);
                } else {
                  // If it's an object or other type, handle accordingly
                  this.desired1 = activitiesData ? [activitiesData] : [];
                 // console.log('Non-string desired1:', this.desired1);
                }
                              
                let activitiesData1 = this.surveyview.concerns;
                //console.log('concern', activitiesData1);                
                // Check if the data is a string or an array/object
                if (typeof activitiesData1 === 'string') {
                  try {
                    // Parse the JSON string into an object or array
                    this.concerns1 = JSON.parse(activitiesData1); // Use activitiesData1, not activitiesData
                   // console.log('Parsed concerns1:', this.concerns1);
                  } catch (error) {
                    // Handle parsing error
                   // console.error('Error parsing JSON:', error);
                    this.concerns1 = []; // Fallback to empty array if parsing fails
                  }
                } else if (Array.isArray(activitiesData1)) {
                  // If it's already an array, just assign it
                  this.concerns1 = activitiesData1;
                  //console.log('Array concerns1:', this.concerns1);
                } else {
                  // If it's an object or other type, handle accordingly
                  this.concerns1 = activitiesData1 ? [activitiesData1] : [];
                 // console.log('Non-string concerns1:', this.concerns1);
                }              

                let activitiesData2 = this.surveyview.key_state_issues_to_change
                //console.log('concern', activitiesData2);                
                // Check if the data is a string or an array/object
                if (typeof activitiesData2 === 'string') {
                  try {
                    // Parse the JSON string into an object or array
                    this.key1 = JSON.parse(activitiesData2); // Use activitiesData1, not activitiesData
                    //console.log('Parsed concerns1:',this.key1 );
                  } catch (error) {
                    // Handle parsing error
                    //console.error('Error parsing JSON:', error);
                    this.key1  = []; // Fallback to empty array if parsing fails
                  }
                } else if (Array.isArray(activitiesData2)) {
                  // If it's already an array, just assign it
                  this.key1  = activitiesData2;
                  //console.log('Array concerns1:', this.concerns1);
                } else {
                  // If it's an object or other type, handle accordingly
                  this.key1 = activitiesData2 ? [activitiesData2] : [];
                 // console.log('Non-string concerns1:', this.key1 );
                }
                
                let activitiesData3 = this.surveyview.your_social_entitlements
               // console.log('concern', activitiesData3);
                
                // Check if the data is a string or an array/object
                if (typeof activitiesData3 === 'string') {
                  try {
                    // Parse the JSON string into an object or array
                    this.your_social1 = JSON.parse(activitiesData3); // Use activitiesData1, not activitiesData
                    //console.log('Parsed concerns1:',this.your_social1 );
                  } catch (error) {
                    // Handle parsing error
                    //console.error('Error parsing JSON:', error);
                    this.your_social1  = []; // Fallback to empty array if parsing fails
                  }
                } else if (Array.isArray(activitiesData3)) {
                  // If it's already an array, just assign it
                  this.your_social1  = activitiesData3;
                  //console.log('Array concerns1:', this.your_social1);
                } else {
                  // If it's an object or other type, handle accordingly
                  this.your_social1= activitiesData3 ? [activitiesData3] : [];
                  //console.log('Non-string concerns1:', this.your_social1 );
                }              

                this.education_expenses1=this.surveyview.education_expenses;
                this.family_members_count1=this.surveyview.family_members_count;                
                this.family_members_details1=this.formatActivities(this.surveyview.family_members_details)
                this.food_expenses1=this.surveyview.food_expenses;
                this.house_number1=this.surveyview.house_number;
                // this.key1=this.surveyview.key_state_issues_to_change;
                this.medicine1=this.surveyview.medicine_expenses;
                this.mobile1=this.surveyview.mobile_number;
                this.occupation1=this.surveyview.occupation;
                this.panchayath1=this.surveyview.panchayath;
                this.political1=this.surveyview.political_membership;
                this.ward_number1=this.surveyview.ward_number;
                this.your_designation1=this.surveyview.your_designation;
                // this.your_social1=this.surveyview.your_social_entitlements;
               


                
           }  )
          }
          formatActivities(activitiesJson: any) {
            // Decode the JSON string into an array of objects
            const activities: any[] = JSON.parse(activitiesJson);
            
            // Format each activity object into a string
            return activities.map((activity: any) => {
              return `പേര്: ${activity.name}, വയസ്സ്: ${activity.age}, വോട്ടർ ലിസ്റ്റിൽ  ?ഉണ്ട്/ഇല്ല: ${activity.is_in_voters_list}`;
            }).join('\n'); // Joins each formatted string with a newline
          }
          //---------------------------------------report filter-----------------------------------------------------------//
          onFilter() {
            // const { panchayath, startDate, endDate } = this.filterForm.value;           
            // this.filteredData = this.reviewData.filter((item:any) => {
            //   const itemDate = new Date(item.date);             
            //   const isWithinRange =
            //     (!startDate || new Date(startDate) <= itemDate) &&
            //     (!endDate || itemDate <= new Date(endDate));        
            //      const matchesPanchayath = !panchayath || item.panchayath_name.toLowerCase().includes(panchayath.toLowerCase());    
            //      console.log( 'range',isWithinRange,matchesPanchayath)    
            //      return isWithinRange && matchesPanchayath;
            // });
            const { startDate, endDate } = this.filterForm.value;

            // Filter data based on start date and end date
            this.filteredData = this.reviewData.filter((item:any)=> {
              const itemDate = new Date(item.date);
              return this.isDateWithinRange(itemDate, startDate, endDate);
            });
            //console.log('this.filteredData',this.filteredData)
          }
        
          // Check if the item date is within the specified range
          isDateWithinRange(itemDate: Date, startDate: string, endDate: string): boolean {
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;
           
            // Check if the itemDate is between startDate and endDate
            return (!start || itemDate >= start) && (!end || itemDate <= end);
          
          }//---------------------------------------ward select-------------------------------------------------------------//
          onWardSelect(event: any): void {
            const selectedId = event.target.value;
            console.log('Selected Ward:', selectedId);
            // this.selectedWard = this.wards.find((ward:any) => ward.id === +selectedId);
           //
          }
          //-----------------------------------------------------------------------for mandalam search------------------//
          onFilter1() {
            const { startDate, endDate } = this.filterForm1.value;
            console.log('Filter Form Values:', this.filterForm1.value);
            
            // Filter data based on start date and end date
            this.filteredData1 = this.reviewData3.filter((item: any) => {
              const reportDate = new Date(item.report_date); // Convert report_date to Date object
              return this.isDateWithinRange(reportDate, startDate, endDate);
            });
            
            // Log the filtered data and date range
            console.log('Filtered Data:', this.filteredData1);
            console.log('Date Range:', { startDate, endDate });
            
          }
          //-----------------------------------------------------------------------for mandalam search------------------//
          onFilter2() {
              this.isLoading =true;
              const { startDate, endDate, panchayath } = this.filterForm2.value;
              setTimeout(() => {           
              this.filteredData2 = this.reviewData4.filter((item: any) => {
              const reportDate = new Date(item.date); // Convert date to Date object
              const isDateInRange = this.isDateWithinRange(reportDate, startDate, endDate);
              const isWardMatched = panchayath ? item.panchayath_name === panchayath : true;
              return isDateInRange && isWardMatched;
              });
              this.isLoading = false;
            }, 3000); // 3000 milliseconds = 3 seconds
            }
          
            onPanchayathChange(event: any): void {
              const selectedPanchayathName = event.target.value;
              //console.log('Selected Panchayath Name:', selectedPanchayathName);
          // Find the Panchayath ID by name
              const selectedPanchayathId = this.findPanchayathIdByName(selectedPanchayathName);
              //console.log('Selected Panchayath ID:', selectedPanchayathId);

              // Call the function to get the ward list based on the selected Panchayath ID
              if (selectedPanchayathId) {
                this.getWardsByPanchayath(selectedPanchayathId);
              } else {
                //console.log('Panchayath not found');
              }
            }
            findPanchayathIdByName(name: string): number | undefined {
              const panchayat = this.panchayats.find((p:any) => p.name === name);
              return panchayat ? panchayat.id : undefined;
            }
            getWardsByPanchayath(panchayathId: number): void {
              // Replace with your actual service method to fetch wards based on Panchayath ID
              this.Apiservice.ward(panchayathId).subscribe(
                (wards) => {
                  this.wards1 = wards.data;
                  //console.log('Wards:', this.wards1);
                },
                (error: any) => {
                 // console.error('Error fetching wards:', error);
                }
              );
            }
            onFilter3() {
              this.isLoading =true;
              const { startDate, endDate, panchayath ,ward} = this.filterForm3.value;            
                    setTimeout(() => {
                    // Filter data based on start date, end date, and Panchayat name
                    this.filteredData3 = this.reviewData5.filter((item: any) => {
                      const reportDate = new Date(item.date); // Convert date to Date object
                      const isDateInRange = this.isDateWithinRange(reportDate, startDate, endDate);                  
                      // Check if Panchayat name matches
                      const ispanchayathMatched = panchayath ? item.panchayath_name === panchayath : true;
                      const isWardMatched = ward ? item.ward_name === ward : true;
                      return isDateInRange && isWardMatched &&ispanchayathMatched;
                    });                  
                    this.isLoading = false;
                  }, 3000); // 3000 milliseconds = 3 seconds
          }
          onFilter11(){
            this.isLoading =true;
              const { startDate, endDate,ward} = this.filterForm3.value;            
                    setTimeout(() => {
                    // Filter data based on start date, end date, and Panchayat name
                    this.filteredData11 = this.reviewData1.filter((item: any) => {
                      const reportDate = new Date(item.date); // Convert date to Date object
                      const isDateInRange = this.isDateWithinRange(reportDate, startDate, endDate);                 
                      // Check if Panchayat name matches
                     
                      const isWardMatched = ward ? item.ward_name === ward : true;
                      return isDateInRange && isWardMatched 
                    });   
                    console.log( 'data',this.filteredData11 )               
                    this.isLoading = false;
                  }, 3000); // 3000 milliseconds = 3 seconds
          } 
          onFilters() {
            const { startDate, endDate } = this.surveyfilter.value;
            
            // Convert startDate and endDate to Date objects
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;
          
            if (start && end) {
              // Ensure start date is before end date
              if (start > end) {
               // console.error('Start date cannot be after end date.');
                return;
              }
          
              // Filter survey_lists based on the created_at field
              this.survey_lists = this.survey_lists.filter((item: any) => {
                const itemDate = new Date(item.created_at);
          
                // Check if itemDate is within the start and end date range
                return (!start || itemDate >= start) && (!end || itemDate <= end);
              });
          
             // console.log('Filtered Data:', this.survey_lists);
            } else {
              // Reset to original data if no dates are provided
              this.survey_lists = this.survey_lists;
            }
          }
          
          
          formatDate(date: Date): string {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          }
          
          ngAfterViewInit(): void {
            // Play the video when the view is initialized
            const videoElement: HTMLVideoElement = this.myVideo.nativeElement;
            
            // Ensure autoplay starts when the video is ready
            videoElement.play().catch(error => {
              //console.error('Autoplay failed:', error);
            });
          }  
          // Function to trigger when the video ends
          onVideoEnd(): void {
            this.isVideoFinished = true;
          }
          // onPlayVideo(): void {
          //   // console.log('play')
          //   // const videoElement: HTMLVideoElement = this.myVideo.nativeElement;
            
          //   // videoElement.currentTime = 0;  // Reset video to start
          //   // videoElement.play();           // Play the video
          //   this.isVideoFinished = false;  // Hide the link again
          //   const videoElement: HTMLVideoElement = this.myVideo.nativeElement;
            
          //   // Ensure autoplay starts when the video is ready
          //   videoElement.play().catch(error => {
          //     console.error('Autoplay failed:', error);
          //   });
          // }
          onPlayVideo() {
            this.isVideoFinished = false; // Reset the finished state
            const video: HTMLVideoElement = this.videoElement.nativeElement; // Access the video element
        
            if (video) {
              video.load(); // Reload the video to reset its state
              video.play(); // Play the video again
             // console.log('Playing video again');
            } else {
            //  console.error('Video element not found');
            }
          
          }
          setVideoSource() {
            const videoMap: { [key: string]: string } = {
              'കൊടുങ്ങല്ലൂർ': 'https://cocoalabs.in/Twenty20/public/video/KODUNGALLOOR.mp4',
              'കൈപ്പമംഗലം': 'https://cocoalabs.in/Twenty20/public/video/KAIPAMANGALAM.mp4',
            };
        
            // Set video source based on constituency or use default
            this.videoSrc = videoMap[this.userDetails.constituency] || 'https://cocoalabs.in/Twenty20/public/video/CHALAKKUDI.mp4';
            //console.log('Video source selected:', this.videoSrc);
          }
          onTableDataChange(event: number): void {
            this.page = event;      // Update page number
            this.survey_list(); // Fetch new data based on updated page
          }
        
          onTableSizeChange(event: Event): void {
            const element = event.target as HTMLSelectElement;
            this.tableSize = +element.value; // Update table size
            this.page = 1;                  // Reset to the first page
            this.survey_list();        // Fetch data with new table size
          }
}
          
          
          
            
          
        
