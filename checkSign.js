function checkSign(n){
    if (Math.sign(n)== -1){
        console.log ("Négatif");
    } else{
        console.log("Positif");
    }
}
checkSign(-2);
checkSign(0);
checkSign(5);

module.exports = checkSign;