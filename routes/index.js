var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home", domain: process.env.DOMAIN });
});

router.get("/product/:type/:item", function(req, res, next) {
  if (req.params.type === "minecraft") {
    if (req.params.item === "non-full-access") {
      res.render("nfa", { title: "No Full Access", domain: process.env.DOMAIN });
      
    } else if (req.params.item === "unmigrated-full-access") {
      res.render("ufa", { title: "Unmigrated Full Access", domain: process.env.DOMAIN });
      
    } else if (req.params.item === "semi-full-access") {
      res.render("sfa", { title: "Semi Full Access", domain: process.env.DOMAIN });
      
    } else if (req.params.item === "email-access") {
      res.render("ea", { title: "Email Access", domain: process.env.DOMAIN });
      
    } else if (req.params.item === "optifine-cape") {
      res.render("ofcape", { title: "Optifine Cape", domain: process.env.DOMAIN });
      
    } else {
      res.redirect("/");
    }
  } else if (req.params.type === "vpn") {
    if (req.params.item === "nordvpn") {
      res.render("nord", { title: "NordVPN", domain: process.env.DOMAIN });
      
    } else if (req.params.item === "vyprvpn") {
      res.render("vypr", { title: "VyprVPN", domain: process.env.DOMAIN });
      
    } else if (req.params.item === "ipvanish") {
      res.render("ip", { title: "IPVanish", domain: process.env.DOMAIN });
      
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
});

router.get("/migrate", function (req, res, next) {
  res.render("migration", { title: "Migration" })
});

module.exports = router;
