// Landing Page - jayra.js

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <div class="landing-page">
            <header class="navbar">
                <h1>Jayra</h1>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section id="home" class="hero">
                <h2>Welcome to Jayra</h2>
                <p>Your modern solution for web development</p>
                <button class="cta-button">Get Started</button>
            </section>

            <section id="features" class="features">
                <h2>Features</h2>
                <div class="feature-grid">
                    <div class="feature">
                        <h3>Fast</h3>
                        <p>Lightning-quick performance</p>
                    </div>
                    <div class="feature">
                        <h3>Reliable</h3>
                        <p>Enterprise-grade stability</p>
                    </div>
                    <div class="feature">
                        <h3>Easy</h3>
                        <p>Simple to integrate</p>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Jayra. All rights reserved.</p>
            </footer>
        </div>
    `;
});