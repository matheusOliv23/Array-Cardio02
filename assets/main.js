const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];

// Some e Every

// some verifica se existe algum item que respeita a condição dada
const isAdult = people.some(
    (person) => new Date().getFullYear() - person.year >= 18
);

console.log(isAdult);

// every verifica se todos os items do array respeitam a condição
const allAdults = people.every(
    (person) => new Date().getFullYear() - person.year >= 10
);

console.log(allAdults);

// Find

// Ache o comentario com o id 2039842

const findComment = comments.find((comment) => comment.id === 2039842 && true);

console.log(findComment);

// Find Index

// delete o comentario com o id 2039842

const index = comments.findIndex((comment) => comment.id === 2039842);

console.log(index);

//comments.splice(index, 2);

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];