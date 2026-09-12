import {
  ServiceItem,
  PipelineStep,
  WorkshopProgram,
  VideoGuide,
  PosterTemplateData
} from '../types.ts';

// Import generated imagery
import portraitImg from '../assets/images/regenerated_image_1789183197588.png';
import reliefImg from '../assets/images/overthinking_relief_1789097344841.jpg';
import relationshipImg from '../assets/images/golden_infinity_heart_1789097360829.jpg';
import globalImg from '../assets/images/global_mind_network_1789097380610.jpg';

export { portraitImg, reliefImg, relationshipImg, globalImg };

export const DOCTOR_INFO = {
  name: 'Vinayak Navnath Bhise',
  nameMr: 'विनायक नवनाथ भिसे',
  qualification: 'M.A. Psychology',
  qualificationBadge: 'M.A. Psych',
  title: 'Clinical Psychologist & Mental Health Counselor',
  titleMr: 'क्लिनिकल सायकॉलॉजिस्ट व मेंटल हेल्थ कौन्सिलर',
  roleMr: 'संस्थापक व संचालक – WMHD Association (World Mental Health Development Association)',
  roleEn: 'Founder & Director – WMHD Association (World Mental Health Development Association)',
  wmhdFullName: 'WMHD Association (World Mental Health Development Association)',
  wmhdFullNameMr: 'WMHD असोसिएशन (वर्ल्ड मेंटल हेल्थ डेव्हलपमेंट असोसिएशन)',
  phone: '+91 7798150143',
  phoneDisplay: '+91 77981 50143',
  whatsappUrl: 'https://wa.me/917798150143',
  email: 'vinayak1432bhise@gmail.com',
  websiteUrl: 'https://vinayakbhise.com',
  websiteDisplay: 'vinayakbhise.com',
  locationMr: 'बारामती क्लिनिक आणि ऑनलाइन (जगभरातून उपलब्ध)',
  locationEn: 'Baramati Clinic & Online Worldwide',
  powerTagline: 'Your Mind Matters.',
  powerTaglineMr: '“Your Mind Matters.” – तुमचे मन महत्त्वाचे आहे.',
  brandQuoteMr: '“समस्या फक्त ऐकायची नाही… मन समजून घ्यायचं आहे.”',
  brandQuoteEn: '“Not just listening to problems... but truly understanding the human mind.”',
  subHeadlineMr: 'वैज्ञानिक मानसशास्त्र, तणावमुक्ती आणि भावनिक सबलीकरणाचा खात्रीशीर मार्ग.',
  subHeadlineEn: 'World-Class Psychological Counselling, Stress Relief & Emotional Empowerment by Vinayak Bhise.',
  portraitImage: portraitImg,
  stats: [
    { value: '10K+', labelMr: 'समाधानी भारतीय रुग्ण व सत्रे', labelEn: 'Happy Patients' },
    { value: '4.98 ★', labelMr: '५-स्टार सरासरी रेटिंग', labelEn: '5-Star Rating' },
    { value: '100%', labelMr: 'गोपनीयता व आदर', labelEn: '100% Confidential' },
    { value: '15+ देश', labelMr: 'जागतिक ऑनलाइन पोहोच', labelEn: 'Global Countries' },
  ]
};

