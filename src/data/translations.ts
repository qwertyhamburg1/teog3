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
      copyright: '© 2026 Teo Goussen. All rights reserved.',
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
          title: 'Information according to § 5 DDG',
          content: `Teo Goussen
Copywriting Services
[Your Street and House Number]
[Your Postal Code and City]
[Your Country]`,
        },
        {
          title: 'Contact',
          content: `Phone: [Your Phone Number]
Email: [Your Contact Email]`,
        },
        {
          title: 'Responsible for content',
          content: `Teo Goussen
[Your Street and House Number]
[Your Postal Code and City]`,
        },
        {
          title: 'VAT ID (if applicable)',
          content: `VAT identification number according to § 27a UStG:
[Your VAT ID or delete this section if small business / Kleinunternehmer]`,
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
      lastUpdated: 'Last updated: 2026',
      sections: [
        {
          title: '1. General Information',
          content: `The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.`,
        },
        {
          title: '2. Data Collection on This Website',
          content: `Who is responsible for data collection on this website?
Data processing on this website is carried out by the website operator. You can find contact details in the imprint section of this website.

How do we collect your data?
Your data is collected when you enter it in our contact form. Technical data (e.g. browser type, operating system, time of page view) is automatically processed by our hosting infrastructure to securely deliver the website.`,
        },
        {
          title: '3. Contact Form & Telegram Notification',
          content: `If you send us inquiries via the contact form, your details from the form (name, email address, project type, and message) will be processed by us to respond to your request.

To ensure immediate receipt of notifications, contact requests are securely forwarded to the operator via the Telegram Bot API (Telegram Messenger Inc. / Telegram FZ-LLC). The processing is based on Art. 6 (1) lit. b GDPR (for pre-contractual measures) and Art. 6 (1) lit. f GDPR (our legitimate interest in effective communication). Data is not used by Telegram for advertising or profiling.`,
        },
        {
          title: '4. Cookies',
          content: `This website does not use tracking cookies or marketing cookies. No personal user profiling takes place.`,
        },
        {
          title: '5. Local Fonts (No Google Fonts Connection)',
          content: `This website uses fonts (Cormorant Garamond, Inter, Pinyon Script) that are hosted locally on our own web server. When you access this site, no connection to Google Fonts or other third-party font servers is established, ensuring your IP address is not shared with third-party providers.`,
        },
        {
          title: '6. Hosting',
          content: `This website is hosted by an external service provider (Vercel Inc.). The personal data collected on this website is processed on the servers of the hoster to ensure the fast, secure, and reliable provision of our online presence (Art. 6 (1) lit. f GDPR).`,
        },
        {
          title: '7. Your Rights',
          content: `You have the right at any time to obtain information free of charge about your stored personal data, its origin, recipient, and the purpose of data processing, as well as a right to correction, blocking, or deletion of this data (Art. 15-21 GDPR). You also have the right to lodge a complaint with the competent supervisory authority (Art. 77 GDPR).`,
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
      copyright: '© 2026 Teo Goussen. Alle Rechte vorbehalten.',
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
          title: 'Angaben gemäß § 5 DDG',
          content: `Teo Goussen
Texten & Beratung
[Deine Straße und Hausnummer]
[Deine PLZ und Ort]
[Dein Land]`,
        },
        {
          title: 'Kontakt',
          content: `Telefon: [Deine Telefonnummer]
E-Mail: [Deine echte Kontakt-E-Mail]`,
        },
        {
          title: 'Verantwortlich für den Inhalt',
          content: `Teo Goussen
[Deine Straße und Hausnummer]
[Deine PLZ und Ort]`,
        },
        {
          title: 'Umsatzsteuer-ID (falls vorhanden)',
          content: `Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
[Deine USt-IdNr. oder Absatz löschen falls Kleinunternehmer]`,
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
      lastUpdated: 'Stand: 2026',
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
Ihre Daten werden erhoben, wenn Sie diese in unser Kontaktformular eingeben. Technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs) werden durch das Hosting automatisiert erfasst, um die Website sicher bereitzustellen.`,
        },
        {
          title: '3. Kontaktformular & Telegram-Benachrichtigung',
          content: `Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular (Name, E-Mail-Adresse, Projekttyp und Nachricht) zwecks Bearbeitung der Anfrage verarbeitet.

Um eine sofortige Benachrichtigung zu gewährleisten, werden Kontaktanfragen verschlüsselt über die Telegram Bot API (Telegram Messenger Inc. / Telegram FZ-LLC) an den Betreiber weitergeleitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Bearbeitung). Eine Weitergabe oder Nutzung zu Werbezwecken findet nicht statt.`,
        },
        {
          title: '4. Cookies',
          content: `Diese Website verwendet keine Tracking-Cookies oder Werbe-Cookies. Ein Profiling von Besuchern findet nicht statt.`,
        },
        {
          title: '5. Lokale Schriftarten (Keine Google Fonts Verbindung)',
          content: `Diese Website nutzt zur einheitlichen Darstellung Schriftarten (Cormorant Garamond, Inter, Pinyon Script), die lokal auf unserem Server gehostet werden. Beim Aufruf der Seiten wird keine Verbindung zu externen Servern von Google aufgebaut und es werden keine IP-Adressen an Google übermittelt.`,
        },
        {
          title: '6. Hosting',
          content: `Diese Website wird bei einem externen Dienstleister gehostet (Vercel Inc.). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert, um eine sichere, schnelle und effiziente Bereitstellung unseres Online-Angebots zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).`,
        },
        {
          title: '7. Ihre Rechte',
          content: `Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten (Art. 15-21 DSGVO). Hierzu sowie zu weiteren Fragen können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Art. 77 DSGVO).`,
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations.en | typeof translations.de;
