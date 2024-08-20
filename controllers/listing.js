const listing=require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index=async (req,res)=>{
    const allListing=await listing.find({});
    res.render("listings/index.ejs",{allListing});
}

module.exports.renderNewform=(req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.show=async (req,res)=>{
    let {id} =req.params;
    const Listing=await listing.findById(id).populate({path: "reviews" ,populate:{path : "author"}}).populate("owner");
    if(!Listing){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{Listing});
};

module.exports.createNew=async(req,res,next)=>{
    let response=await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
        .send()

    let url=req.file.path;
    let filename=req.file.filename;

    const newListing=new listing(req.body.listing);
    newListing.image={url,filename};
    newListing.owner=req.user._id;//req.user in passport and user._id represent owner id

    newListing.geometry=response.body.features[0].geometry;

    let saveListing=await newListing.save();
    console.log(saveListing);
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEdit=async(req,res)=>{
    let { id } = req.params;
    const Listing = await listing.findById(id);
    if(!Listing){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }

    let OriginalImage=Listing.image.url;
    OriginalImage=OriginalImage.replace("/upload","/upload/w_250")
    res.render("listings/edit.ejs", { Listing ,OriginalImage});
};

module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
    let Listing=await listing.findByIdAndUpdate(id, { ...req.body.listing });

    if(typeof req.file !="undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    Listing.image={url,filename};
    await Listing.save();
    }

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing=async(req,res)=>{
    let {id}=req.params;
    let deletelisting=await listing.findByIdAndDelete(id);
    req.flash("success","New Listing Deleted!");
    res.redirect("/listings");
};