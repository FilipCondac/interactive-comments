import mongoose from "mongoose";

// MongoDB Connection

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI!);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }

  const connection = mongoose.connection;

  if (connection.readyState >= 1) {
    console.log("MongoDB Connected");
    return;
  } else {
    connection.on("error", () => {
      console.log("MongoDB Connection Error");
    });
  }
};

export default connectDB;
