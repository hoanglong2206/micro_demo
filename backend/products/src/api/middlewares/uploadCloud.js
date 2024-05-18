const uploadToCloudinary = require('../../utils/uploadToCloudinary');

module.exports.upload = async (req, res, next) => {
  if(req.files) {
    for(file in files){
      const link = await uploadToCloudinary(req.file.buffer);
      if(file.fieldname == 'imageCover'){
        req.body[file.fieldname] = link;
      }else{
        req.body[file.fieldname].push(link);
      }
    }
    
  }

  next();
}