const day = +prompt('Введить число від 1 до 31:')

if(day>=1 && day <= 10){
    console.log('1');
}else if (day > 10 && day <=20 ){
    console.log('2')
}else if (day > 20 && day <= 31){
    console.log(3)
}else{
    console.log('не вірно')
}