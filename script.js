/**
 * AHMED HOSSAM - PORTFOLIO INTERACTIVITY & BILINGUAL ENGINE
 * Handles:
 * - English & Arabic full translations (EN / AR)
 * - LTR / RTL layout transitions
 * - Dark & Light mode theme toggling
 * - Interactive Certificate Lightbox Modal
 * - FAQ Accordion
 * - Mobile Navigation Drawer
 * - Interactive Contact Form with WhatsApp Integration
 * - Blueprint coordinate cross markers
 */

// --- BILINGUAL DICTIONARY (EN & AR) ---
const translations = {
  en: {
    // Navigation
    nav_services: "Services",
    nav_projects: "Projects",
    nav_certificates: "Certificates",
    nav_why_me: "Why Me",
    nav_skills: "Skills",
    nav_testimonials: "Honors",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    btn_talk: "Let's Talk",

    // Hero Section (Screenshot 1)
    hero_status: "AVAILABLE FOR NEW PROJECTS & OPPORTUNITIES",
    hero_title: "Building Modern Web Systems & Intelligent Software Solutions That Reflect Technical Excellence",
    hero_subtext: "Computer Science student at Thebes Academy with deep foundations in competitive programming, algorithms, and embedded systems. Currently developing advanced frontend web applications with React.js through the Digital Egypt Pioneers Initiative (DEPI).",
    btn_view_projects: "View Projects",
    btn_lets_talk: "Let's Talk",
    btn_download_cv: "Resume / CV",
    cv_text: "Resume / CV",
    tag_performance: "Performance",
    tag_react: "React.js",
    tag_algorithms: "Algorithms (DSA)",
    tag_oop: "OOP & C++",
    tag_responsive: "Responsive",
    tag_embedded: "Embedded IoT",

    // Floating Badges on Hero
    badge_thebes_title: "Thebes Academy",
    badge_thebes_sub: "CS 3rd Year • GPA 3.0+",
    badge_ecpc_title: "ECPC 2026 Qualifier",
    badge_ecpc_sub: "Algorithmic Problem Solver",
    badge_depi_title: "DEPI React.js Trainee",
    badge_depi_sub: "Ministry of Comm. & IT",

    // Section 01: Services (Screenshot 2)
    sec1_category: "SERVICES",
    sec1_title: "Engineering Solutions Built Around Business & Functional Goals",
    sec1_subtitle: "Strong digital work does not start with tools. It starts with understanding what the system actually needs, then building the right solution with clarity and precision.",
    service1_title: "Modern React.js Web Applications",
    service1_desc: "Building interactive, component-driven Single Page Applications (SPAs) with React.js. Implementing state management, modular JSX architecture, hooks, and clean code principles to create seamless user journeys.",
    service2_title: "Software & Algorithmic Engineering",
    service2_desc: "Strong problem-solving foundation in C++, Python, and Java. Designing scalable solutions with optimal Data Structures & Algorithms (DSA), time-complexity optimizations, and Object-Oriented Programming (OOP).",
    service3_title: "Embedded Systems & Hardware IoT",
    service3_desc: "Low-level microcontroller programming (Arduino / C++), real-time sensor interfacing, circuit diagnostics, and reliable wireless Bluetooth communication (HC-05/06) for robotic hardware and IoT prototypes.",
    service4_title: "Performance, Database & Maintenance",
    service4_desc: "Relational database design with SQL, query efficiency, responsive layout fixes, cross-browser compatibility, and code refactoring that keeps your codebase clean, fast, and easy to scale.",

    // Section 02: Projects (Screenshot 3)
    sec2_category: "PROJECTS",
    sec2_title: "Real Projects Built Around Real Engineering Needs",
    sec2_subtitle: "These projects are not presented as screenshots alone, but as structured work shaped to improve clarity, strengthen digital presence, and solve tangible engineering challenges.",
    proj_badge_featured: "FEATURED",
    proj1_category: "REACT & FRONTEND ARCHITECTURE",
    proj1_title: "Interactive React.js Web Ecosystem & SPAs (DEPI)",
    proj1_desc: "Engineered and developed modular single-page web applications (SPAs) with React.js under the intensive Digital Egypt Pioneers Initiative (Ministry of Communications and Information Technology). Built with reusable component hierarchies, dynamic state management, custom React hooks, responsive Tailwind CSS layouts, and seamless RESTful API integration.",
    proj1_outcome_label: "Outcome:",
    proj1_outcome_text: "Delivered production-grade frontend applications adhering to modern web performance standards, high accessibility (a11y), clean code, and modular architecture.",
    btn_request_web: "Request a Web Project",
    btn_view_stack: "View Tech Stack",
    proj2_category: "COMPETITIVE PROGRAMMING",
    proj2_title: "ECPC Algorithmic Problem Solving Suite",
    proj2_desc: "Competed in collegiate rounds of the Egyptian Collegiate Programming Contest (ICPC), solving challenging algorithmic problems under strict time constraints. Applied advanced graph theory, dynamic programming, and data structure optimizations, achieving Rank 140.",
    proj3_category: "RESEARCH & ARTIFICIAL INTELLIGENCE",
    proj3_title: "AI in Mathematical Problem Solving",
    proj3_desc: "Authored academic research paper analyzing artificial intelligence paradigms and their applications in solving complex mathematical models. Presented and recognized with a Certificate of Appreciation at Thebes Academy's Annual Scientific Conference.",
    proj4_category: "DATABASE & SYSTEMS",
    proj4_title: "Relational Database Design & SQL Optimization",
    proj4_desc: "Designed normalized relational database schemas (SQL), optimized complex join queries, enforced relational constraints, and established fast indexing strategies for high-concurrency software applications.",

    // Dedicated Section: Certificates
    cert_category: "VERIFIED CREDENTIALS & CERTIFICATIONS",
    cert_title: "Official Credentials, Awards & Recognitions",
    cert_subtitle: "Authentic certificates earned through competitive programming, engineering project excellence, and scientific research. Click any certificate to inspect full resolution.",
    cert_click_inspect: "Click to Inspect",
    btn_inspect: "View Full Certificate",
    cert1_name: "Engineering Project Appreciation & Honor",
    cert1_text: "Awarded to Ahmed Hossam Sayed Mohamed for his distinction in delivering the 'Bluetooth-Controlled Four-Wheel Robotic Vehicle', demonstrating high competence in embedded systems, circuit integration, and wireless control.",
    cert2_name: "ICPC / ECPC Qualification Achievement",
    cert2_text: "Official Certificate of Achievement for the 2026 ICPC ECPC Qualifications Collegiate Programming Contest Day 6, awarded to Ahmed Hossam Said ElGendy and team representing Thebes Higher Institute.",
    cert3_name: "Scientific Conference Organization & Research",
    cert3_text: "Certificate of Appreciation presented by Prof. Dr. Seddik Afifi for distinguished participation in organizing and managing the Second Student Scientific Conference 'Research and Creative Activities'.",
    cert4_name: "Digital Egypt Pioneers Initiative (DEPI)",
    cert4_text: "Enrolled in the intensive nationwide React.js Frontend Web Development track, focusing on modern web architecture, state handling, reusable component hierarchies, and enterprise web standards.",
    cert_active_track: "Active Professional Track",

    // Section 03: Why Me (Screenshot 4)
    sec3_category: "WHY ME",
    sec3_title: "Why Clients & Engineering Teams Choose to Work With Me",
    sec3_subtitle: "Strong execution is not only about visuals. It is about understanding the goal, communicating clearly, and paying attention to the details that make the final product more reliable and effective.",
    whyme1_title: "Algorithmic & Problem-First Approach",
    whyme1_desc: "I break down functional requirements and select the right data structures and algorithmic designs before jumping into syntax, eliminating bottlenecks early.",
    whyme2_title: "Speed & Usability",
    whyme2_desc: "I focus on clarity, execution speed, clean responsive layouts, and intuitive user experiences across desktop, tablet, and mobile devices.",
    whyme3_title: "Scalable Component Architecture",
    whyme3_desc: "I build with modular structure and reusable components that make future enhancements, maintenance, and teamwork significantly easier.",
    whyme4_title: "Quality as a Foundation",
    whyme4_desc: "I treat performance, clean code, and edge-case handling as core baseline standards, reinforced by competitive programming discipline under pressure.",

    // Section 04: Skills (Screenshot 5)
    sec4_category: "SKILLS",
    sec4_title: "The technologies I use to build reliable digital products.",
    sec4_subtitle: "A focused stack that supports stable, fast, and scalable web solutions and software applications.",
    skill_group1_title: "Frontend Development",
    skill_group2_title: "Core CS & Programming",
    skill_group3_title: "Hardware & Embedded Systems",
    skill_group4_title: "Tooling / Workflow",

    // Section 05: Testimonials (Screenshot 6)
    sec5_category: "TESTIMONIALS & HONORS",
    sec5_title: "Real feedback from mentors & collaborators.",
    sec5_subtitle: "Academic recognition and peer feedback tied to real published achievements, competitive trials, and engineering deliveries.",
    test1_text: "\"Ahmed demonstrated high technical competence and innovation in his engineering project, delivering the Bluetooth-controlled robotic vehicle with remarkable firmware reliability, motor synchronization, and circuit stability.\"",
    test1_author: "Thebes Higher Institute of Engineering",
    test1_role: "Academic Project Evaluation Board",
    test2_text: "\"Competing alongside Ahmed in the ICPC ECPC qualifications was a powerful experience. His speed in identifying optimal data structures and debugging complex edge cases under severe time limits made a decisive difference.\"",
    test2_author: "ECPC Collegiate Team",
    test2_role: "Competitive Programming Contestants",
    test3_text: "\"Presented with a Certificate of Appreciation for his active and exemplary organization in the Second Student Scientific Conference. His commitment, discipline, and research contribution on AI were truly commendable.\"",
    test3_author: "Scientific Conference Board",
    test3_role: "Thebes Academy Higher Administration",

    // Section 06: FAQ (Screenshot 7)
    sec6_category: "FAQ",
    sec6_title: "Everything you may want to know before working together.",
    sec6_subtitle: "Short answers to the questions clients, engineering leads, and recruiters usually ask.",
    faq1_q: "What opportunities or roles are you currently looking for?",
    faq1_a: "I am looking for Junior Frontend Developer (React.js), Software Engineer Intern, and C++ / Embedded Systems roles. I am available for internships, part-time positions, and freelance software projects with both local and international teams.",
    faq2_q: "What is your current academic status and location?",
    faq2_a: "I am currently a third-year Computer Science student at Thebes Academy in Cairo/Giza, Egypt (graduating 2028), maintaining an academic GPA of 3.0+.",
    faq3_q: "What technologies do you use for web development?",
    faq3_a: "I specialize in React.js, modern JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, component modularization, state management hooks, and REST API integration learned through intensive hands-on training at the Digital Egypt Pioneers Initiative (DEPI).",
    faq4_q: "How does your competitive programming background benefit projects?",
    faq4_a: "Having competed in the ECPC (ICPC qualification), I analyze problems mathematically, select optimal algorithms and data structures, minimize time/space complexity, and test thoroughly for edge cases to ensure bug-free, high-speed execution.",
    faq5_q: "Can you work on embedded systems and hardware projects?",
    faq5_a: "Yes! I have hands-on experience programming microcontrollers (Arduino) using C++, integrating motor drivers (L298N), configuring HC-05/06 Bluetooth modules, and reading environmental sensors for real-time robotic systems.",
    faq6_q: "Are you comfortable collaborating in English?",
    faq6_a: "Yes. I have intermediate to upper-intermediate English proficiency (B2+) alongside native Arabic, making it easy to participate in international code reviews, documentation, and agile team communication.",

    // Section 07: Contact (Screenshot 8)
    sec7_category: "CONTACT",
    sec7_title: "Have a Project That Needs Stronger Execution?",
    sec7_subtitle: "If you are looking for a dedicated software developer or frontend engineer who brings algorithmic rigor and clean code to your team, let's start the conversation.",
    contact_channels_title: "Send Your Project Details",
    channel_whatsapp: "WHATSAPP",
    channel_email: "EMAIL",
    channel_linkedin: "LINKEDIN",
    channel_location: "LOCATION",
    channel_location_val: "Giza / Cairo, Egypt",
    form_name: "Name *",
    form_email: "Email *",
    form_phone: "WhatsApp or Phone",
    form_project_type: "Project Type *",
    opt_select: "Select project type...",
    opt_frontend: "Frontend / React Web App",
    opt_software: "Software & Algorithmic Logic",
    opt_embedded: "Embedded / IoT Project",
    opt_job: "Job / Internship Opportunity",
    opt_other: "Other Collaboration",
    form_details: "Project Details *",
    btn_send_inquiry: "Send Inquiry",
    footer_copy: "Designed with care. Built to last. © 2026 AHMED HOSSAM SAYED MOHAMED. All Rights Reserved.",
    footer_back_top: "Back to Top",
    btn_download_image: "Download Image"
  },

  ar: {
    // Navigation
    nav_services: "خدماتي",
    nav_projects: "المشاريع",
    nav_certificates: "الشهادات",
    nav_why_me: "لماذا تختارني",
    nav_skills: "المهارات",
    nav_testimonials: "التكريمات",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "تواصل معي",
    btn_talk: "فلنتحدث",

    // Hero Section
    hero_status: "متاح للمشاريع والفرص الجديدة",
    hero_title: "بناء تطبيقات ويب حديثة وحلول برمجية ذكية تعكس التميز الهندسي",
    hero_subtext: "طالب علوم حاسب بأكاديمية طيبة، متخصص في البرمجة التنافسية وهياكل البيانات والأنظمة المدمجة. أطور حالياً خبراتي المتقدمة في تطوير واجهات الويب باستخدام React.js من خلال مبادرة رواد مصر الرقمية (DEPI).",
    btn_view_projects: "استعراض المشاريع",
    btn_lets_talk: "تواصل معي",
    btn_download_cv: "السيرة الذاتية (CV)",
    cv_text: "السيرة الذاتية",
    tag_performance: "الأداء العالي",
    tag_react: "React.js",
    tag_algorithms: "الخوارزميات (DSA)",
    tag_oop: "OOP و C++",
    tag_responsive: "تصميم متجاوب",
    tag_embedded: "أنظمة مدمجة و IoT",

    // Floating Badges on Hero
    badge_thebes_title: "أكاديمية طيبة",
    badge_thebes_sub: "الفرقة الثالثة علوم حاسب • امتياز",
    badge_ecpc_title: "تأهل مسابقة ECPC 2026",
    badge_ecpc_sub: "حل المسائل الخوارزمية",
    badge_depi_title: "متدرب مبادرة DEPI",
    badge_depi_sub: "وزارة الاتصالات وتكنولوجيا المعلومات",

    // Section 01: Services
    sec1_category: "الخدمات",
    sec1_title: "حلول هندسية وبرمجية مبنية حول الأهداف الحقيقية",
    sec1_subtitle: "العمل الرقمي القوي لا يبدأ من الأدوات، بل يبدأ من الفهم العميق لما يحتاجه النظام ثم بنائه بالدقة والاحترافية المطلوبة.",
    service1_title: "تطبيقات الويب الحديثة بـ React.js",
    service1_desc: "تطوير تطبيقات الصفحة الواحدة (SPAs) التفاعلية بـ React.js، مع بنية برمجية قياسية قائمة على المكونات القابلة لإعادة الاستخدام، وإدارة الحالة، وتجربة مستخدم فائقة السلاسة.",
    service2_title: "الهندسة البرمجية والخوارزميات",
    service2_desc: "أساس متين في لغات C++ و Python و Java، وتصميم حلول برمجية بأفضل الخوارزميات وهياكل البيانات لتحقيق أعلى سرعة تنفيذ وأفضل استهلاك للذاكرة.",
    service3_title: "الأنظمة المدمجة والروبوتات (IoT)",
    service3_desc: "برمجة المتحكمات الدقيقة (Arduino / C++)، وربط الحساسات والمحركات، والتحكم اللاسلكي عبر البلوتوث (HC-05/06) وتصميم الدوائر الإلكترونية.",
    service4_title: "قواعد البيانات والأداء والصيانة",
    service4_desc: "تصميم قواعد البيانات العلائقية (SQL)، وتحسين استعلامات البيانات، وضمان التوافقية التامة مع كافة الشاشات والمتصفحات وصيانة الكود ليبقى قابلاً للتوسع.",

    // Section 02: Projects
    sec2_category: "المشاريع",
    sec2_title: "مشاريع حقيقية مبنية حول متطلبات هندسية واقعية",
    sec2_subtitle: "هذه المشاريع ليست مجرد صور، بل أعمال هندسية متكاملة تبرز مهارات تطوير واجهات الويب والحلول البرمجية المتطورة.",
    proj_badge_featured: "مشروع مميز",
    proj1_category: "معمارية وتطوير واجهات React.js",
    proj1_title: "منظومة تطبيقات الويب التفاعلية بتقنية React.js (مبادرة DEPI)",
    proj1_desc: "تطوير تطبيقات ويب تفاعلية وسريعة الاستجابة (SPAs) باستخدام React.js ضمن مبادرة رواد مصر الرقمية التابعة لوزارة الاتصالات. الاعتماد على معمارية المكونات، والـ Hooks المخصصة، وإدارة الحالة، وتنسيقات Tailwind CSS، والربط بالـ APIs.",
    proj1_outcome_label: "الأثر والنتيجة:",
    proj1_outcome_text: "بناء تطبيقات ويب احترافية تراعي أعلى معايير الأداء والسرعة، وسهولة الوصول (a11y)، وإعادة استخدام المكونات والتوافق التام مع كافة الشاشات.",
    btn_request_web: "طلب مشروع ويب",
    btn_view_stack: "استعراض المهارات",
    proj2_category: "البرمجة التنافسية",
    proj2_title: "حلول المسائل الخوارزمية لمسابقة ECPC",
    proj2_desc: "المشاركة في المسابقة البرمجية الجامعية ECPC، وحل المسائل الخوارزمية المعقدة تحت ضغط الوقت وتطبيق خوارزميات الرسوم البيانية والبرمجة الديناميكية، وتحقيق المركز 140.",
    proj3_category: "البحث العلمي والذكاء الاصطناعي",
    proj3_title: "تطبيقات الذكاء الاصطناعي في حل المسائل الرياضية",
    proj3_desc: "إعداد ونشر ورقة بحثية تحلل تطبيقات الذكاء الاصطناعي في حل النماذج الرياضية المعقدة، والتكريم بشهادة تقدير في المؤتمر العلمي السنوي بأكاديمية طيبة.",
    proj4_category: "قواعد البيانات وهندسة النظم",
    proj4_title: "تصميم قواعد البيانات وتحسين استعلامات SQL",
    proj4_desc: "تصميم المخططات العلائقية المعيارية (SQL)، وكتابة استعلامات الربط المعقدة وتحسين الفهارس لضمان سلامة وسرعة استرجاع البيانات تحت ضغط الاستخدام العالي.",

    // Dedicated Section: Certificates
    cert_category: "الشهادات والتكريمات الرسمية",
    cert_title: "الشهادات والجوائز والاعتمادات الرسمية",
    cert_subtitle: "شهادات موثقة في البرمجة التنافسية، والمشاريع الهندسية، والبحث العلمي. اضغط على أي شهادة لمعاينتها بالحجم الكامل.",
    cert_click_inspect: "اضغط للمعاينة الكاملة",
    btn_inspect: "معاينة الشهادة كاملة",
    cert1_name: "شهادة تقدير وتكريم: المشروع الهندسي للروبوت",
    cert1_text: "ممنوحة للطالب أحمد حسام سيد محمد لتميزه وإبداعه في إنجاز مشروعه الهندسي (Bluetooth-Controlled Four-Wheel Robotic Vehicle) وكفاءته العالية في البرمجة المدمجة وتكامل الدوائر والتحكم اللاسلكي.",
    cert2_name: "شهادة إنجاز: التأهل لمسابقة البرمجة الجامعية ICPC / ECPC",
    cert2_text: "شهادة إنجاز رسمية من مؤسسة ICPC الدولية للمشاركة والتأهل في مسابقة ECPC 2026 تمثيلاً للمعهد العالي للحاسب وتكنولوجيا المعلومات بأكاديمية طيبة.",
    cert3_name: "شهادة تقدير: تنظيم وإدارة المؤتمر العلمي الطلابي",
    cert3_text: "مقدمة من أ.د. صديق عفيفي رئيس مجلس إدارة أكاديمية طيبة تقديراً للمشاركة المتميزة في تنظيم وإدارة المؤتمر العلمي الطلابي الثاني 'البحوث والأنشطة الإبداعية'.",
    cert4_name: "مبادرة رواد مصر الرقمية (DEPI)",
    cert4_text: "الالتحاق بالمسار الاحترافي لتطوير واجهات الويب بتقنية React.js التابع لوزارة الاتصالات وتكنولوجيا المعلومات لتعزيز المعايير العالمية في تطوير البرمجيات.",
    cert_active_track: "مسار احترافي قيد الدراسة",

    // Section 03: Why Me
    sec3_category: "لماذا تختارني",
    sec3_title: "لماذا تختار الفرق والشركات العمل معي",
    sec3_subtitle: "التنفيذ القوي لا يقتصر على التصميم فقط، بل على فهم المشكلة والتواصل الشفاف والاهتمام بأدق التفاصيل لجعل النظام البرمجي موثوقاً وسريعاً.",
    whyme1_title: "التركيز على المنطق والخوارزميات أولاً",
    whyme1_desc: "أبدأ بتحليل المتطلبات واختيار أنسب هياكل البيانات والتصميم الخوارزمي قبل كتابة الكود، مما يمنع بطء النظام ومشاكل الأداء مبكراً.",
    whyme2_title: "السرعة وسهولة الاستخدام",
    whyme2_desc: "أركز على الوضوح وسرعة التنفيذ والتصميم المتجاوب وسلاسة التجربة عبر جميع شاشات الحواسيب والهواتف.",
    whyme3_title: "بنية برمجية معيارية قابلة للتوسع",
    whyme3_desc: "أبني البرمجيات بمكونات نظيفة ومستقلة تجعل التطوير المستقبلي والصيانة واختبار الكود أمراً غاية في البساطة.",
    whyme4_title: "الجودة العالية كأساس لا تنازل عنه",
    whyme4_desc: "أعتبر الأداء العالي واختبار الحالات الحافة معايير أساسية اكتسبتها من خلال المنافسة في مسابقات البرمجة تحت الضغط الزمني.",

    // Section 04: Skills
    sec4_category: "المهارات والتقنيات",
    sec4_title: "التقنيات التي أستخدمها لبناء منتجات رقمية موثوقة",
    sec4_subtitle: "مجموعة مهارات متكاملة تدعم تطوير برمجيات ويب وأنظمة مستقرة وسريعة وقابلة للتطوير.",
    skill_group1_title: "تطوير واجهات الويب (Frontend)",
    skill_group2_title: "علوم الحاسب واللغات الأساسية",
    skill_group3_title: "الأنظمة المدمجة والعتاد (Embedded)",
    skill_group4_title: "الأدوات وبيئة العمل (Workflow)",

    // Section 05: Testimonials
    sec5_category: "التكريمات وآراء الأساتذة",
    sec5_title: "شهادات وإشادات من الأساتذة وزملاء العمل",
    sec5_subtitle: "إشادات مرتبطة بإنجازات واقعية ومشاريع تم تسليمها ومنافسات علمية معتمدة.",
    test1_text: "\"أظهر الطالب أحمد حسام كفاءة علمية متميزة في مشروعه الهندسي لروبوت التحكم اللاسلكي، مع إتقان واضح لبرمجة المايكروكنترولر بلغة C++ وتكامل الدوائر الكهربائية.\"",
    test1_author: "المعهد العالي للهندسة - أكاديمية طيبة",
    test1_role: "لجنة تقييم المشاريع الهندسية",
    test2_text: "\"كان التنافس بجانب أحمد في تصفيات ECPC تجربة رائعة، حيث أظهر سرعة فائقة في تحليل المسائل واختيار هياكل البيانات المثلى وحل الحالات المعقدة تحت ضغط الوقت.\"",
    test2_author: "فريق مسابقة ECPC البرمجية",
    test2_role: "زملاء الفريق بالمسابقة",
    test3_text: "\"تكريم مستحق للمشاركة المتميزة في تنظيم وإدارة المؤتمر العلمي، وتقديم مساهمة بحثية واعدة في مجال الذكاء الاصطناعي مع التزام وأخلاق مهنية عالية.\"",
    test3_author: "لجنة تنظيم المؤتمر العلمي",
    test3_role: "إدارة أكاديمية طيبة",

    // Section 06: FAQ
    sec6_category: "الأسئلة الشائعة",
    sec6_title: "كل ما قد ترغب في معرفته قبل بدء العمل معاً",
    sec6_subtitle: "إجابات موجزة على أكثر الأسئلة التي يطرحها أصحاب المشاريع والشركات ومسؤولو التوظيف.",
    faq1_q: "ما هي الأدوار أو الفرص التي تبحث عنها حالياً؟",
    faq1_a: "أبحث عن فرص عمل أو تدريب كمطور واجهات React.js، أو مهندس برمجيات متدرب، أو مطور أنظمة مدمجة و C++. متاح للعمل بدوام جزئي، أو تدريب عملي، أو مشاريع حرة محلياً ودولياً.",
    faq2_q: "ما هو موقفك الدراسي الحالي وموقعك؟",
    faq2_a: "أنا حالياً طالب بالفرقة الثالثة بكلية علوم الحاسب بأكاديمية طيبة بالقاهرة/الجيزة، مصر (التخرج المتوقع 2028)، بمعدل تراكمي GPA يتجاوز 3.0+.",
    faq3_q: "ما هي التقنيات التي تعتمد عليها في تطوير الويب؟",
    faq3_a: "أتخصص في React.js و JavaScript الحديثة (ES6+) و HTML5 و CSS3 و Tailwind CSS وبنية المكونات و Hooks وإدارة الحالة والربط مع الـ APIs التي اكتسبتها عبر مبادرة رواد مصر الرقمية (DEPI).",
    faq4_q: "كيف تفيد خلفيتك في البرمجة التنافسية (ECPC) في المشاريع؟",
    faq4_a: "تمنحني القدرة على تحليل المشكلات رياضياً، واختيار الخوارزميات وهياكل البيانات الأنسب، وتجنب بطء الأداء، والتأكد من خلو الكود من الأخطاء في جميع الحالات المعقدة.",
    faq5_q: "هل لديك خبرة عملية في التعامل مع الهاردوير والأنظمة المدمجة؟",
    faq5_a: "نعم، قمت بتطوير مشاريع عملية باستخدام مايكروكنترولر Arduino بلغة C++، وربط حساسات ومحركات L298N ووحدات البلوتوث اللاسلكية بنجاح.",
    faq6_q: "هل تجيد التواصل والعمل باللغة الإنجليزية؟",
    faq6_a: "نعم، أجيد اللغة الإنجليزية بمستوى متوسط متقدم (B2+) بجانب لغتي الأم العربية، مما يمكنني من المشاركة بسلاسة في الفرق التقنية الدولية وقراءة وتوثيق الأكواد.",

    // Section 07: Contact
    sec7_category: "تواصل معي",
    sec7_title: "هل لديك مشروع أو فرصة تحتاج إلى تنفيذ قوي ومتقن؟",
    sec7_subtitle: "إذا كنت تبحث عن مطور برمجيات يمتلك أساساً خوارزمياً متيناً وشغفاً بالكود النظيف وتطوير واجهات React، فلنبدأ المحادثة الآن.",
    contact_channels_title: "قنوات التواصل المباشر",
    channel_whatsapp: "واتساب",
    channel_email: "البريد الإلكتروني",
    channel_linkedin: "لينكد إن",
    channel_location: "الموقع",
    channel_location_val: "الجيزة / القاهرة، مصر",
    form_name: "الاسم *",
    form_email: "البريد الإلكتروني *",
    form_phone: "رقم الواتساب أو الهاتف",
    form_project_type: "نوع المشروع أو الفرصة *",
    opt_select: "اختر نوع المشروع...",
    opt_frontend: "تطبيق ويب / واجهة React",
    opt_software: "برمجيات وخوارزميات مخصصة",
    opt_embedded: "مشروع أنظمة مدمجة / IoT",
    opt_job: "فرصة توظيف أو تدريب",
    opt_other: "تعاون آخر",
    form_details: "تفاصيل المشروع أو الرسالة *",
    btn_send_inquiry: "إرسال الاستفسار",
    footer_copy: "صُمم بعناية وبُني ليدوم. © 2026 أحمد حسام سيد محمد. جميع الحقوق محفوظة.",
    footer_back_top: "العودة للأعلى",
    btn_download_image: "تحميل صورة الشهادة"
  }
};

