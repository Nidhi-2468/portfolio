export interface Project {
  id: number;
  title: string;
  category: string;
  featured: boolean;
  image: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  results: string[];
  github: string;
}
const projects: Project[] = [
  {
    id: 1,
    title: "Traveling Salesman Problem Optimization",
    category: "Operations Research",
    featured: true,

    image: "/projects/TSP.png",

    shortDescription:
      "Optimized large-scale Traveling Salesman Problem instances using Mixed Integer Linear Programming and compared multiple optimization solvers.",

    problem:
      "The Traveling Salesman Problem requires finding the shortest possible route that visits every city exactly once before returning to the starting point.",

    solution:
      "Developed a MILP model using Gurobi and compared it against OR-Tools and SCIP across datasets of varying sizes. Evaluated runtime, solution quality and optimality gap.",

    technologies: [
      "Python",
      "Gurobi",
      "OR-Tools",
      "SCIP",
      "MILP",
      "Optimization"
    ],

    highlights: [
      "Compared three optimization solvers",
      "Implemented warm-start optimization",
      "Benchmarked runtime and MIP Gap",
      "Generated interactive route visualizations",
      "Large-scale experimentation"
    ],
    results: [
   "Solved instances from 10 to 1000 cities",
   "Compared Gurobi, OR-Tools and SCIP",
   "Evaluated runtime, optimality gap and solution quality",
   "Implemented warm-start optimization"
],

    github:
      "https://github.com/Nidhi-2468/traveling-salesman-problem-optimization"
  },

  {
    id: 2,
    title: "Supplier Risk Prediction",
    category: "Machine Learning",
    featured: true,

    image: "/projects/supplier-risk.png",

    shortDescription:
      "Developed a machine learning model to predict supplier quality risk using historical supplier performance data.",

    problem:
      "Manufacturing companies need to identify high-risk suppliers before quality issues impact production.",

    solution:
      "Performed data preprocessing, feature engineering and exploratory data analysis before training a Logistic Regression model. Evaluated the model using Precision, Recall, F1-score and Confusion Matrix.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Logistic Regression",
      "Power BI"
    ],

    highlights: [
      "11,432 supplier records analysed",
      "Feature engineering",
      "Business-focused insights",
      "Interactive dashboard",
      "Model evaluation"
    ],
    results: [
   "Analysed 11,432 supplier records",
   "Built Logistic Regression model",
   "Evaluated Precision, Recall and F1-score",
   "Created business recommendations"
],

    github: "https://github.com/Nidhi-2468/supplier-risk-prediction"
  },
  {
  id: 3,

  title: "Customer Churn Prediction",

  category: "Machine Learning",

  featured: true,

  image: "/projects/churn.png",

  shortDescription:
    "Built machine learning models to predict customer churn and identify the factors driving customer attrition using telecom customer data.",

  problem:
    "Customer retention is critical for subscription-based businesses. The objective was to identify customers likely to churn and uncover the key factors influencing their decision.",

  solution:
    "Performed data preprocessing, feature engineering, and exploratory data analysis before training Logistic Regression and Random Forest models. Compared model performance using accuracy, precision, recall, F1-score, and confusion matrix.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Logistic Regression",
    "Random Forest",
    "Matplotlib"
  ],

  highlights: [
    "Performed feature engineering and exploratory data analysis",
    "Compared Logistic Regression and Random Forest models",
    "Evaluated model performance using multiple metrics",
    "Identified major drivers influencing customer churn"
  ],

  results: [
    "Achieved 80.4% classification accuracy",
    "Identified contract type and tenure as major churn factors",
    "Generated business recommendations for customer retention",
    "Improved model interpretability using coefficient analysis"
  ],

  github: "https://github.com/Nidhi-2468/customer-churn-prediction"
}
];

export default projects;