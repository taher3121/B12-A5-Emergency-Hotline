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
        
        if(e.target.className.includes("call-now")) {
            
            const callNow = e.target;
            const serviceName = callNow.parentNode.parentNode.children[1].children[0].innerText
            const serviceNumber = callNow.parentNode.parentNode.children[2].children[0].innerText
            alert('calling' + ' ' + serviceName + ' ' + serviceNumber)
            const getCoin = Number(getElement("coin").innerText);
            const updateCoin = getCoin - 20;
            getElement("coin").innerText = updateCoin;


        }
    }
    else{
        alert('Have Insufficient coin to call..........')
    }

})