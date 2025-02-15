import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
var loginToken = localStorage.getItem('token');
console.log(loginToken)
const httpOptions = {
  headers: new HttpHeaders({
       Authorization: 'Bearer ' + loginToken,
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
   public BASE_URL = 'https://cocoalabs.in/Twenty20'; 

     public BASE_URL1 = 'https://3397-120-61-38-178.ngrok-free.app';


     constructor(private http: HttpClient,private router: Router) {}
    
 
     // Method to get common headers
     private getHeaders(): { headers: HttpHeaders } {
      
       const headers = new HttpHeaders({
        Authorization: `Bearer ${loginToken}`,
        'ngrok-skip-browser-warning': '69420',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
   
       return { headers };
     }
   

     //=================================login==============================================================//
     public login(data: any): Observable<any> {
       return this.http.post<any>(this.BASE_URL+ `/api/login`,data)
        //  .pipe(
        //    catchError(this.handleError) // Use catchError to handle errors
        //  );
     }
//================================Logout==============================================================//
public logout():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/logout`, httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
}
//=================================register===========================================================//
public register(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/store-user-details`,data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//=================================userDetails========================================================//
public card(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/card-details`,data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//=================================userDetails========================================================//

public member(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/store-exicutiveMembers-details`,data, httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//=================================userDetails========================================================//

public editmember(id:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/executive-member/edit`,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//==============================UPDATE================================================================//
 public updatemember(data:any,id:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/executive-member/update/`+id,data,httpOptions)
    // .pipe(
    //   catchError(this.handleError) // Use catchError to handle errors
    // );
 }
 //==============================UPDATE================================================================//
 public check(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/check-promocode`,data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
 
 //==============================User================================================================//
 public userAccountDetails():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/user-account-details`,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
 //=============================constituency========================================================//
 public constituency():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/constituency/list`,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//============================panchayath ===========================================================//
public panchayath(id:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/panchayath/list/`+id,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//============================panchayath ===========================================================//
public transaction():Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/transaction-history`,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//============================panchayath report===========================================================//
public panchayath_report(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/panchayath/monthly-report`,data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//============================panchayath report===========================================================//
public ward_report(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/ward/monthly-report`,data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//============================panchayath report===========================================================//
public panchayathreview(id:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/panchayath-monthly-review-report/`+id,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
 //====================================================
 public wardreview(data:any):Observable<any>{
  //console.log('stream',data);
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/ward-monthly-review-report/${data.id}/${data.id2}`,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
 //============================================
 public panchayath_ward(data:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/ward-monthly-report-under/panchayath/`+data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//===========================================
 public panchayath_view(id:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/panchayath-report-view/`+id,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }

//===========================================
public ward_view(id:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/ward-report-view/`+id,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//==================================================
//===========================================
public mandalam_view(id:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/constituency-report-view/`+id,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//==================================================



 //============================================
 public mandalam(data:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/constituency/monthly-report`,data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }


 //============================================
 public constituency_panchayath(data:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/panchayath-monthly-report-under-constituency/`+data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
 
 public constituency_ward(data:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/ward-monthly-report-under-constituency/`+data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
 public constituencyreport(data:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/monthly-review-reports-of-constituency/`+data,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }

//==========================================================//
public constituency_details():Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/constituency/monthly-reportFormDetails`,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//==========================================================//
public panchayath_details():Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/panchayath/monthly-reportFormDetails`,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
 
//==========================================================//
public user_role():Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/user-role-details`,httpOptions).pipe(
      catchError(this.handleError) // Use catchError to handle errors
    );
 }
//==========================================================//
public survey_report(data:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.post<any>(this.BASE_URL + `/api/store-survey-report`,data,httpOptions)
    // .pipe(
    //   catchError(this.handleError) // Use catchError to handle errors
    // );
 }
//==========================================================//
public survey_list():Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/survey-lists`,httpOptions)
    // .pipe(
    //   catchError(this.handleError) // Use catchError to handle errors
    // );
 }
 //==========================================================//
public survey_view(id:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/survey-form-view/`+id,httpOptions)
    // .pipe(
    //   catchError(this.handleError) // Use catchError to handle errors
    // );
 }
 
  //==========================================================//
public ward(id:any):Observable<any>{
  const headers = new HttpHeaders();
    return this.http.get<any>(this.BASE_URL + `/api/ward/list/`+id,httpOptions)
    // .pipe(
    //   catchError(this.handleError) // Use catchError to handle errors
    // );
 }
 


//==================================================================================//
// Error handling method
private handleError(error: HttpErrorResponse) {
  let errorMessage = 'An unknown error occurred!';

  if (error.error instanceof ErrorEvent) {
    // Client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side error
    switch (error.status) {
      case 401:
        // Unauthorized error
        errorMessage = 'Unauthorized access. Redirecting to login page...';
        this.router.navigate(['/login']);  // Redirect to login
        break;

      case 422:
        // Validation error (Unprocessable Entity)
        errorMessage = 'Validation failed: ';
        if (error.error.errors) {
          // Display detailed validation messages from the server if available
          const validationErrors = error.error.errors;
          for (const field in validationErrors) {
            if (validationErrors.hasOwnProperty(field)) {
              errorMessage += `\n${field}: ${validationErrors[field].join(', ')}`;
            }
          }
        } else {
          errorMessage += error.error.message || 'Invalid input.';
        }
        break;

      case 500:
        // Internal server error
        errorMessage = 'Internal Server Error. Please try again later.';
        break;

      case 404:
        // Not found error
        errorMessage = 'Resource not found.';
        break;

      default:
        // Generic message for other errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        break;
    }
  }

  // Log the error message or show it to the user
  console.error(errorMessage);
  // Optionally, show a user-friendly message in the UI



  
  return throwError(() => errorMessage);
}

}