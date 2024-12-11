
var countQues=0;
var lang;
var score=0;

var WEBDEVquestions = [
    {
        question: "What does HTML stand for?",
        choices: ["HyperText Markup Language", "High-Tech Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
        answer: 1
    },
    {
        question: "Which tag is used for creating a hyperlink in HTML?",
        choices: ["a", "link", "href", "anchor"],
        answer: 1
    },
    {
        question: "What is the purpose of the <title> tag in HTML?",
        choices: ["To display the title in the browser tab", "To set the page's background", "To create a heading", "To link a CSS file"],
        answer: 1
    },
    {
        question: "Which of the following is not a semantic HTML element?",
        choices: ["article", "section", "footer", "div"],
        answer: 4
    },
    {
        question: "How do you specify the character encoding in an HTML document?",
        choices: ["meta charset='UTF-8'", "charset='UTF-8'", "encode charset='UTF-8'", "html charset='UTF-8'"],
        answer: 1
    },
    {
        question: "What is the correct syntax to include an image in HTML?",
        choices: ["img src='image.jpg' alt='Image'", "image src='image.jpg' alt='Image'", "pic src='image.jpg' alt='Image'", "src img='image.jpg' alt='Image'"],
        answer: 1
    },
    {
        question: "Which attribute is used to provide an alternative text for an image?",
        choices: ["title", "alt", "src", "caption"],
        answer: 2
    },
    {
        question: "Which tag is used to create an unordered list in HTML?",
        choices: ["ul", "ol", "li", "list"],
        answer: 1
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        choices: ["class", "style", "id", "css"],
        answer: 2
    },
    {
        question: "What is the default alignment of text in HTML?",
        choices: ["Left", "Center", "Right", "Justify"],
        answer: 1
    }
];


var Cybersecurityquestions = [
    {
        question: "What does the acronym 'VPN' stand for?",
        choices: ["Virtual Privacy Network", "Virtual Private Network", "Virtual Protocol Network", "Verified Private Network"],
        answer: 2
    },
    {
        question: "Which of the following is an example of a phishing attack?",
        choices: ["Sending a fake email to steal credentials", "Installing antivirus software", "Creating a secure password", "Updating operating system patches"],
        answer: 1
    },
    {
        question: "What is a firewall used for in cybersecurity?",
        choices: ["Encrypting files", "Detecting malware", "Controlling network traffic", "Backing up data"],
        answer: 3
    },
    {
        question: "Which of these is NOT a type of malware?",
        choices: ["Trojan horse", "Ransomware", "Spyware", "Protocol"],
        answer: 4
    },
    {
        question: "What is the primary purpose of encryption?",
        choices: ["Preventing spam", "Ensuring data confidentiality", "Deleting data securely", "Improving system performance"],
        answer: 2
    },
    {
        question: "What is a DDoS attack?",
        choices: ["A method to update software", "An attempt to overload a server with traffic", "A technique to encrypt sensitive data", "A tool for diagnosing network issues"],
        answer: 2
    },
    {
        question: "What does 'two-factor authentication' require?",
        choices: ["A username and password", "Two forms of identification", "Biometric scanning only", "One-time password only"],
        answer: 2
    },
    {
        question: "What is the term for software that secretly gathers user information?",
        choices: ["Adware", "Spyware", "Malware", "Keylogger"],
        answer: 2
    },
    {
        question: "Which of the following is an example of social engineering?",
        choices: ["Using strong encryption", "Phishing emails", "Updating antivirus", "Configuring firewalls"],
        answer: 2
    },
    {
        question: "What is the main purpose of a CAPTCHA?",
        choices: ["To block bots from accessing websites", "To improve website performance", "To encrypt sensitive data", "To reset user passwords"],
        answer: 1
    }
];

var IoTquestions = [
    {
        question: "What does IoT stand for?",
        choices: ["Internet of Technology", "Internet of Things", "Integration of Technology", "Internet over Telecommunication"],
        answer: 2
    },
    {
        question: "Which of the following is a key component of IoT?",
        choices: ["Web browsers", "Smart devices", "Antivirus software", "Cloud storage only"],
        answer: 2
    },
    {
        question: "Which communication protocol is commonly used in IoT?",
        choices: ["SMTP", "HTTP", "MQTT", "FTP"],
        answer: 3
    },
    {
        question: "What type of network do IoT devices typically use?",
        choices: ["LAN", "5G", "Wi-Fi", "All of the above"],
        answer: 4
    },
    {
        question: "What is the purpose of IoT sensors?",
        choices: ["To control devices remotely", "To collect and transmit data", "To store large datasets", "To replace the need for the internet"],
        answer: 2
    },
    {
        question: "Which of the following is an IoT application?",
        choices: ["Smart homes", "Online shopping", "Web hosting", "Word processing"],
        answer: 1
    },
    {
        question: "What is a major security concern in IoT systems?",
        choices: ["Device size", "Battery life", "Data privacy and security", "Limited network protocols"],
        answer: 3
    },
    {
        question: "What does an IoT gateway do?",
        choices: ["Connects IoT devices to a network", "Processes IoT device data locally", "Filters and forwards data to the cloud", "All of the above"],
        answer: 4
    },
    {
        question: "Which industry heavily uses IoT for predictive maintenance?",
        choices: ["Healthcare", "Manufacturing", "Education", "Tourism"],
        answer: 2
    },
    {
        question: "Which of these is a popular IoT platform?",
        choices: ["Google Maps", "Amazon Web Services IoT", "Adobe Photoshop", "Slack"],
        answer: 2
    }
];

var DigitalMaketingquestions = [
    {
        question: "What is the primary goal of digital marketing?",
        choices: ["Brand awareness", "Customer acquisition", "Lead generation", "All of the above"],
        answer: 4
    },
    {
        question: "Which of the following is a popular digital marketing strategy?",
        choices: ["Search Engine Optimization (SEO)", "Pay-per-click advertising (PPC)", "Content marketing", "All of the above"],
        answer: 4
    },
    {
        question: "What is the purpose of an email campaign in digital marketing?",
        choices: ["To send newsletters only", "To build customer relationships", "To sell products", "To just reach new audiences"],
        answer: 2
    },
    {
        question: "Which social media platform is known for its video-sharing capabilities?",
        choices: ["Facebook", "Twitter", "Instagram", "YouTube"],
        answer: 4
    },
    {
        question: "What does the term 'CTR' stand for in digital marketing?",
        choices: ["Click-through rate", "Cost to revenue", "Conversion rate", "Customer return"],
        answer: 1
    },
    {
        question: "Which of the following tools helps in analyzing social media metrics?",
        choices: ["Hootsuite", "Google Analytics", "MailChimp", "All of the above"],
        answer: 2
    },
    {
        question: "What is the purpose of A/B testing in digital marketing?",
        choices: ["To find the best-performing ad variations", "To increase ad spending", "To remove low-performing ads", "To gather customer feedback"],
        answer: 1
    },
    {
        question: "Which digital marketing tactic involves paying for ads that appear in search engine results?",
        choices: ["SEO", "PPC", "Content marketing", "Email marketing"],
        answer: 2
    },
    {
        question: "What is the significance of social proof in digital marketing?",
        choices: ["It increases brand credibility", "It reduces marketing costs", "It decreases customer loyalty", "It has no impact on marketing"],
        answer: 1
    },
    {
        question: "Which of the following is an example of content marketing?",
        choices: ["Blog posts", "Product ads", "Email newsletters", "Sales pitches"],
        answer: 1
    }
];

var SocialMediaquestions = [
    {
        question: "What is the primary purpose of social media marketing?",
        choices: ["To engage with customers", "To build brand awareness", "To drive traffic to a website", "All of the above"],
        answer: 4
    },
    {
        question: "Which social media platform is best for visual content like images and videos?",
        choices: ["Twitter", "Facebook", "Instagram", "LinkedIn"],
        answer: 3
    },
    {
        question: "What is the key advantage of using Twitter for marketing?",
        choices: ["Long-form content", "Visual storytelling", "Real-time interaction", "Private messaging"],
        answer: 3
    },
    {
        question: "How can businesses measure their success on social media?",
        choices: ["By the number of followers", "By the engagement rate", "By the number of shares", "All of the above"],
        answer: 2
    },
    {
        question: "What is a 'hashtag' used for on social media?",
        choices: ["To identify keywords and topics", "To increase post visibility", "To track engagement", "All of the above"],
        answer: 4
    },
    {
        question: "What is the best practice for handling negative comments on social media?",
        choices: ["Ignore them", "Delete them", "Engage with empathy", "Report them"],
        answer: 3
    },
    {
        question: "Which platform is best for B2B marketing?",
        choices: ["Instagram", "Facebook", "LinkedIn", "Snapchat"],
        answer: 3
    },
    {
        question: "What is the key benefit of live streaming on social media?",
        choices: ["Increased engagement and interaction", "Higher production quality", "Increased reach", "All of the above"],
        answer: 1
    },
    {
        question: "Which of the following is a common social media metric?",
        choices: ["Impressions", "Clicks", "Engagement", "All of the above"],
        answer: 4
    },
    {
        question: "What does 'ROI' stand for in social media marketing?",
        choices: ["Return on Investment", "Reach on Influence", "Reaction of Interest", "Reactions of Influence"],
        answer: 1
    }
];





document.getElementById("score").textContent = "Score : " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";

document.querySelector(".choose-lang").addEventListener("click", function () {
    lang = document.getElementById("course").value + "questions";
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;

    document.querySelector(".quiz").style.display = "block";
    loadQuestion(countQues);
});

function loadQuestion(index) {
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][index].question + "</h1>";
    for (var i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][index].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][index].choices[i];
    }
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;
}

