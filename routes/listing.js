const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const listing=require("../models/listing.js");
const {isLoggedin, isOwner, validateListing}=require("../middleware.js");
const ListingController=require("../controllers/listing.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({storage});

router.route("/")
.get(wrapAsync (ListingController.index))
.post(isLoggedin,upload.single("listing[image]"),validateListing,wrapAsync (ListingController.createNew)
);

//New route
router.get("/new",isLoggedin,ListingController.renderNewform);

router.route("/:id")
.get(wrapAsync(ListingController.show))
.put (isLoggedin,isOwner,upload.single("listing[image]"),validateListing,wrapAsync (ListingController.updateListing))
.delete(isLoggedin,isOwner,wrapAsync(ListingController.deleteListing))

//Edit route
router.get("/:id/edit",isLoggedin,isOwner,wrapAsync(ListingController.renderEdit));

//delete Route
router

module.exports=router;