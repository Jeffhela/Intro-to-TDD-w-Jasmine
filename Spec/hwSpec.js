//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.

//sum1toN(255) returns the sum of all numbers from 1 to 255


function sum1ToN(N) {
    var total = 0;
      for(var i = 1; i <= 255; i++){
        total += i;
      }
      return total;
  }

//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr){
    let n1 = Number(arr[0]);
    let n2 = Number(arr[arr.length - 1]);
    console.log(n1 + n2);
}
sumFirstLast([20, 30, 40]);

//return largest number in the array

function returnLargest(a){
    arr = a;  
    max = 0;
    newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    newArr.push(max);
    return newArr
}
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("returnLargest", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(returnLargest([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(returnLargest([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(returnLargest([-6,23,3,-4])).toEqual(-10); 
    }); 
});