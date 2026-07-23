const mlProjects = [
    {
        title: "IMDB Movie Data Analysis",
        desc: "A comprehensive data analysis project on IMDB movie datasets, extracting patterns, handling missing values, and deriving insights on audience ratings and box office revenues.",
        tech: ["Python", "Pandas", "Data Analysis"],
        github: "https://github.com/Ebrahim-Hamdy11/imdb-movie-data-analysis1.git"
    },
    {
        title: "Voice Gender Recognition Using Machine Learning",
        desc: "Building a smart classification model to recognize speaker gender (male or female) by analyzing acoustic properties and speech signals using machine learning algorithms.",
        tech: ["Python", "Scikit-Learn", "Classification"],
        github: "https://github.com/Ebrahim-Hamdy11/voice-gender-recognition-using-machine-learning-classification.git"
    },
    {
        title: "Student Performance Analysis & Prediction",
        desc: "An analytical and predictive model to measure academic student performance, identify key factors affecting grades, and forecast academic outcomes.",
        tech: ["Python", "Scikit-Learn", "Pandas"],
        github: "https://github.com/Ebrahim-Hamdy11/Student-Performance-Analysis-Prediction.git"
    },
    {
        title: "Diabetes Prediction Using Machine Learning",
        desc: "Applying machine learning algorithms to diagnose and predict diabetes based on medical biometric indicators with high accuracy.",
        tech: ["Python", "Scikit-Learn", "Classification"],
        github: "https://github.com/Ebrahim-Hamdy11/Diabetes-Prediction-Using-Machine-Learning.git"
    },
    {
        title: "Car Price Prediction Using Machine Learning",
        desc: "An advanced regression model to predict used car prices based on technical specifications, manufacturing year, and mileage.",
        tech: ["Python", "Scikit-Learn", "Regression"],
        github: "https://github.com/Ebrahim-Hamdy11/Car-Price-Prediction-Using-Machine-Learning.git"
    },
    {
        title: "Breast Cancer Classification Using Machine Learning",
        desc: "Classifying medical tumors to determine whether they are malignant or benign using advanced classification techniques to minimize medical errors.",
        tech: ["Python", "Scikit-Learn", "Healthcare"],
        github: "https://github.com/Ebrahim-Hamdy11/Breast-Cancer-Classification-Using-Machine-Learning.git"
    },
    {
        title: "Sales Data Analysis and Prediction",
        desc: "Analyzing corporate historical sales data, extracting seasonal trends, and forecasting future sales to enhance business decision-making.",
        tech: ["Python", "Pandas", "NumPy", "Analysis"],
        github: "https://github.com/Ebrahim-Hamdy11/Sales-Data-Analysis-and-Prediction.git"
    },
    {
        title: "Titanic Survival Analysis and Prediction",
        desc: "The classic data science challenge; analyzing Titanic passenger data and building a predictive model for survival rates.",
        tech: ["Python", "Scikit-Learn", "Pandas"],
        github: "https://github.com/Ebrahim-Hamdy11/Titanic-Survival-Analysis-and-Prediction.git"
    },
    {
        title: "House Price Prediction Using Machine Learning",
        desc: "Feature engineering and advanced regression models to accurately determine and evaluate residential property prices based on specifications.",
        tech: ["Python", "Scikit-Learn", "Regression"],
        github: "https://github.com/Ebrahim-Hamdy11/House-Price-Prediction-Using-Machine-Learning.git"
    },
    {
        title: "Customer Segmentation Using Clustering",
        desc: "Segmenting customers into behavioral target groups using clustering algorithms to enhance marketing strategies.",
        tech: ["Python", "Scikit-Learn", "K-Means"],
        github: "https://github.com/Ebrahim-Hamdy11/Customer-Segmentation-Using-Clustering.git"
    },
    {
        title: "Superstore Sales Analysis and Prediction",
        desc: "Comprehensive analysis of superstore sales data using machine learning algorithms to predict future sales and optimize commercial performance.",
        tech: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"],
        github: "https://github.com/Ebrahim-Hamdy11/superstore-sales-analysis-and-prediction---using-machine-learning.git"
    },
    {
        title: "Obesity Level Classification",
        desc: "Building an advanced classification model to analyze obesity levels and classify cases based on dietary habits and physical characteristics.",
        tech: ["Python", "Scikit-Learn", "Classification"],
        github: "https://github.com/Ebrahim-Hamdy11/obesity-level-classification.git"
    },
    {
        title: "Bank Deposit Prediction Using Neural Network",
        desc: "Developing a deep neural network model to predict customer subscription to bank term deposits based on marketing campaigns.",
        tech: ["Python", "TensorFlow", "Keras", "Deep Learning"],
        github: "https://github.com/Ebrahim-Hamdy11/bank-deposit-prediction-using-Neural-network.git"
    }
];

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let html = '';
    mlProjects.forEach((proj) => {
        const techBadges = proj.tech.map(t => `<span class="tech-item">${t}</span>`).join('');
        
        html += `
            <div class="project-card" onclick="window.open('${proj.github}', '_blank')">
                <div class="project-header">
                    <i class="fas fa-folder-open folder-icon"></i>
                    <i class="fab fa-github github-icon"></i>
                </div>
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-desc">${proj.desc}</p>
                <div class="project-tech">
                    ${techBadges}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderProjects);