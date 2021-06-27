function agencyProfit(input){
 let name = input[0]
 let adultTicketsCount = Number(input[1])
 let kidsTicketsCount = Number(input[2])
 let ticketPrice = Number(input[3])
 let serviceTax = Number(input[4])

 let kidsTicketPrice = (ticketPrice * 0.3) + serviceTax;
 let adultTicketPrice = ticketPrice + serviceTax;

 let totalKids = kidsTicketPrice * kidsTicketsCount;
 let totalAdults = adultTicketPrice * adultTicketsCount;

 let agencyProfitTotal = (totalAdults + totalKids) * 0.2;
 console.log(`The profit of your agency from ${name} tickets is ${agencyProfitTotal.toFixed(2)} lv.`);
 
}
agencyProfit(["WizzAir", "15", "5", "120", "40"])