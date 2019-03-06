const dinosaurs = [
    {
        dinoType: 't-rex',
        name: 'wrex'
    },
    {
        dinoType: 'stegosaurus',
        name: 'steve'
    },
    {
        dinoType: 'velociraptor',
        name: 'ted'
    },
];

//loop over the dinosaurs
//build up a dom string
//print dom srting to the dom

const assignments = [
    {
        title: 'product cards',
        dueDate: '06/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentURL: 'www.google.com'
    },
    {
        title: 'product cars',
        dueDate: '08/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentURL: 'www.amazon.com'
    },
    {
        title: 'pro duck cards',
        dueDate: '03/07/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentURL: 'www.youtube.com'
    },
    {
        title: 'pro duck tape',
        dueDate: '03/05/2025',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentURL: 'www.facebook.com'
    },
    {
        title: 'pro cardio',
        dueDate: '12/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentURL: 'www.pinterest.com'
    },
];

//total of 5 assignments
//build assignment cards - loop over assignments and make a domstring
//reuse the print to dom function to display the domstring

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildDinosaurs = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++) {
        domString += `<div class="dinosaur">`
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`
        domString += `<p>${dinosaurs[i].name}</p>`
        domString += `</div>`
    }
    printToDom('dino-barn', domString);
};

const buildAssignments = () => {
    let domString = '';
    for(let i = 0; i < assignments.length; i++) {
        domString += `<div class="assignments">`
        domString += `<div class="title">${assignments[i].title} assignment</div>`
        domString += `<div class="due-date"><h3>Due Date: ${assignments[i].dueDate}</h3></div>`
        domString += `<div class="assignment-URL">Get the assignment <a href="${assignments[i].assignmentURL}">here</a></div>`
        domString += `<div class="topic">Topic: ${assignments[i].topic}</div>`
        domString += `<div class="notes">Notes${assignments[i].notes}</div>`
        
        domString += `</div>`
    }
    printToDom('assignment-div', domString);
};

const init = () => {
    buildDinosaurs()
    buildAssignments()
}

init();