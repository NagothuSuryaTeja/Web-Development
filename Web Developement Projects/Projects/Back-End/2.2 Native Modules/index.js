const fs= require("fs");
// fs.writeFile("Message.txt","hello Node I'm suryateja",(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});