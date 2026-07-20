export type Experience = {
  role: string
  org: string
  location: string
  period: string
  current?: boolean
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'Agentic AI Research Intern',
    org: 'Madabhushi Lab, Dept. of Radiology, Emory University School of Medicine',
    location: 'Atlanta, GA',
    period: 'July 2026 — Present',
    current: true,
    bullets: [
      'Researching multimodal AI architectures for integrating heterogeneous biomedical data — pathology whole-slide images, MRI/CT scans, molecular data, and clinical records — toward unified patient-level representations.',
      'Investigating how multimodal representations can condition hypothesis generation in SAGE, an agentic AI system, for patient-cohort- and dataset-specific reasoning.',
      'Surveying multimodal foundation model literature (CLIP-based architectures, Gemini Embedding 2, and related embedding/fusion strategies) to inform modality alignment and evaluation design for the project.'
    ],
  },
  {
    role: 'AI & Data Student Assistant',
    org: 'ATDC - North Star AI Labs',
    location: 'Atlanta, GA',
    period: 'May 2026 — Present',
    current: true,
    bullets: [
      "Engineered a local multi-agent deep research system in Python (LangGraph, local LLM inference, SearxNG, DuckDuckGo) using a hierarchical Orchestrator → Searcher → Analyzer architecture with tool-call quotas to prevent runaway execution.",
      "Built a full-stack journalist outreach platform (React, TypeScript, Express, PostgreSQL) spanning automated discovery, profile enrichment, and personalized pitch generation grounded in each journalist's recent publication history — plus an NLP-based reply classifier that triages inbound responses by intent and notifies admins when action is needed.",
      "Developed an end-to-end RAG-based content generation pipeline that grounds drafts in live web research alongside intake forms and interview transcripts, then auto-publishes human-approved content directly to social media and the company website — removing manual posting from the workflow entirely.",
    ],
  },
  {
    role: 'Data Scientist',
    org: 'OurScool Education Inc.',
    location: 'Taichung, Taiwan',
    period: 'Jan 2023 — Jan 2024',
    bullets: [
      'Developed ETL and feature-engineering pipelines (Python, SQL) transforming learning-platform and ERP/CRM data into model-ready inputs.',
      'Built customer segmentation and churn prediction models (scikit-learn, XGBoost), improving user engagement 12% and retention 20%.',
      'Implemented NLP pipelines and A/B testing to guide product/UI decisions, driving a 15% increase in conversion rates.',
      'Designed a quiz recommendation system using ranking and collaborative filtering that secured NT$1M in government funding.',
      'Shipped LLM-based automation for customer support workflows, cutting manual handling time 25%.'
    ],
  },
  {
    role: 'Full-Stack Developer & Technical Project Manager',
    org: 'OurScool Education Inc.',
    location: 'Taichung, Taiwan',
    period: 'Jan 2022 — Jan 2023',
    bullets: [
      'Built a full-featured e-learning platform (Vue.js) including a personalized quiz recommendation engine with progress analytics, alongside course management, real-time messaging, and in-platform purchases.',
      'Designed relational databases (MySQL) and backend APIs (PHP) for scalable storage, retrieval, and analytics/reporting integrations.',
      'Automated CI/CD pipelines on AWS and Docker, improving deployment reliability and cutting production errors 12%.',
      'Architected a full-stack ERP system (React.js, MySQL, PHP) from the ground up for orders, inventory, payments, and sales tracking, cutting processing time 30%.',
      'Defined data requirements and KPIs with engineering and business teams to enable reliable reporting and analysis.'
    ],
  },
  {
    role: 'Junior Software Engineer',
    org: 'Walnutek Inc.',
    location: 'Taipei, Taiwan',
    period: 'Jun 2021 — Dec 2021',
    bullets: [
      'Implemented computer vision models (OpenCV, YOLO) for breast cancer classification on hospital ultrasound images, localizing lesions and distinguishing normal/abnormal cases.',
      'Built end-to-end ML pipelines (Python, scikit-learn) for risk prediction, churn modeling, and performance forecasting across healthcare, insurance, manufacturing, and education domains.',
      'Built NLP pipelines (NLTK, web scraping, text classification) analyzing student sentiment and enrollment trends across social media and education forums to inform recruitment strategy.',
      'Processed large-scale datasets and productionized ML workflows using Selenium, Pandas, SQL, Docker, and Git.',
    ],
  },
]
