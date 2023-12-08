function submitQuiz() {
  const form = document.getElementById('quiz-form');
  const resultContainer = document.getElementById('result-container');

  let score = 0;

  form.querySelectorAll('.question').forEach(question => {
      let isQuestionCorrect = true;

      question.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          const isCorrect = checkbox.checked && checkbox.dataset.correct === 'true';

          // Reset styles
          checkbox.parentNode.style.color = '';

          if (isCorrect) {
              checkbox.parentNode.style.color = 'green';
          } else if (checkbox.checked) {
              checkbox.parentNode.style.color = 'red';
              isQuestionCorrect = false;
          }
      });

      if (isQuestionCorrect) {
          score++;
      }
  });

  const totalQuestions = form.querySelectorAll('.question').length;
  const percentage = Math.floor((score / totalQuestions) * 100); // Moyenne entière

  resultContainer.innerHTML = `Score: ${score} / ${totalQuestions} (${percentage}%)`;
}
const textContainer = document.getElementById('text-container');
        const readMoreBtn = document.getElementById('read-more-btn');

        let isExpanded = false;

        readMoreBtn.addEventListener('click', () => {
            if (isExpanded) {
                textContainer.style.maxHeight = '100px'; // Réduire la hauteur pour afficher un aperçu
                readMoreBtn.textContent = 'En savoir plus';
            } else {
                textContainer.style.maxHeight = 'none'; // Afficher tout le texte
                readMoreBtn.textContent = 'Réduire';
            }

            isExpanded = !isExpanded;
        });
