let array1=[1,2,3,4,5,6,7,8,9,10]
let array2=[11,12,13,14,15,16,17,18,19,20]

let array = array1.concat(array2)
let Odd = [ ]
let Even = [ ]
let sumEven = 0
let sumOdd = 0
for(let i=0; i<array.length; i++)
 {
     if(array[i]%2==0){
        Even.push(array[i])
        sumEven += array[i]
     } 
     else
     {     
      Odd.push(array[i])
      sumOdd += array[i]
     }
     }
     console.log("Even numbers are "+Even)
     console.log(Odd)
     document.write(" array=" + array + "<br>") 
     document.write("Even numbers = "+Even + "<br>")
     document.write("The Sum of Even is ="+sumEven +"<br>" )
     document.write("Odd numbers =" + Odd +"<br>")
     document.write("The sum of Odd is= "+sumOdd+"<br>" )