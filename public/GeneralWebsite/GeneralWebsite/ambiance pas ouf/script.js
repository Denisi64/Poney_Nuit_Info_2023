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
