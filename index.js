import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {   message:"Enter the URL",
        name:"URL"  
    }
  ])
  .then((answers) => {
    var url = answers.URL
    var imageFile = qr.image(url);
    imageFile.pipe(fs.createWriteStream("QR_Code.png"));

  })
  .catch((error) => {
    if (error.isTtyError) {
        // console.log("Prompt couldn't be rendered in the current environment");
    } else {
        // console.log("Something else went wrong!");
    }
  });

