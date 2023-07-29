const expressError = (err, req, res, next)=>{
    res.status(err.statusCode || 400).json({
        error: true,
        status: err.statusCode,
        message: err.message
        }
    )
}

module.exports = expressError