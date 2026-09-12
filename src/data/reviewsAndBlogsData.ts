import { CustomerReview, MentalHealthBlog } from '../types.ts';

export const REVIEWS_STATS = {
  totalReviews: '10,000+',
  totalReviewsMr: '१०,०००+',
  totalReviewsDisplay: '10K+',
  averageRating: 4.98,
  starCount: 5,
  satisfactionRate: '99.2%',
  indianCitiesCovered: '120+ शहरे',
  indianCitiesCoveredEn: '120+ Cities across India',
  verifiedPatients: '100% Verified Feedback'
};

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Rahul Deshmukh',
    authorMr: 'राहुल देशमुख',
    city: 'Pune',
    state: 'Maharashtra',
    rating: 5,
    date: '2 दिवसांपूर्वी',
    serviceTagMr: 'चिंता व अतिविचार मुक्ती (Anxiety & Overthinking)',
    serviceTagEn: 'Anxiety & Overthinking Therapy',
    category: 'anxiety',
    quoteMr: 'मी गेल्या ३ वर्षांपासून रात्री झोप न येणे आणि सतत नकारात्मक विचारांच्या चक्रात अडकलो होतो. अनेक औषधे घेऊनही तात्पुरता आराम मिळायचा. विनायक सरांनी CBT तंत्राद्वारे माझ्या विचारांची मुळं कशी तपासायची हे शिकवले. अवघ्या ४ सत्रांत मला शांत झोप येऊ लागली. मनावरचा प्रचंड भार उतरला आहे. धन्यवाद सर!',
    quoteEn: 'I was trapped in relentless overthinking and insomnia for over 3 years. Vinayak sir taught me structured CBT reframing. Within 4 sessions, the heavy knot in my chest completely dissolved. Truly one of the finest psychologists in India.',
    verified: true,
    recoveryTimeline: '४ आठवड्यांत १००% सुधारणा'
  },
  {
    id: 'rev-2',
    author: 'Pooja & Amit Kulkarni',
    authorMr: 'पूजा व अमित कुलकर्णी',
    city: 'Baramati',
    state: 'Maharashtra',
    rating: 5,
    date: '१ आठवड्यापूर्वी',
    serviceTagMr: 'वैवाहिक व नातेसंबंध समुपदेशन (Marriage Counselling)',
    serviceTagEn: 'Couples & Marriage Therapy',
    category: 'marriage',
    quoteMr: 'लग्नानंतरच्या सततच्या वादविवाद आणि गैरसमजांमुळे आमचा संसार तुटण्याच्या उंबरठ्यावर होता. विनायक सरांनी आम्हा दोघांना कोणत्याही पूर्वग्रहाशिवाय ऐकून घेतले. शांतपणे संवाद कसा साधावा आणि एकमेकांच्या भावनांचा आदर कसा करावा हे त्यांनी दाखवून दिले. आज आमचा संसार आनंदाने सुरू आहे.',
    quoteEn: 'Constant disputes and bitter misunderstandings had pushed our marriage to the brink of separation. Sir provided an impartial, compassionate space. He healed our communication gaps without blaming anyone. Forever indebted.',
    verified: true,
    recoveryTimeline: 'संसार पुन्हा आनंदी व जोडला गेला'
  },
  {
    id: 'rev-3',
    author: 'Aditya S. Shinde',
    authorMr: 'आदित्य शिंदे (NEET Aspirant)',
    city: 'Mumbai',
    state: 'Maharashtra',
    rating: 5,
    date: '२ आठवड्यांपूर्वी',
    serviceTagMr: 'विद्यार्थी ताण व परीक्षा भीती (Student Counseling)',
    serviceTagEn: 'Student & Exam Phobia Therapy',
    category: 'student',
    quoteMr: 'NEET परीक्षेच्या दडपणाने मला पॅनिक अटॅक येत होते. अभ्यासात अजिबात लक्ष लागत नव्हते. सरांच्या ऑनलाइन सत्रांमुळे माझा आत्मविश्वास पुन्हा जागा झाला. सरांनी मला वेळेचे नियोजन आणि परीक्षेच्या दिवशी मन शांत ठेवण्याचे जे सायंटिफिक तंत्र दिले, त्याने मला परीक्षेत ६२०+ गुण मिळवता आले.',
    quoteEn: 'Academic pressure and exam terror were causing me disabling panic attacks. Vinayak sir completely re-anchored my nervous system with pragmatic focus drills. I cleared my competitive exam with flying colors!',
    verified: true,
    recoveryTimeline: 'परीक्षेत यश व तणावमुक्ती'
  },
  {
    id: 'rev-4',
    author: 'Sneha Patil',
    authorMr: 'स्नेहा पाटील (IT Professional)',
    city: 'Bengaluru',
    state: 'Karnataka',
    rating: 5,
    date: '३ आठवड्यांपूर्वी',
    serviceTagMr: 'कॉर्पोरेट बर्नआउट व नैराश्य (Depression & Burnout)',
    serviceTagEn: 'Corporate Burnout & Depression Support',
    category: 'depression',
    quoteMr: 'आयटी कंपनीतील कामाचा प्रचंड ताण आणि अपयशाच्या भीतीमुळे मी गंभीर नैराश्यात गेले होते. कोणाशी बोलावे हे सुचत नव्हते. विनायक सरांशी ऑनलाइन व्हिडिओ कॉलवर बोलल्यानंतर मला प्रथमच सुरक्षित वाटले. त्यांनी मला रोजच्या छोट्या सवयी बदलून जगण्याचा नवा आनंद शोधायला शिकवले.',
    quoteEn: 'High-pressure IT deadlines plunged me into severe burnout and chronic sadness. Vinayak sir provided empathetic, zero-judgment online sessions that restored my emotional stamina and self-worth.',
    verified: true,
    recoveryTimeline: '६ सत्रांनंतर सकारात्मक नवी सुरुवात'
  },
  {
    id: 'rev-5',
    author: 'Dr. Swapnil Jadhav',
    authorMr: 'डॉ. स्वप्निल जाधव (M.D. Physician)',
    city: 'Nashik',
    state: 'Maharashtra',
    rating: 5,
    date: '१ महिन्यापूर्वी',
    serviceTagMr: 'क्लिनिकल मानसशास्त्र व पॅनिक अटॅक (Clinical Anxiety)',
    serviceTagEn: 'Clinical Assessment & Somatic Healing',
    category: 'anxiety',
    quoteMr: 'मी स्वतः एक डॉक्टर असूनही ताणतणावामुळे होणाऱ्या मज्जासंस्थेच्या त्रासाने त्रस्त होतो. विनायक सरांची मानसशास्त्रीय पकड आणि वैज्ञानिक दृष्टिकोन अत्यंत उच्च दर्जाचा आहे. औषधोपचारांआधी मनातील विचारांची गाठ सोडवणे किती गरजेचे असते, हे त्यांच्या सत्रांतून अनुभवले.',
    quoteEn: 'As a medical physician myself, I deeply appreciate Vinayak Bhise sir’s rigorous scientific foundation in CBT and REBT. His ability to decode neurological anxiety signals into lasting peace is exceptional.',
    verified: true,
    recoveryTimeline: 'पूर्णपणे पॅनिक-मुक्त जीवन'
  },
  {
    id: 'rev-6',
    author: 'Sunita & Ramesh Gaikwad',
    authorMr: 'सुनिता व रमेश गायकवाड',
    city: 'Satara',
    state: 'Maharashtra',
    rating: 5,
    date: '१ महिन्यापूर्वी',
    serviceTagMr: 'मुलांचे वर्तणूक समुपदेशन (Child & Adolescent)',
    serviceTagEn: 'Adolescent Behavioral Guidance',
    category: 'student',
    quoteMr: 'आमचा १५ वर्षांचा मुलगा सतत मोबाईलमध्ये मग्न असायचा, अभ्यासात मागे पडत होता आणि प्रचंड चिडचिड करायचा. विनायक सरांनी त्याच्याशी मित्रासारखा संवाद साधला. त्याच्या मनातील कारणे समजून घेऊन त्याला मोबाईल व्यसनातून बाहेर काढले. आज तो आनंदाने शिकत आहे.',
    quoteEn: 'Our teenage son was addicted to gaming screens and prone to explosive anger. Sir handled him with extraordinary warmth and psychological tact. Our home atmosphere is now loving and peaceful.',
    verified: true,
    recoveryTimeline: 'मोबाईल व्यसनमुक्त व आनंदी'
  },
  {
    id: 'rev-7',
    author: 'Vikram Mehta (NRI)',
    authorMr: 'विक्रम मेहता (लंडन / बारामती)',
    city: 'London / Baramati',
    state: 'Global NRI',
    rating: 5,
    date: '२ महिन्यांपूर्वी',
    serviceTagMr: 'ग्लोबल ऑनलाइन कौन्सेलिंग (Worldwide Online)',
    serviceTagEn: 'Cross-Border Psychological Consultation',
    category: 'general',
    quoteMr: 'लंडनमध्ये राहूनही मराठीत आणि आपल्या भारतीय संस्कृतीला समजणाऱ्या तज्ज्ञ मानसोपचार तज्ज्ञाची मला गरज होती. विनायक सरांनी वेळेचे बंधन न बाळगता ऑनलाइन सत्रे दिली. परदेशात जाणवणारे एकटेपण आणि करिअरचा ताण यावर त्यांचे मार्गदर्शन अमूल्य ठरले.',
    quoteEn: 'Living in London, finding a culturally attuned, deeply perceptive Indian psychologist was a blessing. Sir’s online video sessions bridged time zones seamlessly and dissolved my expatriate loneliness.',
    verified: true,
    recoveryTimeline: 'भावनिक संतुलन व मनःशांती'
  },
  {
    id: 'rev-8',
    author: 'Priyanka Shinde',
    authorMr: 'प्रियंका शिंदे',
    city: 'Nagpur',
    state: 'Maharashtra',
    rating: 5,
    date: '२ महिन्यांपूर्वी',
    serviceTagMr: 'राग नियंत्रण व स्व-सन्मान (Anger & Self-Esteem)',
    serviceTagEn: 'Anger Management & Self-Empowerment',
    category: 'anxiety',
    quoteMr: 'मला पटकन राग यायचा आणि नंतर स्वतःचाच पश्चाताप व्हायचा. विनायक सरांनी मला इमोशनल ट्रिगर्स कसे ओळखायचे आणि रागाच्या वेळी स्वतःला शांत ठेवण्याचे श्वासोच्छ्वास तंत्र शिकवले. आज माझे कुटुंबीय माझ्या स्वभावातील बदलाने आश्चर्यचकित आणि समाधानी आहेत.',
    quoteEn: 'Sir’s anger management exercises transformed my impulsive reactions into calm clarity. My relationships with my colleagues and family have flourished ever since.',
    verified: true,
    recoveryTimeline: 'संयमी व सकारात्मक व्यक्तिमत्त्व'
  }
];

