const rateNumbers = document.querySelectorAll(".rateNumber");
const submit = document.querySelector("#btnSubmit");
const message = document.querySelector("#message");
const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thanks-card");
let isSelected = false;
let selectNumber = 0;

rateNumbers.forEach((rateNumber) => 
{
    rateNumber.addEventListener( "click" , (click) => 
    {
        if(isSelected)
        {
            document.getElementById(`${selectNumber}`).classList.remove("active");
            selectNumber = click.target.parentElement.id;
            click.target.parentElement.classList.add("active");
        }
        else
        {
            isSelected = true;
            selectNumber = click.target.parentElement.id;
            click.target.parentElement.classList.add("active");
        }
    })
})

submit.addEventListener( "click" , (click) => 
{
    if(isSelected)
    {
        ratingCard.style.display = "none";
        thanksCard.style.display = "block"
        message.innerHTML = `You selected ${selectNumber} out of 5`
    }
})