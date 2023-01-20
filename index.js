let form = document.forms.first;
let answer = form.elements.one;
// console.log(answer.value);
answer.onchange = () => {
    console.log(answer.value);
}