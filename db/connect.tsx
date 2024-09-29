const mongoose = require("mongoose");
// @ts-ignore
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://traderbloc:TraderBLOC@db.ia29h.mongodb.net/?retryWrites=true&w=majority&appName=db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
