document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitBtn');
  const feedbackText = document.getElementById('feedbackText');

  function submitFeedback() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const job = document.getElementById('job').value.trim();
    const designation = document.getElementById('designation').value.trim();
    const productType = document.getElementById('productType').value;
    const feedback = feedbackText.value.trim();

    if (!name || !email || !feedback) {
      alert('Por favor preencha os campos obrigatórios: Nome, Email e Feedback.');
      return;
    }

    document.getElementById('userName').textContent = name;
    document.getElementById('userAge').textContent = age || '—';
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userJob').textContent = job || '—';
    document.getElementById('userDesignation').textContent = designation || '—';
    document.getElementById('userProductChoice').textContent = productType;
    document.getElementById('userFeedback').textContent = feedback;
    const userInfo = document.getElementById('userInfo');
    if (userInfo) userInfo.style.display = 'block';

    const entry = { name, age, email, job, designation, productType, feedback, submittedAt: new Date().toISOString() };
    try {
      const stored = JSON.parse(localStorage.getItem('product_feedback') || '[]');
      stored.push(entry);
      localStorage.setItem('product_feedback', JSON.stringify(stored));
    } catch (e) {
      console.warn('Erro ao salvar no localStorage:', e);
    }

    alert('Obrigado pelo feedback!');
  }

  if (submitButton) submitButton.addEventListener('click', submitFeedback);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && document.activeElement && document.activeElement.tagName !== 'TEXTAREA') {
      event.preventDefault();
      submitFeedback();
    }
  });
});