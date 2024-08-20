const mongoose=require("mongoose");
const schema=mongoose.Schema;
const Review=require("./review.js");

const listingSchema = new schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : 
    {
        url: String,
        filename: String,
    },
    price : Number,
    location : String,
    country : String,
    reviews:[
        {
            type: schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner:{
        type: schema.Types.ObjectId,
        ref:"User",
    },
    geometry:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

listingSchema.post("findOneAndDelete", async (Listing)=>{
    if(Listing){
        await Review.deleteMany({_id : {$in: Listing.reviews}});
    }
});

const listing=mongoose.model("listing",listingSchema);
module.exports=listing;