import mongoose from "mongoose";
export const ConnectMongoDB = async () => {
  // if(mongoose.connections[0]){
  //     return;
  // }
  await mongoose
    .connect(
      "connection_string"
    )
    .then(() => console.log("Your Application is Connected with Mongoose"))
};
