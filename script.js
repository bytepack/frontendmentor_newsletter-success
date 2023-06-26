const form = document.querySelector("[data-form]")
const email = document.querySelector("[data-email]")
const popup = document.querySelector("[data-popup]")
const errorText = document.querySelector("[data-error]")
const btnDismis = document.querySelector("[data-dismis]")

const emailPattern = /.+@.+\..+/
form.addEventListener("submit",e=>{
    e.preventDefault()

    if (emailPattern.test(email.value)){
        popup.classList.remove("popup--hidden")
        email.classList.remove("ipt--error")
        errorText.classList.add("err--hidden")
        document.body.classList.add("disable-scroll")
    }
    else{
        email.classList.add("ipt--error")
        errorText.classList.remove("err--hidden")
    }
})

btnDismis.addEventListener("click", ()=>{
    popup.classList.add("popup--hidden")
    document.body.classList.remove("disable-scroll")
})