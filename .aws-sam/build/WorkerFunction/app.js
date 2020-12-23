const fs = require("fs");
const file_path = "/mnt/efs/data.dat";

let response;

exports.lambdaHandler = async (event, context) => {

  let content;
  try {
    fs.writeFileSync(file_path,`[${new Date().getTime()}] hello!!`);
    content = fs.readFileSync(filePath);
  } catch (err) {
    return err;
  }

  response = {
    'statusCode': 200,
    'body': JSON.stringify({
      content
    })
  }

  return response
};
