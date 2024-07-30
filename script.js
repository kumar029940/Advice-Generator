document.addEventListener('DOMContentLoaded', function() {
    const adviceIdElement = document.querySelector('.advice-id');
    const adviceTextElement = document.querySelector('.advice-text');
    const diceButton = document.querySelector('.dice-button');

    diceButton.addEventListener('click', fetchAdvice);

    function fetchAdvice() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                const advice = data.slip;
                adviceIdElement.textContent = `Advice #${advice.id}`;
                adviceTextElement.textContent = `"${advice.advice}"`;
            })
            .catch(error => console.error('Error fetching advice:', error));
    }
});
 