export const CORE_PHILOSOPHY = [
  {
    id: 'empathy',
    number: '01',
    titleMr: 'संवेदनशील संवाद',
    titleEn: 'Empathetic Listening',
    subtitleMr: 'सुरक्षित व निपक्षपाती वातावरण',
    subtitleEn: 'Safe & Non-Judgmental Space',
    descMr: 'कोणत्याही निर्णयाची (Judgment) भीती न बाळगता मनातलं मोकळेपणाने सांगण्याची सुरक्षित जागा. तुमचे विचार व भावना पूर्ण सन्मानाने ऐकल्या जातात.',
    descEn: 'A judgment-free space to open up your heart with complete dignity. Every thought and emotion is received with deep empathy.',
    icon: 'HeartHandshake',
    color: 'teal'
  },
  {
    id: 'science',
    number: '02',
    titleMr: 'शास्त्रीय मानसशास्त्र',
    titleEn: 'Scientific Psychology',
    subtitleMr: 'CBT, REBT आणि माइंड सायन्स',
    subtitleEn: 'CBT, REBT & Mind Science',
    descMr: 'कॉग्निटिव्ह आणि बिहेव्हिरल (CBT/REBT) पद्धतींचा वापर करून मानसिक समस्यांच्या मुळाशी जाऊन वैज्ञानिक व कायमस्वरूपी उपाय योजना.',
    descEn: 'Evidence-based cognitive and behavioral therapies (CBT/REBT) to dismantle negative cognitive loops and restore mental clarity.',
    icon: 'BrainCircuit',
    color: 'gold'
  },
  {
    id: 'confidentiality',
    number: '03',
    titleMr: '१००% गोपनीयता',
    titleEn: '100% Confidentiality',
    subtitleMr: 'संपूर्ण गुप्तता व विश्वासार्हता',
    subtitleEn: 'Strict Therapeutic Privacy Protocols',
    descMr: 'तुमची प्रत्येक चर्चा, नोंद आणि ओळख पूर्णपणे गुप्त आणि सुरक्षित ठेवली जाते. व्यावसायिक नैतिकतेचे १००% पालन.',
    descEn: 'Every session, discussion, and personal detail is safeguarded with strict therapeutic privacy protocols.',
    icon: 'ShieldCheck',
    color: 'teal'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'individual',
    number: 1,
    titleMr: 'वैयक्तिक सल्लामसलत',
    titleEn: 'Individual Counselling',
    category: 'individual',
    shortDescMr: 'नैराश्य, भीती आणि मानसिक गोंधळातून बाहेर पडण्यासाठी वैयक्तिक मार्गदर्शन.',
    shortDescEn: 'Overcome deep emotional fatigue, inner confusion, and regain daily direction.',
    detailedDescMr: 'आयुष्यातील आव्हाने, एकाकीपणा, भीती किंवा स्वतःबद्दलच्या नकारात्मक विचारांवर मात करण्यासाठी समर्पित वन-ऑन-वन सत्र. येथे तुम्हाला स्वतःची नव्याने ओळख होते.',
    detailedDescEn: 'A deep one-on-one personalized session to navigate grief, low self-esteem, feeling stuck, and inner turmoil with clarity.',
    symptomsMr: ['मनातील गोंधळ व एकाकीपणा', 'निर्णय घेता न येणे', 'सततची अस्वस्थता व उदासीनता'],
    symptomsEn: ['Feeling lost or lonely', 'Decision paralysis', 'Persistent inner numbness'],
    solutionsMr: ['आत्मविश्वास पुनर्प्राप्ती', 'भावनिक समतोल', 'दैनिक कार्यक्षमता सुधारणा'],
    solutionsEn: ['Self-worth rebuilding', 'Emotional equilibrium', 'Constructive life roadmap'],
    durationMinutes: 60,
    iconName: 'UserCheck',
    accentColor: 'teal'
  },
  {
    id: 'stress-anxiety',
    number: 2,
    titleMr: 'ताण व चिंता नियंत्रण',
    titleEn: 'Stress & Anxiety Management',
    category: 'individual',
    shortDescMr: 'रोजच्या आयुष्यातील ताणतणाव कमी करून मन शांत ठेवण्याच्या आधुनिक पद्धती.',
    shortDescEn: 'Modern psychological modalities to de-escalate anxiety and restore composure.',
    detailedDescMr: 'अचानक होणारी छातीतील धडधड, घाबरल्यासारखे वाटणे, ऑफिस किंवा घरचा सततचा दबाव यावर शास्त्रशुद्ध श्वसन व माइंडफुलनेस तंत्रांद्वारे नियंत्रण.',
    detailedDescEn: 'Break free from panic surges, nervous tremors, and unrelenting professional or familial stress with nervous system reset practices.',
    symptomsMr: ['अचानक भीती वाटणे (Panic Attacks)', 'कामाचा प्रचंड ताण', 'झोपेच्या तक्रारी व थकवा'],
    symptomsEn: ['Panic flare-ups & palpitations', 'Workplace burnout', 'Sleep disturbances & insomnia'],
    solutionsMr: ['मज्जासंस्था शांत करण्याची तंत्रे', 'माइंडफुलनेस प्रॅक्टिस', 'सकारात्मक दिनचर्या नियोजन'],
    solutionsEn: ['Somatic regulation techniques', 'Mindfulness tools', 'Stress resilience framework'],
    durationMinutes: 60,
    iconName: 'Activity',
    accentColor: 'gold'
  },
  {
    id: 'overthinking',
    number: 3,
    titleMr: 'अतिविचार निवारण',
    titleEn: 'Overthinking Support',
    category: 'individual',
    shortDescMr: 'सतत मनात येणारे नकारात्मक विचार थांबवण्याचे मानसशास्त्रीय तंत्र.',
    shortDescEn: 'Scientific methods to break intrusive negative mental chatter and loop thoughts.',
    detailedDescMr: 'भूतकाळातील चुका किंवा भविष्याची अवाजवी चिंता या चक्रात मन अडकले असल्यास, त्यातून बाहेर पडून वर्तमानात जगायला शिकवणारे विशेष तंत्र.',
    detailedDescEn: 'Cognitive reframing tools to halt doom-scrolling of the brain, excessive future-worry, and self-sabotaging mental rehearsals.',
    symptomsMr: ['डोक्यात सतत विचार चालू राहणे', 'झोपताना डोके शांत न होणे', 'लहान गोष्टींवरून अती चिंता'],
    symptomsEn: ['Constant mental noise', 'Racing thoughts at night', 'Catastrophizing small issues'],
    solutionsMr: ['Thought-Stopping तंत्र', 'संज्ञानात्मक पुनर्रचना (Reframing)', 'वर्तमानात लक्ष केंद्रित करणे'],
    solutionsEn: ['Thought-stopping triggers', 'Cognitive reframing', 'Present-moment grounding'],
    durationMinutes: 60,
    iconName: 'Sparkles',
    accentColor: 'teal'
  },
  {
    id: 'depression',
    number: 4,
    titleMr: 'नैराश्य मुक्ती',
    titleEn: 'Depression Support',
    category: 'individual',
    shortDescMr: 'जीवनात पुन्हा उत्साह, आनंद आणि सकारात्मकता निर्माण करणे.',
    shortDescEn: 'Ignite enthusiasm, vitality, and emotional warmth back into everyday living.',
    detailedDescMr: 'कशातही मन न लागणे, सतत उदास वाटणे आणि जगण्यातील रस संपल्यासारखे वाटणे यावर हळुवारपणे आणि शास्त्रीय उपचारांनी पुन्हा आशेचा किरण देणे.',
    detailedDescEn: 'Gentle, structured psychological therapy to uplift mood, reignite personal passion, and break free from emotional heaviness.',
    symptomsMr: ['सतत उदास व निराश राहणे', 'आवडीच्या गोष्टीतही रस नसणे', 'अशक्तपणा व एकाकीपणा'],
    symptomsEn: ['Chronic despair & sadness', 'Anhedonia (loss of pleasure)', 'Fatigue and social withdrawal'],
    solutionsMr: ['सकारात्मक क्रियाशीलता (Behavioral Activation)', 'आनंद पुनर्प्राप्ती योजना', 'भावनिक आधार'],
    solutionsEn: ['Behavioral activation', 'Daily micro-accomplishment plans', 'Warm compassionate support'],
    durationMinutes: 60,
    iconName: 'SunMedium',
    accentColor: 'gold'
  },
  {
    id: 'anger-management',
    number: 5,
    titleMr: 'राग नियंत्रण',
    titleEn: 'Anger Management',
    category: 'individual',
    shortDescMr: 'तीव्र भावनांवर नियंत्रण ठेवून संयमी स्वभाव बनवणे.',
    shortDescEn: 'Master intense emotional outbursts and cultivate calm, deliberate responses.',
    detailedDescMr: 'राग आल्यावर होणारे नुकसान, चिडचिड आणि संतापाचे रूपांतर शांत व प्रभावी संवादात करण्याची मानसशास्त्रीय युक्ती.',
    detailedDescEn: 'Understand anger triggers, physiological heat signals, and convert reactivity into assertive, peaceful communication.',
    symptomsMr: ['किरकोळ कारणांवरून संतापणे', 'रागात वस्तू फेकणे किंवा ओरडणे', 'रागामुळे संबंध दुरावणे'],
    symptomsEn: ['Short temper & irritability', 'Verbal or physical reactivity', 'Regret after anger episodes'],
    solutionsMr: ['इमोशनल ट्रिगर मॅपिंग', 'संवाद कौशल्ये विकास', 'तात्काळ शांत होण्याचे व्यायाम'],
    solutionsEn: ['Trigger identification mapping', 'Non-violent communication', 'De-escalation breathing'],
    durationMinutes: 60,
    iconName: 'Flame',
    accentColor: 'teal'
  },
  {
    id: 'relationship',
    number: 6,
    titleMr: 'नातेसंबंध सुधारणा',
    titleEn: 'Relationship & Marriage Counselling',
    category: 'relationship',
    shortDescMr: 'पती-पत्नी आणि नातेसंबंधांमधील दुरावा दूर करून संवाद मजबूत करणे.',
    shortDescEn: 'Bridge distance between partners, heal misunderstandings, and rebuild bonding.',
    detailedDescMr: 'गैरसमज, अविश्वास आणि संवादाचा अभाव यामुळे तुटणाऱ्या नात्यांना पुन्हा प्रेम, आदर आणि समजून घेण्याच्या धाग्याने जोडणे.',
    detailedDescEn: 'Specialized pre-marital, marital, and interpersonal therapy to untangle repetitive conflicts and cultivate lasting intimacy.',
    symptomsMr: ['पती-पत्नीमध्ये सतत वाद', 'एकमेकांशी बोलणे बंद होणे', 'नात्यातील अविश्वास व संशय'],
    symptomsEn: ['Recurring marital arguments', 'Emotional withdrawal / silent treatment', 'Trust erosion & miscommunication'],
    solutionsMr: ['सहानुभूतीपूर्ण संवाद तंत्र', 'विश्वास पुनर्स्थापना', 'एकत्रित जीवन उद्दिष्टे'],
    solutionsEn: ['Empathetic dialogue exercises', 'Trust rebuilding protocols', 'Shared relationship vision'],
    durationMinutes: 90,
    iconName: 'HeartHandshake',
    accentColor: 'gold'
  },
  {
    id: 'student-counselling',
    number: 7,
    titleMr: 'विद्यार्थी मार्गदर्शन',
    titleEn: 'Student Counselling',
    category: 'youth',
    shortDescMr: 'अभ्यासाचा ताण, परीक्षेची भीती, एकाग्रता आणि करिअर मधील गोंधळ दूर करणे.',
    shortDescEn: 'Eradicate exam anxiety, amplify focus, and resolve career path uncertainties.',
    detailedDescMr: 'शाळा, कॉलेज आणि स्पर्धा परीक्षांच्या विद्यार्थ्यांना अभ्यासात मन लावणे, वेळ व्यवस्थापन आणि निकालाच्या चिंतेवर मात करण्यासाठी खास मार्गदर्शन.',
    detailedDescEn: 'Tailored coaching for board and competitive exam aspirants to enhance retention, time mastery, and calm exam-hall composure.',
    symptomsMr: ['अभ्यासात लक्ष न लागणे', 'परीक्षेच्या वेळी भीती व विसरणे', 'भविष्याविषयी गोंधळ'],
    symptomsEn: ['Distracted attention & procrastination', 'Blanking out in exam halls', 'Career dilemma & peer pressure'],
    solutionsMr: ['एकाग्रता वाढवणारी तंत्रे', 'अभ्यासाचे स्मार्ट नियोजन', 'आत्मविश्वास बुस्टर सेशन्स'],
    solutionsEn: ['Focus strengthening methods', 'Scientific study scheduling', 'Confidence priming'],
    durationMinutes: 60,
    iconName: 'GraduationCap',
    accentColor: 'teal'
  },
  {
    id: 'child-adolescent',
    number: 8,
    titleMr: 'बाल मानसशास्त्र',
    titleEn: 'Child & Adolescent Support',
    category: 'youth',
    shortDescMr: 'मुलांचे बदलणारे वर्तन, हट्टीपणा आणि भावनिक समस्यांवर उपाय.',
    shortDescEn: 'Support growing children and teens navigating hormonal shifts and behavioral changes.',
    detailedDescMr: 'मुलांचा मोबाईलचा अतिवापर, हट्टी स्वभाव, आक्रमकता किंवा शाळेतील समस्यांवर पालकांसोबत मिळून प्रेमळ व मानसशास्त्रीय उपाय.',
    detailedDescEn: 'Parent-child collaborative therapy to address screen addiction, rebellion, mood swings, and developmental milestones.',
    symptomsMr: ['मोबाईलचे व्यसन', 'हट्टीपणा व उद्धट बोलणे', 'शाळेत जाण्यास नकार'],
    symptomsEn: ['Excessive digital screen use', 'Tantrums and defiant attitude', 'School avoidance & withdrawal'],
    solutionsMr: ['पालकत्व मार्गदर्शन (Positive Parenting)', 'मुलांशी मैत्रीपूर्ण संवाद', 'सवयींमध्ये सकारात्मक बदल'],
    solutionsEn: ['Positive parenting framework', 'Play & expressive therapy', 'Healthy routine formation'],
    durationMinutes: 60,
    iconName: 'Smile',
    accentColor: 'gold'
  },
  {
    id: 'addiction',
    number: 9,
    titleMr: 'व्यसनमुक्ती मार्गदर्शक',
    titleEn: 'Addiction Counselling',
    category: 'clinical',
    shortDescMr: 'वाईट सवयींमधून बाहेर पडून नवीन सकारात्मक जीवनशैली स्वीकारणे.',
    shortDescEn: 'Break harmful behavioral compulsions and establish a vibrant substance-free life.',
    detailedDescMr: 'तंबाखू, मद्यपान, सोशल मीडिया किंवा जुगार अशा विविध व्यसनांच्या मानसिक कारणांचा शोध घेऊन इच्छाशक्ती बळकट करणे.',
    detailedDescEn: 'Motivational interviewing and cognitive relapse prevention to uncover root triggers and reclaim self-mastery.',
    symptomsMr: ['सवयीवर नियंत्रण नसणे', 'व्यसनामुळे कुटुंबात कलह', 'सोडण्याचा प्रयत्न अयशस्वी होणे'],
    symptomsEn: ['Loss of control over impulses', 'Family distress and disruption', 'Frequent relapse cycles'],
    solutionsMr: ['इच्छाशक्ती बळकटीकरण पद्धती', 'ट्रिगर व्यवस्थापन', 'सकारात्मक जीवनशैली रचना'],
    solutionsEn: ['Motivational willpower coaching', 'Craving trigger mastery', 'Sustained lifestyle reset'],
    durationMinutes: 60,
    iconName: 'ShieldAlert',
    accentColor: 'teal'
  },
  {
    id: 'psychological-assessment',
    number: 10,
    titleMr: 'मानसशास्त्रीय चाचणी',
    titleEn: 'Psychological Assessment',
    category: 'clinical',
    shortDescMr: 'मानसिक स्थितीचे शास्त्रीय मूल्यमापन आणि अचूक विश्लेषण.',
    shortDescEn: 'Comprehensive scientific psychometric profiling and clinical diagnostics.',
    detailedDescMr: 'बुद्धिमत्ता (IQ), व्यक्तिमत्त्व (Personality), नैराश्य व चिंता पातळी यांसारख्या विविध मानकीकृत मानसशास्त्रीय चाचण्या व अहवाल.',
    detailedDescEn: 'Standardized psychometric batteries, IQ diagnostics, emotional quotient assessments, and clinical clarity reports.',
    symptomsMr: ['स्वतःची मानसिक क्षमता जाणून घेणे', 'क्लिनिकल निदानाची गरज', 'करिअर व व्यक्तिमत्त्व चाचणी'],
    symptomsEn: ['Seeking accurate clinical diagnosis', 'Personality & aptitude clarity', 'Objective emotional scoring'],
    solutionsMr: ['मानकीकृत चाचणी अहवाल', 'तपशीलवार समुपदेशन विश्लेषण', 'वैयक्तिक कृती आराखडा'],
    solutionsEn: ['Standardized test report', 'Detailed debriefing session', 'Customized growth recommendations'],
    durationMinutes: 90,
    iconName: 'ClipboardCheck',
    accentColor: 'gold'
  }
];

