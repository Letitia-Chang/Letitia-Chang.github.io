export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  summary: string
  problem: string
  approach: string
  impact: string
  tags: string[]
  links: ProjectLink[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'cerm',
    title: 'CERM — Community Evacuation Resource Matching Tool',
    subtitle: 'WiDS Datathon 2026',
    summary:
      'A decision-support tool that matches vulnerable communities with evacuation resources during wildfire emergencies.',
    problem:
      'Existing wildfire tools focus on predicting and monitoring fires, not on coordinating help once an evacuation is underway — leaving elderly residents, people with disabilities, and households without vehicle access under-supported in the highest-risk moments.',
    approach:
      'Built a matching system that combines demographic vulnerability data, real-time request signals, and geographic proximity, using rule-based matching alongside lightweight LLM-assisted categorization to surface high-priority census tracts. Designed as a decision-support layer rather than an automated dispatcher, keeping a human in the loop for high-stakes calls.',
    impact:
      'Delivered a working prototype for the WiDS Datathon that surfaces the census tracts needing help first, giving responders a faster, more equitable starting point during active evacuations.',
    tags: ['Python', 'Data Science', 'Resource Matching', 'Social Impact'],
    links: [
      { label: 'Demo', href: 'https://riyabharath24.github.io/cerm-wildfire-evacuation-tool/' },
      { label: 'GitHub', href: 'https://github.com/Letitia-Chang/wids-prototype-dev' },
    ],
    featured: true,
  },
  {
    slug: 'ocr-auto-grading',
    title: 'OCR Auto-Grading System',
    subtitle: '智在家鄉 (Rural Taiwan Tech) Competition',
    summary:
      'An OCR-based grading pipeline built to cut manual grading time for teachers in under-resourced rural schools in Taiwan.',
    problem:
      'Rural Taiwanese teachers often grade handwritten assessments entirely by hand, leaving little time for individualized feedback or instruction — a bottleneck that scales poorly as class sizes and paperwork grow.',
    approach:
      'Built an OCR pipeline in Python to extract handwritten and printed answers from scanned test sheets, automatically score objective responses, and flag ambiguous cases for teacher review instead of forcing a single automated verdict.',
    impact:
      'Cut manual grading time for participating teachers and gave them faster turnaround on feedback, freeing up time for instruction over paperwork.',
    tags: ['OCR', 'Python', 'Education Technology', 'Automation'],
    links: [],
    featured: true,
  },
  {
    slug: 'telco-churn',
    title: 'Telco Customer Churn Prediction',
    subtitle: 'End-to-end applied ML project',
    summary:
      'A full churn-prediction pipeline — from raw data to a model that tells the business who is likely to leave, and why.',
    problem:
      'A telecom provider needed to know which customers were at risk of churning and which levers (contract type, tenure, service add-ons) actually moved the needle, rather than a black-box score with no business explanation.',
    approach:
      'Ran exploratory data analysis to surface churn drivers, engineered features from tenure, billing, and service usage, then trained and compared logistic regression, random forest, and XGBoost classifiers with cross-validated tuning and threshold selection for the business cost of false negatives.',
    impact:
      'Produced a model with clear precision/recall tradeoffs plus concrete, ranked retention recommendations (contract incentives, onboarding changes) tied to the top churn drivers identified in the EDA.',
    tags: ['Python', 'scikit-learn', 'XGBoost', 'Classification', 'EDA'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Letitia-Chang/customer-churn-prediction' },
    ],
    featured: true,
  },
  {
    slug: 'northstar-dossiers',
    title: 'NorthStar Journalist Dossiers',
    subtitle: 'AI-assisted workflow prototype',
    summary:
      'An AI-assisted research workflow that builds journalist dossiers to support faster, more targeted media outreach.',
    problem:
      'Manually researching journalists — beat, past coverage, outlet, contact preferences — before pitching is slow and inconsistent, which makes media outreach hit-or-miss at scale.',
    approach:
      'Prototyped a React front end backed by an AI-assisted research workflow that pulls together journalist coverage history and outlet context into a structured dossier, reducing outreach prep to a quick review-and-send step instead of research from scratch.',
    impact:
      'Gave the team a repeatable, structured way to prep outreach lists, cutting the manual research time needed before each pitch round.',
    tags: ['AI Workflow', 'Research Automation', 'React', 'Product Prototype'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Letitia-Chang/journalist-dossiers' },
    ],
  },
  {
    slug: 'social-recommender',
    title: 'Social Media Recommendation System',
    subtitle: 'Recommender systems project',
    summary:
      'A hybrid recommendation engine concept blending content-based and collaborative filtering for social feed ranking.',
    problem:
      'Pure collaborative filtering struggles on sparse, cold-start user-item interactions typical of social platforms, while pure content-based filtering misses the signal in what similar users actually engage with.',
    approach:
      'Designed a hybrid architecture pairing content-based filtering (text and embedding similarity over post content) with collaborative filtering (user-item interaction patterns), and a ranking layer to blend the two signals for final feed ordering.',
    impact:
      'Produced a working design and prototype ranking approach for handling cold-start users while still leveraging collaborative signal once interaction data builds up.',
    tags: ['Recommender Systems', 'NLP', 'Embeddings', 'Ranking'],
    links: [],
  },
  {
    slug: 'cox-hackathon',
    title: 'Cox Hackathon — Decarbonization Track',
    subtitle: 'Play With Purpose Hackathon',
    summary:
      'A data-driven sustainability concept built during a time-boxed hackathon on the decarbonization problem track.',
    problem:
      'The decarbonization track asked teams to find a practical, data-backed intervention for reducing carbon impact within a tight hackathon timeline and an ambiguous, open-ended brief.',
    approach:
      'Worked with a cross-functional team to scope the problem, analyze the available data, and shape it into a product concept and pitch under hackathon time constraints — balancing analytical rigor with a deliverable that a non-technical judging panel could evaluate quickly.',
    impact:
      'Delivered a scoped, data-backed sustainability concept and pitch within the hackathon window, demonstrating rapid problem framing under ambiguity.',
    tags: ['Sustainability', 'Analytics', 'Hackathon', 'Product Thinking'],
    links: [],
  },
]
