const express=require("express");
const router=express.Router({mergeParams: true});
//mergepParams: Preserve the req.params values from the parent router. If the parent and the child have conflicting param names, the child’s value take precedence.
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const listing=require("../models/listing.js");
const {validateReview, isLoggedin, isReviewAuthor}=require("../middleware.js");

const reviewController=require("../controllers/review.js");

//review route
router.post("/",isLoggedin,validateReview,wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId",isLoggedin,isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports=router;