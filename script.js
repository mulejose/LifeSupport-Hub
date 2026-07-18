/* ===========================
   INTERACTIVE FEATURES & FUNCTIONALITY
   =========================== */

// Array of motivational quotes
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        text: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    },
    {
        text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
        author: "Unknown"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Everything you want is on the other side of fear.",
        author: "Jack Canfield"
    },
    {
        text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        author: "Roy T. Bennett"
    },
    {
        text: "I learned that courage was not the absence of fear, but the triumph over it.",
        author: "Nelson Mandela"
    },
    {
        text: "Your past does not define your future.",
        author: "Unknown"
    }
];

// Array of daily affirmations
const affirmations = [
    "I am worthy and deserving of success.",
    "Today is full of possibilities and opportunities.",
    "I choose to focus on what I can control.",
    "My challenges are making me stronger.",
    "I am grateful for my progress, no matter how small.",
    "I have the power to create positive change.",
    "Every step forward is a victory.",
    "I am capable of handling whatever comes my way.",
    "My potential is limitless.",
    "I choose kindness, especially to myself.",
    "I am proud of who I am becoming.",
    "Today, I will be better than yesterday.",
    "I deserve love, respect, and happiness.",
    "My struggles don't define me; my strength does.",
    "I am a work in progress and that's perfectly okay."
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    generateQuote();
    setupMobileMenu();
});

/* ===========================
   QUOTE GENERATOR
   =========================== */

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteElement = document.getElementById('daily-quote');
    
    if (quoteElement) {
        quoteElement.style.opacity = '0';
        setTimeout(() => {
            quoteElement.innerHTML = `
                <div style="margin-bottom: 1rem;">
                    <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">"${quote.text}"</p>
                    <p style="font-size: 0.9rem; color: #7b68ee;">— ${quote.author}</p>
                </div>
            `;
            quoteElement.style.opacity = '1';
            quoteElement.style.transition = 'opacity 0.5s ease';
        }, 300);
    }
}

/* ===========================
   AFFIRMATION DISPLAY
   =========================== */

function showAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];
    const affirmationElement = document.getElementById('affirmation-text');
    
    if (affirmationElement) {
        affirmationElement.style.opacity = '0';
        setTimeout(() => {
            affirmationElement.innerHTML = `
                <div style="padding: 1rem; background: rgba(123, 104, 238, 0.1); border-radius: 8px; border-left: 4px solid #7b68ee;">
                    <p style="font-size: 1.1rem; font-weight: 600;">${affirmation}</p>
                </div>
            `;
            affirmationElement.style.opacity = '1';
            affirmationElement.style.transition = 'opacity 0.5s ease';
        }, 300);
    }
}

/* ===========================
   BREATHING EXERCISE
   =========================== */

