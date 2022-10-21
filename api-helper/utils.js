import mongoose from 'mongoose'

export const connectToDB = async () => {
  if (mongoose.connections[0]) {
    return;
  }
  
  await mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(() => console.log('Connected to db'))
    .catch(err => console.log(err))
}