// Certificate Data Store
const certData = {
  robotics: {
    img: "cert-robotics.png",
    title_en: "Certificate of Appreciation & Honor: Bluetooth Robotic Vehicle",
    title_ar: "شهادة تقدير وتكريم: مشروع مركبة التحكم بالبلوتوث",
    desc_en: "Awarded by Thebes Higher Institute of Engineering (Ministry of Higher Education) to Ahmed Hossam Sayed Mohamed for his distinction and creativity in delivering the 'Bluetooth-Controlled Four-Wheel Robotic Vehicle' project, recognizing high competence in embedded C++, circuit integration, and wireless control.",
    desc_ar: "ممنوحة من المعهد العالي للهندسة بأكاديمية طيبة (وزارة التعليم العالي) للطالب أحمد حسام سيد محمد لتميزه وإبداعه في إنجاز مشروعه الهندسي بعنوان (Bluetooth-Controlled Four-Wheel Robotic Vehicle) والذي أظهر فيه كفاءة عالية في مجالات البرمجة المدمجة، وتكامل الدوائر، والتحكم اللاسلكي."
  },
  ecpc: {
    img: "cert-ecpc.png",
    title_en: "ICPC / ECPC Qualification Certificate of Achievement",
    title_ar: "شهادة إنجاز: التأهل في المسابقة البرمجية الجامعية ECPC 2026",
    desc_en: "Official Certificate of Achievement from the ICPC International Foundation for the 2026 ICPC ECPC Qualifications Collegiate Programming Contest Day 6 (18 August 2026), recognizing qualification representing Thebes Higher Institute of Management and Information Technology.",
    desc_ar: "شهادة إنجاز رسمية من مؤسسة ICPC الدولية للمشاركة والتأهل في مسابقة البرمجة الجامعية المصرية ECPC 2026 (اليوم السادس - 18 أغسطس 2026) تمثيلاً للمعهد العالي للحاسب وتكنولوجيا المعلومات بأكاديمية طيبة."
  },
  conference: {
    img: "cert-conference.png",
    title_en: "Scientific Conference Organization & Research Appreciation",
    title_ar: "شهادة تقدير: تنظيم وإدارة المؤتمر العلمي الطلابي الثاني",
    desc_en: "Presented by Prof. Dr. Seddik Afifi, Chairman of Thebes Academy, honoring Ahmed Hossam Sayed for outstanding participation in organizing and managing the Second Student Scientific Conference titled 'Research and Creative Activities' (May 6, 2025).",
    desc_ar: "مقدمة من الأستاذ الدكتور صديق عفيفي رئيس مجلس إدارة أكاديمية طيبة للطالب أحمد حسام سيد تقديراً لمشاركته المتميزة في تنظيم وإدارة المؤتمر العلمي الطلابي الثاني لأكاديمية طيبة تحت عنوان 'البحوث والأنشطة الإبداعية' (6 مايو 2025)."
  }
};

// Current App State
let currentLang = 'en';
let currentTheme = 'dark';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initFaqAccordion();
  initCertModal();
  initMobileDrawer();
  initContactForm();
  generateCrossMarks();
});

// --- LANGUAGE SWITCHING LOGIC ---
function initLanguage() {
  const langEnBtn = document.getElementById('langEnBtn');
  const langArBtn = document.getElementById('langArBtn');

  langEnBtn.addEventListener('click', () => setLanguage('en'));
  langArBtn.addEventListener('click', () => setLanguage('ar'));
}

function setLanguage(lang) {
  currentLang = lang;
  const html = document.documentElement;
  const langEnBtn = document.getElementById('langEnBtn');
  const langArBtn = document.getElementById('langArBtn');

  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    langArBtn.classList.add('active');
    langEnBtn.classList.remove('active');
    document.title = "أحمد حسام | مهندس برمجيات ومطور واجهات ويب";
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    langEnBtn.classList.add('active');
    langArBtn.classList.remove('active');
    document.title = "Ahmed Hossam | Software Engineer & Frontend Developer";
  }

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  updatePlaceholders(lang);
}

function updatePlaceholders(lang) {
  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const phoneInput = document.getElementById('formPhone');
  const detailsInput = document.getElementById('formDetails');

  if (lang === 'ar') {
    if (nameInput) nameInput.placeholder = "مثال: أحمد حسام";
    if (emailInput) emailInput.placeholder = "name@company.com";
    if (phoneInput) phoneInput.placeholder = "01095273058";
    if (detailsInput) detailsInput.placeholder = "أخبرني بتفاصيل المشروع أو الفرصة أو المتطلبات...";
  } else {
    if (nameInput) nameInput.placeholder = "e.g. Ahmed Hossam";
    if (emailInput) emailInput.placeholder = "e.g. name@company.com";
    if (phoneInput) phoneInput.placeholder = "+20 109 527 3058";
    if (detailsInput) detailsInput.placeholder = "Tell me about your project, goals, or role...";
  }
}

