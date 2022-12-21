const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://AhmedHassan:Knight007@cluster0.ofzz68w.mongodb.net/TestDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
