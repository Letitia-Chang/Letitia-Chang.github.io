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
    role: 'AI & Data Student Assistant',
    org: 'North Star AI Labs',
    location: 'Atlanta, GA',
    period: 'May 2026 — Present',
    current: true,
    bullets: [
      'Shipped a three-workflow LLM article-generation pipeline (Google Apps Script + Claude API) converging form submissions, in-person interviews, and startup research into a single production master feed powering a published frontend.',
      'Built the press and media outreach system: tiered journalist target lists from published coverage and AI-drafted outreach for tech reporters.',
      'Led brand and design-system decisions for the company website and internal media dashboard.',
    ],
  },
  {
    role: 'Data Science Practicum — UPS Surface Network Planning',
    org: 'UPS · Georgia Tech MSA Practicum',
    location: 'Atlanta, GA',
    period: 'May 2026 — Present',
    current: true,
    bullets: [
      'Building a normalized Driver Schedule Consistency Score quantifying how consistent driver schedules are across a large surface transportation network, sponsored by UPS Operations Research.',
      'Designed the scoring and normalization methodology and workload distribution analysis; presented the midterm readout to the UPS sponsor team.',
    ],
  },
  {
    role: 'Data Scientist',
    org: 'OurScool Education Inc.',
    location: 'Taichung, Taiwan',
    period: 'Jan 2023 — Jan 2024',
    bullets: [
      'Designed ETL and feature-engineering pipelines (Python, SQL) turning learning-platform and ERP/CRM data into model-ready inputs.',
      'Built customer segmentation and churn models that improved user engagement by 12% and retention by 20%; designed a quiz recommendation system that helped secure NT$1M in government funding.',
      'Shipped LLM-assisted support automation drafting response suggestions, cutting manual handling time by 25%.',
      'Ran NLP analysis and A/B tests guiding product and UI decisions, driving a 15% increase in conversion; built Tableau dashboards for engagement, churn, and retention.',
    ],
  },
  {
    role: 'Full-Stack Developer & Technical Project Manager',
    org: 'OurScool Education Inc.',
    location: 'Taichung, Taiwan',
    period: 'Jan 2022 — Jan 2023',
    bullets: [
      'Architected a full-stack ERP system (React, MySQL, PHP) for orders, inventory, payments, and sales tracking — automating manual workflows and cutting processing time by 30%.',
      'Built a full-featured Vue.js e-learning platform: course management, real-time messaging, social feeds, in-platform purchases, and a personalized quiz recommender with progress analytics.',
      'Automated CI/CD on AWS and Docker, improving deployment reliability and reducing production errors by 12%.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    org: 'Walnutek Inc.',
    location: 'Taipei, Taiwan',
    period: 'Jun 2021 — Dec 2021',
    bullets: [
      'Built end-to-end ML pipelines (Python, scikit-learn) for risk prediction, churn modeling, and forecasting across healthcare, insurance, manufacturing, and education clients.',
      'Implemented computer-vision models (OpenCV, YOLO) for breast-cancer classification on hospital ultrasound images, localizing lesions and flagging abnormal cases.',
      'Built NLP pipelines (NLTK, web scraping, text classification) analyzing student sentiment and enrollment trends to inform recruitment strategy.',
    ],
  },
]
