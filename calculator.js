const total=document.querySelectorAll('button')
console.log(total)
var printer=''
var numbers=[]
var operators=[]
const div=document.querySelector('.calculator-screen')
div.setAttribute("style","font-weight:200")
total.forEach(button=>{
    button.addEventListener('click',()=>{
        const value=button.getAttribute('data-value')
        const div=document.querySelector('.calculator-screen')
        const live=document.querySelector('.live')
        if(value==="C")
        {
            div.textContent=''
            printer=''
            numbers=[]
            operands=[]
        }
        else if(value==="B")
        {
            printer=printer.slice(0,-1)
            div.textContent=printer
        }
        else if(value==='Add' || value==="Multiply" || value==="Divide" || value==="Sub")
        {
            if(printer!='')
            {
            numbers.push(parseInt(printer))
            operators.push(value)
            printer=''
            }
        }
        else if(value==='Equals')
        {
            if(printer!='')
            {
                numbers.push(parseInt(printer))
            }

            while(operators.length>0)
            {
                let num1=numbers.shift()
                let num2=numbers.shift()
                let operator=operators.shift()

                if(operator==='Add')
                {
                    numbers.unshift(num1+num2)
                }
                else if(operator==='Multiply')
                {
                    numbers.unshift(num1*num2)

                }
                else if(operator==="Sub")
                {
                    numbers.unshift(num1-num2)
                }
                else if(operator==="Divide")
                {
                    numbers.unshift(num1/num2)
                }
            }
            printer=numbers[0].toString();
            div.textContent=printer
            numbers=[]
            operators=[]
        }
        else{
        printer+=value
        div.textContent=printer
        }

    })
})

// arr=['+','-','*','/']
// function mapper()
// {
//     return ['Add','Sub','Multiply','Divide']
// }
// console.log(arr.map(mapper[i]))
// console.log(arr)

// total.forEach(button=>{
//     button.addEventListener('keydown',(event)=>{
//         var value=button.getAttribute('data-value')
//         const div=document.querySelector('.calculator-screen')
//         const live=document.querySelector('.live')
//         if(event.key==='c')
//         {
//             div.textContent=''
//             printer=''
//             numbers=[]
//             operands=[]
//         }
//         else if(event.key==='Backspace')
//         {
//             printer=printer.slice(0,-1)
//             div.textContent=printer
//         }
//         else if(event.key==='+' || event.key==="*" || event.key==="/" || event.key==="-")
//         {
//             if(event.key=='+')
//                 value='Add'
//             else if(event.key==='-')
//                 value='Sub'
//             else if(event.key==='/')
//                 value='Divide'
//             else if(event.key==='*')
//                 value='Multiply'
//             if(printer!='')
//             {
//             numbers.push(parseInt(printer))
//             operators.push(value)
//             printer=''
//             }
//         }
//         else if(event.key==='Enter')
//         {
//             if(printer!='')
//             {
//                 numbers.push(parseInt(printer))
//             }

//             while(operators.length>0)
//             {
//                 let num1=numbers.shift()
//                 let num2=numbers.shift()
//                 let operator=operators.shift()

//                 if(operator==='Add')
//                 {
//                     numbers.unshift(num1+num2)
//                 }
//                 else if(operator==='Multiply')
//                 {
//                     numbers.unshift(num1*num2)

//                 }
//                 else if(operator==="Sub")
//                 {
//                     numbers.unshift(num1-num2)
//                 }
//                 else if(operator==="Divide")
//                 {
//                     numbers.unshift(num1/num2)
//                 }
//             }
//             printer=numbers[0].toString();
//             div.textContent=printer
//             numbers=[]
//             operators=[]
//         }
//         else if(event.key==='Shift')
//         {
//             printer=''
//         }
//         else{
//         printer+=value
//         div.textContent=printer
//         }

//     })
// })

document.addEventListener('keydown',(event)=>{
    // var value=button.getAttribute('data-value')
    const div=document.querySelector('.calculator-screen')
    const live=document.querySelector('.live')
    if(event.key==='c')
    {
        div.textContent=''
        printer=''
        numbers=[]
        operands=[]
    }
    else if(event.key==='Backspace')
    {
        printer=printer.slice(0,-1)
        div.textContent=printer
    }
    else if((event.shiftKey && (event.key==='+' || event.key==="*")) || event.key==="/" || event.key==="-")
    {
        if(event.key=='+')
            operators.push('Add')
        else if(event.key==='-')
            operators.push('Sub')
        else if(event.key==='/')
            operators.push('Divide')
        else if(event.key==='*')
            operators.push('Multiply')
        if(printer!='')
        {
        numbers.push(parseInt(printer))
        printer=''
        }
    }
    else if(event.key==='Enter')
    {
        if(printer!='')
        {
            numbers.push(parseInt(printer))
        }

        while(operators.length>0)
        {
            let num1=numbers.shift()
            let num2=numbers.shift()
            let operator=operators.shift()

            if(operator==='Add')
            {
                numbers.unshift(num1+num2)
            }
            else if(operator==='Multiply')
            {
                numbers.unshift(num1*num2)
            }
            else if(operator==="Sub")
            {
                numbers.unshift(num1-num2)
            }
            else if(operator==="Divide")
            {
                numbers.unshift(num1/num2)
            }
        }
        printer=numbers[0].toString();
        div.textContent=printer
        numbers=[]
        operators=[]
    }
    else{
    if(!event.shiftKey)
        printer+=event.key
    div.textContent=printer
    }
})