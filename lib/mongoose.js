import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = "mongodb+srv://le_duong:thl123456@cluster0.9iwbax2.mongodb.net/?retryWrites=true&w=majority";
    return mongoose.connect(uri);
  }
}
