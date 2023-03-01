const myPromise = new Promise((resolve, reject) => {
    if(5>3){
        resolve("Success!");
    } else {
        reject("Failure!");
    }
});

async function myFunction(){
    try{
        const result = await myPromise;
        console.log(result);
    }catch(err) {
        console.log(err);
    }
}

myFunction();