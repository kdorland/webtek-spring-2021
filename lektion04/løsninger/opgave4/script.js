fetch("JEOPARDY_QUESTIONS.json")
  .then(response => response.json())
  .then(data => {
    window.jeopardy = data;
  });
