const fs = require('fs');

fs.writeFile('employees.json', '{"name": "JSON", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Başarılı işlem")
});


fs.readFile('employees.json', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("Başarılı Okudu")
});

fs.appendFile('employees.json', '\n HELLO!', (err) => {
    if (err) console.log(err);
    console.log('Veri ekleme işlemi tamam');
  });

  fs.rmdir('employees.json', { recursive: true }, (err) => {
    if (err) console.log(err);
  });