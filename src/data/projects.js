// ── Projects Data ─────────────────────────────────────────────────────────────
export const projects = [
    {
        id: 1,
        title: 'Expense Tracking System',
        subtitle: 'Enterprise Financial Application',
        description:
            'A secure, full-stack enterprise expense tracking system designed for concurrent users, featuring comprehensive authentication and financial reporting capabilities.',
        tech: ['Spring Boot', 'PostgreSQL', 'React.js', 'JWT', 'REST API'],
        features: [
            'Engineered RESTful APIs with Spring Boot and optimized PostgreSQL queries',
            'Implemented JWT-based authentication with stateless, secure routing',
            'Built responsive React UI for real-time expense visualization',
            'Designed a normalized relational database schema for data integrity'
        ],
        github: 'https://github.com/Haneesh-M',
        demo: null,
        color: 'cyan'
    },
    {
        id: 2,
        title: 'Digraph Clustering',
        subtitle: 'Research & Algorithms',
        description:
            'An advanced research project implementing a spectral algorithm to cluster directed graphs, manipulating complex asymmetric matrices to discover inherent graph structures.',
        tech: ['Python', 'Spectral Algorithms', 'Matrix Computation', 'NumPy'],
        features: [
            'Translated mathematically complex spectral algorithms into optimized Python code',
            'Constructed and manipulated Hermitian matrices from asymmetric digraphs',
            'Computed eigenvalues/eigenvectors for precise data point clustering',
            'Improved clustering accuracy on complex directed datasets'
        ],
        github: 'https://github.com/Haneesh-M',
        demo: null,
        color: 'violet'
    },
    {
        id: 3,
        title: 'BERT-based NLP System',
        subtitle: 'Machine Learning API',
        description:
            'A natural language processing system leveraging the BERT transformer model to perform advanced text analysis and contextual understanding via a high-performance backend.',
        tech: ['FastAPI', 'Python', 'Transformers (BERT)', 'NLP'],
        features: [
            'Integrated the BERT transformer model for deep contextual text analysis',
            'Developed high-performance FastAPI endpoints for real-time model inference',
            'Evaluated model outputs using ROUGE and BLEU metric standards',
            'Optimized payload processing for low-latency ML operations'
        ],
        github: 'https://github.com/Haneesh-M',
        demo: null,
        color: 'emerald'
    }
];
