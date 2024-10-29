new Vue({
    el: '#app',
    data: {
        questions: [
            {
                text: "¿Quién es considerado el rey de los corridos tumbados?",
                options: ["Natanael Cano", "Junior H", "Santa Fe Klan"],
                answer: "Natanael Cano"
            },
            {
                text: "¿Qué instrumento musical es característico en los corridos?",
                options: ["Guitarra", "Piano", "Saxofón"],
                answer: "Guitarra"
            },
            {
                text: "¿Qué tema recurrente se encuentra en los corridos tumbados?",
                options: ["Amor", "Narco", "Fiesta"],
                answer: "Narco"
            },
            {
                text: "¿Cuál de los siguientes artistas NO es un corrido tumbado?",
                options: ["Nicky Jam", "Cazzu", "Fayuca"],
                answer: "Nicky Jam"
            },
            {
                text: "¿Qué año se popularizaron los corridos tumbados?",
                options: ["2010", "2018", "2020"],
                answer: "2018"
            },
            {
                text: "¿Cuál es una de las colaboraciones más famosas en este género?",
                options: ["Cano y Junior H", "Cano y Maluma", "Cano y J Balvin"],
                answer: "Cano y Junior H"
            },
            {
                text: "¿Qué otro género musical se fusiona con los corridos tumbados?",
                options: ["Reggaetón", "Rock", "Jazz"],
                answer: "Reggaetón"
            },
            {
                text: "¿Quién es el creador de 'Soy El Diablo'?",
                options: ["Natanael Cano", "El Fantasma", "Los Dos Carnales"],
                answer: "Natanael Cano"
            },
            {
                text: "¿Qué plataforma ayudó a popularizar los corridos tumbados?",
                options: ["Spotify", "TikTok", "YouTube"],
                answer: "TikTok"
            },
            {
                text: "¿Cuál de estas letras de canciones es típica de corridos tumbados?",
                options: ["Amor eterno", "La cumbia de los pueblos", "Soy de rancho"],
                answer: "Soy de rancho"
            },
        ],
        userAnswers: [],
        quizCompleted: false,
        score: 0
    },
    methods: {
        checkAnswers() {
            this.score = this.userAnswers.filter((answer, index) => answer === this.questions[index].answer).length;
            this.quizCompleted = true;
        },
        resetQuiz() {
            this.userAnswers = [];
            this.quizCompleted = false;
            this.score = 0;
        }
    }
});
