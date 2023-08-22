function sendPostData() {
  

const postData = {
    title: 'metodo fetch',
    body: 'Contenido del post...'
  };
  
  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }