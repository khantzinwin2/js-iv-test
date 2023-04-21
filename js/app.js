//selector
let items = document.querySelector("#items");
let quentity = document.querySelector("#quentity");
let inputForm = document.querySelector("#inputForm");
let tbody = document.querySelector("#tbody");
let totalCost = document.querySelector(".totalCost");



//function
function calcTotal(){
    let costs = document.querySelectorAll(".costs");
    let total = [...costs].reduce((pv,cv)=>{
        return  pv+Number(cv.innerText);
    },0)
    totalCost.innerHTML = total;
}

function del(event){
    if (confirm('')){
        event.target.parentElement.parentElement.remove();
        calcTotal();
    }


}

//process
products.forEach(function (product){
    let newOpt = new Option(product.name,product.id);
    items.append(newOpt);

});


// console.log(product.name)

inputForm.addEventListener(("submit"),(e)=>{
    let product = products.find((product)=>{
        return  items.value == product.id;
    });
    let cost = product.price * quentity.valueAsNumber;
    e.preventDefault();
    tbody.innerHTML += `
                 <tr class="align-middle tr">
                 <td class=" text-end">${product.name}
                 <p class="mb-0 mt-1 ms-auto text-danger del" onclick="del(event)">Delete</p>
                 </td>
                 <td class="text-end">${product.price}</td>
                 <td class="text-end">${quentity.valueAsNumber}</td>
                 <td class="text-end costs">${cost}</td>
                 </tr>
`;
    inputForm.reset();
    calcTotal();


    // let del = document.querySelectorAll(".del");
    // [...del].forEach((item)=>{
    //     item.addEventListener("click",(e)=>{
    //         e.target.parentElement.parentElement.remove();
    //         calcTotal();
    //
    //         // total -= e.target.parentElement.parentElement.lastElementChild.innerHTML
    //         // totalCost.innerHTML = total;
    //     })
    // });
})



