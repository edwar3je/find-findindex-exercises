/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined

Note: Without looking, I feel like there's an answer that doesn't require me to rename the argument. However, since the argument shares the same name as the key, I felt it was essential to make "username" (the key) separate from "userName" (the value)
*/


function findUserByUsername(usersArray, userName) {
  let anUsername = usersArray.find(function(user){
    return user.username === userName
  })
  return anUsername;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined

Note: I had to use the solution on this one because one of my tests kept failing (it seemed to bring back the specific object with the array in tow, rather than just the object). However, you can find my working function under myRemoveUser.
*/

function removeUser(usersArray, userName) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === userName;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
}

function myRemoveUser(usersArray, userName) {
  let rmvUsername = usersArray.findIndex(function(user){
    return user.username === userName
  })
  if(rmvUsername !== -1){
    return usersArray.splice(rmvUsername, 1);
  }
  else {
    return undefined;
  }
}