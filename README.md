# birthday-api
An API that can print wishes with your name.

Input:
1.This api expects you to enter your name in URL path for displaying birthday wishes.
2.For entering an email(optional) you should append your email with the name on the same URL.

URL: https://birthdayapinjs.herokuapp.com/api/wishes/Your_name/Your_email_address

Your_name and Your_email_address are the input parameters.


Response:
The api provides two types of response depending upon parameters passed in URL path,
1.If you enter only name in the Url path it will display birthday wish along with the name as the response

ex: https://birthdayapinjs.herokuapp.com/api/wishes/Your_name

o/p: Happy Birthday, Your_name !

2.You can also enter your email along with name in URl path which will respon with an JSON that contains 
name, email and message that contains birthday message. 

ex: https://birthdayapinjs.herokuapp.com/api/wishes/Your_name/Your_email_address

o/p: {
  "name": "Your_name",
  "email": "Your_email_address",
  "message": "Happy Birthday Your_name"
}