function startBreathingExercise() {
    const breathingGuide = document.getElementById('breathing-guide');
    
    if (breathingGuide) {
        breathingGuide.innerHTML = `
            <div style="text-align: center;">
                <div style="
                    width: 120px;
                    height: 120px;
                    margin: 1rem auto;
                    border-radius: 50%;
                    background: radial-gradient(circle, #20c997, #6a5acd);
                    animation: breathe 8s infinite;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    font-size: 0.9rem;
                " id="breathing-circle">
                    Breathe
                </div>
                <p style="margin-top: 1rem; color: #636e72;">
                    Follow the circle: Inhale (4s) → Hold (4s) → Exhale (4s)
                </p>
                <p style="font-size: 0.9rem; color: #b2bec3;">Repeat for 2-3 minutes</p>
            </div>
        `;
        
        // Add breathing animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes breathe {
                0% { transform: scale(1); }
                33% { transform: scale(1.3); }
                66% { transform: scale(1.3); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

/* ===========================
   PROGRESS TRACKER
   =========================== */

function showProgressTracker() {
    const progressTracker = document.getElementById('progress-tracker');
    
    if (progressTracker) {
        progressTracker.innerHTML = `
            <div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Weekly Goal</label>
                    <input type="text" placeholder="e.g., Exercise 3x, Read 1 book" style="
                        width: 100%;
                        padding: 0.7rem;
                        border: 2px solid #e9ecef;
                        border-radius: 6px;
                        font-size: 0.95rem;
                    " id="goal-input">
                </div>
                <button onclick="saveGoal()" style="
                    width: 100%;
                    background: #20c997;
                    color: white;
                    border: none;
                    padding: 0.7rem;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#1dd1a1'" onmouseout="this.style.background='#20c997'">
                    Save Goal
                </button>
                <div id="saved-goals" style="margin-top: 1.5rem;"></div>
            </div>
        `;
        
        loadSavedGoals();
    }
}

function saveGoal() {
    const goalInput = document.getElementById('goal-input');
    
    if (goalInput && goalInput.value.trim()) {
        let goals = JSON.parse(localStorage.getItem('lifeSupportGoals')) || [];
        goals.push({
            text: goalInput.value,
            date: new Date().toLocaleDateString(),
            completed: false
        });
        localStorage.setItem('lifeSupportGoals', JSON.stringify(goals));
        
        goalInput.value = '';
        loadSavedGoals();
    } else {
        alert('Please enter a goal first!');
    }
}

function loadSavedGoals() {
    const savedGoalsElement = document.getElementById('saved-goals');
    
    if (savedGoalsElement) {
        let goals = JSON.parse(localStorage.getItem('lifeSupportGoals')) || [];
        
        if (goals.length === 0) {
            savedGoalsElement.innerHTML = '<p style="color: #b2bec3; text-align: center;">No goals yet. Start by adding one!</p>';
            return;
        }
        
        let goalsHTML = '<h4 style="margin-bottom: 1rem;">Your Goals:</h4>';
        goals.forEach((goal, index) => {
            goalsHTML += `
                <div style="
                    background: #f8f9fa;
                    padding: 0.8rem;
                    margin-bottom: 0.8rem;
                    border-radius: 6px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div style="flex: 1;">
                        <p style="margin-bottom: 0.3rem; font-weight: 500;">${goal.text}</p>
                        <small style="color: #b2bec3;">${goal.date}</small>
                    </div>
                    <button onclick="deleteGoal(${index})" style="
                        background: #e17055;
                        color: white;
                        border: none;
                        padding: 0.4rem 0.8rem;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 0.85rem;
                    ">Delete</button>
                </div>
            `;
        });
        
        savedGoalsElement.innerHTML = goalsHTML;
    }
}

function deleteGoal(index) {
    let goals = JSON.parse(localStorage.getItem('lifeSupportGoals')) || [];
    goals.splice(index, 1);
    localStorage.setItem('lifeSupportGoals', JSON.stringify(goals));
    loadSavedGoals();
}

/* ===========================
   FORM HANDLING
   =========================== */

function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate form
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate sending (in production, this would send to a server)
    showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you soon! 💌', 'success');
    
    form.reset();
}

/* ===========================
   NOTIFICATION SYSTEM
   =========================== */

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#00b894' : type === 'error' ? '#e17055' : '#7b68ee'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    notification.innerHTML = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

/* ===========================
   MOBILE MENU TOGGLE
   =========================== */

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Hamburger animation
            hamburger.querySelectorAll('span').forEach(span => {
                span.style.transition = '0.3s';
            });
        });
        
        // Close menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

/* ===========================
   SMOOTH SCROLL & SCROLL ANIMATIONS
   =========================== */

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.resource-card, .story-card, .tool-box, .stat').forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
});

/* ===========================
   ACTIVE LINK HIGHLIGHTING
   =========================== */

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-link.active {
        opacity: 1;
        border-bottom: 2px solid #20c997;
        padding-bottom: 5px;
    }
`;
document.head.appendChild(activeStyle);

/* ===========================
   KEYBOARD SHORTCUTS
   =========================== */

document.addEventListener('keydown', (e) => {
    // Press '/' to focus on navigation
    if (e.key === '/') {
        e.preventDefault();
        document.querySelector('.nav-menu').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'q' to generate new quote
    if (e.key === 'q' || e.key === 'Q') {
        generateQuote();
    }
    
    // Press 'a' to show affirmation
    if (e.key === 'a' || e.key === 'A') {
        showAffirmation();
    }
});

/* ===========================
   PERFORMANCE OPTIMIZATION
   =========================== */

// Lazy load images (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ===========================
   ACCESSIBILITY FEATURES
   =========================== */

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.style.outline = 'none';
    }
});

// Focus visible for accessibility
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    :focus-visible {
        outline: 2px solid #7b68ee;
        outline-offset: 2px;
    }
    
    button:focus-visible {
        outline: 2px solid #7b68ee;
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);

/* ===========================
   ERROR HANDLING
   =========================== */

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
    // Don't show error notifications to users for non-critical errors
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled rejection:', event.reason);
});