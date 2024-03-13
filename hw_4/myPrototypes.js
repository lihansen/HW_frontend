// Homework for today:
// implement your own prototype methods for the following array methods:


//map, filter, reduce, every, find, includes,
//join, pop, push, reverse, slice, some, sort,

// render result on html page

function renderResult(result){
    const resultDiv = document.getElementsByClassName("result")[0];
    const p = document.createElement("p");
    p.innerHTML = result;
    resultDiv.appendChild(p);
}



const myArr = [1, 2, 3, 4, 5];

// built-in forEach
console.log("built-in forEach:");
renderResult("built-in forEach:");
myArr.forEach((value, index, arr) => {
    console.log(value)
    renderResult(value);
});

Array.prototype.myForEach = function (cb){
    for (let i=0; i< this.length; i++){
        cb(this[i], i, this);
    }
}
console.log("myForEach:");
renderResult("myForEach:");
myArr.myForEach((value, index, arr) => {
    console.log(value);
    renderResult(value);
});


// built-in map


console.log("built-in map:", myArr.map((value, index, array)=> value + 1));
renderResult("built-in map:" + myArr.map((value, index, array)=> value + 1));

Array.prototype.myMap = function (cb){
    const myNewArr = [];
    for (let i=0; i< this.length; i++){
        myNewArr.push(cb(this[i], i, this));
    }
    return myNewArr;
}


console.log("myMap:", myArr.myMap((value) => value + 1));
renderResult("myMap:" + myArr.myMap((value) => value + 1));


// built-in filter

console.log("built-in filter:", myArr.filter((number) => number > 2));
renderResult("built-in filter:" + myArr.filter((number) => number > 2));

Array.prototype.myFilter = function (cb){
    const myNewArr = [];
    for (let i=0; i< this.length; i++){
        if (cb(this[i], i, this)){
            myNewArr.push(this[i]);
        }
    }
    return myNewArr;
}

console.log("myFilter:", myArr.myFilter((number, index, array) => number > 2));
renderResult("myFilter:" + myArr.myFilter((number, index, array) => number > 2));

// built-in reduce

console.log("built-in reduce:", myArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
renderResult("built-in reduce:" + myArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0));


Array.prototype.myReduce = function (cb, initialValue){
    let acc = initialValue;
    for (let i=0; i< this.length; i++){
        acc = cb(acc, this[i], i, this);
    }
    return acc; // return the final value of the accumulator
}

console.log("myReduce:", myArr.myReduce((acc, value) => acc + value, 0));
renderResult("myReduce:" + myArr.myReduce((acc, value) => acc + value, 0));

// built-in every

console.log("built-in every:", myArr.every((value) => value > 2));
renderResult("built-in every:" + myArr.every((value) => value > 2));


Array.prototype.myEvery = function (cb){
    for (let i=0; i< this.length; i++){
        if (!cb(this[i], i, this)){
            return false;
        }
    }
    return true;
}

console.log("myEvery:", myArr.myEvery((value) => value > 2));
renderResult("myEvery:" + myArr.myEvery((value) => value > 2));
// built-in find

console.log("built-in find:", myArr.find((value) => value > 2));
renderResult("built-in find:" + myArr.find((value) => value > 2));

Array.prototype.myFind = function (cb){
    for (let i=0; i< this.length; i++){
        if (cb(this[i], i, this)){
            return this[i];
        }
    }
}

console.log("myFind:", myArr.myFind((value) => value > 2));
renderResult("myFind:" + myArr.myFind((value) => value > 2));

// built-in includes

console.log("built-in includes:", myArr.includes(2));
renderResult("built-in includes:" + myArr.includes(2));

Array.prototype.myIncludes = function (value){
    for (let i=0; i< this.length; i++){
        if (this[i] === value){
            return true;
        }
    }
    return false;
}

console.log("myIncludes:", myArr.myIncludes(2));
renderResult("myIncludes:" + myArr.myIncludes(2));


// built-in join

console.log("built-in join:", myArr.join("-"));
renderResult("built-in join:" + myArr.join("-"));

Array.prototype.myJoin = function (separator){
    let result = "";
    for (let i=0; i< this.length; i++){
        result += this[i];
        if (i < this.length - 1){
            result += separator;
        }
    }
    return result;
}

console.log("myJoin:", myArr.myJoin("-"));
renderResult("myJoin:" + myArr.myJoin("-"));

// built-in pop

console.log("built-in pop:", myArr.pop(), myArr);
renderResult("built-in pop:" + myArr.pop() );

Array.prototype.myPop = function (){
    const lastElement = this[this.length - 1];
    this.length = this.length - 1;
    return lastElement;
}

console.log("myPop:", myArr.myPop(), myArr);
renderResult("myPop:" + myArr.myPop() );

// built-in push

console.log("built-in push:", myArr.push(4), myArr);
renderResult("built-in push:" + myArr.push(4) );

Array.prototype.myPush = function (value){
    this[this.length] = value;
    return this.length;
}

console.log("myPush:", myArr.myPush(5), myArr);
renderResult("myPush:" + myArr.myPush(5) );


// built-in reverse

console.log("built-in reverse:", myArr.reverse(), myArr);
renderResult("built-in reverse:" + myArr.reverse() );

Array.prototype.myReverse = function (){
    const result = [];
    for (let i=0; i< this.length; i++){
        result[i] = this[this.length - 1 - i];
    }
    return result;

}

console.log("myReverse:", myArr.myReverse(), myArr);
renderResult("myReverse:" + myArr.myReverse() );


// built-in slice

console.log("built-in slice:", myArr.slice(1, 3), myArr);
renderResult("built-in slice:" + myArr.slice(1, 3) );

Array.prototype.mySlice = function (start, end){
    const result = [];
    for (let i=start; i< end; i++){
        result.push(this[i]);
    }
    return result;
}

console.log("mySlice:", myArr.mySlice(1, 3), myArr);
renderResult("mySlice:" + myArr.mySlice(1, 3) );


// built-in some

console.log("built-in some:", myArr.some((value) => value > 2));
renderResult("built-in some:" + myArr.some((value) => value > 2));

Array.prototype.mySome = function (cb){
    for (let i=0; i< this.length; i++){
        if (cb(this[i], i, this)){
            return true;
        }
    }
    return false;
}

console.log("mySome:", myArr.mySome((value) => value > 2));
renderResult("mySome:" + myArr.mySome((value) => value > 2));


// built-in sort

console.log("built-in sort:", myArr.sort((a, b) => a - b));
renderResult("built-in sort:" + myArr.sort((a, b) => a - b));

Array.prototype.mySort = function (cb){
    for (let i=0; i< this.length; i++){
        for (let j=0; j< this.length; j++){
            if (cb(this[i], this[j]) < 0){
                const temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}

console.log("mySort:", myArr.mySort((a, b) => a  - b));
renderResult("mySort:" + myArr.mySort((a, b) => a - b));


