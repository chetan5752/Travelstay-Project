const mongoose = require("mongoose");
const initdata=require("./data.js");
const listing=require("../models/listing.js");

let MONGO_URL="mongodb://127.0.0.1:27017/Wanderlust";

main().then(()=>{
    console.log("Connected to DB");
})
.catch(err =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj, owner: "66bcdf8c16d865df7da68056"}))
    await listing.insertMany(initdata.data); // initdata is an object
    console.log("data was initilize");
};

initDB();