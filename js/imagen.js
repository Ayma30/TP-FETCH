function downloadimage() {
  

fetch(`https://via.placeholder.com/150`)
  .then(response => response.blob())
  .then(imagenBlob => {
    const imagenUrl = URL.createObjectURL(imagenBlob);
    const imagenElement = document.getElementById('imagen');
    imagenElement.src = imagenUrl;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}