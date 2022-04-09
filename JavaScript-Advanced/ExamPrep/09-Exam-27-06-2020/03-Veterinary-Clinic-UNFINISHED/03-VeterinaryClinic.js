class VeterinaryClinic {
  constructor(clinicName, capacity) {
    this.clinicName = clinicName;
    this.capacity = capacity;
    this.clients = [];
    this.totalProfit = 0;
    this.workload = this.capacity - this.clients.length;
  }

  newCustomer(ownerName, petName, kind, procedures) {
    if (this.workload <= 0) {
      throw new Error("Sorry, we are not able to accept more patients!");
    }
    {ownerName, pets}
    {petName, kind, procedures}
    
  }

  onLeaving(ownerName, petName) {
    
  }
}


let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());

// Corresponding output
// Welcome Tom!
// Welcome Max!
// Welcome Tiny!
// Goodbye Tiny. Stay safe!
// SoftCare is 20% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
// SoftCare is 30% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Sara - a dog that needs: A154B
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB