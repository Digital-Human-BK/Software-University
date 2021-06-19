function coins2(input) {
 let cents = Number(input[0]);
 cents = Math.trunc(cents * 100);
 let coins = 0;

 while (cents > 0) {
   if ( cents >= 200) {
     cents-=200;
     coins++;     
   } else if (cents >= 100) {
     cents -=100;
     coins++;
   } else if (cents >=50) {
     cents -=50;
     coins++;
   } else if (cents >=20) {
     cents -=20;
     coins++;
   } else if (cents >=10) {
     cents -=10;
     coins++;
   } else if (cents >= 5) {
     cents -=5;
     coins++;
   } else if ( cents >=2) {
     cents -=2;
     coins++;
   } else if (cents === 1) {
     cents -=1;
     coins++;
   }
 }
 console.log(coins);
}
coins2(["2.73"])