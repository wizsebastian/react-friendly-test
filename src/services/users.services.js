export const getUsers = () => {
   return fetch('https://api.github.com/users' )
        .then((res)=> res.json())
}