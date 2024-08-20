function calculateScore() {
    const correctAnswers = {
        q1: 'B',
        q2: 'B',
        q3: 'B',
        q4: 'C',
        q5: 'C',
        q6: 'B',
        q7: 'B',
        q8: 'B',
        q9: 'C',
        q10: 'C',
        q11: 'B',
        q12: 'C',
        q13: 'B',
        q14: 'C',
        q15: 'C',
        q16: 'B',
        q17: 'B',
        q18: 'B',
        q19: 'C',
        q20: 'B'
    };

    let score = 0;

    for (let i = 1; i <= 20; i++) {
        const answer = document.querySelector(`input[name=q${i}]:checked`);
        if (answer) {
            if (answer.value === 'correct') {
                score++;
            }
        }
    }

    document.getElementById('result').innerText = `Your score is ${score} out of 20.`;
}
