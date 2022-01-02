const authorize = (req,res,next) => {
    console.log(next)
    next()
}

module.exports = authorize;