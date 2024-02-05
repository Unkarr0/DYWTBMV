const yes = document.getElementById("yes")
const no = document.getElementById("no")

const block = document.getElementById("block")

function nah()
{
    const p = document.createElement("p");

    p.innerText = "HELL NAH I'm not allowing that >:("

    p.style.fontSize = "50px";

    block.appendChild(p);
}

no.addEventListener("click",nah)