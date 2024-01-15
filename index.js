let a;
let b;
let c;
let d;


function choosecurrency()
 {
    c = document.getElementById("select-currency").value
    c=document.getElementById("input-amount").placeholder 
}

function changedcurrency()
 {
   d = document.getElementById("currency-select").value
   d=document.getElementById("output-amount").placeholder 
}


function convert()
{
    c = document.getElementById("select-currency").value
    d= document.getElementById("currency-select").value
    fetch(`https://v6.exchangerate-api.com/v6/cbf538c7195d2d426b2c9f92/latest/${c}`)
    .then((res)=>{
        return res.json()
    })
    .then((data) => {
        d = document.getElementById("currency-select").value
        a = document.getElementById("input-amount")
        b = document.getElementById("output-amount")
        const conversion_rates= data.conversion_rates[d]
        b.value= a.value*conversion_rates
    })
}
function time()
{
    let d = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    d=d.toLocaleDateString(undefined, options)
    document.getElementById('time').innerHTML=" Last update at" +" "+ time +" "+ "on"+" "+ d
}

const lastUpdate=time()
document.getElementById('time').innerHTML= lastUpdate()




