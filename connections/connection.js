import mongoose from "mongoose";

export const connect = mongoose.connect("mongodb://localhost:27017/Users", { useUnifiedTopology: true, useNewUrlParser: true });