// --- THEME TOGGLE (DARK / LIGHT) ---
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const html = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('ahmed_portfolio_theme');
  if (savedTheme) {
    currentTheme = savedTheme;
  }
  html.setAttribute('data-theme', currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', currentTheme);
    localStorage.setItem('ahmed_portfolio_theme', currentTheme);
  });
}

// --- FAQ ACCORDION (Screenshot 7) ---
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const toggleIcon = item.querySelector('.faq-toggle-icon i');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const icon = otherItem.querySelector('.faq-toggle-icon i');
        if (icon) {
          icon.className = 'fa-solid fa-plus';
        }
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        if (toggleIcon) {
          toggleIcon.className = 'fa-solid fa-xmark';
        }
      }
    });
  });
}

// --- CERTIFICATE LIGHTBOX MODAL ---
function initCertModal() {
  const modal = document.getElementById('certModal');
  const closeBtn = document.getElementById('certModalClose');
  const modalImg = document.getElementById('modalCertImg');
  const modalTitle = document.getElementById('modalCertTitle');
  const modalDesc = document.getElementById('modalCertDesc');
  const modalDownload = document.getElementById('modalDownloadBtn');

  // Open buttons
  document.querySelectorAll('.open-cert-btn, .cert-card').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      // Don't trigger if clicking inspect button inside card to avoid double firing
      const certKey = trigger.getAttribute('data-cert');
      if (!certKey || !certData[certKey]) return;

      const data = certData[certKey];
      modalImg.src = data.img;
      modalImg.alt = currentLang === 'ar' ? data.title_ar : data.title_en;
      modalTitle.textContent = currentLang === 'ar' ? data.title_ar : data.title_en;
      modalDesc.textContent = currentLang === 'ar' ? data.desc_ar : data.desc_en;
      modalDownload.href = data.img;
      modalDownload.setAttribute('download', data.img);

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close handlers
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- MOBILE NAVIGATION DRAWER ---
function initMobileDrawer() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const backdrop = document.getElementById('drawerBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-talk-btn');

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileBtn) mobileBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// --- CONTACT FORM & WHATSAPP INTEGRATION (Screenshot 8) ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const projectType = document.getElementById('formProject').value;
    const details = document.getElementById('formDetails').value.trim();

    if (!name || !email || !details) {
      alert(currentLang === 'ar' ? "يرجى تعبئة جميع الحقول المطلوبة (*)" : "Please fill in all required fields (*)");
      return;
    }

    // Build WhatsApp message
    const waText = `Hi Ahmed, My name is ${name} (${email}, Phone: ${phone || 'N/A'}). I am interested in: ${projectType || 'General Inquiry'}. Details: ${details}`;
    const waUrl = `https://wa.me/201095273058?text=${encodeURIComponent(waText)}`;

    // Show nice feedback
    feedback.className = "form-feedback success";
    feedback.innerHTML = currentLang === 'ar' 
      ? `<strong>تم استلام رسالتك بنجاح!</strong><br/>يمكنك أيضاً <a href="${waUrl}" target="_blank" style="text-decoration:underline;color:#38bdf8;font-weight:bold;">المتابعة فوراً عبر الواتساب هنا <i class="fa-brands fa-whatsapp"></i></a>`
      : `<strong>Inquiry received!</strong><br/>You can also <a href="${waUrl}" target="_blank" style="text-decoration:underline;color:#38bdf8;font-weight:bold;">chat instantly on WhatsApp here <i class="fa-brands fa-whatsapp"></i></a>`;

    form.reset();
  });
}

// --- BLUEPRINT COORDINATE CROSS MARKERS ---
function generateCrossMarks() {
  const container = document.getElementById('crossMarksContainer');
  if (!container) return;

  // Cross markers are naturally handled by the gradient grid in CSS
}
