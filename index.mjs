@@ -0,0 +1,76 @@
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dinesh Kovi - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <div id="profile-pic">
                <img src="https://via.placeholder.com/150" alt="Profile Picture">
            </div>
            <div id="header-content">
                <h1>Dinesh Kovi</h1>
                <p>Aspiring Software Engineer</p>
                <a href="https://www.linkedin.com/in/dinesh-kovi" target="_blank" class="btn">LinkedIn Profile</a>
            </div>
        </div>
    </header>

    <section id="about">
        <div class="container">
            <h2>About Me</h2>
            <p>
                I am a passionate and motivated student pursuing a degree in Computer Science. I have a strong interest in software development, particularly in backend technologies, and I enjoy working on challenging projects that help me grow my skills. I am eager to apply my knowledge in real-world scenarios and contribute to team success.
            </p>
        </div>
    </section>

    <section id="experience">
        <div class="container">
            <h2>Experience</h2>
            <ul id="experience-list">
                <!-- Experience items will be dynamically loaded here -->
            </ul>
        </div>
    </section>

    <section id="education">
        <div class="container">
            <h2>Education</h2>
            <ul id="education-list">
                <!-- Education items will be dynamically loaded here -->
            </ul>
        </div>
    </section>

    <section id="skills">
        <div class="container">
            <h2>Skills</h2>
            <ul id="skills-list">
                <!-- Skills will be dynamically loaded here -->
            </ul>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contact</h2>
            <p>If you would like to get in touch, feel free to connect with me on LinkedIn or send me an email.</p>
            <a href="https://www.linkedin.com/in/dinesh-kovi" target="_blank" class="btn">LinkedIn</a>
            <a href="mailto:example@example.com" class="btn">Email Me</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>© 2024 Dinesh Kovi. All Rights Reserved.</p>
        </div>
    </footer>

    <script type="module" src="index.mjs"></script>
</body>
</html>