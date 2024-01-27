var ma5zan = [];
var oneProduct; 


function Submit()
{
    alert  ("Hiii")
}

function addProduct()
{

    var oneProduct = {
        Index :document.getElementById("Indexid").value,
        WebsiteName :document.getElementById("WebsiteNameid").value,
        Visit :document.getElementById("Visitid").value,
        Delete :document.getElementById("Deleteid").value,
    }

    ma5zan.push(oneProduct)

    
    clearInputs()


    console.log(ma5zan)
}

function clearInputs(){

}