console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After')

function getUser(id) {
   setTimeout( () => {
     console.log('reading a user');
     return{ id: id , githubUserName : 'AdityaKumarJha'}, 2000 );
   return 1;
}

//three ways to deal with async javascript callbacks, promices ,await/async
