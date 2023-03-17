let data;
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {data = json.data});

console.log({data})

function currentTitle(pageNumber) {
    return data[pageNumber].pageTitle;
}


function currentContent(pageNumber){
    return data[pageNumber].questions.map((question) => {
        return `<div class="question">
                    <p>${question.question}</p>
                    <input name=${question.id} value="" placeholder=${question.placeholder} required=${question.isRequired}>
                </div>`;
    }).join("");
}


function handleSubmit() {
    const curPage = Number(localStorage.page);
    localStorage.page = curPage + 1;
}


window.onload = () => {
    const localPage = localStorage.getItem('page');
    console.log({localPage})
    if (!localPage) {
        localStorage.setItem('page', 0);
    }
    let PAGE_NUMBER = Number(localStorage.getItem('page'));
    console.log("LOADED", PAGE_NUMBER)

    const title = document.querySelector(".title");
    console.log(1111111)
    title.innerHTML = currentTitle(PAGE_NUMBER);

    const content = currentContent(PAGE_NUMBER);
    const submitButton = `<button class="submit">Дальше</button>`;
    
    let form = document.forms.first;
    form.innerHTML = content + submitButton;

    let answers = {};

    const inputs = form.elements;
    const button = inputs[inputs.length - 1]

    button.addEventListener('click', handleSubmit)

    for (let input of inputs) {
        input.onchange = () => {
            answers[input.name] = input.value;
        }
    }
}
