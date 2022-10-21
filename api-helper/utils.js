import mongoose from 'mongoose'

export const connectToDB = async () => {
  // if (mongoose.connections[0]) {
  //   return;
  // }
  
  await mongoose
    .connect('mongodb+srv://trynkoroman:left4dead88@cluster0.zgcq7g8.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to db'))
    .catch(err => console.log(err))
}