export const MENTAL_HEALTH_BLOGS: MentalHealthBlog[] = [
  {
    id: 'blog-1',
    titleMr: 'भारतात मानसोपचार घेणे ही लाज नाही, तर धाडस आहे: सामाजिक गैरसमज आणि वास्तव',
    titleEn: 'Breaking the Stigma: Why Seeking a Psychologist in India is an Act of Courage, Not Weakness',
    slug: 'breaking-mental-health-stigma-india',
    readTime: '५ मिनिटे वाचन',
    categoryMr: 'मानसिक आरोग्य जनजागृती',
    categoryEn: 'Mental Health Awareness',
    publishedDate: 'सप्टेंबर २०२६',
    author: 'Vinayak Navnath Bhise (Clinical Psychologist)',
    excerptMr: 'शारीरिक आजार झाल्यास आपण जसे डॉक्टरांकडे जातो, तसेच मनाचा ताण वाढल्यास मानसशास्त्रज्ञांकडे जाणे हा शहाणपणाचा निर्णय आहे. भारतीय कुटुंबांमधील अंधश्रद्धा आणि संकोच कसा दूर करावा?',
    excerptEn: 'Just as we consult a physician for a fever, consulting a psychologist for emotional turmoil is a rational, empowering decision. How Indian families can overcome historical hesitation.',
    keyTakeawaysMr: [
      'मनाचा ताण हा वेडेपणा नसून मेंदूची नैसर्गिक थकवा अवस्था आहे.',
      'समुपदेशन म्हणजे फक्त सल्ला देणे नाही, तर शास्त्रीय उपचारांची पद्धत आहे.',
      'गोपनीयता ही मानसोपचाराची पहिली व मूलभूत अट असते.'
    ],
    keyTakeawaysEn: [
      'Emotional exhaustion is a physiological response, not madness.',
      'Psychological therapy provides clinical rewiring, not mere generic advice.',
      '100% confidentiality is the bedrock of ethical counseling.'
    ],
    contentMr: [
      'भारतीय समाजात अजूनही अनेक घरांमध्ये "मानसोपचार तज्ज्ञांकडे जाणे म्हणजे व्यक्ती वेडी झाली आहे" असा अत्यंत घातक गैरसमज पाहायला मिळतो. यामुळे लाखो व्यक्ती आपल्या मनातील दुःख, ताण आणि नैराश्य मनातच दाबून ठेवतात.',
      'जेव्हा व्यक्तीला ताप येतो किंवा हाड मोडते, तेव्हा ती कसलाही संकोच न करता ऑर्थोपेडिक किंवा फिजिशियनकडे जाते. मग मन जेव्हा दुखावले जाते, मेंदूतील डोपामाइन आणि सेरोटोनिनचे संतुलन बिघडते, तेव्हा मानसोपचार तज्ज्ञांचा सल्ला घेण्यात संकोच का?',
      'विनायक भिसे यांच्या समुपदेशन पद्धतीनुसार, मानसिक आरोग्याची समस्या ही व्यक्तीच्या चारित्र्याचा दोष नसते, तर ती जीवनातील तणाव आणि मेंदूच्या ताण-प्रतिसादाची लक्षणे असतात. वेळेवर घेतलेला समुपदेशनाचा आधार व्यक्तीचे आयुष्य उद्ध्वस्त होण्यापासून वाचवू शकतो.'
    ],
    contentEn: [
      'For decades across India, a deeply entrenched myth persisted that visiting a psychologist implies mental defect or madness. This tragic stigma forces millions to suffer silently in emotional isolation.',
      'When one experiences a fracture or cardiac strain, no shame is attached to consulting a specialist. Why should seeking care for neurotransmitter dysregulation, grief, or acute anxiety carry a taboo?',
      'Vinayak Bhise emphasizes that seeking therapeutic guidance is not an admission of defeat; it is the ultimate testament to personal courage and proactive emotional health.'
    ]
  },
  {
    id: 'blog-2',
    titleMr: 'NEET, JEE आणि स्पर्धा परीक्षांचा ताण: विद्यार्थ्यांचा जीव आणि पालकांची जबाबदारी',
    titleEn: 'Conquering Academic Burnout: How Indian Students & Parents Can Navigate High-Stakes Exams',
    slug: 'neet-jee-exam-stress-management-india',
    readTime: '६ मिनिटे वाचन',
    categoryMr: 'विद्यार्थी समुपदेशन',
    categoryEn: 'Student Counseling',
    publishedDate: 'सप्टेंबर २०२६',
    author: 'Vinayak Navnath Bhise (Clinical Psychologist)',
    excerptMr: 'अभ्यासाचा प्रचंड दबाव, पालकांच्या अवास्तव अपेक्षा आणि अपयशाची भीती यांमुळे विद्यार्थ्यांचे मानसिक खच्चीकरण होते. परीक्षा काळात मनावर ताबा मिळवण्याचे ५ सायंटिफिक नियम.',
    excerptEn: 'Parental projections, unrelenting study schedules, and fear of failure trigger severe student depression. Practical CBT frameworks for stress-free academic triumph.',
    keyTakeawaysMr: [
      'अभ्यासात तासांपेक्षा एकाग्रतेची गुणवत्ता (Deep Focus) महत्त्वाची असते.',
      'पालकांनी मुलांची तुलना इतरांशी करणे तात्काळ थांबवले पाहिजे.',
      'परीक्षेच्या आधी २० मिनिटांचे डीप ब्रीदिंग स्मरणशक्ती वाढवते.'
    ],
    keyTakeawaysEn: [
      'Focus quality and spaced repetition always trump exhausted marathon study.',
      'Parental comparison is the fastest trigger of adolescent imposter syndrome.',
      'Somatic vagus-nerve breathing stabilizes memory recall during exam stress.'
    ],
    contentMr: [
      'सध्या भारतात स्पर्धा परीक्षांचे वातावरण अत्यंत तणावपूर्ण झाले आहे. कोटा, पुणे, मुंबई सारख्या शहरांमध्ये लाखो मुले दिवसरात्र अभ्यास करत आहेत. परंतु अभ्यासाच्या चक्रात अनेकदा मुलांचे मानसिक आरोग्य दुर्लक्षित होते.',
      'जेव्हा विद्यार्थी सतत "मी नापास झालो तर माझं भविष्य संपेल" या विचारात राहतो, तेव्हा त्याच्या मेंदूतील अमिग्डाला (Amygdala) हायजॅक होतो. यामुळे अभ्यास करूनही ऐन परीक्षेच्या वेळी उत्तरे आठवत नाहीत.',
      'विनायक भिसे सरांच्या "Student Mindset Mastery" पद्धतीमध्ये २५ मिनिटांची पोमोडोरो सायकल, झोपेचे महत्त्व आणि अपयशाच्या भीतीचे संज्ञानात्मक पुनर्रचना (Cognitive Reframing) यावर भर दिला जातो.'
    ],
    contentEn: [
      'Across competitive hubs in India, adolescents grapple with monumental academic anxiety. The terror of disappointing parents or squandering family savings often sparks acute despair.',
      'Chronic terror floods the prefrontal cortex with cortisol, effectively paralyzing memory retrieval. Students who study 14 hours a day often blank out during the exam due to nervous system shutdown.',
      'By implementing the 25-minute Pomodoro rhythm, dopamine detox from social feeds, and reframing exam performance, Vinayak Bhise helps students unlock authentic academic brilliance without burnout.'
    ]
  },
  {
    id: 'blog-3',
    titleMr: 'रात्रीचे अतिविचार (Overthinking) कसे थांबवाल? मेंदू शांत करण्याचे ५ शास्त्रीय मार्ग',
    titleEn: 'Stopping the Midnight Worry Spiral: 5 Proven CBT Tools to Silence Racing Thoughts',
    slug: 'how-to-stop-overthinking-cbt-tools',
    readTime: '४ मिनिटे वाचन',
    categoryMr: 'अतिविचार व झोप',
    categoryEn: 'Overthinking & Sleep',
    publishedDate: 'ऑगस्ट २०२६',
    author: 'Vinayak Navnath Bhise (Clinical Psychologist)',
    excerptMr: 'अंथरुणावर पडताच डोक्यात भूतकाळातील चुका किंवा भविष्याची भीती फेर धरू लागते का? मेंदूला वर्तमानात आणण्याचे शास्त्रशुद्ध विचार-निवारण तंत्र.',
    excerptEn: 'Does your mind erupt with worst-case scenarios the moment your head hits the pillow? Evidence-backed cognitive reframing protocols to restore sound sleep.',
    keyTakeawaysMr: [
      'विचारांशी वाद घालू नका, त्यांना फक्त "विचार" म्हणून साक्षीभावाने पाहा.',
      '५-४-३-२-१ सेन्सरी ग्राउंडिंग पद्धत रात्री २ मिनिटांत मन शांत करते.',
      'झोपण्याआधी १ तास मोबाईल स्क्रीन बंद ठेवणे आवश्यक आहे.'
    ],
    keyTakeawaysEn: [
      'Do not battle thoughts; disempower them as mere neural passing weather.',
      'The 5-4-3-2-1 sensory grounding drill drops somatic heart rates in 2 minutes.',
      'Blue light cessation 60 minutes before bedtime restores natural melatonin.'
    ],
    contentMr: [
      'अतिविचार (Overthinking) ही आजच्या डिजिटल युगातील सर्वात मोठी समस्या बनली आहे. दिवसभर कामात व्यस्त राहिल्याने मन चालू राहते, पण रात्री शांतता पसरताच मेंदू सर्व चिंता एकाच वेळी समोर आणतो.',
      'आपला मेंदू धोक्याचा अंदाज घेण्यासाठी डिझाइन केलेला आहे. जेव्हा आपण एकाच समस्येवर हजार वेळा विचार करतो, तेव्हा समस्या सुटत नाही, तर आपण अधिक हताश होतो.',
      'विनायक सरांच्या क्लिनिकल अनुभवानुसार, रात्रीच्या वेळी "Thought Download" तंत्र वापरून मनात येणारे सर्व विचार एका कागदावर लिहून काढावेत. यामुळे मेंदूला जाणीव होते की हे विचार सुरक्षित आहेत आणि तो शांत झोपू शकतो.'
    ],
    contentEn: [
      'Midnight rumination is not high intelligence; it is an unregulated autonomic nervous system spinning in anxiety loops. When stillness falls, unaddressed daily friction resurfaces magnified.',
      'The human brain is an ancient threat-detection organ. Rumination tricks you into feeling that looping worry equates to constructive action, when in reality it merely depletes vitality.',
      'Through structured "Worry Time Anchoring" and tactile bedtime grounding, clients learn to disengage from catastrophizing and enjoy restorative, unbroken sleep.'
    ]
  },
  {
    id: 'blog-4',
    titleMr: 'भारतीय कुटुंबात वैवाहिक सुसंवाद कसा टिकवाल? नातेसंबंधांतील दुरावा दूर करण्याचे मानसशास्त्र',
    titleEn: 'Healing Marriage & Communication Friction in Indian Families: A Psychological Blueprint',
    slug: 'marriage-communication-psychology-india',
    readTime: '६ मिनिटे वाचन',
    categoryMr: 'नातेसंबंध समुपदेशन',
    categoryEn: 'Relationship Counseling',
    publishedDate: 'ऑगस्ट २०२६',
    author: 'Vinayak Navnath Bhise (Clinical Psychologist)',
    excerptMr: 'नातेसंबंध हे केवळ दोन व्यक्तींचे नसून दोन कुटुंबांचे असतात. लहान गैरसमज, संवादाचा अभाव आणि अहंपणामुळे संसारात निर्माण होणारी दरी कशी मिटवाल?',
    excerptEn: 'In the Indian cultural tapestry, marriage interconnects multi-generational dynamics. How to resolve silent treatments and rebuild enduring emotional warmth.',
    keyTakeawaysMr: [
      'नात्यात "मी बरोबर की तू चूक" यापेक्षा "आपले नाते महत्त्वाचे" ही भावना असावी.',
      'शांतपणे ऐकून घेणे हे अर्धे भांडण तिथेच संपवते.',
      'तिसऱ्या व्यक्तीला वैवाहिक वादात मध्यस्थी करू न देता थेट संवाद साधावा.'
    ],
    keyTakeawaysEn: [
      'Replace the impulse to "win an argument" with preserving relational intimacy.',
      'Empathetic deep listening neutralizes 80% of defensive escalation.',
      'Protect marital privacy by establishing direct, respectful bilateral dialogue.'
    ],
    contentMr: [
      'भारतीय कुटुंबांमध्ये अनेकदा एकत्र कुटुंब किंवा सासू-सासरे, नातेवाईक यांच्यातील परस्पर ताणतणाव पती-पत्नीच्या नात्यावर परिणाम करतात. संवादाच्या अभावामुळे लहान गोष्टींचा मोठा वाद होतो.',
      'अनेक जोडप्यांमध्ये "सायलेंट ट्रीटमेंट" (अबोला धरणे) ही सर्वात धोकादायक सवय असते. यामुळे अंतराचे रूपांतर कटुतेमध्ये होते.',
      'विनायक भिसे यांच्या रिलेशनशिप समुपदेशनात जोडप्यांना "अहिंसक संवाद" (Non-violent Communication) शिकवला जातो, ज्यामुळे एकमेकांना दोष न देता स्वतःच्या भावनिक गरजा मोकळेपणाने मांडता येतात.'
    ],
    contentEn: [
      'Marital stress in India is frequently complicated by external societal pressures, in-law expectations, and financial hurdles. When partners cease speaking with tenderness, contempt takes root.',
      'The silent treatment is among the most damaging relational habits; it punishes through emotional withdrawal rather than collaborative resolution.',
      'Vinayak Bhise’s therapeutic sessions dismantle defensive posturing, enabling couples to rebuild heartfelt emotional safety, mutual loyalty, and playful joy.'
    ]
  },
  {
    id: 'blog-5',
    titleMr: 'कामाचा प्रचंड ताण, सोशल मीडिया व्यसन आणि मानसिक थकवा: डोपामाइन डिटॉक्सचे महत्त्व',
    titleEn: 'Corporate Burnout & Smartphone Addiction in Urban India: Restoring Emotional Sovereignty',
    slug: 'corporate-burnout-dopamine-detox-india',
    readTime: '५ मिनिटे वाचन',
    categoryMr: 'तणाव व जीवनशैली',
    categoryEn: 'Stress & Lifestyle',
    publishedDate: 'जुलै २०२६',
    author: 'Vinayak Navnath Bhise (Clinical Psychologist)',
    excerptMr: 'सततचे नोटिफिकेशन्स, कामाचे तास आणि तुलना करण्याची सवय यामुळे आपला मेंदू कधीच विश्रांती घेत नाही. मन पुन्हा उत्साही करण्याचे सोपे उपाय.',
    excerptEn: 'Relentless digital pings, endless hustle culture, and social media comparison leave modern professionals drained. Reclaim your biological equilibrium.',
    keyTakeawaysMr: [
      'सकाळी उठल्या उठल्या पहिले ३० मिनिटे मोबाईल न पाहणे मन शांत ठेवते.',
      'आठवड्यातून एक दिवस किमान ३ तास डिजिटल उपकरणांपासून पूर्ण लांब राहा.',
      'कामाच्या ठिकाणी निरोगी सीमा (Boundaries) आखणे हा स्व-सन्मानाचा भाग आहे.'
    ],
    keyTakeawaysEn: [
      'The first 30 minutes of your morning must be smartphone-free for baseline peace.',
      'A weekly 3-hour digital fast resets dopamine receptor sensitivity.',
      'Setting firm professional boundaries is an essential component of self-respect.'
    ],
    contentMr: [
      'आजचा तरुण वर्ग आणि नोकरदार नागरिक दिवसातील सरासरी ६ ते ८ तास मोबाईल स्क्रीनवर घालवतात. इन्स्टाग्राम, रील्स आणि मेसेजिंग ॲप्समुळे मेंदू सतत डोपामाइनच्या शोधात धावत राहतो.',
      'यामुळे एकाग्रता नष्ट होते, लहान कारणांवरून चिडचिड होते आणि जीवनात सतत रिकामेपणाची भावना निर्माण होते. कामाचा ताण आणि डिजिटल व्यसन एकत्र आल्यावर व्यक्ती मानसिकदृष्ट्या कोलमडून पडते.',
      'विनायक सरांच्या जीवनशैली समुपदेशनातून व्यक्तीला "डिजिटल फास्टिंग" आणि "सॉमॅटिक रिलॅक्सेशन" तंत्रांद्वारे मेंदूला पुन्हा एकाग्र आणि उत्साही बनवण्याचे प्रशिक्षण दिले जाते.'
    ],
    contentEn: [
      'Urban professionals spend staggering portions of their lives tethered to glass screens. Rapid-fire algorithmic feeds hijack reward circuitry, fostering chronic restlessness and attention fragmentation.',
      'When relentless career stress collides with hyper-stimulation, profound emotional anhedonia sets in—where even previously cherished passions fail to spark excitement.',
      'Implementing structured digital curfews, natural sunlight exposure, and grounded mindfulness restores neurological vitality and sustainable professional clarity.'
    ]
  }
];
