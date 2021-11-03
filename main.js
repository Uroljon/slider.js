let array = [];
let items = document.querySelectorAll('.carousel-item');
for (let i = 0; i < items.length; i++) {
    array.push(i);
}

function carousel_init(e, array) { //init carousel
    if(!array){
        let here = [];
        for (let i = 0; i < items.length; i++) {
            here.push(i);
        }
        array = here
    }

    let middle = array[Math.round(array.length/2)-1]
    items[middle].style.left = `50%`//index: 3
    let value = 20;
    for (let i = Math.round(array.length/2) - 2; i >= 0; i--) {//indexes: 0, 1, 2
        items[array[i]].style.left = `${value}%`
        value -= 25;
    }
    value = 80;
    for (let i = Math.round(array.length/2) ; i < items.length; i++) { //indexes : 4, 5, 6
        items[array[i]].style.left = `${value}%`
        value += 25;
    }
}
// event listener of next/prev buttons
document.querySelectorAll('.carousel-items-arrow').forEach((btn) => {
    btn.addEventListener("click", (e) => {

        document.querySelector('.carousel-item.active').classList.remove("active");

        if (e.target.classList.contains("arrow-prev")) { //prev bosilsa:
            items[array[Math.round(array.length/2)-2]].classList.add("active");
            array.unshift(array.pop())
            carousel_init(null, array)
        } else if (e.target.classList.contains("arrow-next")) { //next bosilsa:
            items[array[Math.round(array.length/2)]].classList.add("active");
            array.push(array.shift())
            carousel_init(null, array)
        }
    });
});

window.addEventListener("DOMContentLoaded", carousel_init);


/* MUSUR KODLAR
    // document.querySelector(`[data-target="${1}"]`).setAttribute("style", "left: -20%")
// document.querySelector(`[data-target="${2}"]`).setAttribute("style", "left: -5%")
// document.querySelector(`[data-target="${3}"]`).setAttribute("style", "left: 20%") //25 -
// document.querySelector(`[data-target="${4}"]`).setAttribute("style", "left: 50%") //30 + -
// document.querySelector(`[data-target="${5}"]`).setAttribute("style", "left: 80%") //25 +
// document.querySelector(`[data-target="${6}"]`).setAttribute("style", "left: 105%")
// document.querySelector(`[data-target="${7}"]`).setAttribute("style", "left: 130%")
// document.querySelector(`[data-target="${8}"]`).setAttribute("style", "left: 155%")

// document.querySelector(`[data-target="${1}"]`).setAttribute("style", "transform: translate(-300)")
// document.querySelector(`[data-target="${2}"]`).setAttribute("style", "transform: translate(-200)")
// document.querySelector(`[data-target="${3}"]`).setAttribute("style", "transform: translate(-100)")
// document.querySelector(`[data-target="${5}"]`).setAttribute("style", "transform: translate(0)")
// document.querySelector(`[data-target="${4}"]`).style.transform = "translate(1000px)"
// document.querySelector(`[data-target="${4}"]`).style.color = "white"
// document.querySelector(`[data-target="${4}"]`).style.transform = "translate(100px, -50%)"

// document.querySelector(`[data-target="${6}"]`).setAttribute("style", "transform: translate(200)")
// document.querySelector(`[data-target="${7}"]`).setAttribute("style", "transform: translate(300)")
// let prev_position = Number(item.getAttribute("style")?.split("order: ")[1].split(";")[0])
// transform = 210*Math.floor(items.length/2)
// transform -= 210;
// document.querySelector(`[data-target="${Math.round(items.length / 2)}"]`).classList.add("active")


            // if (Number(active_id) < items.length) {
                // active_element.nextElementSibling.classList.add("active");
                // if (active_id >= items.length - 2){

                // }else{
                //     carousel_init(null, active_id+1)
                // }
                
            // } else {
            //     document.querySelector(`[data-target="1"]`).classList.add("active")
            //     carousel_init(null, 1)
            // }
            // let width = Number(window.getComputedStyle(active_element.nextElementSibling).getPropertyValue("width").split("px")[0])
            // console.log(width);
            // let move = 1.5 * width;
            // console.log(move);
            // transform -= move;
            // items.forEach((item, index, arr) => {
                // let prev_position = Number(item.getAttribute("style")?.split("left: ")[1].split("%")[0])
                // if (active_id >= items.length - 2) { //5 6 7 
                //     // console.log("ohirlab qoldi", active_id, items.length - 2);
                //     arr[active_id - (items.length - 2)].setAttribute("style", `left: ${arr.length}`)
                // }
                // if (index === active_id) {
                //     item.style.transform = "translate(, -50%)"

                // }
                // item.setAttribute("style", `left: ${prev_position - 210}`)
                // item.style.transform = `translate(${transform}px, -50%)`
                
            // })


              // if (Number(active_id) > 1) {
            //     transform += 210;
            //     active_element.previousElementSibling.classList.add("active");
            // } else {
            //     transform = -210 * Math.floor(items.length / 2)
            //     document.querySelector(`[data-target="${items.length}"]`).classList.add("active")
            // }
            // items.forEach((item) => {
            //     item.setAttribute("style", `transform: translate(${transform}px)`)
            // })
            // console.log("prev");

                    // let active_id = Number(document.querySelector(`.carousel-item.active`).getAttribute("data-target"))
        // let active_element = document.querySelector(`[data-target="${active_id}"]`)
*/