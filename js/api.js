function getApiData() {
  

fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(response => response.json())
  .then(data => {
    
    const firstThreePosts = data.slice(0, 3);
console.log(firstThreePosts)
  })
  .catch(error => {
    console.error('Error:', error);
  });
}