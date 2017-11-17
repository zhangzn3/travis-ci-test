/**
 * Created by Administrator on 2017/11/17.
 */
var arr=[1,2,3,4,5];
var objArr=arr.reduce(function(prev,cur){
    prev[cur]=cur;
    return prev;
},{});
console.info(objArr); //{ '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }