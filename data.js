// central data for portfolio pages
window.portfolioData = {
  about: {
    summary:
      "I am a practical-minded and detail-oriented software engineer with around 3 years of experience in the industry, shipping products that impact multiple processes and customer teams across the globe. \
      My love for large-scale data systems and enterprise machine learning systems pushed me to pursue an MSc in Computer Science at the University of Amsterdam and Vrije Universiteit Amsterdam. \
      I love everything about backend, scalable systems, data, knowledge bases, graphs, search, and retrieval. \
      I enjoy building solutions that bridge the gap between cutting-edge research and real-world applications, with a keen skill set in the intersection of backend and generative AI.",
    whatIDo: [
      "LLM/RAG/Generative apps for tabular and knowledge-base search.",
      "Real-time and batch backend systems with scaling and observability.",
      "APIs and dashboards that translate data into action."
    ],
    tech:
      "Python, Java, SQL · PyTorch, TensorFlow · Kafka, Spark · PostgreSQL, MySQL, Redis, Neo4j · Docker, Kubernetes, Azure/GCP.",
    highlights: [
      "Execution and customer-focus awards at Micron.",
      "Dean's Merit List for academics.",
      "Best Poster for AutoCodeDoc; two papers on software development."
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
          link: "#"
        },
        {
          title: "LLM-TruthLens",
          tags: ["LLM QA", "Disambiguation", "Entity recognition", "Fact verification", "Multi-threading"],
          desc: "Real-time LLM verification for entity and yes/no QA using Llama, BERT, RoBERTa, and WikiData signals.",
          link: "#"
        },
        {
          title: "Mood Predictor",
          tags: ["Time-series", "LSTM + Attention", "RNNs", "GRUs", "Sensor Data"],
          desc: "Smartphone-sensor mood prediction with LSTM + attention; achieved 97% F1 on activity data.",
          link: "#"
        },
        {
          title: "Expedia stay Recommender",
          tags: ["Recommender", "Search queries", "Personalization", "Learning to Rank"],
          desc: "Expedia hotel recommendations using LambdaRank, optimized for NDCG on search-query signals.",
          link: "#"
        },
        {
          title: "Evolutionary Circuit Optimization",
          tags: ["Genetic Algorithms", "NSGA-II", "Hardware Optimization"],
          desc: "Multi-objective evolutionary algorithms to improve nanoscale circuit performance by 79%.",
          link: "#"
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
          link: "#"
        },
        {
          title: "AIDB ML Analytics Engine",
          tags: ["SQL", "ML"],
          desc: "Batch processing, aggregation, and SQL parsing (sqlglot) for cheaper unstructured analytics.",
          link: "#"
        },
        {
          title: "Internal DB-Manager",
          tags: ["SQL", "NoSQL", "CRUD", "Abstraction", "Interfaces"],
          desc: "Unified data access layer that abstracts SQL/NoSQL CRUD operations to simplify app development and reduce drift.",
          link: "#"
        },
        {
          title: "DocToCode",
          tags: ["Spec → Code"],
          desc: "Code generation platform cutting flash memory design iteration time by 50% across teams.",
          link: "#"
        },
        {
          title: "MemberManager",
          tags: ["GraphDB", "Neo4j", "Redis", "Cache"],
          desc: "Distributed membership platform with Neo4j and Redis delivering millisecond responses at scale.",
          link: "#"
        },
        {
          title: "PackageIO Platform",
          tags: ["APIs", "Automation", "Verification"],
          desc: "Platform for auto-generation, exchange, and verification across DRAM products.",
          link: "#"
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
          link: "#"
        },
        {
          title: "Dropbox Clone",
          tags: ["P2P", "File sharing", "Indexing"],
          desc: "Peer-to-peer file sharing app with search, indexing, download, and upload.",
          link: "#"
        }
      ]
    }
  ],
  experience: [
    {
      role: "Software Engineer II · Micron Technology (https://www.micron.com)",
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
      role: "Machine Learning Intern · Morningstar (https://www.morningstar.com)",
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
