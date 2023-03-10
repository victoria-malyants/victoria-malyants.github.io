// let form = document.forms.first;
// let answer = form.elements.one;
// answer.onchange = () => {
//     console.log(answer.value);
// }

const data = [
    {
        "pageTitle": "Зарплата, сбережения, количество взрослых в семье, количество детей, количество домашних питомцев, жилье",
        "questions": [
            {
                "id": 0,
                "question": "Введите размер семейного бюджета",
                "placeholder": "Введите сумму"
            },
            {
                "id": 1,
                "question": "Укажите сколько вы откладываете на сбережения",
                "placeholder": "Введите сумму"
            },
            {
                "id": 2,
                "question": "Введите количество взрослых в семье",
                "placeholder": "Введите сумму"
            },
            {
                "id": 3,
                "question": "Введите количество детей в семье",
                "placeholder": "Введите сумму"
            },
            {
                "id": 4,
                "question": "Введите количество домашних животных в семье",
                "placeholder": "Введите сумму",
                "isRequired": false
            }
        ]
    },
    {
        "pageTitle": "Коммунальные услуги, оплата сотовой связи, аренда, оплата долгов (счеты, страховки, кредиты), затраты на транспорт, непредвиденные расходы",
        "questions": [
            {
                "id": 5,
                "question": "Введите затраты на коммунальные услуги",
                "placeholder": "Введите сумму",
                "isRequired": false,
                "to": 100000
            },
            {
                "id": 6,
                "question": "Введите затраты на аренду(например: жилья)",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 7,
                "question": "Введите затраты на оплату сотовой связи",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 8,
                "question": "Введите затраты на оплату долгов (счеты, страховки, кредиты)",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 9,
                "question": "Введите затраты на транспорт",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 10,
                "question": "Введите затраты на непредвиденные расходы",
                "placeholder": "Введите сумму",
                "isRequired": false
            }
        ]
    },
    {
        "pageTitle": "Питание, одежда и обувь, товары для дома, лекарства, развлечения, путешествия",
        "questions": [
            {
                "id": 11,
                "question": "Введите затраты на питание",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 12,
                "question": "Введите затраты на одежду и обувь",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 13,
                "question": "Введите затраты на товары для дома",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 14,
                "question": "Введите затраты на лекарства",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 15,
                "question": "Введите затраты на развлечения",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 16,
                "question": "Введите затраты на путешествия",
                "placeholder": "Введите сумму",
                "isRequired": false
            }
        ]
    },
    {
        "pageTitle": "Личные расходы каждого члена семьи",
        "questions": [
            {
                "id": 17,
                "question": "Личные расходы взрослых (хобби, отдельные расходы)",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 18,
                "question": "Личные расходы детей (хобби, отдельные расходы)",
                "placeholder": "Введите сумму",
                "isRequired": false
            },
            {
                "id": 19,
                "question": "Личные расходы домашних питомцев (отдельные расходы)",
                "placeholder": "Введите сумму",
                "isRequired": false
            }
        ]
    }
]


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

let PAGE_NUMBER = 0;
const title = document.querySelector(".title");
title.innerHTML = currentTitle(PAGE_NUMBER);

const content = currentContent(PAGE_NUMBER);

const submitButton = `<input type="submit" value="Дальше" class="submit" onClick=${PAGE_NUMBER++}>`;

let form = document.forms.first;
let answers = {};

form.innerHTML = content + submitButton;

function saveInputValue(id, value) {
    console.log(id, value);
    answers[id] = value;
    console.log(answers);
}

const inputs = form.elements;
for (let input of inputs) {
    input.onchange = () => {
        saveInputValue(input.name, input.value)
    }
}
