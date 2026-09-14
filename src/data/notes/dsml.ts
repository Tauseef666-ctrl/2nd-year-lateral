import type { ChapterNote } from '../../types';

export const DSML_NOTES: ChapterNote[] = [
  {
    moduleId: 'dsml-m1',
    title: 'Module 1 · Foundations of Data Science & ML',
    sections: [
      {
        h: '1.1 AI, Data Science & Data Mining',
        items: [
          '**Data Science** = extracting insights & decisions from data: statistics + ML + domain knowledge + computation.',
          '**Data Mining** = discovering patterns in large datasets (association, classification, clustering, regression, anomaly).',
          '**AI ecosystem**: AI (broad intelligence) ⊃ ML (learning from data) ⊃ **Deep Learning** (neural networks); data pipelines feed all three.',
          '**Data science pipeline**: business understanding → data collection → cleaning → EDA → modelling → evaluation → deployment/action.',
          '**Big data**: volume, velocity, variety (veracity, value); tools: pandas, scikit-learn, SQL, Spark, TensorFlow.',
        ],
      },
      {
        h: '1.2 Data Preparation',
        items: [
          '**Data sources/types**: structured (tables), semi-structured (JSON/XML), unstructured (text, images); numerical vs categorical.',
          '**Data quality issues**: missing values, outliers, duplicate records, inconsistent formatting, imbalanced classes.',
          '**Cleaning steps**: handling missing (drop/mean/median/mode-imputation/model-based), outlier treatment (IQR/z-score/clipping), deduplication, standardisation of units.',
          '**Encoding**: one-hot / label encoding for categoricals; scaling (min-max normalisation, z-score).',
          '**Data splitting**: train / validation / test (e.g., 70/15/15) with stratification; avoid leakage from test into training.',
        ],
      },
      {
        h: '1.3 Machine Learning: Types & Applications',
        items: [
          '**ML** = algorithms that improve performance on a task with experience (data), instead of being explicitly programmed with rules.',
          '**Types**: **supervised** (labelled targets — classification/regression), **unsupervised** (no labels — clustering/dimensionality reduction), **semi-supervised**, **reinforcement learning** (reward-based, agent-environment).',
          '**Regression** predicts continuous values (house price, temperature); **classification** predicts categories (spam/not, disease, sentiment).',
          '**Applications**: recommendation systems, fraud detection, healthcare diagnostics, autonomous vehicles, NLP/CV, forecasting.',
          '**Model evaluation**: accuracy, precision, recall, F1, confusion matrix, RMSE/MAE; overfitting vs underfitting and the bias–variance trade-off.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the data science lifecycle.',
          'Describe data preparation steps with missing-value handling methods.',
          'Compare supervised vs unsupervised vs reinforcement learning.',
          'Define regression vs classification with examples.',
          'Why is train/test split essential? What is data leakage?',
        ],
      },
    ],
  },
  {
    moduleId: 'dsml-m2',
    title: 'Module 2 · Data Preprocessing, Analysis & Visualization',
    sections: [
      {
        h: '2.1 Preprocessing Techniques',
        items: [
          '**Imputation**: mean/median/mode, forward-fill, KNN or model-based imputation for missing values.',
          '**Outlier handling**: box-plot (1.5×IQR), z-score (>3), clipping winsorization; decide in-domain whether to cap or remove.',
          '**Transformation**: log/sqrt (skew), binning (discretisation), one-hot/ordinal encoding, **feature scaling** (MinMax 0-1, StandardScaler z-scores) — needed for distance-based and gradient models.',
          '**Feature engineering**: creating/deriving features, interaction terms, datetime decomposition, count encoding.',
          '**Feature selection**: filter (correlation, mutual info), wrapper (RFE), embedded (L1/LASSO) to remove redundancy.',
        ],
      },
      {
        h: '2.2 Data Analysis, Visualization & Performance',
        items: [
          '**Analysis**: univariate (distribution) vs bivariate (relations) vs multivariate; summary stats (mean, median, mode, variance, quartiles, skewness, kurtosis).',
          '**Visualizations**: histogram/box-plot (distributions), bar/line charts, scatter & pair plots (correlation), heatmaps (correlation matrix), Q-Q plots.',
          '**Correlation vs causation**: Pearson vs Spearman; caution in interpretation.',
          '**Performance measures**: regression — MAE, MSE, RMSE, R²; classification — accuracy, precision, recall, F1, ROC-AUC; confusion matrix interpretation; cross-validation (k-fold) for reliable estimates.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'How do you detect and treat outliers?',
          'Explain one-hot encoding and why scaling matters (with an SVM example).',
          'Compare MSE, RMSE, MAE and R².',
          'Interpret a confusion matrix and compute precision/recall/F1.',
          'When would you choose median vs mean imputation?',
        ],
      },
    ],
  },
  {
    moduleId: 'dsml-m3',
    title: 'Module 3 · Statistical Inference & EDA',
    sections: [
      {
        h: '3.1 Populations, Samples & Statistical Modelling',
        items: [
          '**Population** = entire group; **sample** = representative subset; sampling methods: random, stratified, cluster, systematic.',
          '**Descriptive vs inferential statistics**: describing data vs drawing conclusions through estimation and hypothesis testing.',
          '**Central limit theorem**: sample means approximate normality with large n — basis of many tests.',
          '**Hypothesis testing**: null H₀ vs alternative H₁, p-value, significance level α, Type I/Type II errors; t-test (mean), chi-square (independence), ANOVA (multiple groups).',
          '**Statistical modelling**: parametric models (assume distribution) vs non-parametric (distribution-free).',
        ],
      },
      {
        h: '3.2 Parametric vs Non-Parametric, Distance Metrics',
        items: [
          '**Parametric methods** assume a form (normal); more efficient if assumption holds (t-test, linear regression).',
          '**Non-parametric methods**: no strong distributional assumptions — rank-based (Mann-Whitney U, Wilcoxon), kernel density, empirical CDF; for skewed/small data.',
          '**Distance metrics**: **Euclidean** (straight-line), **Manhattan** (grid/L1), **Minkowski** (generalised), **Cosine** (angle between vectors — for text/embeddings), **Hamming** (categorical/codes), Mahalanobis (covariance-aware).',
          'Choice of metric affects clustering (k-means uses Euclidean), k-NN and similarity search; normalisation before computing distances.',
        ],
      },
      {
        h: '3.3 EDA Tools, Philosophy & Data Science Process',
        items: [
          '**EDA (Exploratory Data Analysis)** = open-ended exploration to understand structure, patterns, anomalies before modelling (John Tukey).',
          '**EDA workflow**: shape/headers → dtypes → missing/unique → summary stats → visualisations → hypotheses → feature ideation.',
          '**Tools**: pandas (DataFrame), NumPy, Matplotlib/Seaborn, plotly (interactive), statsmodels/scipy; Jupyter notebooks for iteration.',
          '**The Data Science Process** (OSEMN-style): Obtain → Scrub → Explore → Model → iNterpret; iterate with business feedback.',
          'EDA best-practices: ask questions, visualise early, document findings, sanity-check modeling inputs, version data documents.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain population vs sample and sampling methods.',
          'What is a p-value and how are Type I/II errors defined?',
          'Compare parametric and non-parametric tests with examples.',
          'Compute Euclidean, Manhattan and Cosine distances for sample vectors.',
          'Outline the EDA steps you would run on a tabular dataset.',
        ],
      },
    ],
  },
  {
    moduleId: 'dsml-m4',
    title: 'Module 4 · Machine Learning Algorithms',
    sections: [
      {
        h: '4.1 Supervised Learning',
        items: [
          '**Decision Tree (CART/ID3)**: recursive partitioning by best split (Gini impurity / entropy info-gain); interpretable, handles mixed data; prone to overfitting — prune, set depth.',
          '**Linear Regression**: y = b₀ + Σbᵢxᵢ; minimises SSE (ordinary least squares); assumptions (linearity, independence, homoscedasticity, normality); evaluate with R²/MAE.',
          '**k-NN**: instance-based; classify via majority vote of k nearest neighbours by distance; sensitive to scaling and k; lazy/no training.',
          '**SVM**: maximal-margin hyperplane; **kernels** (linear, polynomial, RBF) map to higher dimension; handles non-linear separation; support vectors define margin.',
          'Also in syllabus: logistic regression for classification, random forests/ensemble as natural extensions.',
        ],
      },
      {
        h: '4.2 Unsupervised Learning',
        items: [
          '**K-means**: partition into k clusters minimising within-cluster SSE; steps: initialise centroids → assign → update until convergence; choose k via elbow/silhouette; sensitive to initialisation (k-means++).',
          '**Mean Shift**: density-based clustering by shifting centre toward high density until convergence — finds arbitrary-shaped clusters without specifying k.',
          '**Dimensionality reduction**: **PCA** (orthogonal projections maximising variance) — used for visualisation, compression, denoising; eigenvalue decomposition.', 
          'Hierarchical clustering (agglomerative/divisive) and DBSCAN also relevant ideas; anomaly detection in unsupervised contexts.',
        ],
      },
      {
        h: '4.3 Introduction to Neural Networks',
        items: [
          '**Perceptron**: single unit, weights + bias + activation — linear decision boundary.',
          '**MLP**: input → hidden layers → output; activation functions (ReLU, sigmoid, tanh); weights optimised by **backpropagation** (gradient descent + chain rule).',
          '**Hyperparameters**: learning rate, layers, neurons, epochs, batch size, regularisation (dropout, L2).',
          '**Deep learning**: convolutional (images), recurrent/transformers (sequences), embeddings — scale and representation.',
          'Compare NN vs classic ML: capacity, data hunger, interpretability, compute.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Construct a decision tree for a small dataset using Gini/entropy.',
          'Explain the SVM margin and kernel trick.',
          'Trace k-means for a mini dataset; how do you choose k?',
          'Describe backpropagation and the role of activation functions.',
          'Compare PCA vs k-means as unsupervised tools.',
        ],
      },
    ],
  },
  {
    moduleId: 'dsml-m5',
    title: 'Module 5 · Social-Network Mining & Ethics',
    sections: [
      {
        h: '5.1 Social Networks as Graphs & Clustering',
        items: [
          '**Social network** = graph with individuals (nodes) and relationships (edges); edges may be directed (follow) or weighted (strength).',
          '**Graph metrics**: degree distribution, path length, clustering coefficient, centrality (degree, closeness, betweenness, eigenvector/PageRank), connected components.',
          '**Small-world and scale-free properties**: high clustering + short paths; hubs with power-law degree distribution.',
          '**Clustering in networks**: identify tightly-knit groups — **community detection** (modularity-based, Girvan-Newman, label propagation).',
        ],
      },
      {
        h: '5.2 Community Discovery & Graph Partitioning',
        items: [
          '**Community** = group densely connected internally, sparsely to the rest; captures friend circles, topic groups, protein complexes.',
          '**Girvan–Newman**: iteratively remove edges with highest **betweenness** until communities emerge (divisive).',
          '**Modularity Q**: how good the partition is vs random (null model); ~0.3+ indicates structure; **Louvain** optimises modularity greedily and scales to millions of nodes.',
          '**Graph partitioning** (spectral / min-cut) vs **overlapping communities** (allow shared members — e.g., SOAR algorithms).',
          'Applications: recommendation, influence analysis, epidemiology, fraud ring detection.',
        ],
      },
      {
        h: '5.3 Privacy, Security, Ethics & Future',
        items: [
          '**Privacy risks**: re-identification from network data, inference of sensitive attributes, deanonymisation.',
          '**Security**: fake accounts/bots, spreading misinformation, coordinated campaigns.',
          '**Ethical principles**: informed consent, fairness (no algorithmic bias), transparency/explainability, accountability, data minimisation, right to be forgotten.',
          '**Regulation**: GDPR, India\u2019s DPDP Act 2023 — consent, purpose limitation, data protection boards.',
          '**Future of data science**: responsible AI, federated learning, differential privacy, synthetic data, ethics-by-design in ML pipelines.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compute degree/betweenness centrality for a small graph.',
          'Explain Girvan–Newman and modularity-based community detection.',
          'What is the small-world phenomenon and the clustering coefficient?',
          'Discuss privacy and bias issues in social-network mining.',
          'How can organisations comply with GDPR while mining data?',
        ],
      },
    ],
  },
];