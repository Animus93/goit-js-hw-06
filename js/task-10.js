// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

import users from "./users.js"

function getSortedUniqueSkills(users){
  return users.reduce((skills, user)=>{
    return [...new Set([...skills, ...user.skills])].sort();
  },[]);
};

console.log(getSortedUniqueSkills(users))
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

