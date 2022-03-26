let date= new Date();
// console.log(date);
let hour= date.getHours();
let minut= date.getMinutes();

console.log(hour);
console.log(minut);
if(hour>9 && hour <=19 ){
    console.log('siz ishdasiz');
}else if(hour > 19 && hour < 20){
    console.log('siz kursga ketayapsiz');
}else if(hour >= 20 && hour <= 22){
    console.log('siz kursdasiz');
}else if(hour > 22 && hour < 23){
    console.log('siz kursdan qaytayapsiz');
}else{
    console.log('siz dam olayapsiz')
}