document.querySelector(".submit-answer").addEventListener("click", function () {
    var selectedOption = document.querySelector('input[name="options"]:checked').value;
    var correctAnswerIndex = window[lang][countQues].answer - 1;
    var isCorrect = selectedOption === window[lang][countQues].choices[correctAnswerIndex];

    score += isCorrect ? 10 : 0;
    document.getElementById("score").textContent = "Score : " + score;

    document.getElementById("ques-view").innerHTML += "<div class='ques-circle " + (isCorrect ? "correct" : "incorrect") + "'>" + (countQues + 1) + "</div>";

    if (countQues < window[lang].length - 1) {
        countQues++;
        loadQuestion(countQues);
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";
    }
});

document.querySelector(".view-results").addEventListener("click", function () {
    document.querySelector(".final-result").style.display = "block";

    var correct = document.getElementById("ques-view").getElementsByClassName("correct").length;

    document.querySelector(".solved-ques-no").innerHTML = "You Solved " + (countQues + 1) + " questions of " + document.getElementById("course").value;
    document.querySelector(".right-wrong").innerHTML = correct + " were Right and " + ((countQues + 1) - correct) + " were Wrong";

    var finalScore = Math.min(score, 100); // Cap the score at 100
    document.getElementById("display-final-score").innerHTML = "Your Final Score is: " + finalScore +"%";

    var remark = correct / (countQues + 1) > 0.8 ? "Outstanding! :)" :
                 correct / (countQues + 1) > 0.6 ? "Good, Keep Improving." :
                 correct / (countQues + 1) > 0.4 ? "Satisfactory, Learn More." :
                 "Unsatisfactory, Try Again.";

    document.querySelector(".remark").innerHTML = "Remark: " + remark;
});

