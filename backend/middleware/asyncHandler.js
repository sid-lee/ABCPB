const asyncHandler = fn => ( req, res, next ) => {
    //Callbacks on using controllers
    Promise.resolve( fn(req, res, next)).catch(next);
} 

export default asyncHandler;