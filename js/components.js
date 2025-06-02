// Component-specific functionality
function initFeatureDisplay() {
    const featureItems = document.querySelectorAll('.feature-item');
    const featureDisplay = document.getElementById('feature-display');
    
    const featureContent = {
        ai: {
            icon: `<svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></svg>`,
            title: 'AI-Powered Analysis',
            description: 'Advanced machine learning algorithms provide instant dose analysis, anomaly detection, and predictive insights for optimal patient care.'
        },
        compliance: {
            icon: `<svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            title: 'Real-Time DRL Monitoring',
            description: 'Continuous monitoring against diagnostic reference levels with instant alerts and comprehensive compliance reporting for regulatory requirements.'
        },
        security: {
            icon: `<svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2-2v-5a2 2 0 012-2z"/></svg>`,
            title: 'Enterprise Security',
            description: 'Complete offline processing ensures maximum data security and HIPAA compliance without compromising on functionality or performance.'
        }
    };
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const feature = item.getAttribute('data-feature');
            const content = featureContent[feature];
            
            featureDisplay.innerHTML = `
                <div class="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 glow-effect">
                    ${content.icon}
                </div>
                <h3 class="text-3xl font-bold mb-4">${content.title}</h3>
                <p class="text-gray-300 text-lg">${content.description}</p>
            `;
        });
    });
}

function expandScreenshot(imageSrc, title, description) {
    const overlay = document.createElement('div');
    overlay.className = 'screenshot-expanded active';
    overlay.innerHTML = `
        <div class="close-btn" onclick="this.parentElement.remove()">×</div>
        <img src="${imageSrc}" alt="${title}">
        <div class="text-center mt-4">
            <h3 class="text-2xl font-bold mb-2">${title}</h3>
            <p class="text-gray-300">${description}</p>
        </div>
    `;
    document.body.appendChild(overlay);
} 