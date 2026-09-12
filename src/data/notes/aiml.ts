import type { ChapterNote } from '../../types';

export const AIML_NOTES: ChapterNote[] = [
  {
    moduleId: 'aiml-m1',
    title: 'Module 1 · Introduction to AI & Machine Learning',
    sections: [
      {
        h: '1.1 Artificial Intelligence',
        items: [
          '**AI** — making machines perform tasks that normally require human intelligence (reasoning, learning, perception, language).',
          '**History**: Turing test (1950) → Dartmouth workshop (1956) → expert systems (80s) → machine learning → deep learning era.',
          '**Branches**: NLP, computer vision, robotics, speech, **expert systems**, **knowledge representation & reasoning**.',
          '**AI vs ML vs DL**: AI = umbrella; ML = learning from data; **DL = neural networks with many layers** (subset of ML).',
        ],
      },
      {
        h: '1.2 Machine Learning Fundamentals',
        items: [
          '**ML** — algorithms improve at a task (T) with experience (E) on performance measure (P), without explicit programming (Mitchell).',
          '**Supervised learning** — labelled data: classification (discrete) vs regression (continuous).',
          '**Unsupervised learning** — unlabelled data: clustering, dimensionality reduction.',
          '**Reinforcement learning** — agent learns by rewards/punishment from environment.',
          '**Key concepts**: feature, target/label, training set, test set, model, loss/cost (MSE, cross-entropy).',
        ],
      },
      {
        h: '1.3 Feature & Data Concepts',
        items: [
          'Feature engineering: encoding (one-hot), scaling (normalisation/standardisation), handling missing data.',
          'Train/test split & **bias–variance trade-off** — underfitting vs overfitting; regularisation (L1/L2) intuition.',
          '**Evaluation**: accuracy, precision, recall, F1 for classification; MAE/RMSE for regression; confusion matrix.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Differentiate AI / ML / DL with a diagram and examples.',
          'Compare supervised vs unsupervised vs reinforcement learning with examples.',
          'Explain the bias–variance trade-off and overfitting with remedies.',
          'Define and compute accuracy/precision/recall from a confusion matrix.',
        ],
      },
    ],
  },
  {
    moduleId: 'aiml-m2',
    title: 'Module 2 · Machine Learning Workflow & Algorithms',
    sections: [
      {
        h: '2.1 Core Supervised Algorithms',
        items: [
          '**Linear regression** — fits a line `y = wx + b` minimising SSE; gradient descent update `w ← w − η·∂L/∂w`.',
          '**Logistic regression** — sigmoid `1/(1+e⁻ᶻ)` for probability; decision boundary.',
          '**Decision trees** — split by impurity (Gini/entropy); handled missing values; **Random Forest** = bagged trees.',
          '**k-NN** — predict by majority vote of k nearest neighbours (needs scaled features); **SVM** — maximum-margin hyperplane with kernels.',
        ],
      },
      {
        h: '2.2 Unsupervised & Deep Learning',
        items: [
          '**k-means clustering** — pick k centres, assign points, recompute centroids until convergence; choose k via elbow.',
          '**PCA** — project data onto principal components for reduction.',
          '**Neural networks**: neuron with weights+bias+activation (ReLU, sigmoid), hidden layers, forward pass, **backpropagation** updates weights.',
          '**CNN** for images (convolution, pooling, dense layers); **LSTM/transformers** for sequences (overview).',
        ],
      },
      {
        h: '2.3 Workflow & Tools',
        items: [
          'Pipeline: data collection → cleaning → EDA → split → train → evaluate → deploy → monitor.',
          '**Tools/libraries**: Python, NumPy, Pandas, Scikit-learn, TensorFlow/PyTorch, Matplotlib; Jupyter notebooks.',
          'Supports: imbalanced data (SMOTE), feature selection, cross-validation (k-fold).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain gradient descent with a one-variable example.',
          'Describe the decision-tree induction and how Random Forest works.',
          'Run a k-means trace on small 2D data.',
          'Draw a small neural network and explain the forward/backward pass.',
        ],
      },
    ],
  },
  {
    moduleId: 'aiml-m3',
    title: 'Module 3 · Real-World Applications',
    sections: [
      {
        h: '3.1 Application Domains',
        items: [
          '**Healthcare**: disease diagnosis from scans, drug discovery, risk prediction.',
          '**Finance**: fraud detection, credit scoring, algorithmic trading, credit risk.',
          '**E-commerce & marketing**: recommendation systems (collaborative & content filtering), churn prediction, dynamic pricing.',
          '**Transport & smart cities**: traffic prediction, autonomous vehicles (perception–planning–control), route optimisation.',
        ],
      },
      {
        h: '3.2 NLP & Generative AI',
        items: [
          '**NLP tasks**: text classification, sentiment, machine translation, chatbots.',
          '**Large Language Models** (GPT, Gemini): transformer architecture, pre-training + fine-tuning, prompt engineering; used in chat assistants, code generation. (Grounded in text; be mindful of correctness.)',
          '**Speech & vision**: speech-to-text, facial recognition, OCR. Note: applications like face recognition have ethical concerns.',
        ],
      },
      {
        h: '3.3 Project Case Study (Mini)',
        items: [
          'Typical student project: spam/email classifier, house price predictor, image digit recogniser (MNIST), churn predictor.',
          'Steps: dataset (Kaggle/UCI) → EDA → model train → evaluate → simple demo/API.',
          '**Ethical & societal**: bias in training data, fairness, privacy, explainability, job impact, responsible AI practices.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain recommendation systems with an example (filtering approaches).',
          'Describe an end-to-end ML/mini-project lifecycle for spam detection.',
          'Discuss three ethical concerns in deploying AI systems.',
          'Short notes: LLMs, CNNs, auto-driving pipeline.',
        ],
      },
    ],
  },
];