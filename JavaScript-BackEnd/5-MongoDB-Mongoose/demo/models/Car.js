const {Schema, model} = require('mongoose');

const carSchema = new Schema({
  name: { type: String, required: true },
  price: {
    type: Number,
    default: 0,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: 'Price cannot be negative number!'
    }
  }
});

carSchema.methods.showPrice = function () {
  console.log(`${this.name}, cost ${this.price}`);
}

carSchema.virtual('VAT').get(function () {
  return this.price * 0.2;
})

const Car = model('Car', carSchema);

module.exports = Car;