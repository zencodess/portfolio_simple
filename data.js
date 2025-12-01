// central data for portfolio pages
window.portfolioData = {
  about: {
    summary:
      "I’m a practical, detail-minded engineer with ~3 years of experience shipping products that multiple teams rely on. I love turning new ideas into MVPs and MVPs into reliable apps. Databases, distributed systems, knowledge bases, graphs, search/retrieval, and LLMs are my playground. My curiosity pushed me to pursue an MSc in Computer Science at the <a href='https://www.uva.nl' target='_blank' rel='noreferrer'>University of Amsterdam</a> and <a href='https://vu.nl' target='_blank' rel='noreferrer'>Vrije Universiteit Amsterdam</a>. I enjoy bridging research and real-world delivery—and fixing code, mine and yours, before my hot chocolate gets cold.",
    keyPoints: [
      "3 years shipping backend + ML systems with global impact across 5+ countries",
      "Top 3/70 Best Poster; 4+ Micron leadership awards",
      "MSc CS at <a href='https://www.uva.nl' target='_blank' rel='noreferrer'>University of Amsterdam</a> & <a href='https://vu.nl' target='_blank' rel='noreferrer'>Vrije Universiteit Amsterdam</a>",
      "Excited by data platforms, knowledge graphs, search/retrieval, and generative AI"
    ],
    tech:
      "Python, Java, SQL · PyTorch, TensorFlow · Kafka, Spark · PostgreSQL, MySQL, Redis, Neo4j · Docker, Kubernetes, Azure/GCP.",
    highlights: [
      "5+ Micron Leadership Awards.",
      "Best Poster (Top 3/70) at Micron Technical Seminar.",
      "2 internal research publications on software design-based process automation and collaborative platforms at Micron seminars.",
      "Dean's Merit List for academics."
    ]
  },
  projects: [
    {
      bucket: "Machine Learning",
      items: [
        {
          title: "Natural Language Interface to Relational Databases",
          tags: ["LLM · RAG", "Table QA", "Databases", "Indexing"],
          desc: "Table-aware RAG to answer corporate data queries; Boosts data literacy, accessibility and discoverability.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "LLM-TruthLens",
          tags: ["LLM QA", "Disambiguation", "Entity recognition", "Fact verification", "Multi-threading"],
          desc: "Real-time LLM verification for entity and yes/no QA using Llama, BERT, RoBERTa, and WikiData signals.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "Mood Predictor",
          tags: ["Time-series", "LSTM + Attention", "RNNs", "GRUs", "Sensor Data"],
          desc: "Smartphone-sensor mood prediction with LSTM + attention; achieved 97% F1 on activity data.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "Expedia stay Recommender",
          tags: ["Recommender", "Search queries", "Personalization", "Learning to Rank"],
          desc: "Expedia hotel recommendations using LambdaRank, optimized for NDCG on search-query signals.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "Evolutionary Circuit Optimization",
          tags: ["Genetic Algorithms", "NSGA-II", "Hardware Optimization"],
          desc: "Multi-objective evolutionary algorithms to improve nanoscale circuit performance by 79%.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "Connect Four AI (MCTS-UCT)",
          tags: ["Reinforcement Learning", "MCTS", "Game AI"],
          desc: "Connect Four agent using Monte Carlo Tree Search (UCT) achieving 100% win rate against random opponents.",
          link: "#",
          image: "assets/project-placeholder.png"
        }
      ]
    },
    {
      bucket: "Backend focused",
      items: [
        {
          title: "Ride-Share Demand Viewer",
          tags: ["Real-time", "Streaming"],
          desc: "Streaming application at 50K updates/sec and 0.5 ms latency with Kafka, Debezium CDC, PostgreSQL.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "AIDB ML Analytics Engine",
          tags: ["SQL", "ML"],
          desc: "Batch processing, aggregation, and SQL parsing (sqlglot) for cheaper unstructured analytics.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "Performance Prediction Application",
          tags: ["Streaming", "Anomaly Detection", "Data Pipelines"],
          desc: "Data ingestion, processing, and design anomaly detection over terabytes of simulation data.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "Internal DB-Manager",
          tags: ["SQL", "NoSQL", "CRUD", "Abstraction", "Interfaces"],
          desc: "Unified data access layer that abstracts SQL/NoSQL CRUD operations to simplify app development and reduce drift.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "DocToCode",
          tags: ["Spec → Code"],
          desc: "Code generation platform cutting flash memory design iteration time by 50% across teams.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "MemberManager",
          tags: ["GraphDB", "Neo4j", "Redis", "Cache"],
          desc: "Distributed membership platform with Neo4j and Redis delivering millisecond responses at scale.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "PackageIO Platform",
          tags: ["APIs", "Automation", "Verification"],
          desc: "Platform for auto-generation, exchange, and verification across DRAM products.",
          link: "#",
          image: "assets/project-placeholder.png"
        }
      ]
    },
    {
      bucket: "Frontend focused",
      items: [
        {
          title: "Simulation & Verification Dashboards",
          tags: ["APIs", "Dashboards"],
          desc: "Backend services and observability for DRAM simulation dashboards serving global product lines.",
          link: "#",
          image: "assets/project-placeholder.png"
        },
        {
          title: "Dropbox Clone",
          tags: ["P2P", "File sharing", "Indexing"],
          desc: "Peer-to-peer file sharing app with search, indexing, download, and upload.",
          link: "#",
          image: "assets/project-placeholder.png"
        }
      ]
    }
  ],
  experience: [
    {
      role: "Software Engineer II · <a href='https://www.micron.com' target='_blank' rel='noreferrer'>Micron Technology</a>",
      location: "Hyderabad",
      dates: "Aug 2020 – May 2023",
      summary:
        "Shipped tools that shortened design cycles, raised reliability, and kept teams unblocked during critical releases.",
      impacts: [
        { title: "DocToCode", desc: "Spec-to-code platform that cut flash memory design iteration time by 50%." },
        { title: "Performance Prediction", desc: "Scanner module and anomaly detection over terabytes of simulation data." },
        { title: "Simulation & Verification", desc: "Dashboards and monitoring that improved visibility for DRAM product lines." },
        { title: "MemberManager", desc: "Graph DB + Redis membership platform with millisecond responses." },
        { title: "PackageIO", desc: "Platform for auto-generation and verification across all DRAM products." },
        { title: "On-call readiness", desc: "Resolved 65+ issues across 15+ release cycles to keep global teams shipping." }
      ]
    },
    {
      role: "Machine Learning Intern · <a href='https://www.morningstar.com' target='_blank' rel='noreferrer'>Morningstar</a>",
      location: "Mumbai",
      dates: "May 2019 – Jul 2019",
      summary:
        "Built production modules for hierarchical mapping and extraction of financial terms; reached 96%+ F1 with XGBoost and CNNs.",
      impacts: []
    }
  ],
  honors: [
    "Two papers on software-driven process automation and collaboration at Micron.",
    "Best Poster for AutoCodeDoc; third place poster among 70 products.",
    "Awards for Excellent Execution, Tenacity, and Customer Focus.",
    "Dean's Merit List for academics."
  ],
  blog: [
    {
      title: "Making RAG work for structured data",
      desc: "How table representation learning and indexing choices change retrieval quality for enterprise knowledge bases.",
      link: "#"
    },
    {
      title: "What observability means for ML APIs",
      desc: "Patterns for tracing, monitoring, and alerting across ML-powered endpoints and streaming consumers.",
      link: "#"
    },
    {
      title: "From SQL to models: the AIDB journey",
      desc: "Design notes from building a SQL-first path to advanced ML results for no-code users.",
      link: "#"
    }
  ]
};
