const fs = require("fs");

//!Dosya Okundu

/* fs.readFile("pass.txt", "utf-8", (err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log("Dosya Okundu");
}) */

//! Dosya Yazmak

/* fs.writeFile("example.txt", "Kodluyoruz","utf-8",(err)=>{
    if (err) {
        console.log(err);
        
    }
    console.log("Dosya başarılı bir şekilde oluşturuldu.");
}) */

/* fs.writeFile("example.json", '{"name":"Arin", "age":6}',"utf-8",(err)=>{
    if (err) {
        console.log(err);
        
    }
    console.log("Json Dosya başarılı bir şekilde oluşturuldu.");
}) */

//! Veri Ekleme

/* fs.appendFile("example.txt", "\nKodluyoruz 22","utf8",(err)=>{
    if(err) console.log(err);
    console.log("Json Dosya başarılı bir şekilde oluşturuldu.");
}) */

//! Dosya Silmek

/* fs.unlink("example.json", (err)=>{
    if(err) console.log(err);
    console.log("Dosya Silindi");
}) */

//! Klasörler oluşturmak

/* fs.mkdir("uploads/img", {recursive:true}, (err)=>{
    if(err) console.log(err);
    console.log("Klasorler olusturuldu");
}) */

//! Klasörler Silmek
/* 
fs.rmdir("uploads", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasörler Silindi.");
});
 */