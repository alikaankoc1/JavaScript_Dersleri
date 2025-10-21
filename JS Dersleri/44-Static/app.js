//!static methodlarda class tutulur. static olmayanlarda nesneden üretilir

class Math{
   static topla(a,b){
        console.log(a+b);
    }
    cikar(a,b){
        console.log(a-b);
    }
  static  carp(a,b){
        console.log(a*b);
    }
    bol(a,b){
        console.log(a/b);
    }
}

Math.topla(2,8)
const matematik = new Math();
matematik.cikar(8,3);
Math.carp(8,6);
matematik.bol(10,5);