// let n = 7;
// if(n ==7){
//     console.log("Chu nhat");
// }
// else if (n==1){
//     console.log("Thu hai");
// }
// else if (n==2){
//     console.log("Thu ba");
// }
// else if (n==3){
//     console.log("Thu tu");
// }
// else if (n==4){
//     console.log("Thu nam");
// }
// else if (n==5){
//     console.log("Thu sau");
// }
// else if (n==6){
//     console.log("Thu bay");
// }

// let n = 10
// if ((n>=2) && (n<=8)){
//     console.clear();
//     console.log("Đúm");
// }else{
//     console.clear();
//     console.log("Sai");
// }

// let n = 3
// if ((n>=2)&&(n<=8)){
//     switch (n){
//         case 2:
//             console.log("Thứ 2");
//             break;
//         case 3:
//             console.log("Thứ 3");
//             break;

//         default:
//             break;    
//     }
// }


// let pass = 123456;
// (pass =="123456")? console.log("Đăng nhập thành công") : console.log("Đăng nhập thất bại")



// let array = ['a','b','c']
// for (const a in array){
//     console.log(array[1]);
// }


// Bài 1
alert("Bài 1 nè")
var n = prompt ("Nhập số n:");
if(n%2==0){
    alert("Số bạn đã nhập là số chẵn")
}else{
    alert("Số bạn đã nhập là số lẻ")
}

// bài 2
alert("Bài 2")
var a = prompt("Nhập số a:");
var b = prompt("Nhập số b:");
var c = prompt("Nhập số c:");
if((a>b)&&(a>c)){
    alert("Số lớn nhất là "+a);
}else if ((a<b)&&(c<b)){
    alert("Số lớn nhất là "+b);
}else{
    alert("Số lớn nhất là "+c);
}

// Bài 3
alert("Bài 3");
var num = prompt("Nhập số cần tính:");
var kqb3 = num;
if (num <0){
    alert("Số không hợp lệ");
}else if ((num ==0)||(num ==1)){
    alert("Kết quả là 1");
}else{
    while (num > 1){
        num--;
        kqb3 = kqb3 * num;
    }
    alert("Kết quả là "+kqb3);
}

// Bài 4
alert("Bài 4");
var n4 = prompt("Nhập số");
var i = 2;
while (i < n4){
    alert("Kết quả: "+i);
    i += 2;


}

//Bài 5
var arr = [];                               // define our array

for (var b5 = 0; b5 < 5; b5++) {              // loop 4 times
  arr.push(prompt('Nhập mảng ' + (b5+1))); // push the value into the array
}
alert('Các số bạn đã nhập: ' + arr.join(', '));     // alert the results
// var kqb5 = 0
// arr.forEach(function(ele){
//     if(arr <0)
//     kqb5 +=ele;
//     alert(kqb5)
// }) cứu



