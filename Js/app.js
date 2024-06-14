function supFonction(a,b){
    if(typeof a === "number" && typeof b === "number"){
        if(a > b){
            return console.log(a*b);
        }else{
            return console.log(b-a);
        }
    }else{
        console.log("Veuillez entrez des nombres");
    }
}

supFonction("Bonjour",10);