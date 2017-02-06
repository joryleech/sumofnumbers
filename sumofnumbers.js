/**
 * Created by Jory Leech on 2/5/2017.
 */

let sumFor = function(list)
{
  let i=0;
  let result=0;
  for(i=0;i<list.length;i++){
    result+=list[i];
  }
  return result;
}

let sumWhile=function(list)
{
  let result=0
  while(list.length>0){
    result+=list.pop();
  }
  return result;
}

let sumRecursion=function(list)
{
  let x=0;
  if(list.length<=1){
    return list[0];
  }else{

    x= (list[0]+sumRecursion(_.rest(list)));
    return x;
  }
}

let sumUnderscore= function(list){
  return _.reduce(list, function(memo,cont){return memo+cont});
}

let list = [2,5,5,3,6];
console.log(sumFor(list));
console.log(sumRecursion(list));
console.log(sumUnderscore(list));
console.log(sumWhile(list));
