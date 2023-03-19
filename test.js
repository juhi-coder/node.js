//console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 3000)
// setTimeout(() => console.log('d'), 0)
// console.log('e');
// a
// b
// c
// d
// e

const fetchData = () =>{
    const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('d');
        //resolve('e');
    },0);
    
});
    return promise;
}; 

const fetchData1 = () =>{
    const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('e');
    },1000);
    
});
    return promise;
}; 

setTimeout(()=>
{
    console.log('c')
    fetchData().then(text=>{
        console.log(text) 
    })   

     fetchData1().then(text=>{
        console.log(text) 
    })   
     return fetchData1();
     
     
    
},3000);

console.log('a');
console.log('b');
