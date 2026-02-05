
Descrição
- Protótipo simples de formulário para coletar feedback de produtos de marca de luxo (perfume, creme, óleos).

Arquivos
- `product_survey.html`: interface do formulário (abra no navegador).
- `product_survey.js`: referenciado pelo HTML, atualmente não incluído nesta pasta — veja a seção "Script sugerido" abaixo.

Como usar
1. Abra o arquivo [product_survey.html](product_survey.html) no navegador (duplo-clique ou arraste para o navegador).
2. Opcional: rodar um servidor local (recomendado) para evitar problemas com CORS:

```powershell
# na pasta study/novo_projeto
python -m http.server 8000
# depois abra http://localhost:8000/product_survey.html
```

Script sugerido (coloque em `product_survey.js`)

```javascript
// product_survey.js - comportamento mínimo para enviar e mostrar o feedback
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedbackText = document.getElementById('feedbackText').value;

    if (!name || !email || !feedbackText) {
      alert('Por favor, preencha os campos obrigatórios.');
      return;
    }

    document.getElementById('userName').textContent = name;
    document.getElementById('userAge').textContent = age;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userJob').textContent = job;
    document.getElementById('userDesignation').textContent = designation;
    document.getElementById('userProductChoice').textContent = productType;
    document.getElementById('userFeedback').textContent = feedbackText;
    document.getElementById('userInfo').style.display = 'block';

    // document.getElementById('feedbackText').value = '';
  });
});
