const fs = require("fs");

const data = "New File Contents is added to new written file";

fs.writeFile('/home/sachin/Documents/CGCS phase2/NodeJS/nodeJS-synchronous-and-asynchronous/write.txt', data, (err,data) => {
     console.log(err);
    console.log("Successfully Written to File.");
});
