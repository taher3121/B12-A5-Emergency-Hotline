console.log("mama conected")

function getElement(id){
    const element = document.getElementById(id);
    return element
}

// Heart Section//
document.getElementById("cart-container").addEventListener('click', function(e){
    if(e.target.className.includes("fa-heart")){
        const getCount = Number(getElement("red-heart").innerText);
        const updated = getCount+1;
        getElement("red-heart").innerText= updated;
    }
})
////////////////////////////////////////////////////////////////////////////////