export const TRANSFORMATION_PIPELINE: PipelineStep[] = [
  {
    step: 1,
    id: 'listen',
    titleMr: 'ऐकणे',
    titleEn: 'Listen',
    actionWordMr: 'सहानुभूतीपूर्वक ऐकणे',
    actionWordEn: 'Empathetic Active Listening',
    descMr: 'युजरची बाजू, भावना आणि अडचणी कोणत्याही पूर्वग्रहाशिवाय लक्षपूर्वक समजून घेणे. येथे व्यक्तीला मोकळेपणाने व्यक्त होण्याची सुरक्षित जागा मिळते.',
    descEn: 'Unfiltered, dedicated listening without interruption or judgment. A secure emotional container where you feel truly heard.',
    keyOutcomesMr: ['मनातील भार हलका होतो', 'भीती व संकोच दूर होतो', 'विश्वासाचे नाते निर्माण होते'],
    keyOutcomesEn: ['Immediate emotional relief', 'Dissolves hesitation and fear', 'Establishes therapeutic trust'],
    icon: 'Ear'
  },
  {
    step: 2,
    id: 'understand',
    titleMr: 'समजून घेणे',
    titleEn: 'Understand',
    actionWordMr: 'मुळाशी जाऊन समजणे',
    actionWordEn: 'Root-Cause Exploration',
    descMr: 'केवळ वरवरची लक्षणे न पाहता समस्येचे मूळ कारण, विचारसरणीतील दोष आणि भूतकाळातील घटनांचा शोध घेणे.',
    descEn: 'Peeling beyond surface distress to map underlying cognitive schemas, past emotional wounds, and belief loops.',
    keyOutcomesMr: ['समस्येचे मूळ कारण स्पष्ट होते', 'स्वतःच्या विचारांची दिशा समजते', 'भावनिक ट्रिगर्सची ओळख'],
    keyOutcomesEn: ['Identifies core root drivers', 'Clarifies cognitive blind spots', 'Uncovers hidden triggers'],
    icon: 'Search'
  },
  {
    step: 3,
    id: 'assess',
    titleMr: 'विश्लेषण',
    titleEn: 'Assess',
    actionWordMr: 'मानसशास्त्रीय मूल्यमापन',
    actionWordEn: 'Scientific Assessment',
    descMr: 'शास्त्रीय दृष्टिकोनातून आणि प्रमाणित मानसशास्त्रीय पद्धतींच्या आधारे मानसिक स्थितीचे वस्तुनिष्ठ विश्लेषण करणे.',
    descEn: 'Evaluating emotional patterns using established psychological frameworks (CBT/REBT models) for objective diagnosis.',
    keyOutcomesMr: ['वैज्ञानिक दृष्टीकोन मिळतो', 'वस्तुनिष्ठ विश्लेषण अहवाल', 'योग्य उपचारांची दिशा ठरते'],
    keyOutcomesEn: ['Objective mental health matrix', 'Evidence-backed profiling', 'Precision therapeutic target'],
    icon: 'LineChart'
  },
  {
    step: 4,
    id: 'support',
    titleMr: 'मार्गदर्शन',
    titleEn: 'Support',
    actionWordMr: 'वैयक्तिक उपाययोजना',
    actionWordEn: 'Personalized Intervention',
    descMr: 'व्यक्तीच्या स्वभाव आणि जीवनशैलीला अनुरूप अशा सानुकूलित (Customized) मानसशास्त्रीय तंत्रांची आणि उपायांची आखणी.',
    descEn: 'Deploying actionable mental exercises, behavioral adjustments, and compassionate coaching tailored to your reality.',
    keyOutcomesMr: ['दैनंदिन सवयींमध्ये सुधारणा', 'चिंता निवारण तंत्रे शिकणे', 'निरोगी विचारसरणीची सुरुवात'],
    keyOutcomesEn: ['Practical daily coping toolset', 'Actionable anxiety de-escalators', 'Healthy cognitive rewiring'],
    icon: 'Sparkles'
  },
  {
    step: 5,
    id: 'empower',
    titleMr: 'सक्षम करणे',
    titleEn: 'Empower',
    actionWordMr: 'स्वावलंबी व सशक्त बनवणे',
    actionWordEn: 'Lasting Empowerment',
    descMr: 'भविष्यात येणाऱ्या कोणत्याही अडचणींना न घाबरता स्वतःच्या बळावर यशस्वीपणे सामोरे जाण्यासाठी मनाला कणखर व स्वावलंबी बनवणे.',
    descEn: 'Equipping you with mental fortitude and self-counselling mastery to independently triumph over future life storms.',
    keyOutcomesMr: ['आत्मविश्वास आणि आंतरिक शांती', 'स्वतःचे निर्णय स्वतः घेण्याची क्षमता', 'दीर्घकालीन मानसिक स्थिरता'],
    keyOutcomesEn: ['Unshakable self-trust & inner peace', 'Independent problem-solving capacity', 'Sustained emotional mastery'],
    icon: 'ShieldCheck'
  }
];

