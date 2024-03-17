async function callApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
}

callApi();

/**
 * then を使って書く
 * function callApi(){
 *  fetch("https://jsonplaceholder.typicode.com/users") -> 結果がresに入る
 *   .then(function(res) {
 *     return res.json(); -> 結果がusersに入る
 *   })
 *   .then(function(users) {
 *     console.log(users);
 *   });
 * }
 *
 * callApi();
 * 
 */