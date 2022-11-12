// Массив имен всех пользователей у которых есть друг с указанным именем.

import users from "./users.js"


const getUsersWithFriend = (users, friendName) => 
users.map(user => {
    if(user.friends.find(friend => 
        friend === friendName)){
            return user.name;
        }}).filter(name => {
        if(name){
            return name;
        }
    });



console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]
