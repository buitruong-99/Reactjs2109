console.log("Bai 4: In dãy số nguyên tố từ 1 đến n")
function SoNguyenTo(number) {
    if (number < 2) {
        // console.log("not prime");
    }
    else {
        let count = 0
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                count++
            }
        }
        if (count > 0 && number > 1) {
            // console.log("not prime");
            return false;
        } else {
            // console.log("prime");
            return true;
        }
    }
}
function InSoNguyenTo(n) {
    for (let i = 1; i <= n; i++) {
        if (SoNguyenTo(i) == true) {
            console.log(i);
        }
    }
}
InSoNguyenTo(10)
console.log("------------------------------------");
console.log("Bai 5: Tính tổng dãy số từ 1 đến n");
function tongDaySo(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    console.log(sum);
}
tongDaySo(10)



console.log("------------------------------------");
console.log("Bài 6: Tính tổng bình phương của các số từ 1 đến n ");
function bai6(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        let Squared = i * i;
        sum += Squared;
    }
    console.log(sum);
}
bai6(3)


console.log("------------------------------------");
console.log("Bài 7: Tính tổng các số lẻ từ 1 đến n ");
function bai7(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 != 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`Tổng của dãy số trên là: ${sum}`);
}
bai7(4)


console.log("------------------------------------");
console.log("Bài 10: In bảng cửu chương ra màn hình? ");
function multiplicationBoard(){
    for(let i = 2 ;i<=9 ; i++){
        for(let j=1;j<=10;j++){
            let multi = i*j
            console.log(`${i} x ${j} = ${multi}`)
        }
    }
}multiplicationBoard(2)