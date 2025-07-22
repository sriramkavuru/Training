import React, { useState } from 'react';

function CreateQuiz() {
  const [quiz, setQuiz] = useState({ title: '', course: '', questions: [] });
  const [questionData, setQuestionData] = useState({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleQuizChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (e) => {
    setQuestionData({ ...questionData, [e.target.name]: e.target.value });
  };

  const addOrUpdateQuestion = () => {
    const { question, optionA, optionB, optionC, optionD, correctAnswer } = questionData;

    if (!question || !optionA || !optionB || !optionC || !optionD || !correctAnswer) {
      alert('Please fill all fields.');
      return;
    }

    const updatedQuestions = [...quiz.questions];
    if (editIndex !== null) {
      updatedQuestions[editIndex] = questionData;
      setEditIndex(null);
    } else {
      updatedQuestions.push(questionData);
    }

    setQuiz({ ...quiz, questions: updatedQuestions });
    setQuestionData({
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: ''
    });
  };

  const editQuestion = (index) => {
    setQuestionData(quiz.questions[index]);
    setEditIndex(index);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = quiz.questions.filter((_, i) => i !== index);
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const submitQuiz = () => {
    if (!quiz.title || !quiz.course || quiz.questions.length === 0) {
      alert('Please complete the quiz details and add at least one question.');
      return;
    }

    fetch('http://localhost:8080/quiz/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quiz)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Quiz submission failed.');
        }
        return res.text();
      })
      .then((message) => {
        alert(message);
        setQuiz({ title: '', course: '', questions: [] });
        setQuestionData({
          question: '',
          optionA: '',
          optionB: '',
          optionC: '',
          optionD: '',
          correctAnswer: ''
        });
        setEditIndex(null);
      })
      .catch((error) => {
        alert('Error submitting quiz: ' + error.message);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Create Quiz</h2>

      <div className="mb-3">
        <label className="form-label fw-bold">Quiz Title:</label>
        <input className="form-control" name="title" value={quiz.title} onChange={handleQuizChange} />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Course Name:</label>
        <input className="form-control" name="course" value={quiz.course} onChange={handleQuizChange} />
      </div>

      <div className="card p-3 my-3 border shadow-sm">
        <h5>{editIndex !== null ? 'Edit Question' : 'Add Question'}</h5>
        <input className="form-control mb-2" placeholder="Question" name="question" value={questionData.question} onChange={handleQuestionChange} />
        <input className="form-control mb-2" placeholder="Option A" name="optionA" value={questionData.optionA} onChange={handleQuestionChange} />
        <input className="form-control mb-2" placeholder="Option B" name="optionB" value={questionData.optionB} onChange={handleQuestionChange} />
        <input className="form-control mb-2" placeholder="Option C" name="optionC" value={questionData.optionC} onChange={handleQuestionChange} />
        <input className="form-control mb-2" placeholder="Option D" name="optionD" value={questionData.optionD} onChange={handleQuestionChange} />
        <input className="form-control mb-2" placeholder="Correct Answer" name="correctAnswer" value={questionData.correctAnswer} onChange={handleQuestionChange} />
        <button className="btn btn-primary" onClick={addOrUpdateQuestion}>
          {editIndex !== null ? 'Update Question' : 'Add Question'}
        </button>
      </div>

      <div>
        <h4 className="mb-3 text-secondary">Preview Questions</h4>
        {quiz.questions.map((q, idx) => (
          <div key={idx} className="card mb-3 p-3 shadow-sm border">
            <h5>Q{idx + 1}: {q.question}</h5>
            <ul className="list-unstyled ms-3">
              <li><strong>A.</strong> {q.optionA}</li>
              <li><strong>B.</strong> {q.optionB}</li>
              <li><strong>C.</strong> {q.optionC}</li>
              <li><strong>D.</strong> {q.optionD}</li>
              <li><strong>Correct Answer:</strong> {q.correctAnswer}</li>
            </ul>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => editQuestion(idx)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => deleteQuestion(idx)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end">
        <button className="btn btn-success" onClick={submitQuiz}>Submit Quiz</button>
      </div>
    </div>
  );
}

export default CreateQuiz;
