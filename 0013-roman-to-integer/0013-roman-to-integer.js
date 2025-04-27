/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

   var map = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000, "IV": 4,"IX":9, "XL":40, "XC": 90, "CD": 400, "CM" :900}
   console.log(s.split(""))
   var arr = s.split("")
   var res_arr = []
   var res = 0;
   var flag = 0;

   for(var i=0; i<arr.length; i++){

    if(flag == 1){
        flag = 0;
        continue;
    }
    if(arr[i] == "I" && (arr[i+1] == "V" || arr[i+1] == "X")){

        res_arr.push(arr[i]+arr[i+1])
        flag = 1

    } else if(arr[i] == "X" && (arr[i+1] == "L" || arr[i+1] == "C")) {
        res_arr.push(arr[i]+arr[i+1])
        flag = 1
    } else if(arr[i] == "C" && (arr[i+1] == "D" || arr[i+1] == "M")) {
        res_arr.push(arr[i]+arr[i+1])
        flag = 1
    }
    else{
        res_arr.push(arr[i])
    }
   }

   console.log(res_arr)

   for(var item in res_arr){
    
    res += map[res_arr[item]]
   }
   return res

};