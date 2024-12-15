/*
فرض کنید یک وبسایت فروشگاهی دارید  که کاربر5 محصول از فروشگاه انتخاب کرده است 
قیمت 5 محصول را از کاربر گرفته و مجموعه مبلغ کل سبد خرید را نمایش دهید ؟

var sum = 0 ;
for (var i = 0 ;i<5 ; i++){
  sum = sum + Number( prompt ( "Enter the product price :"))
}
console.log("sum : " + sum);
alert(sum)
*/


//_____________________________________________________________________
//_____________________________________________________________________
/* از کاربر 5 عدد را دریافت کرده و میانگین انها را به کاربر نمیش دهید ؟

var usernumber = null ;
var avrage= 0;
for(var i = 0 ; i < 5 ; i++ ){
   usernumber =Number(prompt(" Enter the " + (i+1) + " number :"));
   avrage= usernumber + avrage ;
  //avrage = avrage/5;
}
console.log('avrage :' + (avrage/5)); 
*/


//_____________________________________________________________________
//_____________________________________________________________________
/*عددی را از کاربر دریافت کرده و سپس مجموع رقم های ان را محاسبه کنید؟

var sum = 0;
var userNumber =Number( prompt ( "Enter the Number :" , 0))
for (var i =0 ; (userNumber / 10 ) !=0 ; i++){
 console.log(sum);
  sum = sum +(userNumber % 10)
 
   userNumber = Math.floor(userNumber / 10 ); 

}
console.log(sum)*/


/*__________________________________________________________________________________
__________________________________________________________________________________
  برنامه ای بنویسید که عددی از کاربر دریافت کنید وسپس رقم های ان را نمایش دهید 

var userNumber = Number (prompt ("enter the number: "));
var counter =0;
for (var i = 0 ; ( userNumber / 10)!=0 ; i++){
  counter ++
  userNumber = Math.floor(userNumber /10 );
}
  alert(counter)
*/
