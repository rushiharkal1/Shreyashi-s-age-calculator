document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var birthDate = new Date(today.getFullYear(), 1, 26); // 26th February

    if (today.getMonth() == 1 && today.getDate() == 26) {
        // Show the welcome button only on her birthday
        document.getElementById('welcome-btn').style.display = 'block';
    } else {
        // Calculate age
        var birthYear = 2004;
        var age = today.getFullYear() - birthYear;
        if (today < birthDate) {
            age--;
        }

        // Calculate remaining days until next birthday
        var nextBirthday = new Date(today.getFullYear(), 1, 26);
        if (today > nextBirthday) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }
        var remainingDays = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

        // Display age and remaining days message
        var ageMessage = `Shreyashi, your age is ${age} and your birthday will come after ${remainingDays} days.`;
        document.getElementById('age-message').textContent = ageMessage;
    }
});

document.getElementById('welcome-btn').addEventListener('click', function() {
    for (var i = 0; i < 25; i++) {
        setTimeout(createBalloon, Math.random() * 10000); // Random delay up to 3 seconds
    }

    var button = document.getElementById('welcome-btn');
    button.style.display = 'none';

    var message = document.getElementById('birthday-message');
    var text = 'Happy Birthday!';
    var nameText = 'Shreyashi'; // The name to appear after animation finishes

    message.innerHTML = '';
    message.style.display = 'block';

    // Display "Happy Birthday" message with animation
    for (let i = 0; i < text.length; i++) {
        setTimeout(function() {
            var span = document.createElement('span');
            span.className = 'letter';
            span.style.animationDelay = i * 0.1 + 's';
            span.textContent = text[i];
            message.appendChild(span);
        }, i * 500);
    }

    // Delay before showing the name after "Happy Birthday!" is fully displayed
    setTimeout(function() {
        var nameDiv = document.createElement('div');
        nameDiv.className = 'birthday-name';
        message.appendChild(nameDiv); // Append below the main message

        for (let i = 0; i < nameText.length; i++) {
            setTimeout(function() {
                var span = document.createElement('span');
                span.className = 'letter';
                span.style.animationDelay = i * 0.1 + 's';
                span.textContent = nameText[i];
                nameDiv.appendChild(span);
            }, i * 500);
        }
    }, text.length * 500 + 500); // Delay based on "Happy Birthday!" animation time

    // Generate firecrackers continuously
    setInterval(createFirecracker, 50);

    // Play the birthday audio
    var audio = document.getElementById('birthday-audio');
    audio.style.display = 'block';
    audio.play();
});

function createBalloon() {
    var balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 90 + 'vw';
    balloon.style.backgroundColor = getRandomColor();
    document.body.appendChild(balloon);

    balloon.addEventListener('animationend', function() {
        document.body.removeChild(balloon);
    });
}

function createFirecracker() {
    var firecracker = document.createElement('div');
    firecracker.className = 'firecracker';
    firecracker.style.left = Math.random() * 100 + 'vw';
    firecracker.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(firecracker);

    firecracker.addEventListener('animationend', function() {
        document.body.removeChild(firecracker);
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
