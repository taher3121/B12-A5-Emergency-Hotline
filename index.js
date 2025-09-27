console.log("mama conected")

function getElement(id) {
    const element = document.getElementById(id);
    return element
}

// Heart Section//
document.getElementById("cart-container").addEventListener('click', function (e) {
    if (e.target.className.includes("fa-heart")) {
        const getCount = Number(getElement("red-heart").innerText);
        const updated = getCount + 1;
        getElement("red-heart").innerText = updated;
    }
})
////////////////////////////////////////////////////////////////////////////////

// Call Buttons

document.getElementById("cart-container").addEventListener('click', function (e) {
    e.preventDefault()

    const getCoinValue = Number(getElement("coin").innerText);

    if (getCoinValue >= 20) {

        if (e.target.className.includes("call-now") || e.target.className.includes("fa-phone")) {

            const callNow = e.target;
            const serviceName = callNow.parentNode.parentNode.children[1].children[0].innerText
            const serviceNumber = callNow.parentNode.parentNode.children[2].children[0].innerText
            alert('calling' + ' ' + serviceName + ' ' + serviceNumber)
            const getCoin = Number(getElement("coin").innerText);
            const updateCoin = getCoin - 20;
            getElement("coin").innerText = updateCoin;

            const history = getElement("call-history")

            const newHistory = document.createElement("div")

            newHistory.innerHTML = `
                <div class="flex justify-between p-4 items-center bg-gray-100 rounded-2xl my-1">
                    <div>
                        <p class="font-[600] text-[15px]">${serviceName}</p>
                        <p class="text-[12px] text-gray-700">${serviceNumber}</p>
                    </div>
                    <p>${new Date().toLocaleTimeString()}</p>
                </div>
            
            `
            history.append(newHistory);


        }
    }
    else {
        alert('Have Insufficient coin to call..........')
    }

})

document.getElementById("clear").addEventListener('click',function(){
    const history = getElement("call-history");
    history.innerHTML=""
})


document.getElementById("cart-container").addEventListener('click', function(e){
    if (e.target.className.includes("copy-btn") || e.target.className.includes("fa-copy")){
        console.log('hello')
        const copyCount = Number(getElement("copy-count").innerText);
        const newCount= copyCount+1
        getElement("copy-count").innerText= newCount
    }
})