const form = document.getElementById('email-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const response = await fetch('/validate-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const result = await response.json();
  const resultDiv = document.getElementById('result');
  if (result.isValid) {
    resultDiv.innerHTML = `Email "${email}" is valid!`;
  } else {
    resultDiv.innerHTML = `Email "${email}" is invalid!`;
  }
});
