export type Language = 'en' | 'de';

export const translations = {
  en: {
    // Navigation
    nav: {
      services: 'Services',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      brand: 'Teo Goussen',
      brandInitials: 'TG',
      menu: 'Menu',
      close: 'Close',
    },

    // Hero
    hero: {
      title: 'WRITE YOUR STORY',
      tags: ['Brand Strategy', 'Copywriting', 'Content Creation'],
      description:
        'Teo Goussen — Premium copywriter for brands that want to tell unforgettable stories.',
      cta: 'Explore My Work',
      scroll: 'Scroll',
    },

    // Trusted By
    trusted: {
      label: 'Trusted by leading brands',
    },

    // Services
    services: {
      number: '01',
      heading: 'Words that move people',
      body: 'I craft narratives for brands ready to be remembered. From luxury product launches to editorial campaigns, every word is chosen to evoke emotion and drive action.',
      cta: 'See all services',
      cards: [
        {
          title: 'Brand Voice',
          description:
            'Develop a distinctive tone that makes your brand instantly recognizable across every touchpoint.',
          icon: 'Mic',
        },
        {
          title: 'Web Copy',
          description:
            'Turn visitors into loyal customers with persuasive, SEO-optimized website content.',
          icon: 'Globe',
        },
        {
          title: 'Content Strategy',
          description:
            'Editorial calendars, campaign narratives, and long-form content that builds authority.',
          icon: 'FileText',
        },
      ],
    },

    // Selected Work
    work: {
      heading: 'Selected Work',
      cta: 'View all projects',
      projects: [
        {
          category: 'Brand Narrative',
          title: 'Meridian Hotels',
          year: '2024',
        },
        {
          category: 'Campaign Launch',
          title: 'Aesop Skincare',
          year: '2023',
        },
        {
          category: 'Editorial Content',
          title: 'Kinfolk Magazine',
          year: '2023',
        },
      ],
    },

    // Portfolio Page
    portfolio: {
      heading: 'Selected Work',
      subtitle: 'A selection of projects that showcase the power of words.',
      back: 'Back to Home',
      projects: [
        {
          title: 'Villa Serena',
          category: 'Brand Narrative',
          year: '2024',
          description: 'Complete brand voice and website copy for a luxury Mediterranean boutique hotel. Crafted a narrative that transports guests before they arrive.',
        },
        {
          title: 'Botanica Beauty',
          category: 'Campaign Launch',
          year: '2024',
          description: 'Product launch campaign for a sustainable skincare line. From product names to campaign taglines — every word rooted in nature.',
        },
        {
          title: 'The Quiet Hour Journal',
          category: 'Editorial Content',
          year: '2023',
          description: 'Editorial direction and long-form content for a mindfulness lifestyle publication. Stories that invite readers to slow down.',
        },
        {
          title: 'Roast & Ritual',
          category: 'Brand Voice',
          year: '2023',
          description: 'Developed the full brand voice for an artisan coffee roastery. Warm, knowledgeable, and unpretentious — just like their brew.',
        },
        {
          title: 'Harrison Timepieces',
          category: 'Web Copy',
          year: '2023',
          description: 'Website copy and product descriptions for a heritage watchmaker. Precision in every sentence, elegance in every word.',
        },
        {
          title: 'Verdant Living',
          category: 'Content Strategy',
          year: '2022',
          description: 'Content strategy and editorial calendar for a sustainable architecture firm. Building a narrative around building better.',
        },
      ],
    },

    // Quote
    quote: {
      text: "I don't just write copy — I uncover the story your brand has been trying to tell. Working with me feels like finally finding the right voice after years of silence.",
      attribution: '— Teo Goussen',
    },

    // Process
    process: {
      title: 'The Process',
      steps: [
        {
          number: '01',
          title: 'Discovery',
          body: "Deep-dive into your brand, audience, and competitive landscape. I listen before I write.",
        },
        {
          number: '02',
          title: 'Strategy',
          body: 'Mapping the narrative arc. What story will resonate? Where should it land?',
        },
        {
          number: '03',
          title: 'Creation',
          body: 'The craft. Every sentence refined, every word intentional, every rhythm considered.',
        },
        {
          number: '04',
          title: 'Delivery',
          body: 'Polished copy, brand guidelines, and a voice you can carry forward with confidence.',
        },
      ],
    },

    // Testimonials
    testimonials: {
      label: 'Testimonials',
      heading: 'What clients say',
      cards: [
        {
          quote:
            'Teo transformed our brand voice completely. The new copy increased our conversion rate by 40% in the first month.',
          author: 'Sarah Chen',
          role: 'Marketing Director',
        },
        {
          quote:
            'He has this rare ability to capture exactly what your brand feels like and put it into words that genuinely move people.',
          author: 'Thomas Berg',
          role: 'Founder',
        },
        {
          quote:
            'Working with Teo was effortless. He understood our vision before we could fully articulate it ourselves.',
          author: 'Maria Lopez',
          role: 'CEO',
        },
      ],
    },

    // Contact Links
    contactLinks: {
      heading: "Let's connect",
      subtitle: 'Choose your preferred way to reach out — I\'m always happy to hear from you.',
      links: {
        whatsapp: 'WhatsApp',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        email: 'Email',
        telegram: 'Telegram',
      },
    },

    // Contact
    contact: {
      heading: "Let's write your next chapter",
      body: 'Every great brand has a story. Let\'s discover yours.',
      form: {
        name: 'Name',
        email: 'Email',
        projectType: 'Project Type',
        projectTypes: [
          'Brand Voice',
          'Web Copy',
          'Content Strategy',
          'Other',
        ],
        message: 'Message',
        submit: 'Send Message',
      },
    },

    // Footer
    footer: {
      nav: ['Services', 'Work', 'About', 'Contact'],
      copyright: '© 2025 Teo Goussen. All rights reserved.',
      legal: {
        privacy: 'Privacy Policy',
        imprint: 'Imprint',
      },
    },

    // Floating Menu
    floating: {
      contact: 'Contact',
      telegram: 'Telegram',
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      email: 'Email',
    },

    // Legal Pages
    imprint: {
      title: 'Imprint',
      heading: 'Impressum',
      sections: [
        {
          title: 'Information according to § 5 TMG',
          content: `Teo Goussen
Copywriting Services
Musterstraße 12
10115 Berlin
Germany`,
        },
        {
          title: 'Contact',
          content: `Phone: +49 (0) 30 12345678
Email: hello@lenaweber.com`,
        },
        {
          title: 'Responsible for content',
          content: `Teo Goussen
Musterstraße 12
10115 Berlin`,
        },
        {
          title: 'VAT ID',
          content: `VAT identification number according to §27a UStG:
DE123456789`,
        },
        {
          title: 'EU Dispute Resolution',
          content: `The European Commission provides a platform for online dispute resolution (ODR):
https://ec.europa.eu/consumers/odr/

We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.`,
        },
      ],
    },

    privacy: {
      title: 'Privacy Policy',
      heading: 'Datenschutzerklärung',
      lastUpdated: 'Last updated: January 2025',
      sections: [
        {
          title: '1. General Information',
          content: `The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.`,
        },
        {
          title: '2. Data Collection on This Website',
          content: `Who is responsible for data collection on this website?
Data processing on this website is carried out by the website operator. You can find their contact details in the imprint section of this website.

How do we collect your data?
On the one hand, your data is collected when you provide it to us. This may, for example, be data that you enter in a contact form.

Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g. internet browser, operating system or time of page view).`,
        },
        {
          title: '3. Contact Form',
          content: `If you send us enquiries via the contact form, your details from the enquiry form, including the contact details you provide there, will be stored by us for the purpose of processing the enquiry and in the event of follow-up questions. We do not pass on this data without your consent.

The processing of this data is based on Art. 6 (1) lit. b GDPR, provided that your request is related to the fulfilment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the requests addressed to us (Art. 6 (1) lit. f GDPR).`,
        },
        {
          title: '4. Cookies',
          content: `Our website uses so-called "cookies". Cookies are small text files and do not cause any damage to your device. They are stored on your device either temporarily for the duration of a session (session cookies) or permanently (permanent cookies).

You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser.`,
        },
        {
          title: '5. Analytics',
          content: `This website does not currently use any analytics tools. If this changes in the future, we will update this privacy policy accordingly and obtain any necessary consent in accordance with GDPR requirements.`,
        },
        {
          title: '6. Hosting',
          content: `This website is hosted by an external service provider (hoster). The personal data collected on this website is stored on the hoster's servers. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses and other data generated via a website.

The use of the hoster is for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 (1) lit. b GDPR) and in the interest of a secure, fast and efficient provision of our online offer by a professional provider (Art. 6 (1) lit. f GDPR).`,
        },
        {
          title: '7. Your Rights',
          content: `You have the following rights under the GDPR:

• Right to information (Art. 15 GDPR)
• Right to rectification (Art. 16 GDPR)
• Right to erasure (Art. 17 GDPR)
• Right to restriction of processing (Art. 18 GDPR)
• Right to data portability (Art. 20 GDPR)
• Right to object (Art. 21 GDPR)
• Right to withdraw consent (Art. 7 (3) GDPR)
• Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)

If you have any questions about data protection, please contact us using the contact details provided in the imprint.`,
        },
        {
          title: '8. Data Retention',
          content: `We only store your personal data for as long as is necessary to achieve the purposes stated here or as required by the statutory retention periods. After the respective purpose no longer applies or these periods have expired, the corresponding data is routinely blocked or deleted in accordance with the statutory provisions.`,
        },
        {
          title: '9. Security',
          content: `We use appropriate technical and organizational security measures to protect your data against accidental or intentional manipulation, partial or complete loss, destruction or unauthorized access by third parties. Our security measures are continuously improved in line with technological developments.`,
        },
      ],
    },
  },

  de: {
    // Navigation
    nav: {
      services: 'Leistungen',
      work: 'Arbeiten',
      about: 'Über',
      contact: 'Kontakt',
      brand: 'Teo Goussen',
      brandInitials: 'TG',
      menu: 'Menü',
      close: 'Schließen',
    },

    // Hero
    hero: {
      title: 'SCHREIBE DEINE GESCHICHTE',
      tags: ['Markenstrategie', 'Texten', 'Content Creation'],
      description:
        'Teo Goussen — Premium-Texter für Marken, die unvergessliche Geschichten erzählen wollen.',
      cta: 'Entdecke meine Arbeit',
      scroll: 'Scrollen',
    },

    // Trusted By
    trusted: {
      label: 'Vertraut von führenden Marken',
    },

    // Services
    services: {
      number: '01',
      heading: 'Worte, die bewegen',
      body: 'Ich gestalte Narrative für Marken, die sich im Gedächtnis bleiben wollen. Von Luxus-Produktlaunches bis zu Editorials — jedes Wort ist gewählt, um Emotionen zu wecken und zum Handeln zu bewegen.',
      cta: 'Alle Leistungen',
      cards: [
        {
          title: 'Markenstimme',
          description:
            'Entwickle einen unverwechselbaren Ton, der deine Marke auf jedem Kanal sofort erkennbar macht.',
          icon: 'Mic',
        },
        {
          title: 'Webtexte',
          description:
            'Verwandle Besucher in treue Kunden mit überzeugenden, SEO-optimierten Website-Inhalten.',
          icon: 'Globe',
        },
        {
          title: 'Content-Strategie',
          description:
            'Redaktionspläne, Kampagnen-Narrative und Long-Form-Content, der Autorität aufbaut.',
          icon: 'FileText',
        },
      ],
    },

    // Selected Work
    work: {
      heading: 'Ausgewählte Arbeiten',
      cta: 'Alle Projekte',
      projects: [
        {
          category: 'Markennarrativ',
          title: 'Meridian Hotels',
          year: '2024',
        },
        {
          category: 'Kampagnenlaunch',
          title: 'Aesop Skincare',
          year: '2023',
        },
        {
          category: 'Editorial Content',
          title: 'Kinfolk Magazine',
          year: '2023',
        },
      ],
    },

    // Portfolio Page
    portfolio: {
      heading: 'Ausgewählte Arbeiten',
      subtitle: 'Eine Auswahl von Projekten, die die Kraft von Worten zeigen.',
      back: 'Zurück zur Startseite',
      projects: [
        {
          title: 'Villa Serena',
          category: 'Markennarrativ',
          year: '2024',
          description: 'Komplette Markenstimme und Website-Texte für ein Luxus-Boutique-Hotel am Mittelmeer. Eine Erzählung, die Gäste schon vor der Anreise verzaubert.',
        },
        {
          title: 'Botanica Beauty',
          category: 'Kampagnenlaunch',
          year: '2024',
          description: 'Produktlaunch-Kampagne für eine nachhaltige Pflegelinie. Von Produktnamen bis Kampagnenslogans — jedes Wort verwurzelt in der Natur.',
        },
        {
          title: 'The Quiet Hour Journal',
          category: 'Editorial Content',
          year: '2023',
          description: 'Redaktionelle Leitung und Long-Form-Content für eine Lifestyle-Publikation zum Thema Achtsamkeit. Geschichten, die zum Verweilen einladen.',
        },
        {
          title: 'Roast & Ritual',
          category: 'Markenstimme',
          year: '2023',
          description: 'Entwicklung der Markenstimme für eine Handwerksrösterei. Warm, sachkundig und unprätentiös — genau wie ihr Kaffee.',
        },
        {
          title: 'Harrison Timepieces',
          category: 'Webtexte',
          year: '2023',
          description: 'Website-Texte und Produktbeschreibungen für einen Uhrenhersteller mit Tradition. Präzision in jedem Satz, Eleganz in jedem Wort.',
        },
        {
          title: 'Verdant Living',
          category: 'Content-Strategie',
          year: '2022',
          description: 'Content-Strategie und Redaktionsplan für ein Architekturbüro für nachhaltiges Bauen. Eine Erzählung rund um besseres Bauen.',
        },
      ],
    },

    // Quote
    quote: {
      text: 'Ich schreibe nicht einfach nur Text — ich enthülle die Geschichte, die deine Marke schon immer erzählen wollte. Die Zusammenarbeit mit mir ist wie das endliche Finden der richtigen Stimme nach Jahren des Schweigens.',
      attribution: '— Teo Goussen',
    },

    // Process
    process: {
      title: 'Der Prozess',
      steps: [
        {
          number: '01',
          title: 'Discovery',
          body: 'Tiefe Eintauchen in deine Marke, Zielgruppe und Wettbewerbslandschaft. Ich höre zu, bevor ich schreibe.',
        },
        {
          number: '02',
          title: 'Strategie',
          body: 'Die narrative Dramaturgie. Welche Geschichte wird resonieren? Wo soll sie landen?',
        },
        {
          number: '03',
          title: 'Kreation',
          body: 'Das Handwerk. Jeder Satz verfeinert, jedes Wort bewusst gewählt, jeder Rhythmus bedacht.',
        },
        {
          number: '04',
          title: 'Lieferung',
          body: 'Fein abgestimmte Texte, Markenrichtlinien und eine Stimme, die du selbstbewusst weitertragen kannst.',
        },
      ],
    },

    // Testimonials
    testimonials: {
      label: 'Referenzen',
      heading: 'Was Kunden sagen',
      cards: [
        {
          quote:
            'Teo hat unsere Markenstimme komplett transformiert. Die neuen Texte steigerten unsere Conversion-Rate im ersten Monat um 40%.',
          author: 'Sarah Chen',
          role: 'Marketing Director',
        },
        {
          quote:
            'Er hat diese seltene Fähigkeit, genau das zu erfassen, was deine Marke ausmacht, und es in Worte zu fassen, die Menschen wirklich bewegen.',
          author: 'Thomas Berg',
          role: 'Gründer',
        },
        {
          quote:
            'Die Zusammenarbeit mit Teo war mühelos. Er verstand unsere Vision, bevor wir sie selbst vollständig artikulieren konnten.',
          author: 'Maria Lopez',
          role: 'CEO',
        },
      ],
    },

    // Contact Links
    contactLinks: {
      heading: 'Lass uns verbinden',
      subtitle: 'Wähle deine bevorzugte Art der Kontaktaufnahme — ich freue mich immer, von dir zu hören.',
      links: {
        whatsapp: 'WhatsApp',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        email: 'E-Mail',
        telegram: 'Telegram',
      },
    },

    // Contact
    contact: {
      heading: 'Lass uns dein nächstes Kapitel schreiben',
      body: 'Jede große Marke hat eine Geschichte. Lass uns deine entdecken.',
      form: {
        name: 'Name',
        email: 'E-Mail',
        projectType: 'Projekttyp',
        projectTypes: [
          'Markenstimme',
          'Webtexte',
          'Content-Strategie',
          'Sonstiges',
        ],
        message: 'Nachricht',
        submit: 'Nachricht senden',
      },
    },

    // Footer
    footer: {
      nav: ['Leistungen', 'Arbeiten', 'Über', 'Kontakt'],
      copyright: '© 2025 Teo Goussen. Alle Rechte vorbehalten.',
      legal: {
        privacy: 'Datenschutz',
        imprint: 'Impressum',
      },
    },

    // Floating Menu
    floating: {
      contact: 'Kontakt',
      telegram: 'Telegram',
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      email: 'E-Mail',
    },

    // Legal Pages
    imprint: {
      title: 'Impressum',
      heading: 'Impressum',
      sections: [
        {
          title: 'Angaben gemäß § 5 TMG',
          content: `Teo Goussen
Texten & Beratung
Musterstraße 12
10115 Berlin
Deutschland`,
        },
        {
          title: 'Kontakt',
          content: `Telefon: +49 (0) 30 12345678
E-Mail: hello@lenaweber.com`,
        },
        {
          title: 'Verantwortlich für den Inhalt',
          content: `Teo Goussen
Musterstraße 12
10115 Berlin`,
        },
        {
          title: 'Umsatzsteuer-ID',
          content: `Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:
DE123456789`,
        },
        {
          title: 'EU-Streitschlichtung',
          content: `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
https://ec.europa.eu/consumers/odr/

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`,
        },
      ],
    },

    privacy: {
      title: 'Datenschutzerklärung',
      heading: 'Datenschutzerklärung',
      lastUpdated: 'Stand: Januar 2025',
      sections: [
        {
          title: '1. Allgemeine Hinweise',
          content: `Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.`,
        },
        {
          title: '2. Datenerfassung auf dieser Website',
          content: `Wer ist verantwortlich für die Datenerfassung auf dieser Website?
Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.

Wie erfassen wir Ihre Daten?
Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.

Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).`,
        },
        {
          title: '3. Kontaktformular',
          content: `Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).`,
        },
        {
          title: '4. Cookies',
          content: `Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden auf Ihrem Endgerät entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) gespeichert.

Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.`,
        },
        {
          title: '5. Analyse-Tools',
          content: `Diese Website verwendet derzeit keine Analyse-Tools. Sollte sich dies in Zukunft ändern, werden wir diese Datenschutzerklärung entsprechend aktualisieren und gegebenenfalls die erforderliche Einwilligung gemäß DSGVO einholten.`,
        },
        {
          title: '6. Hosting',
          content: `Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln, die über eine Website generiert werden.

Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).`,
        },
        {
          title: '7. Ihre Rechte',
          content: `Ihnen stehen nach der DSGVO folgende Rechte zu:

• Recht auf Auskunft (Art. 15 DSGVO)
• Recht auf Berichtigung (Art. 16 DSGVO)
• Recht auf Löschung (Art. 17 DSGVO)
• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
• Widerspruchsrecht (Art. 21 DSGVO)
• Widerrufsrecht bei Einwilligungen (Art. 7 Abs. 3 DSGVO)
• Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)

Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter den im Impressum angegebenen Kontaktdaten.`,
        },
        {
          title: '8. Datenspeicherung',
          content: `Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die gesetzlichen Aufbewahrungsfristen vorsehen. Nach Wegfall des jeweiligen Zwecks oder Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.`,
        },
        {
          title: '9. Sicherheit',
          content: `Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.`,
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations.en | typeof translations.de;
