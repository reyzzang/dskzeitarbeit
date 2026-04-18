/* ============================================
   DSK ZEITARBEIT — script.js
   ============================================ */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_process: "Process",
    nav_contact: "Contact",

    hero_badge: "Georgia → Germany",
    hero_title: "Your Gateway to Working in Germany",
    hero_sub: "We handle everything — documents, placement, and support. You just show up ready.",
    hero_cta: "Start Your Journey",

    about_label: "Who We Are",
    about_title: "Bridging Georgian Talent With German Opportunity",
    about_p1: "DSK Zeitarbeit is a Kutaisi-based employment agency dedicated to helping Georgian citizens build careers in Germany. From the first consultation to the moment you start work, we manage every detail of the process so you don't have to.",
    about_p2: "Founded by Miranda and Elza — two experienced educators with deep expertise in German language and culture — DSK Zeitarbeit was built on a commitment to transparency, trust, and results. What started as a teaching practice grew into a full-service work placement agency trusted by hundreds of clients.",
    about_p3: "Miranda and Elza personally offer German language training to clients whose job roles require communication skills. Not every position demands it — but when it does, our founders ensure you arrive confident and prepared.",
    founder_role: "Co-Founder & German Instructor",

    stat_placed: "Workers Placed",
    stat_years: "Years of Experience",
    stat_partners: "Partner Employers",

    services_label: "What We Offer",
    services_title: "Our Services",
    services_sub: "Everything you need to work in Germany — under one roof.",
    s1_title: "Document Preparation",
    s1_desc: "We collect, review, and prepare all necessary paperwork for your German work permit, visa, and employment contracts — ensuring everything is correct and on time.",
    s2_title: "Job Placement",
    s2_desc: "We match you with verified German employers across hospitality, construction, manufacturing, logistics, cleaning, and care services — based on your skills and experience.",
    s3_title: "Personal Consultation",
    s3_desc: "A dedicated advisor assesses your profile, explains your options, and guides you through every stage — from the eligibility check to your departure date.",
    s4_title: "German Language Training",
    s4_desc: "For roles requiring communication, our founders Miranda and Elza offer practical, job-focused German language courses. Not every client needs it — but for those who do, it makes all the difference.",

    process_label: "Step by Step",
    process_title: "How It Works",
    process_sub: "A clear, structured path from application to employment in Germany.",
    step1_title: "Application",
    step1_desc: "Fill out a short inquiry form or contact us directly. Tell us about your background, skills, and work preferences. No commitment required at this stage.",
    step2_title: "Consultation",
    step2_desc: "We meet with you in person or online. Our advisors evaluate your profile, answer your questions, and outline the best path forward for your situation.",
    step3_title: "Document Preparation",
    step3_desc: "We collect all required documents and handle translations, certifications, and submissions. We deal with the bureaucracy so you don't have to.",
    step4_title: "Job Matching",
    step4_desc: "We connect you with the right German employer based on your skills, experience, and preferences. You review the offer and we support the negotiation.",
    step5_title: "Travel & Work",
    step5_desc: "You depart for Germany with everything in order. We remain available for any support you need once you've arrived and started your new role.",

    contact_label: "Get In Touch",
    contact_title: "Contact Us",
    contact_sub: "We're based in Kutaisi and ready to help you take the first step.",
    contact_addr_label: "Address",
    contact_address: "Georgia, Kutaisi, Kakhanashvili #2",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    contact_hours_label: "Working Hours",
    contact_hours: "Mon – Fri: 09:00 – 18:00",

    footer_tagline: "Your trusted bridge between Georgia and the German job market.",
    footer_links: "Quick Links",
    footer_contact: "Contact",
    footer_copy: "© 2024 DSK Zeitarbeit. All rights reserved.",
  },

  ka: {
    nav_home: "მთავარი",
    nav_about: "ჩვენ შესახებ",
    nav_services: "სერვისები",
    nav_process: "პროცესი",
    nav_contact: "კონტაქტი",

    hero_badge: "საქართველო → გერმანია",
    hero_title: "თქვენი გზა გერმანიაში სამუშაოდ",
    hero_sub: "ყველაფერს ჩვენ ვაგვარებთ — დოკუმენტებს, სამუშაო ადგილს და მხარდაჭერას. თქვენ უბრალოდ მზად იყავით.",
    hero_cta: "დაიწყე მოგზაურობა",

    about_label: "ჩვენ შესახებ",
    about_title: "ქართული ნიჭი გერმანულ შესაძლებლობებთან",
    about_p1: "DSK Zeitarbeit არის ქუთაისში დაფუძნებული დასაქმების სააგენტო, რომელიც ქართველ მოქალაქეებს გერმანიაში კარიერის შესაქმნელად ეხმარება. პირველი კონსულტაციიდან სამუშაოს დაწყებამდე, ყველა დეტალს ჩვენ ვმართავთ.",
    about_p2: "დაარსებული მირანდასა და ელზას მიერ — ორი გამოცდილი პედაგოგი, რომლებიც ღრმად ფლობენ გერმანულ ენასა და კულტურას — DSK Zeitarbeit გამჭვირვალობის, ნდობისა და შედეგების ვალდებულებით შეიქმნა.",
    about_p3: "მირანდა და ელზა პირადად სთავაზობენ გერმანული ენის კურსებს კლიენტებს, რომელთა სამუშაო ადგილი კომუნიკაციის უნარებს მოითხოვს. ყველა პოზიცია ამას არ საჭიროებს — მაგრამ საჭიროების შემთხვევაში, ისინი უმაღლესი დონის გერმანული ენის ცოდნის გარანტიას გაძლევენ.",
    founder_role: "თანადამფუძნებელი და გერმანული ენის მასწავლებელი",

    stat_placed: "განთავსებული მუშაკი",
    stat_years: "გამოცდილების წელი",
    stat_partners: "პარტნიორი დამსაქმებელი",

    services_label: "ჩვენი შეთავაზება",
    services_title: "სერვისები",
    services_sub: "ყველაფერი, რაც გერმანიაში სამუშაოდ გჭირდებათ — ერთ სივრცეში.",
    s1_title: "დოკუმენტების მომზადება",
    s1_desc: "ვაგროვებთ, ვამოწმებთ და ვამზადებთ ყველა საჭირო დოკუმენტს გერმანიის სამუშაო ნებართვისთვის, ვიზისა და სამუშაო კონტრაქტისთვის.",
    s2_title: "სამუშაოს მოძიება",
    s2_desc: "გაკავშირებთ გერმანელ დამოწმებულ დამსაქმებლებთან სტუმართმოყვარეობის, მშენებლობის, წარმოების, ლოჯისტიკის, დასუფთავებისა და სოციალური სერვისების სფეროში.",
    s3_title: "პირადი კონსულტაცია",
    s3_desc: "სპეციალური კონსულტანტი აფასებს თქვენს პროფილს, განმარტავს ვარიანტებს და გამოგყვებათ ყველა ეტაპზე — კვალიფიკაციის შემოწმებიდან გამგზავრებამდე.",
    s4_title: "გერმანული ენის სწავლება",
    s4_desc: "კომუნიკაციის მოთხოვნის მქონე პოზიციებისთვის, ჩვენი დამფუძნებლები, მირანდა და ელზა, გთავაზობენ პრაქტიკულ, სამუშაოზე ორიენტირებულ გერმანული ენის კურსებს.",

    process_label: "ნაბიჯ-ნაბიჯ",
    process_title: "როგორ მუშაობს",
    process_sub: "მკაფიო, სტრუქტურირებული გზა განაცხადიდან გერმანიაში დასაქმებამდე.",
    step1_title: "განაცხადი",
    step1_desc: "შეავსეთ მოკლე განაცხადის ფორმა ან დაგვიკავშირდით პირდაპირ. მოგვიყევით თქვენი გამოცდილებისა და სამუშაო უპირატესობების შესახებ.",
    step2_title: "კონსულტაცია",
    step2_desc: "ვხვდებით პირადად ან ონლაინ. ჩვენი კონსულტანტები აფასებენ პროფილს, პასუხობენ კითხვებს და ეძებენ საუკეთესო გზას.",
    step3_title: "დოკუმენტების მომზადება",
    step3_desc: "ვაგროვებთ ყველა საჭირო დოკუმენტს და ვთარგმნით, სერტიფიკაციებსა და წარდგენებს. ბიუროკრატიას ჩვენ ვუმკლავდებით.",
    step4_title: "სამუშაოს შეხამება",
    step4_desc: "გაკავშირებთ შესაბამის გერმანელ დამსაქმებელთან თქვენი უნარების, გამოცდილებისა და უპირატესობების მიხედვით.",
    step5_title: "მგზავრობა და სამუშაო",
    step5_desc: "გერმანიაში გამგზავრება ყველაფრის მოწესრიგებით. ჩვენ ხელმისაწვდომი ვართ ნებისმიერი მხარდაჭერისთვის ჩასვლის შემდეგ.",

    contact_label: "დაგვიკავშირდით",
    contact_title: "კონტაქტი",
    contact_sub: "ჩვენ ქუთაისში ვიმყოფებით და მზად ვართ პირველი ნაბიჯის გადადგმაში დაგეხმაროთ.",
    contact_addr_label: "მისამართი",
    contact_address: "საქართველო, ქუთაისი, კახანაშვილის #2",
    contact_email_label: "ელ-ფოსტა",
    contact_phone_label: "ტელეფონი",
    contact_hours_label: "სამუშაო საათები",
    contact_hours: "ორშ – პარ: 09:00 – 18:00",

    footer_tagline: "თქვენი სანდო პარტნიორი საქართველოსა და გერმანიის სამუშაო ბაზარს შორის.",
    footer_links: "სწრაფი ბმულები",
    footer_contact: "კონტაქტი",
    footer_copy: "© 2024 DSK Zeitarbeit. ყველა უფლება დაცულია.",
  },

  de: {
    nav_home: "Startseite",
    nav_about: "Über uns",
    nav_services: "Leistungen",
    nav_process: "Ablauf",
    nav_contact: "Kontakt",

    hero_badge: "Georgien → Deutschland",
    hero_title: "Ihr Weg zur Arbeit in Deutschland",
    hero_sub: "Wir kümmern uns um alles — Dokumente, Vermittlung und Unterstützung. Sie kommen einfach vorbereitet.",
    hero_cta: "Jetzt starten",

    about_label: "Über uns",
    about_title: "Georgisches Talent trifft deutsche Möglichkeiten",
    about_p1: "DSK Zeitarbeit ist eine in Kutaisi ansässige Arbeitsvermittlungsagentur, die georgischen Staatsangehörigen hilft, eine Karriere in Deutschland aufzubauen. Von der ersten Beratung bis zum Arbeitsbeginn übernehmen wir jeden Detail des Prozesses.",
    about_p2: "Gegründet von Miranda und Elza — zwei erfahrenen Pädagoginnen mit fundiertem Wissen über deutsche Sprache und Kultur — wurde DSK Zeitarbeit auf der Grundlage von Transparenz, Vertrauen und Ergebnissen aufgebaut.",
    about_p3: "Miranda und Elza bieten persönlich Deutschkurse für Kunden an, deren Stelle Kommunikationsfähigkeiten erfordert. Nicht jede Position verlangt dies — aber wenn doch, sorgen unsere Gründerinnen dafür, dass Sie selbstsicher und vorbereitet ankommen.",
    founder_role: "Mitgründerin & Deutschlehrerin",

    stat_placed: "Vermittelte Arbeitnehmer",
    stat_years: "Jahre Erfahrung",
    stat_partners: "Partnerunternehmen",

    services_label: "Unser Angebot",
    services_title: "Unsere Leistungen",
    services_sub: "Alles, was Sie für die Arbeit in Deutschland brauchen — aus einer Hand.",
    s1_title: "Dokumentenvorbereitung",
    s1_desc: "Wir sammeln, prüfen und bereiten alle notwendigen Unterlagen für Ihre Arbeitserlaubnis, Ihr Visum und Ihre Arbeitsverträge in Deutschland vor.",
    s2_title: "Arbeitsvermittlung",
    s2_desc: "Wir vermitteln Sie an geprüfte deutsche Arbeitgeber in den Bereichen Gastgewerbe, Bau, Produktion, Logistik, Reinigung und Pflege.",
    s3_title: "Persönliche Beratung",
    s3_desc: "Ein dedizierter Berater bewertet Ihr Profil, erklärt Ihre Optionen und begleitet Sie durch jeden Schritt — vom Eignungscheck bis zum Abreisedatum.",
    s4_title: "Deutschsprachkurse",
    s4_desc: "Für Stellen, die Kommunikation erfordern, bieten unsere Gründerinnen Miranda und Elza praxisorientierte Deutschkurse an. Nicht jeder Kunde braucht dies — aber wer es braucht, profitiert enorm.",

    process_label: "Schritt für Schritt",
    process_title: "So funktioniert es",
    process_sub: "Ein klarer, strukturierter Weg von der Bewerbung bis zur Beschäftigung in Deutschland.",
    step1_title: "Bewerbung",
    step1_desc: "Füllen Sie ein kurzes Anfrageformular aus oder kontaktieren Sie uns direkt. Erzählen Sie uns von Ihrem Hintergrund, Ihren Fähigkeiten und Ihren Arbeitspräferenzen.",
    step2_title: "Beratung",
    step2_desc: "Wir treffen uns persönlich oder online. Unsere Berater bewerten Ihr Profil, beantworten Ihre Fragen und skizzieren den besten Weg vorwärts.",
    step3_title: "Dokumentenvorbereitung",
    step3_desc: "Wir sammeln alle erforderlichen Dokumente und kümmern uns um Übersetzungen, Beglaubigungen und Einreichungen. Wir erledigen die Bürokratie für Sie.",
    step4_title: "Jobvermittlung",
    step4_desc: "Wir verbinden Sie mit dem richtigen deutschen Arbeitgeber basierend auf Ihren Fähigkeiten, Erfahrungen und Präferenzen.",
    step5_title: "Reise & Arbeit",
    step5_desc: "Sie reisen nach Deutschland mit allem in Ordnung. Wir stehen für jede Unterstützung zur Verfügung, die Sie nach Ihrer Ankunft benötigen.",

    contact_label: "Kontakt aufnehmen",
    contact_title: "Kontakt",
    contact_sub: "Wir sind in Kutaisi ansässig und helfen Ihnen gerne beim ersten Schritt.",
    contact_addr_label: "Adresse",
    contact_address: "Georgien, Kutaisi, Kakhanashvili #2",
    contact_email_label: "E-Mail",
    contact_phone_label: "Telefon",
    contact_hours_label: "Öffnungszeiten",
    contact_hours: "Mo – Fr: 09:00 – 18:00 Uhr",

    footer_tagline: "Ihre vertrauenswürdige Brücke zwischen Georgien und dem deutschen Arbeitsmarkt.",
    footer_links: "Schnelllinks",
    footer_contact: "Kontakt",
    footer_copy: "© 2024 DSK Zeitarbeit. Alle Rechte vorbehalten.",
  }
};

// ============================================
// LANGUAGE SWITCHER
// ============================================
let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.getAttribute('data-lang'));
  });
});

// ============================================
// STICKY NAVBAR
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ============================================
// HAMBURGER MENU
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < bottom) {
      navAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${id}`) {
          a.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ============================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 5) * 0.08}s`;
  revealObserver.observe(el);
});

// ============================================
// SMOOTH SCROLL FOR ANCHORS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ============================================
// INIT
// ============================================
applyLanguage('en');
updateActiveNav();