export const WORKSHOPS_LIST: WorkshopProgram[] = [
  {
    id: 'eq-mastery',
    titleMr: 'Emotional Intelligence (भावनिक बुद्धिमत्ता)',
    titleEn: 'Emotional Intelligence',
    taglineMr: 'भावनांचे नियोजन शिका – वैयक्तिक व व्यावसायिक यशाची गुरुकिल्ली',
    taglineEn: 'Master emotional agility for unstoppable personal & professional triumph',
    descMr: 'आपल्या भावना समजून घेणे, रागावर नियंत्रण ठेवणे आणि इतरांशी प्रभावी संवाद साधून नातेसंबंध अधिक दृढ करण्याचे सखोल प्रशिक्षण.',
    descEn: 'Learn to regulate intense mood states, develop magnetic empathy, and communicate with peak poise under pressure.',
    duration: '२ दिवस / ६ तास',
    format: 'Live Interactive (Zoom / Offline Baramati)',
    modulesMr: [
      'भावनांची ओळख आणि स्व-जागरूकता (Self-Awareness)',
      'इमोशनल हायजॅक रोखणे (Impulse Control)',
      'नातेसंबंधांमध्ये एम्पथी वापरणे',
      'तणावात शांत राहण्याचे तंत्र'
    ],
    modulesEn: [
      'Emotional anatomy & sharp self-awareness',
      'Halting emotional hijack & impulse reactivity',
      'High-impact empathetic communication',
      'Centering under acute social pressure'
    ],
    suitableForMr: 'व्यावसायिक, शिक्षक, उद्योजक आणि पालक',
    suitableForEn: 'Professionals, Educators, Entrepreneurs & Leaders',
    badge: 'Flagship'
  },
  {
    id: 'stress-management',
    titleMr: 'Stress Management (तणाव व्यवस्थापन)',
    titleEn: 'Stress Management',
    taglineMr: 'दैनंदिन ताणतणाव व्यवस्थापन आणि मनःशांतीची कला',
    taglineEn: 'A masterclass to decompress daily pressure and safeguard inner peace',
    descMr: 'ऑफिस, कुटुंब आणि आर्थिक जबाबदाऱ्यांचा ताण हाताळण्यासाठी आधुनिक विज्ञान आणि माइंडफुलनेसवर आधारित सोपी तंत्रे.',
    descEn: 'Scientific nervous system reset protocols to stay centered amidst demanding workloads, financial pressures, and daily deadlines.',
    duration: '४ आठवड्यांचा ऑनलाइन प्रोग्राम',
    format: 'Online Video Sessions + Daily WhatsApp Exercises',
    modulesMr: [
      'ताणाचे शरीरावर होणारे दुष्परिणाम व उपाय',
      'श्वासोच्छ्वास व प्रोग्रेसिव्ह मसल रिलॅक्सेशन',
      'वेळेचे व्यवस्थापन व कामाचे प्राधान्य ठरवणे',
      'गहन आणि शांत झोपेची तंत्रे'
    ],
    modulesEn: [
      'Stress neurobiology & somatic relief',
      'Pranayama & Progressive Muscle Relaxation',
      'Healthy boundaries and time architecture',
      'Restorative deep sleep protocols'
    ],
    suitableForMr: 'आयटी कर्मचारी, गृहिणी, व्यावसायिक व सर्वसामान्य नागरिक',
    suitableForEn: 'Corporate professionals, Homemakers & Stressed individuals',
    badge: 'Popular'
  },
  {
    id: 'relationship-psychology',
    titleMr: 'Relationship Psychology (नातेसंबंध मानसशास्त्र)',
    titleEn: 'Relationship Psychology',
    taglineMr: 'नातेसंबंध दृढ करण्याचे सूत्र – गैरसमज दूर करून प्रेम वाढवा',
    taglineEn: 'Bridge relational divides and cultivate profound mutual warmth',
    descMr: 'पती-पत्नी, पालक आणि सहकाऱ्यांमधील संवादातील दरी भरून काढण्यासाठी मानसोपचार पद्धतींवर आधारित खास कार्यशाळा.',
    descEn: 'Unpack the unspoken subtext behind recurring disputes and replace silent treatments with caring vulnerability.',
    duration: '१ दिवसाची गहन कार्यशाळा (४ तास)',
    format: 'Offline & Online Stream',
    modulesMr: [
      'संवादातील ५ घातक सवयी आणि उपाय',
      'सहानुभूतीपूर्वक ऐकण्याचे नियम',
      'भावनिक गरजा व्यक्त करण्याची योग्य पद्धत',
      'पुन्हा विश्वास निर्माण करण्याचे मार्ग'
    ],
    modulesEn: [
      'Deconstructing the 4 horsemen of communication',
      'Compassionate deep listening drills',
      'Expressing raw needs without accusations',
      'Rebuilding shared intimacy & trust'
    ],
    suitableForMr: 'विवाहित जोडपे, तरुण जोडपे आणि कुटुंबातील सदस्य',
    suitableForEn: 'Couples, Partners, Families and Counselors',
    badge: 'Transformative'
  },
  {
    id: 'personality-development',
    titleMr: 'Personality Development (व्यक्तिमत्त्व विकास)',
    titleEn: 'Personality Development',
    taglineMr: 'आत्मविश्वास, प्रभावी संवाद आणि सकारात्मक व्यक्तिमत्त्व घडवा',
    taglineEn: 'Build unshakable self-confidence, dynamic communication & charisma',
    descMr: 'भीती, न्यूनगंड आणि संकोच दूर करून कोणत्याही मंचावर किंवा समाजात आत्मविश्वासाने वावरण्याचे शास्त्रीय प्रशिक्षण.',
    descEn: 'Overcome self-doubt, social anxiety, and imposter syndrome to project charismatic authenticity and leadership presence.',
    duration: '२ आठवडे / ८ तास',
    format: 'Interactive Group Coaching & Practical Drills',
    modulesMr: [
      'न्यूनगंड आणि भीतीवर मात (Overcoming Inferiority Complex)',
      'बॉडी लँग्वेज आणि व्हॉइस मॉड्युलेशन',
      'निर्णयक्षमता व आत्मविश्वास वाढवणे',
      'सकारात्मक विचारसरणीची दैनंदिन सवय'
    ],
    modulesEn: [
      'Eradicating self-limiting beliefs & imposter loops',
      'Executive body language & vocal projection',
      'Decisive mindset & assertiveness training',
      'Daily positive habit architecture'
    ],
    suitableForMr: 'युवक, महाविद्यालयीन विद्यार्थी, नोकरदार व उद्योजक',
    suitableForEn: 'Youth, College Students, Jobseekers & Executives',
    badge: 'High Demand'
  },
  {
    id: 'mental-health-awareness',
    titleMr: 'Mental Health Awareness (मानसिक आरोग्य जनजागृती)',
    titleEn: 'Mental Health Awareness',
    taglineMr: 'मानसिक आरोग्याची समाजव्यापी चळवळ – गैरसमज दूर करा, आधार द्या',
    taglineEn: 'Universal psychological awareness, destigmatization & support',
    descMr: 'समाजात, शाळांमध्ये व संस्थांमध्ये मानसिक आरोग्याचे महत्त्व पटवून देणे, नैराश्य व आत्महत्येचे धोके वेळीच ओळखणे आणि योग्य मदत मिळवून देणे.',
    descEn: 'A community empowerment initiative spearheaded under WMHD Association to build empathetic support networks across India.',
    duration: 'विशेष जनजागृती व्याख्यानमाला (२ तास)',
    format: 'College Auditoriums, Corporate Halls & Live Stream',
    modulesMr: [
      'मानसिक आरोग्याविषयीचे गैरसमज व वैज्ञानिक वास्तव',
      'नैराश्य व तीव्र चिंतेची पूर्वलक्षणे कशी ओळखाल?',
      'आपत्कालीन मानसिक आधार (Psychological First Aid)',
      'हेल्पलाइन्स व मानसोपचाराचा योग्य वापर'
    ],
    modulesEn: [
      'Debunking Indian cultural mental health myths',
      'Early identification of depression & crisis signs',
      'Psychological First Aid for loved ones',
      'Navigating professional counseling & emergency help'
    ],
    suitableForMr: 'शाळा, महाविद्यालये, सामाजिक संस्था, कॉर्पोरेट्स व नागरिक',
    suitableForEn: 'Educational Institutions, NGOs, Corporates & General Public',
    badge: 'WMHD Initiative'
  }
];

