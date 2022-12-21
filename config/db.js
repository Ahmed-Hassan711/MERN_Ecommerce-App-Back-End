const mongoose = require("mongoose");

MONGO_URI = "mongodb+srv://AhmedHassan:Knight007@cluster0.ofzz68w.mongodb.net/TestDB?retryWrites=true&w=majority"

try {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
