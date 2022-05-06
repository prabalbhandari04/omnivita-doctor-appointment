const Appointment = require('../models/appointment.js');
const mongoose = require("mongoose");
 
const url = 'mongodb+srv://viron:GqZkjxd283@cluster0.intj4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
 
beforeAll(async () =>{
    await mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    })
})
 
afterAll(async () => {
    await mongoose.connection.close();
})
 
describe('Appointment Schema test', () => {

 it('Add appointment', () => {

 const appointment = {
 'appointmentName': 'test',
 
 };
 
 return Appointment.create(appointment)
 .then((pro_ret) => {
 expect(pro_ret.title).toEqual('test');
 });
  });