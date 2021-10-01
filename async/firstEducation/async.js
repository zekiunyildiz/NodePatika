function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler alınmaya çalışılıyor...");

    if (data) {
      resolve("Veriler alındı");
    } else {
      reject("Veriler alınmadı");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("Verilen düzenleniyor.");
    if (receivedData) {
      resolve("Veriler düzenlendi");
    } else {
      reject("Veriler düzenlenmedi");
    }
  });
}

/* getData(true)
.then(result => {
    console.log(result);
    return cleanData(true)
}).then(result=>{
    console.log(result);

}).catch(error=>{
    console.log(error);
}) */

async function processData() {
  try {
    const receivedData = await getData(false);
    console.log(receivedData);
    const cleanedData = await cleanData(true);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
}

processData();
