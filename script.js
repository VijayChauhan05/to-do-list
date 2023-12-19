let inputs = document.getElementById("inpt");
let text = document.querySelector(".text");

function increase(){
    if(inputs.value == ""){
        alert("Enter Your Task")
    }
    else
    {
        let newEle = document.createElement("li");
        newEle.innerHTML=`${inputs.value} <i class='bx bx-window-close'></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" ,remove);
        function remove(){
            newEle.remove()
        }
        newEle.addEventListener('click',()=>{
            newEle.classList.toggle('active');
        })
    }
}

