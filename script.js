const input = document.querySelector(".amount-given");
const riyal = document.querySelector(".riyal");
const USD = document.querySelector(".USD");
const yemeni = document.querySelector(".yemeni");


function Big_baik_in_riyal(amount) {
    const cost = amount / 13.5;
    return cost.toFixed(2);
}

function Big_baik_in_USD(amount) {
    const cost = amount / 3.60;
    return cost.toFixed(2);
}

function Big_baik_in_yemeni(amount) {
    const cost = amount / 888;
    return cost.toFixed(2);
}

window.addEventListener('load', () =>{
    const task_adding = document.getElementById("value")



    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        
        let value = task_adding.value.trim();
        if (!value) return alert("Task cannot be empty!");
        
        else if (riyal.checked) {
            value = Big_baik_in_riyal(value);
        }
        else if (USD.checked) {
            value = Big_baik_in_USD(value);
        }
        else if (yemeni.checked) {
            value = Big_baik_in_yemeni(value);
        }
        else{
            return alert("Checked box cannot be empty!");
        }

        document.querySelector(".big-baik-container").remove();


        const taskItem = document.createElement("div");
        taskItem.classList.add("big-baik-container");
        taskItem.innerHTML = `
            <div class="answer"> 
                <p class="Buy">
                    You Can Buy:
                </p>
            </div>
            <div class="row">
                <p class="calculated-amount"> ${value} </p>
                <img src="images/big_baik_wth_chese-removebg-preview-1.png" class="big-baik"/>
            </div>
        `;


        document.querySelector('.container').append(taskItem);
        task_adding.value = "";
    })
})