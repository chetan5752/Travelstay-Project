module.exports = (fn) => {  //directly exports to app.js
    return (req,res,next)=>{
        fn(req,res).catch(next);
    };
};