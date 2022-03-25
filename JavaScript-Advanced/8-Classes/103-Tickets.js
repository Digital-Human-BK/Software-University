function tickets(ticketsList, sortOrder) {

  const result = [];

  const sortingBy = {
    destination: function (a, b) { return a.destination.localeCompare(b.destination)},
    price: function(a, b) {return a.price - b.price},
    status: function(a, b) { return a.status.localeCompare(b.status)}
  }
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  
  for (const ticket of ticketsList) {
    let [destination, price, status] = ticket.split('|');
    price = Number(price);

    let storeTicket = new Ticket(destination, price, status);
    result.push(storeTicket);
  }

  return result.sort(sortingBy[sortOrder]);
}
tickets(['Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'],
  'destination'
)
tickets(['Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'],
  'status'
)