export const YOUTUBE_VIDEOS: VideoGuide[] = [
  {
    id: 'v1',
    titleMr: 'सतत येणारे नकारात्मक विचार कसे थांबवाल? (Overthinking Solution)',
    titleEn: 'How to Stop Overthinking & Intrusive Negative Loops',
    duration: '12:45',
    views: '45K+ Views',
    category: 'Overthinking & Mental Peace',
    summaryMr: 'मेंदू एकाच विचारावर का अडकतो? सायकोलॉजिकल थॉट-स्टॉपिंग तंत्र व ३ सोप्या दैनंदिन पद्धती ज्याद्वारे मन लगेच शांत होते.',
    summaryEn: 'Why does the brain obsess on worries? Learn the 3-step cognitive pause technique to immediately regain peace of mind.',
    keyPointsMr: [
      '५-४-३-२-१ ग्राउंडिंग टेक्निक',
      'विचारांना तथ्य न मानता फक्त विचार मानणे',
      'रात्री झोपताना करायचा २ मिनिटांचा व्यायाम'
    ]
  },
  {
    id: 'v2',
    titleMr: 'नातेसंबंधात दुरावा का येतो? ५ मानसशास्त्रीय कारणे व उपाय',
    titleEn: 'Why Relationships Drift Apart: 5 Psychological Triggers',
    duration: '16:20',
    views: '68K+ Views',
    category: 'Relationship Wellness',
    summaryMr: 'पती-पत्नीमधील संवाद का थांबतो? छोट्या भांडणांचे रूपांतर मोठ्या वादात कसे होते आणि त्यावर उपाय कसा करावा.',
    summaryEn: 'The hidden psychological culprits behind marital cold wars and how to restore warm communication.',
    keyPointsMr: [
      'न बोलता व्यक्त होणाऱ्या भावना समजणे',
      'दोषारोप न करता संवाद साधणे',
      'दररोज १५ मिनिटांचा क्वालिटी टाईम'
    ]
  },
  {
    id: 'v3',
    titleMr: 'अचानक होणारी भीती व धडधड (Panic Attack) तात्काळ कशी थांबवावी?',
    titleEn: 'Instant Relief for Panic Attacks & Anxiety Surges',
    duration: '09:15',
    views: '82K+ Views',
    category: 'Anxiety & Panic',
    summaryMr: 'पॅनिक अटॅकच्या वेळी शरीरात काय घडते? ४-७-८ श्वसन तंत्र आणि मज्जासंस्था पूर्ववत करण्याचे मार्गदर्शक.',
    summaryEn: 'Understand the biological fight-or-flight response and trigger the parasympathetic brake in under 90 seconds.',
    keyPointsMr: [
      '४-७-८ श्वास पद्धतीचे प्रात्यक्षिक',
      'थंड पाण्याचा चेहऱ्यावर वापर (Diver\'s Reflex)',
      'मनातील भीतीला वैज्ञानिक आधार देणे'
    ]
  },
  {
    id: 'v4',
    titleMr: 'विद्यार्थ्यांचा अभ्यास करताना आळस व मोबाईलचे व्यसन कसे घालवाल?',
    titleEn: 'Overcoming Study Procrastination & Screen Addiction in Youth',
    duration: '14:30',
    views: '110K+ Views',
    category: 'Youth & Focus',
    summaryMr: 'मुलांचा मेंदू डोपामाइनमुळे मोबाईलकडे का ओढला जातो? पोमोडोरो तंत्र व अभ्यासाची गोडी लावण्याचे मानसशास्त्र.',
    summaryEn: 'Deconstructing the dopamine trap behind reels and short videos, with student-friendly focus habits.',
    keyPointsMr: [
      'डोपामाइन डिटॉक्सचे महत्त्व',
      '२५ मिनिटांची अभ्यासाची सायकल',
      'पालकांनी द्यायचा सकारात्मक आधार'
    ]
  }
];

