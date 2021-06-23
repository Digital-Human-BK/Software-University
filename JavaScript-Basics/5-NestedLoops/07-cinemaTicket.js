function cinemaTicket(input) {
  let index = 0;
  let loading = input[index];

  let tempTicketTotal = 0;
  let studentTicket = 0;
  let standardTicket = 0;
  let kidTicket = 0;

  while (loading != "Finish") {
    let movieName = input[index++];
    let freeSeats = Number(input[index++]);
    let type = input[index];

    while (type != "End") {
      
      switch (type) {
        case "student": studentTicket++; break;
        case "standard": standardTicket++; break;
        case "kid": kidTicket++; break;
      }
      tempTicketTotal++;
      
      if (tempTicketTotal >= freeSeats){
        break;
      }

      index++;
      type = input[index];
    }
    console.log(`${movieName} - ${(tempTicketTotal / freeSeats * 100).toFixed(2)}% full.`);

    tempTicketTotal = 0;
    index++;
    loading = input[index];
  }
  let totalTickets = standardTicket + studentTicket + kidTicket;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${(studentTicket / totalTickets * 100).toFixed(2)}% student tickets.`);
  console.log(`${(standardTicket / totalTickets * 100).toFixed(2)}% standard tickets.`);
  console.log(`${(kidTicket / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTicket(["Taxi", "10", "standard", "kid", "student", "student", "standard","kid", "kid", "kid", "kid", "standard", "End",
"Scary Movie", "6", "student", "student", "student", "student", "student", "student","Finish"])
