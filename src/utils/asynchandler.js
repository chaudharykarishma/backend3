const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.response(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}



export { asyncHandler }