export const POSTER_TEMPLATES: PosterTemplateData[] = [
  {
    id: 'poster-1',
    templateNumber: 1,
    titleMr: 'मुख्य ब्रँड पर्सनल हिरो पोस्टर',
    titleEn: 'Main Brand Personal Hero Poster',
    subtitleMr: 'विनायक भिसे – क्लिनिकल सायकॉलॉजिस्ट | Founder: WMHD Association (World Mental Health Development Association)',
    subtitleEn: 'Vinayak Bhise | Clinical Psychologist (Founder & Director: WMHD Association)',
    imageSrc: portraitImg,
    aspectRatio: '4:5',
    theme: 'hero',
    bulletPointsMr: [
      'Stress & Anxiety (ताण व चिंता निवारण)',
      'Depression Support (नैराश्य मुक्ती मार्गदर्शक)',
      'Relationship Counselling (नातेसंबंध सुधारणा)',
      'Overthinking Support (अतिविचार निवारण)'
    ],
    bulletPointsEn: [
      'Stress & Anxiety Management',
      'Depression Recovery Support',
      'Relationship & Marriage Counselling',
      'Overthinking & Insomnia Support'
    ],
    contactCallout: '📞 Appointment Book करा: +91 7798150143',
    taglineMr: '“समस्या फक्त ऐकायची नाही… मन समजून घ्यायचं आहे.”',
    taglineEn: '“Not just listening to problems... but truly understanding the human mind.”',
    aiPrompt: 'Cinematic portrait of an Indian male psychologist in a sharp professional suit, warm confident smile, set against a dark premium charcoal background with glowing 3D glass neural network particles and subtle gold light accents, realistic studio lighting, 8k resolution, ultra-detailed, photorealistic, luxury personal branding background --ar 4:5 --v 6.0',
    recommendedUse: 'Instagram / Facebook Feed, Clinic Wall Display, Official WhatsApp Display Banner'
  },
  {
    id: 'poster-2',
    templateNumber: 2,
    titleMr: 'अतिविचार आणि ताणतणाव मुक्ती पोस्टर',
    titleEn: 'Stress, Anxiety & Overthinking Relief Poster',
    subtitleMr: 'सततच्या चिंतेमुळे मन अस्वस्थ वाटतंय का?',
    subtitleEn: 'Is constant worry & racing thoughts draining your daily peace?',
    imageSrc: reliefImg,
    aspectRatio: '4:5',
    theme: 'relief',
    bulletPointsMr: [
      'मनातील गोंधळ आणि अनामिक भीती दूर करा',
      'सकारात्मक दृष्टिकोन आणि गाढ मनःशांती मिळवा',
      'शास्त्रीय व वैयक्तिक मानसशास्त्रीय समुपदेशन'
    ],
    bulletPointsEn: [
      'Dissolve mental fog and irrational anxieties',
      'Cultivate genuine mental tranquility and calm sleep',
      'Scientific CBT-based personalized counselling'
    ],
    contactCallout: 'Vinayak Bhise (Mental Health Counselor) | 📱 +91 7798150143',
    taglineMr: '“शांत मन, आनंदी जीवन – आजच पहिला पाऊल उचला.”',
    taglineEn: '“A serene mind paves the way to a flourishing life.”',
    aiPrompt: '3D visual concept of a human profile silhouette made of dark misty clouds transforming into luminous teal and gold light particles, floating glassmorphism UI board in center, dark dark background, serene and therapeutic atmosphere, futuristic psychology art, 8k render, Octane render --ar 4:5',
    recommendedUse: 'Social Media Carousel Cover, Stress Relief Campaign, WhatsApp Status'
  },
  {
    id: 'poster-3',
    templateNumber: 3,
    titleMr: 'नातेसंबंध व वैवाहिक समुपदेशन पोस्टर',
    titleEn: 'Relationship & Marriage Counselling Poster',
    subtitleMr: 'नातेसंबंधांमधील दुरावा संपवा… पुन्हा संवाद सुरू करा.',
    subtitleEn: 'Heal the emotional distance... Rediscover warmth and connection.',
    imageSrc: relationshipImg,
    aspectRatio: '4:5',
    theme: 'relationship',
    bulletPointsMr: [
      'संवादातील गैरसमज व कडवटपणा दूर करणे',
      'भावनिक जवळीक आणि विश्वास पुन्हा निर्माण करणे',
      'सुखी, शांत व समाधानी वैवाहिक जीवन घडवणे'
    ],
    bulletPointsEn: [
      'Clear recurring disputes & communication friction',
      'Re-establish emotional safety, warmth and trust',
      'Foster a fulfilling, harmonious partnership'
    ],
    contactCallout: 'Vinayak Bhise | 📱 +91 7798150143 (Online & Baramati Clinic)',
    taglineMr: '“एकमेकांना समजून घेतलं, की नातं पुन्हा बहरतं.”',
    taglineEn: '“When mutual understanding blooms, the relationship thrives once more.”',
    aiPrompt: 'Abstract 3D golden infinity heart symbol made of polished warm glass floating softly in a dark cinematic space, glowing subtle warm ambient lighting, emotional healing atmosphere, high-end visual design, minimalist luxury, 8k resolution --ar 4:5',
    recommendedUse: 'Couples Workshop Flyer, Family Counseling Ad, Instagram Sponsored Campaign'
  },
  {
    id: 'poster-4',
    templateNumber: 4,
    titleMr: 'ऑनलाइन कौन्सेलिंग व ग्लोबल बुकिंग पोस्टर',
    titleEn: 'Online Counselling & Global Booking Banner',
    subtitleMr: 'घरबसल्या मिळवा तज्ज्ञ मानसशास्त्रज्ञांचे मार्गदर्शन!',
    subtitleEn: 'World-Class Psychological Guidance From the Comfort of Home',
    imageSrc: globalImg,
    aspectRatio: '4:5',
    theme: 'global',
    bulletPointsMr: [
      '🔒 १००% गोपनीय व सुरक्षित (Safe & 100% Confidential)',
      '💻 Video / Audio Session (Zoom, Google Meet किंवा Phone Call)',
      '🕒 तुमच्या सोयीची वेळ (Flexible Global Time Slots)'
    ],
    bulletPointsEn: [
      '🔒 100% Confidential & Secure Therapy Protocol',
      '💻 High-Definition Video or Discreet Phone Consultations',
      '🕒 Flexible Scheduling Accommodating All Global Timezones'
    ],
    contactCallout: 'आताच अपॉइंटमेंट बुक करा: Vinayak Bhise | 📱 +91 7798150143',
    taglineMr: '“भौगोलिक अंतर काहीही असो, मदतीचा हात सदैव सोबत आहे.”',
    taglineEn: '“Distance is no barrier to compassionate, expert mental health support.”',
    aiPrompt: 'Dark sleek technological landscape with floating 3D globe showing glowing connection nodes connecting worldwide clients, subtle cyan teal and gold beams, premium modern tele-health psychology visual, 8k render --ar 4:5',
    recommendedUse: 'Website Hero Banner, NRI / Global Client Marketing, WhatsApp Business Catalogue'
  }
];
