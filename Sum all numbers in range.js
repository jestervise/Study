// way1 ProtoWay

function sumAll(arr) {
  var newArray= [...arr];
  var num1=newArray[0];
  var num2=newArray[1];

  var x=function(num,biggerNum){
    var counter=num;
    var newArray=[];
    for(var i=0;counter<=biggerNum;i++){
      newArray[i]=counter;
      counter++;
    }
    console.log(newArray);
    return newArray.reduce((x,y)=>{return x+y});
  }
 
  if(num1 <num2){
     return x(num1,num2);
  }else if(num1>num2){
     return x(num2,num1);
  }
}

sumAll([10,5]);

//way2 Advanced way

function sumAll(arr) {
  var newArray= [...arr];
  var min=Math.min(newArray[0],newArray[1]);
  var max=Math.max(newArray[0],newArray[1]);
  
    var newArray=[];
    for(var i=0;min<=max;i++){
      newArray[i]=min;
      min++;
    }

    console.log(newArray);
    return newArray.reduce((x,y)=>{return x+y});
 
}

sumAll([5,10]);

//way 3 solution

function sumAll(arr) {
  var newArray= [...arr];
  var min=Math.min(newArray[0],newArray[1]);
  var max=Math.max(newArray[0],newArray[1]);
  
    var newArray=[];
    for(var i=0;min<=max;i++){
      newArray[i]=min;
      min++;
    }

    console.log(newArray);
    return newArray.reduce((x,y)=>{return x+y});
 
}

sumAll([5,10]);