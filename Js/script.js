function add(c,d){
    if(typeof c ==="string" && typeof d ==="string"){
        return c + d;
    }else{
        console.log("Veuillez entrez les bonnes lettres");
    }
}
console.log(add("bonjour"," Monsieur"));