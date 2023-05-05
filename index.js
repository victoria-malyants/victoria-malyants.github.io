function generateQuestionsIds(correctIds) {
    const mapQuiestionIdWithCount = JSON.parse(localStorage.getItem('mapQuiestionIdWithCount'));
    console.log({mapQuiestionIdWithCount})

    return correctIds.reduce((acc, correctId) => {
        const repeatCount = mapQuiestionIdWithCount[correctId];
        if (repeatCount === 1) {
            acc.push(correctId);
        } else {
            Array(repeatCount).fill().forEach((_, i) => {
                acc.push(correctId + '_' + i);
            });
        }
        
        return acc;
    }, []);
}

function calcSum(correctIds, answers) {
    return Object.entries(answers).reduce((acc, [questionId, value]) => {
        if (correctIds.includes(questionId)) {
            acc += parseInt(value, 10);
        }
        return acc;
    }, 0);
}

function calcRemain(answers) {
    const correctIds = generateQuestionsIds(['1', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']);
    const s = calcSum(correctIds, answers);
    console.log(s, answers);
    return answers[0] - s;
}

function calcExpensesOfEach(answers) {
    const correctIds = generateQuestionsIds(['17', '18', '19']);
    return calcSum(correctIds, answers);
}

function calcExpensesOfAdults(answers) {
    const correctIds = generateQuestionsIds(['17']);
    return calcSum(correctIds, answers);
}
function calcExpensesOfChildren(answers) {
    const correctIds = generateQuestionsIds(['18']);
    return calcSum(correctIds, answers);
}
function calcExpensesOfPets(answers) {
    const correctIds = generateQuestionsIds(['19']);
    return calcSum(correctIds, answers);
}

function calcBasicExpenses1(answers) {
    const correctIds = generateQuestionsIds(['5', '6', '7', '8', '9', '10']);
    return calcSum(correctIds, answers);
}

function calcBasicExpenses2(answers) {
    const correctIds = generateQuestionsIds(['11', '12', '13', '14', '15', '16']);
    return calcSum(correctIds, answers);
}

const data = [
    {
        "pageTitle": "Зарплата, сбережения, количество взрослых в семье(родители + другие родственники), количество детей, количество домашних питомцев, жилье",
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
                "placeholder": "Введите сумму"
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
                "question": "Личные расходы взрослого (хобби, отдельные расходы)",
                "placeholder": "Введите сумму",
                "isRequired": false,
                "repeat": {"questionId":2}
            },
            {
                "id": 18,
                "question": "Личные расходы ребенка (хобби, отдельные расходы)",
                "placeholder": "Введите сумму",
                "isRequired": false,
                "repeat": {"questionId":3}
            },
            {
                "id": 19,
                "question": "Личные расходы домашнего питомца (отдельные расходы)",
                "placeholder": "Введите сумму",
                "isRequired": false,
                "repeat": {"questionId":4}
            }
        ]
    }
]
console.log({data})

function currentTitle(pageNumber) {
    return data[pageNumber].pageTitle;
}


function currentContent(pageNumber){
    let mapQuiestionIdWithCount = JSON.parse(localStorage.getItem('mapQuiestionIdWithCount'));

    return data[pageNumber].questions.map((question) => {
        const answers = JSON.parse(localStorage.getItem('answers'));
        const repeatQuestionId = question.repeat?.questionId;
        const repeatCount = answers[repeatQuestionId] ?? 1;

        mapQuiestionIdWithCount[question.id] = repeatCount;
        localStorage.setItem('mapQuiestionIdWithCount', JSON.stringify(mapQuiestionIdWithCount));

        const getQuestionMapkup =  (additionalPart) => {
            const questionId = additionalPart !== undefined ? question.id + '_' + additionalPart : question.id;
            return `<div class="question">
                <p>${question.question}</p>
                <input name=${questionId} value="" placeholder=${question.placeholder} required=${question.isRequired} type="number">
            </div>`
        };
        
        if (repeatCount === 1) {
            return getQuestionMapkup();
        }

        return Array(repeatCount).fill().map((_, i) => {
            return getQuestionMapkup(i);
        });
    }).join("");
}


function handleSubmit() {
    const curPage = Number(localStorage.page);
    localStorage.page = curPage + 1;
}

function handleReset() {
    localStorage.setItem('page', 0);
    localStorage.setItem('answers', '{}');
    localStorage.setItem('mapQuiestionIdWithCount', '{}');
}


window.onload = () => {
    const localPage = localStorage.getItem('page');
    const localAnswers = localStorage.getItem('answers');
    const localMapQuiestionIdWithCount = localStorage.getItem('mapQuiestionIdWithCount');

    console.log({localPage})
    if (!localPage) {
        localStorage.setItem('page', 0);
    }
    if (!localAnswers) {
        localStorage.setItem('answers', '{}');
    }
    if (!localMapQuiestionIdWithCount) {
        localStorage.setItem('mapQuiestionIdWithCount', '{}');
    }

    let PAGE_NUMBER = Number(localStorage.getItem('page'));
    console.log("LOADED", PAGE_NUMBER)

    const title = document.querySelector(".title");
    let answers = JSON.parse(localStorage.getItem('answers'));
    console.log(answers);
    

    if (PAGE_NUMBER >= 0 && PAGE_NUMBER <= 3) {
        title.innerHTML = currentTitle(PAGE_NUMBER);

        const content = currentContent(PAGE_NUMBER);
        const submitButton = `<button class="submit">Дальше</button>`;
        
        let form = document.forms.first;
        form.innerHTML = content + submitButton;

        const inputs = form.elements;
        const button = inputs[inputs.length - 1]

        button.addEventListener('click', handleSubmit)

        for (let input of inputs) {
            input.onchange = () => {
                answers[input.name] = parseInt(input.value, 10);
                localStorage.setItem('answers', JSON.stringify(answers));
            }
        }
    } else {
        title.innerHTML = "Результаты";
        const remain = calcRemain(answers);
        const base1 = calcBasicExpenses1(answers);
        const base2 = calcBasicExpenses2(answers);
        const adults = calcExpensesOfAdults(answers);
        const children = calcExpensesOfChildren(answers);
        const pets = calcExpensesOfPets(answers);

        let form = document.forms.first;
        form.innerHTML = `<p>Остаток: ${remain}</p>
        <p>Коммунальные услуги, оплата сотовой связи, аренда, оплата долгов (счеты, страховки, кредиты), затраты на транспорт, непредвиденные расходы: </p><p>${base1}</p> 
        <p>Питание, одежда и обувь, товары для дома, лекарства, развлечения, путешествия: </p><p>${base2}</p> 
        <p>Расходы взрослых:</p><p>${adults}</p> 
        <p>Расходы детей:</p><p>${children}</p> 
        <p>Расходы домашних животных:</p><p>${pets}</p> 
        <button class="reset">Пройти заново</button>`;
        const resetButton = document.querySelector('.reset');
        resetButton.addEventListener('click', handleReset);
    }
}