// Bài 1: Giải phương trình bậc 2: ax2 + bx + c = 0

let a = 2;
let b = 3;
let c = 5;
if(a == 0){
    if(b == 0){
        if(c == 0){
            console.log("Phuong trinh vo so nghiem");
        }
        else{
            console.log("Phuong trinh vo nghiem");
        }
    }
    else{
        console.log("Phuong trinh co nghiem duy nhat x = " +(-c/a));
    }
}
else{
    let delta = b*b - 4*a*c;
    if(delta > 0){
        let x1 = (-b-Math.sqrt(delta))/(2*a);
        let x2 = (-b+Math.sqrt(delta))/(2*a);
        console.log("Nghiem thu nhat la X1 =" +x1 +"\n Nghiem thu hai la X2 =" +x2);
    }
    else if(delta == 0){
        let x = -b/2*a;
        console.log("Phuong trinh co nghiem kep X1 = X2 =" +x);
    }
    else{
        console.log("Phuong trinh vo nghiem");
    }
    
}

// Bài 2: Tìm số a có phải là số nguyên tố không ?

let n = 3;
if(n < 2){
    console.log("not prime");
}
else{
    for(let i=2; i < n-1; i++){
        if(n % i == 0){
            console.log("Not prime");
        }
        else{
            console.log("prime");
        } 
    }
}