$(document).ready(function () {
    var currentQuestion = 0;
    var score = 0;
    var questions = [
        // Add your questions here
    ];

    function loadQuestion(questionIndex) {
        var question = questions[questionIndex];
        $('#ques-view').text(question.question);
        for (var i = 0; i < question.options.length; i++) {
            $('#lb' + i).text(question.options[i]);
        }
        $('#ques-left').text('Question: ' + (questionIndex + 1) + '/' + questions.length);
    }

    function showResults() {
        var correctAnswers = questions.filter(q => q.correctAnswer === q.userAnswer);
        var finalScore = correctAnswers.length * 10; // Scaling score to 10 per question
        $('#display-final-score').text('Your Final Score is: ' + Math.min(finalScore, 100)); // Cap the score at 100
        $('.solved-ques-no').text('You Solved ' + questions.length + ' questions.');
        $('.right-wrong').text(correctAnswers.length + ' were correct and ' + (questions.length - correctAnswers.length) + ' were wrong.');
        $('.remark').text('Remark: ' + (correctAnswers.length / questions.length >= 0.6 ? 'Satisfactory' : 'Needs Improvement') + ', Keep trying.');
        $('.final-result').show();
        $('.quiz').hide();
    }

    $('.submit-answer').click(function () {
        var selectedOption = $('input[name="options"]:checked').val();
        questions[currentQuestion].userAnswer = questions[currentQuestion].options.indexOf(selectedOption);
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion(currentQuestion);
        } else {
            showResults();
        }
    });

    $('#restart').click(function () {
        currentQuestion = 0;
        score = 0;
        $('.final-result').hide();
        $('.quiz').show();
        loadQuestion(currentQuestion);
    });

    // Load the first question when the page loads
    loadQuestion(currentQuestion);
});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();
});

document.getElementById("about").addEventListener("click", function () {
    alert("Quiz Website Project Created By Digvijay Singh");
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});