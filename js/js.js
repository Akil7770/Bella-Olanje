
var button = document.querySelector('.burger')
var navigation = document.querySelector('.active_bb')

button.addEventListener('click', event => {
    toggle()
});

function toggle() {
    navigation.classList.toggle("active_burger");
}