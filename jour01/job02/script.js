alert('Hello Javascript!.')


function sommenombrespremiers (number1, number2)
{
    console.log('test');

    for (var i = 2 ; i<number1; i++){
        if(number1 % i ===0){
            return false;
        }
    }
    for (var i2 = 2; i2<number2; i2++) {
        if(number2 % i2 ===0) {
            return false;
        }
    }
    return (number1 + number2);

}
console.log (sommenombrespremiers(4, 4));
// console.log (sommenombrespremiers(7, 7));