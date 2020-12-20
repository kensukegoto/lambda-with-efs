const fs = require("fs");
const file_path = "/mnt/EFS/data.dat";

let response;

exports.lambdaHandler = async (event, context) => {

  try {
    fs.writeFileSync(file_path,'hello,kensuke!!');
  } catch (err) {
    return err;
  }

  response = {
    'statusCode': 200,
    'body': JSON.stringify({
        message: 'ok',
    })
  }

  return response
};
