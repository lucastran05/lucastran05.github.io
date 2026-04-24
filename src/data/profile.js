const profile = {
  personal: {
    name: 'Tran Quoc Cuong',
    subtitle: 'Information Security Student @ PTIT',
    avatar: '/avatar.jpg',
    cvUrl: '/cv.pdf',
  },
  navigation: [
    { id: 'education', label: 'Education', icon: 'graduation' },
    { id: 'experience', label: 'Experience', icon: 'briefcase' },
    { id: 'latest-news', label: 'Latest News', icon: 'newspaper' },
    { id: 'awards', label: 'Awards', icon: 'award' },
    { id: 'publications', label: 'Publications', icon: 'book' },
  ],
  contacts: [
    { label: 'Email', icon: 'mail', url: 'mailto:cuong.tran@example.com' },
    { label: 'GitHub', icon: 'github', url: 'https://github.com/lucastran05' },
    {
      label: 'Google Scholar',
      icon: 'graduation',
      url: 'https://scholar.google.com/',
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/',
    },
  ],
  hero: {
    heading: "Hello, I'm Tran Quoc Cuong.",
    intro:
      'I am currently an Information Security student at Posts and Telecommunications Institute of Technology (PTIT). My interests include cybersecurity, system security, Linux log analysis, anomaly detection, and secure web application development.',
    info: [
      {
        label: 'Research Interest',
        value: 'Cybersecurity, Log Analysis, Anomaly Detection, System Security',
      },
      {
        label: 'Programming',
        value: 'Python, JavaScript, Go, C/C++',
      },
    ],
  },
  education: [
    {
      school: 'Posts and Telecommunications Institute of Technology (PTIT)',
      degree: 'B.E. in Information Security',
      years: '2022 - Present',
      gpa: '3.34 / 4.0',
      highlights: ['Academic Encouragement Scholarship'],
    },
  ],
  experience: [
    {
      title: 'Security Research Student',
      description:
        'Conducting practical research activities in cyber threat analysis and secure system design under faculty guidance.',
    },
    {
      title: 'Web Developer / Frontend Developer',
      description:
        'Developing responsive web interfaces and implementing secure coding practices for modern frontend applications.',
    },
    {
      title: 'Linux Log Anomaly Detection Project',
      description:
        'Building analysis pipelines to identify unusual patterns in Linux logs and support incident detection workflows.',
    },
  ],
  latestNews: [
    {
      date: 'Apr 2026',
      title: 'Presented student research update in PTIT seminar',
      description:
        'Shared progress and preliminary findings from a Linux log anomaly detection study.',
    },
    {
      date: 'Jan 2026',
      title: 'Started collaborative secure web application mini-project',
      description:
        'Focused on practical OWASP-guided hardening and frontend security testing.',
    },
  ],
  awards: [
    {
      title: 'Academic Encouragement Scholarship',
      detail: 'Awarded for strong academic performance in Information Security.',
    },
    {
      title: 'Consolation Prize',
      detail: 'Recognized in a student technology and innovation competition.',
    },
    {
      title: 'Student Research Participation',
      detail: 'Selected to participate in PTIT student research activities.',
    },
  ],
  publications: [
    {
      title: 'Lightweight Detection of Abnormal Linux Authentication Logs',
      authors: ['Tran Quoc Cuong', 'Nguyen Van A', 'Le Thi B'],
      venue: 'PTIT Student Research Proceedings',
      year: '2025',
      pdf: '/papers/paper-1.pdf',
    },
    {
      title: 'A Practical Workflow for Secure Frontend Authentication',
      authors: ['Pham Van C', 'Tran Quoc Cuong'],
      venue: 'Vietnam Information Security Workshop',
      year: '2026',
      pdf: '/papers/paper-2.pdf',
    },
  ],
}

export default profile
