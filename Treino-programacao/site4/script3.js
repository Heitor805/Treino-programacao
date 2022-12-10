function somar() {
   var num1 = document.getElementById("num1")
   var num2 = document.getElementById("num2")
   var msg = document.getElementById("msg")
   var numb1 = Number(num1.value)
   var numb2 = Number(num2.value)
   var num3 = numb1 + numb2
   msg.innerHTML = `A soma entre ${numb1} e ${numb2} q vc colocou foi <strong>${num3}</strong>`
}

