const myPromise = new Promise((resolve, reject) => {
    if(5>3){
        resolve("Success!");
    } else {
        reject("Failure!");
    }
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));