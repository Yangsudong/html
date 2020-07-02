var num;
// undefined
document.write(typeof num);
document.write("<br>");
num = 10;
// number
document.write(typeof num);
document.write("<br>");
// string
num = "nice";
document.write(typeof num);
document.write("<br>");
num = {
    name: "Hong",
    age: 10
}
// object
document.write(typeof num);

// 연산
// 첫번째 열이 문자열이면 그 뒤에 연산들도 문자열로 인식. ( )안에 서는 숫자로 인식
var num1, num2, num3;
num1 = "Hello";
num2 = 15;      // num type;
num3 = 30;
num = num1 + (num2 + num3);
console.log(num);

num3 = "15";    // string type
console.log(num2 == num3);  // 값비교
console.log(num2 === num3); // 타입 비교

var sum = 0;
var i = 0;
for(var i=0; i<10; i++) {
    if(i<5) {
        continue;
    }   // 반복문에서 continue문을 만나면 continue 뒤로는 실행하지 않는다. --> 5+6+7+8+9
    sum = sum + i;
}
console.log("결과값은 " + sum);

var $sum = 10;
var _sum = 20;
var sum1 = null;
var num1 = 10;
