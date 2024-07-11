const quizQuestions = [
    {
        question: "The Morning Ritual",
        description: "You start your day feeling refreshed. What's your go-to breakfast that sets the tone for a day of vibrant health?",
        options: [
            { text: "A nutrient-dense smoothie packed with greens, fruits, and protein powder", value: 5 },
            { text: "Whole grain toast with avocado and a poached egg", value: 4 },
            { text: "A bowl of sugary cereal or a pastry with coffee", value: 1 },
            { text: "I usually skip breakfast", value: 0 }
        ]
    },
    {
        question: "Midday Choices",
        description: "It's lunchtime, and you're ready to refuel. Which of the following best describes your typical lunch?",
        options: [
            { text: "A colorful salad with mixed greens, lean protein, and a variety of veggies", value: 5 },
            { text: "A sandwich with whole grain bread, turkey, and fresh veggies", value: 4 },
            { text: "Fast food or a pre-packaged meal", value: 1 },
            { text: "A quick snack, like chips or a candy bar", value: 0 }
        ]
    },
    {
        question: "Snack Attack",
        description: "Mid-afternoon hunger strikes. How do you satisfy your snack cravings?",
        options: [
            { text: "A handful of nuts and a piece of fruit", value: 5 },
            { text: "Greek yogurt with berries", value: 4 },
            { text: "A bag of chips or a candy bar", value: 1 },
            { text: "I usually don't snack", value: 0 }
        ]
    },
    {
        question: "Dinner Delights",
        description: "As the day winds down, it's time for dinner. What does your evening meal usually look like?",
        options: [
            { text: "Grilled salmon with quinoa and steamed broccoli", value: 5 },
            { text: "Stir-fried vegetables with tofu or chicken over brown rice", value: 4 },
            { text: "A frozen pizza or takeout", value: 1 },
            { text: "I often skip dinner or eat whatever is convenient", value: 0 }
        ]
    },
    {
        question: "Sweet Treats",
        description: "Do you indulge in desserts? If so, what's your go-to sweet treat?",
        options: [
            { text: "A small piece of dark chocolate or a fruit parfait", value: 5 },
            { text: "A couple of cookies or a slice of cake", value: 3 },
            { text: "Ice cream or a sugary dessert every night", value: 1 },
            { text: "I rarely have desserts", value: 0 }
        ]
    },
    {
        question: "Hydration Habits",
        description: "Staying hydrated is crucial. How do you usually keep up with your hydration needs?",
        options: [
            { text: "I drink plenty of water throughout the day", value: 5 },
            { text: "I mix water with herbal teas or infusions", value: 4 },
            { text: "I mostly drink sugary drinks or sodas", value: 1 },
            { text: "I often forget to drink water", value: 0 }
        ]
    },
    {
        question: "Supplement Savvy",
        description: "Do you incorporate supplements into your diet to enhance your nutrition?",
        options: [
            { text: "Yes, I take a variety of supplements based on professional advice", value: 5 },
            { text: "Occasionally, but not regularly", value: 3 },
            { text: "Rarely, I don't believe in supplements", value: 1 },
            { text: "Never", value: 0 }
        ]
    }
];

function renderQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizQuestions.forEach((q, index) => {
        const questionHtml = `
            <div class="question" id="q${index + 1}">
                <h2>Question ${index + 1}: ${q.question}</h2>
                <p>${q.description}</p>
                <div class="options">
                    ${q.options.map((option, optIndex) => `
                        <label>
                            <input type="radio" name="q${index + 1}" value="${option.value}">
                            ${option.text}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
        quizContainer.innerHTML += questionHtml;
    });
}

function calculateScore() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selected) {
            score += parseInt(selected.value);
        }
    });

    let profile = '';
    let suggestions = '';
    let emoji = '';

    if (score >= 30) {
        profile = "Longevity Champion";
        emoji = "🏆";
        suggestions = `
            <ul>
                <li>Continue to diversify your meals with a variety of whole foods.</li>
                <li>Explore advanced nutritional strategies like intermittent fasting.</li>
                <li>Stay informed about the latest in nutritional science to keep your diet optimized.</li>
            </ul>
        `;
    } else if (score >= 20) {
        profile = "Health Seeker";
        emoji = "🌱";
        suggestions = `
            <ul>
                <li>Focus on reducing processed foods and increasing whole foods.</li>
                <li>Consider incorporating more healthy snacks into your daily routine.</li>
                <li>Educate yourself on the benefits of supplements and personalized nutrition.</li>
            </ul>
        `;
    } else if (score >= 10) {
        profile = "Balanced Beginner";
        emoji = "⚖️";
        suggestions = `
            <ul>
                <li>Begin by incorporating more fruits and vegetables into your meals.</li>
                <li>Replace sugary drinks with water or herbal teas.</li>
                <li>Start experimenting with simple, healthy recipes from the book.</li>
            </ul>
        `;
    } else {
        profile = "Nutrition Newbie";
        emoji = "🌟";
        suggestions = `
            <ul>
                <li>Focus on making one small, healthy change each week.</li>
                <li>Educate yourself on the basics of macronutrients and food quality.</li>
                <li>Use the 28-day meal plan to kickstart your journey to better health.</li>
            </ul>
        `;
    }

    document.getElementById('result').innerHTML = `
        <h2><span class="emoji">${emoji}</span>Your Longevity Diet Score: ${score}</h2>
        <p>Profile: ${profile}</p>
        <h3>Suggestions:</h3>
        ${suggestions}
        <p>Start your journey today! Unlock the secrets to a longer, healthier life with the "Outlive Nutrition Guide and Cookbook." Discover how small changes in your diet can lead to significant improvements in your healthspan. Ready to take control of your nutrition and live better? Get started now!</p>
    `;
}

window.onload = renderQuiz;
