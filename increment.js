function incrementButton() {
    var element = document.getElementById('incrementText');
    var value = element.innerHTML;

    value++;
    // console.log(value)
    element.innerHTML = value;
}

function decrementButton() {
    var elemen = document.getElementById('incrementText');
    var value = elemen.innerHTML;

    value--;
    // console.log(value)
    elemen.innerHTML = value;
}