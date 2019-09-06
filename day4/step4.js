const nand = (paramA,paramB)=> Boolean(!(paramA&&paramB));
// console.log(nand(false,false))
// console.log(nand(false,true))
// console.log(nand(true,false))
// console.log(nand(true,true))

const nor = (paramA,paramB)=> Boolean(!(paramA||paramB));
// console.log(nor(false,false))
// console.log(nor(false,true))
// console.log(nor(true,false))
// console.log(nor(true,true))

const xor = (paramA,paramB)=> Boolean((paramA&&!paramB)||(!paramA&&paramB))
// console.log(xor(false,false))
// console.log(xor(false,true))
// console.log(xor(true,false))
// console.log(xor(true,true))

const halfadder = (paramA,paramB)=>{
    const sum=xor(paramA,paramB)
    const carry=paramA&&paramB
    return [Boolean(carry),Boolean(sum)]
}
// console.log(halfadder(true,true))
// console.log(halfadder(true,false))

const fulladder = (paramA,paramB,carry)=>{
    const sum=xor(xor(paramA,paramB),carry)
    const rcarry=( (xor(paramA,paramB)&&carry) || paramA&&paramB )
    return [Boolean(rcarry),Boolean(sum)]
}
// console.log(fulladder(true,true,true))
// console.log(fulladder(true,false,true))


const byte_8_Adder=(arr1,arr2)=>{
    let carry=false
    let value=0
    let ret=[]
    if(arr1.length!==arr2.length)
        {
            for(let i=0;i<Math.abs(arr1.length-arr2.length);i++)
            {
                if(arr1.length>arr2.length) arr2.push(false)
                else arr1.push(false)
            }

        }

        for(let i=0;i<arr1.length;i++)
        {
            value=xor(xor(arr1[i],arr2[i]),carry)
            ret.push(Boolean(value))
            carry=((xor(arr1[i],arr2[i])&&carry) || arr1[i]&&arr2[i])
        }
    ret.push(Boolean(carry))
    return ret
}

// byteA  = [ true,true,false,true,true,false,true,false ]
// byteB  = [ true,false,true,true,false,false,true,true ]
// console.log(byte_8_Adder(byteA,byteB))

// byteA  = [ true,true,false,false,true,false,true,false ]
// byteB  = [ true,true,false,true,true,false,false,true]
//  console.log(byte_8_Adder(byteA,byteB))

// byteA  = [ true,true,false,false,true,false,true ]
// byteB  = [ true,true,false,true,true,false,false,true]
//  console.log(byte_8_Adder(byteA,byteB))

//  byteA  = [ true,true,false,false]
//  byteB  = [ true,true,false,true]
//  console.log(byte_8_Adder(byteA,byteB))
const binaryTodecimal=(arr)=>{
    let ret=0
    let cnt=1
    for(let idx=0;idx<arr.length;idx++)
        if(Number(arr[idx])!==0)
            {
                cnt=1
                for(let j=0;j<idx;j++)
                {
                    cnt*=2
                }   
                ret+=cnt
            }
    
    return ret
}
//console.log(binaryTodecimal([true,true,true,true,false,true,false,true]))

const decimalTobinary=(num)=>{
    let ret=[]
    let cnt=0
    while(num>0)
    {
        cnt=num-parseInt(num/2)*2
        ret.push(Boolean(cnt))
        num=parseInt(num/2)
    }
    return ret
}
//console.log(decimalTobinary(173))