const express = require("express");
const mongoose = require("mongoose");
const ECMATodoroute = require("./routes/ECMATodoroutes")
var cors = require("cors");

const port = 8000;
const db = "mongodb://localhost:27017";


const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
connectDB();


const app = express();


const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(express.json())
app.use(cors(corsOptions));

app.use("/api",ECMATodoroute)

app.listen(port, () => {
	console.log(`Server up and running on port ${port}`);
});
