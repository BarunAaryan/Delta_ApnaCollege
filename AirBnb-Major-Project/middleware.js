module.exports.isLoggedIn= (req, res, next)=>{
    // console.log(req.user); //to check we are logged in or not
// console.log(req.path, "..", req.originalUrl);
    if (!req.isAuthenticated()) {
        req.session.redirectUrl= req.originalUrl;
        req.flash("error", "You must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl= (req, res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl= req.session.redirectUrl;
    }
    next();
}