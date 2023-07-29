module.exports = ({res, statusCode, data, message = "none"})=>{
    res.status(statusCode).json({
        message: message,
        status: statusCode,
        data: data
    })
}