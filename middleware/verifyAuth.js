module.exports = (req, res, next) => {
    if (req.cookies.token !== 'c72cf1b0-5398-46de-96ad-86887409fdc8') {
        res.sendStatus(401);
    }
    next()
}