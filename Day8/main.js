// Homework #1
function expo(base, exponent, callback) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return callback(result);
  }
  
  expo(5, 3, function(result) {
    console.log(result);  
  });
  
// Homework #2
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts-container');
    
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      
      const postTitle = document.createElement('h2');
      postTitle.textContent = post.title;
      
      const postBody = document.createElement('p');
      postBody.textContent = post.body;
      
      postDiv.appendChild(postTitle);
      postDiv.appendChild(postBody);
      
      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Homework #3
function copyObject(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
        return reject('Input is not an object');
      }
  
      try {
        const copiedObj = JSON.parse(JSON.stringify(obj)); 
        resolve(copiedObj);
      } catch (error) {
        reject('Error during copying');
      }
    });
  }
  
  async function ObjectCopy() {
    const person = { name: 'James', address: { city: 'London' } };
  
    try {
      const newPerson = await copyObject(person);
      console.log('Copy:', newPerson);
    } catch (error) {
      console.error('Error:', error);
    }
  
    const invalidInput = 123;
    try {
      await copyObject(invalidInput); 
    } catch (error) {
      console.error('Error:', error); 
    }
  }
  
  ObjectCopy();
  