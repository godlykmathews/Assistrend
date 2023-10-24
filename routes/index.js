var express = require("express");
var router = express.Router();
var images = require("../helpers/gallery_helper");

router.get("/", function (req, res, next) {
  res.render("user/home", {title: "Home", home_active:true})
});

router.get("/about", function (req, res, next) {
  res.render("user/about", {title: "About", about_active:true})
});

router.get("/admissions", function (req, res, next) {
  res.render("user/admissions",{title: "Admissions", admissions_active:true})
});

router.get("/faculties", function (req, res, next) {
  res.render("user/faculties", {title: "Faculties", faculties_active:true})
});

router.get("/facilities", function (req, res, next) {
  res.render("user/facilities", {title: "Facilities", facilities_active:true})
});

router.get("/activity", function (req, res, next) {
  res.render("user/activity", {title: "Activity", activity_active:true})
});

router.get("/achievements", function (req, res, next) {
  res.render("user/achievements", {title: "Achievements", achievements_active:true})
});

router.get("/imagegallery", function (req, res, next) {
  res.render("user/imagegallery", {title: "Images", gallery_active:true, images})
});

router.get("/videogallery", function (req, res, next) {
  res.render("user/videogallery", {title: "Videos", gallery_active:true})
});

router.get("/contact", function (req, res, next) {
  res.render("user/contact", {title: "Contact", contact_active:true})
});

router.get("/alumni", function (req, res, next) {
  res.render("user/alumni_page",{title: "Alumni", alumni_active:true})
});

router.post("/", (req, res) => {

});

module.exports = router;
