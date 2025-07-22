import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function AttemptQuiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (!quizId) {
      alert("Quiz ID is missing.");
      return;
    }

    fetch(`http://localhost:8080/quiz/${quizId}`)
      .then(res => res.json())
      .then(data => {
        if (!data || !data.questions) {
          alert("Quiz data is broken");
        }
        setQuiz(data);
      })
      .catch(err => {
        console.error(err);
        alert("Error loading quiz");
      });
  }, [quizId]);

  const handleAnswerChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = () => {
    let score = 0;
    quiz.questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        score++;
      }
    });

    navigate('/quiz-result', {
      state: {
        score: score,
        total: quiz.questions.length
      }
    });
  };

  if (!quiz) return <div className="p-4">Loading quiz...</div>;

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary">Attempt Quiz</h2>
      <div className="d-flex justify-content-between my-3">
        <h4 className="text-success">{quiz.course}</h4>
        <h4 className="text-info">{quiz.title}</h4>
      </div>

      {quiz.questions.map((q, index) => (
        <div key={index} className="card p-3 mb-4 shadow-sm">
          <h5>Q{index + 1}: {q.question}</h5>

          {[q.optionA, q.optionB, q.optionC, q.optionD].map((opt, i) => (
            opt && (
              <div key={i} className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={`q${index}`}
                  value={opt}
                  checked={answers[index] === opt}
                  onChange={() => handleAnswerChange(index, opt)}
                />
                <label className="form-check-label">{opt}</label>
              </div>
            )
          ))}
        </div>
      ))}

      <div className="text-center">
        <button className="btn btn-success" onClick={handleSubmit}>Submit Quiz</button>
      </div>
    </div>
  );
}

export default AttemptQuiz;
