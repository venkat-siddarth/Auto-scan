const app=require("./app.js");
const dotenv=require('dotenv');
const mongoose=require("mongoose");
dotenv.config({path:'.env'});
var port = process.env.PORT || 8080;
mongoose.connect("mongodb+srv://SidduTarp:R4w1AKYOGTw5sAze@cluster0.ooihiva.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
});
app.listen(port,()=>{
    console.log(`Back-end running at 8080`);
})





