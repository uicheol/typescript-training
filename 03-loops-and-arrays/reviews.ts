let reviews: number[] = [5, 5, 3, 3, 1, 4.5];

let total: number = 0;

for(let i=0; i<reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;
console.log("review average = " + average);
console.log(`review average = ${average}`);