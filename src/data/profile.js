const profile = {
  locales: ['vi', 'en'],
  defaultLocale: 'en',
  personal: {
    name: 'Trần Quốc Cường',
    avatar: '/avatar.jpg',
    cvUrl: '/cv.pdf',
  },
  navigation: [
    { id: 'education', icon: 'graduation' },
    { id: 'skills', icon: 'briefcase' },
    { id: 'projects', icon: 'newspaper' },
    { id: 'certifications', icon: 'award' },
    { id: 'achievements', icon: 'book' },
  ],
  contacts: [
    { label: 'Email', icon: 'mail', url: 'mailto:trancuong13112005@gmail.com' },
    { label: 'GitHub', icon: 'github', url: 'https://github.com/lucastran05' },
    { label: 'Phone', icon: 'graduation', url: 'tel:0389433762' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/tran-quoc-cuong-b4a72730a/?locale=en' },
  ],
  i18n: {
    vi: {
      languageLabel: 'VN',
      switchLanguageLabel: 'EN',
      personal: {
        subtitle: 'Thực tập sinh Pentest | An toàn Thông tin @ PTIT',
      },
      labels: {
        downloadCv: 'Tải CV (PDF)',
        education: 'Học vấn',
        skills: 'Kỹ năng',
        projects: 'Dự án',
        certifications: 'Chứng chỉ',
        achievements: 'Thành tích',
        gpa: 'GPA',
      },
      navigation: {
        education: 'Học vấn',
        skills: 'Kỹ năng',
        projects: 'Dự án',
        certifications: 'Chứng chỉ',
        achievements: 'Thành tích',
      },
      hero: {
        heading: 'Xin chào, tôi là Trần Quốc Cường.',
        intro:
          'Sinh viên An toàn Thông tin tại PTIT với đam mê Penetration Testing và Red Team. Ngắn hạn, tôi tích cực tìm kiếm vị trí Intern/Junior Penetration Tester hoặc Security Analyst để áp dụng kiến thức kiểm thử xâm nhập, phân tích và khai thác lỗ hổng trong môi trường thực tế. Dài hạn, tôi hướng tới trở thành Red Team Specialist/Pentester chuyên sâu, có khả năng thực hiện các chiến dịch kiểm thử bảo mật toàn diện và mô phỏng tấn công thực tế. Kinh nghiệm thực hành trên TryHackMe, HackTheBox, picoCTF và các lab bảo mật thực tế.',
      },
      education: [
        {
          school: 'Học viện Công nghệ Bưu chính Viễn thông (PTIT)',
          degree: 'Kỹ sư An toàn Thông tin',
          years: '2023 - Hiện tại',
          gpa: '3.34 / 4.0',
          highlights: [
            'Học bổng Khuyến khích học tập (Academic Scholarship)',
            'Các môn học: Cơ sở An toàn thông tin (A), Mạng máy tính (B+)',
          ],
        },
      ],
      skills: [
        {
          category: 'Web & App Pentesting',
          items:
            'Nmap, Gobuster, Hydra, Burp Suite, Wireshark, OWASP Top 10, Fuzz Testing',
        },
        {
          category: 'Lập trình & Scripting',
          items: 'C, C++, Java, JavaScript, Python, PHP (cú pháp cơ bản)',
        },
        {
          category: 'Hệ thống & Mạng',
          items:
            'Linux, Windows, Windows Server (Active Directory), TCP/IP, HTTP/HTTPS, DNS',
        },
        {
          category: 'Bảo mật cơ bản',
          items:
            'Mã hóa (SHA, JWT, HMAC), Phân tích lỗ hổng, Kỹ thuật tấn công mạng',
        },
        {
          category: 'Nền tảng thực hành',
          items:
            'TryHackMe, HackTheBox, picoCTF, Portswigger Web Security Academy, RootMe',
        },
      ],
      projects: [
        {
          title: 'Linux Log Anomaly Detection',
          date: '03/2026 - 04/2026',
          technologies: 'Python, Pandas, Scikit-learn, Linux',
          description:
            'Xây dựng công cụ phân tích log real-time để phát hiện bất thường trên hệ thống Linux.',
          highlights: [
            'Phân tích log xác thực từ /var/log/auth.log: timestamp, IP, username, status, port',
            'Xây dựng đặc trưng hành vi: số lần đăng nhập thất bại (1 phút), IP/user duy nhất, tần suất đăng nhập',
            'Ứng dụng Isolation Forest để phát hiện hành vi bất thường',
            'Mô phỏng tấn công bằng Hydra (Kali Linux) để kiểm chứng khả năng phát hiện',
          ],
          github: 'https://github.com/lucastran05/linux-log-anomaly-detection-PYP',
        },
        {
          title: 'CVE-2023-48223 – Algorithm Confusion Exploit Analysis',
          date: '02/2026 - 03/2026',
          technologies: 'Node.js, JWT, Express, fast-jwt',
          description:
            'Phân tích sâu lỗ hổng CVE-2023-48223 trong thư viện xác thực JWT fast-jwt.',
          highlights: [
            'Chứng minh cuộc tấn công Algorithm Confusion dẫn đến vượt qua xác thực',
            'Tạo token HS256 độc hại ký bằng khóa công khai RSA để vượt qua xác minh chữ ký',
            'Phân tích chi tiết logic kiểm tra khóa và xác minh bên trong thư viện',
            'Đề xuất các thực tiễn bảo mật như whitelisting rõ ràng thuật toán',
          ],
          github: 'https://hackmd.io/@a3oVEmssREaHsbt5Z_FZmQ/SJwL5Q_i-x',
        },
      ],
      certifications: [
        {
          title: 'APTIS ESOL (British Council)',
          detail: 'Trình độ B2 CEFR - 03/2024',
        },
        {
          title: 'Cybersecurity Foundations (IBM)',
          detail: 'Hoàn thành - 2024',
        },
        {
          title: 'Linux Introduction (Coursera)',
          detail: 'Hoàn thành - 2024',
        },
        {
          title: 'Penetration testing – A Hand-on Approach (PTIT & Samsung)',
          detail: 'Hoàn thành - 10/2025',
        },
      ],
      achievements: [
        {
          title: 'Top 20/160 (Honorable Mention) - PTIT CTF 2025',
          detail: 'Cuộc thi Capture The Flag tháng 9/2025 - Kỹ thuật khai thác lỗ hổng',
        },
        {
          title: 'Top 8 (Honorable Mention) - P-Innovation 2025',
          detail: 'Cuộc thi sản phẩm sáng tạo tháng 4/2025',
        },
      ],
      seo: {
        title: 'Trần Quốc Cường | Penetration Testing & Information Security',
        description:
          'Portfolio của Trần Quốc Cường - Sinh viên An toàn Thông tin PTIT tìm kiếm internship Penetration Testing, chuyên Red Team, kiểm thử bảo mật ứng dụng và phân tích lỗ hổng.',
        keywords:
          'Trần Quốc Cường, PTIT, Penetration Testing, Red Team, Information Security, Cybersecurity, HackTheBox, CTF, Kỹ năng bảo mật',
      },
    },
    en: {
      languageLabel: 'EN',
      switchLanguageLabel: 'VN',
      personal: {
        subtitle: 'Penetration Testing Intern | Information Security @ PTIT',
      },
      labels: {
        downloadCv: 'Download CV (PDF)',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        certifications: 'Certifications',
        achievements: 'Achievements',
        gpa: 'GPA',
      },
      navigation: {
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        certifications: 'Certifications',
        achievements: 'Achievements',
      },
      hero: {
        heading: "Hello, I'm Trần Quốc Cường.",
        intro:
          'Information Security student at PTIT with a passion for Penetration Testing and Red Team operations. Short-term, I\'m actively seeking an Intern/Junior Penetration Tester or Security Analyst position where I can apply my knowledge of penetration testing, vulnerability analysis, and exploitation in real-world environments. Long-term, I aim to develop into a Red Team Specialist/Penetration Tester, capable of conducting full-scope security assessments and realistic adversary simulations to strengthen organizational security posture. Hands-on experience with TryHackMe, HackTheBox, picoCTF, and real-world security labs.',
      },
      education: [
        {
          school: 'Posts and Telecommunications Institute of Technology (PTIT)',
          degree: 'Bachelor of Engineering in Information Security',
          years: '2023 - Present',
          gpa: '3.34 / 4.0',
          highlights: [
            'Academic Encouragement Scholarship',
            'Key courses: Information Security Fundamentals (A), Computer Networks (B+)',
          ],
        },
      ],
      skills: [
        {
          category: 'Web & App Pentesting',
          items:
            'Nmap, Gobuster, Hydra, Burp Suite, Wireshark, OWASP Top 10, Fuzz Testing',
        },
        {
          category: 'Programming & Scripting',
          items: 'C, C++, Java, JavaScript, Python, PHP (basic syntax)',
        },
        {
          category: 'System & Network',
          items:
            'Linux, Windows, Windows Server (Active Directory), TCP/IP, HTTP/HTTPS, DNS',
        },
        {
          category: 'Security Fundamentals',
          items:
            'Cryptography (SHA, JWT, HMAC), Vulnerability Assessment, Network Attack Techniques',
        },
        {
          category: 'Hands-on Platforms',
          items:
            'TryHackMe, HackTheBox, picoCTF, Portswigger Web Security Academy, RootMe',
        },
      ],
      projects: [
        {
          title: 'Linux Log Anomaly Detection',
          date: '03/2026 - 04/2026',
          technologies: 'Python, Pandas, Scikit-learn, Linux',
          description:
            'Built a real-time log analysis tool to detect anomalies on Linux systems.',
          highlights: [
            'Parsed and normalized authentication logs from /var/log/auth.log: timestamp, IP, username, status, port',
            'Engineered behavioral features: failed login attempts (1m window), unique IP/user count, login frequency & time patterns',
            'Applied Isolation Forest algorithm to detect anomalous login behavior',
            'Validated detection capability by simulating attacks using Hydra (Kali Linux)',
          ],
          github: 'https://github.com/lucastran05/linux-log-anomaly-detection-PYP',
        },
        {
          title: 'CVE-2023-48223 – Algorithm Confusion Exploit Analysis',
          date: '02/2026 - 03/2026',
          technologies: 'Node.js, JWT, Express, fast-jwt',
          description:
            'In-depth analysis of CVE-2023-48223 vulnerability in JWT authentication library.',
          highlights: [
            'Demonstrated algorithm confusion attack enabling authentication bypass and privilege escalation',
            'Forged malicious HS256 tokens signed with RSA public keys to bypass signature verification',
            'Investigated library internals to trace flawed key detection and verification logic',
            'Recommended secure implementation practices including explicit algorithm whitelisting',
          ],
          github: 'https://hackmd.io/@a3oVEmssREaHsbt5Z_FZmQ/SJwL5Q_i-x',
        },
      ],
      certifications: [
        {
          title: 'APTIS ESOL (British Council)',
          detail: 'B2 Level (CEFR) - 03/2024',
        },
        {
          title: 'Cybersecurity Foundations (IBM)',
          detail: 'Completed - 2024',
        },
        {
          title: 'Linux Introduction (Coursera)',
          detail: 'Completed - 2024',
        },
        {
          title: 'Penetration testing – A Hand-on Approach (PTIT & Samsung)',
          detail: 'Completed - 10/2025',
        },
      ],
      achievements: [
        {
          title: 'Top 20/160 (Honorable Mention) - PTIT CTF 2025',
          detail:
            'Capture The Flag competition (September 2025) - Vulnerability exploitation techniques',
        },
        {
          title: 'Top 8 (Honorable Mention) - P-Innovation 2025',
          detail: 'Innovative Product Competition (April 2025)',
        },
      ],
      seo: {
        title: 'Trần Quốc Cường | Penetration Testing & Information Security',
        description:
          'Portfolio of Trần Quốc Cường - PTIT Information Security student seeking Penetration Testing internship, specializing in Red Team operations, application security testing, and vulnerability analysis.',
        keywords:
          'Trần Quốc Cường, PTIT, Penetration Testing, Red Team, Information Security, Cybersecurity, HackTheBox, CTF, Security Skills',
      },
    },
  }
}

export default profile
