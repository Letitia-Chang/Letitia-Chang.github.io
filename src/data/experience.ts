export type Experience = {
  role: string
  org: string
  location: string
  period: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'Data Scientist',
    org: 'OurScool Education Inc.',
    location: 'Taichung, Taiwan',
    period: 'Jan 2023 — Jan 2024',
    bullets: [
      'Acted as tech lead across data science, backend, and product teams, translating business needs into deployable AI systems.',
      'Designed a quiz recommendation system using ranking and collaborative filtering that helped secure NT$1M in government funding.',
      'Trained customer segmentation and churn prediction models, improving user engagement by 12% and retention by 20%.',
      'Built an LLM-assisted customer support automation pipeline to draft response suggestions, cutting manual handling time by 25%.',
      'Implemented NLP pipelines and A/B testing to guide product and UI decisions, increasing conversion rates by 15%.',
    ],
  },
  {
    role: 'Full-Stack Developer & Product Manager',
    org: 'OurScool Education Inc.',
    location: 'Taichung, Taiwan',
    period: 'Jan 2022 — Jan 2023',
    bullets: [
      'Defined data requirements and KPIs with engineering and business teams to enable reliable reporting and analytics.',
      'Designed relational databases (MySQL) and backend APIs (PHP) supporting scalable data storage and system integrations.',
      'Built a Vue.js web learning platform (booking, progress tracking, user management) and a production React.js ERP system for orders, inventory, and payments.',
      'Automated CI/CD pipelines on AWS and Docker, improving deployment reliability and reducing production errors by 12%.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    org: 'Walnutek Inc.',
    location: 'Taipei, Taiwan',
    period: 'Jun 2021 — Dec 2021',
    bullets: [
      'Built end-to-end ML pipelines in Python and scikit-learn for risk prediction, churn modeling, and performance forecasting across healthcare, insurance, manufacturing, and education domains.',
      'Built NLP pipelines using NLTK and web scraping to analyze student sentiment and enrollment trends, informing recruitment strategy.',
      'Implemented computer vision models (OpenCV, YOLO) for breast cancer classification on hospital ultrasound images, localizing lesions and distinguishing normal from abnormal cases.',
      'Processed large-scale datasets and productionized ML workflows using Selenium, Pandas, SQL, Docker, and Git.',
    ],
  },
]
