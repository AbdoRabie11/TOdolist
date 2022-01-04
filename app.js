const button = document.querySelector("button")
const container = document.getElementById("container")
const input = document.querySelector("input")

container.addEventListener("click", (eo) => {

if(eo.target.className == "icon-trash icon") {

eo.target.parentElement.parentElement.remove()

}
else if(eo.target.className == "icon-angry2 icon")  { 

    eo.target.classList.add("dn")

const heart = ` <span class="icon-heart"></span> `

eo.target.parentElement.parentElement.getElementsByClassName("text")[0].classList.add("finish");



eo.target.parentElement.innerHTML += heart;

}
})
















button.addEventListener("click", (eo) => {

eo.preventDefault()

const task = `

<div class="task bt">
<span class="icon-star icon"> </span>
<p>
  ${input.value}
</p>
<div>
    <span class="icon-trash icon"></span>

    <span class="icon-angry2 icon"></span>

</div>

    <!-- <span class="icon-heart"></span> -->
</div>


`

container.innerHTML += task;

})


