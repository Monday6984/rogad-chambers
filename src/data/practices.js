import { assets } from "@/data/assets";

// Practice areas. `description` is the one-line summary on the Practice Areas landing page;
// `body` is the full write-up shown on each practice's own page at /practice-areas/<slug>;
// an optional `detail` object replaces it there with structured sections (overview, list, split, steps, statement)
// and its own hero/CTA wording; `heroTitle` sets the hero's line breaks for long practice names.
// `body` holds the full write-up for each area (not currently displayed; kept for future detail pages).
export const practices = [
  {
    title: "Corporate Advisory", number: "01", image: assets.practices.corporateAdvisory, tag: "Transactions · Governance · Growth",
    description: "Strategic legal and commercial counsel for businesses, investors and institutions.",
    // Structured content for the practice's own page (see PracticeArea.jsx). Sections are numbered in order.
    detail: {
      intro: "Strategic legal and commercial counsel for businesses at every stage of growth.",
      seoDescription: "Strategic corporate and commercial legal counsel from Rogad Chambers, advising businesses, investors, institutions and organisations across Nigeria and international markets.",
      heroImage: assets.practiceAreasHero,
      heroImageAlt: "City skyline at golden hour, reflected in the glass of an office tower",
      sections: [
        {
          type: "overview",
          eyebrow: "The Practice",
          title: ["Corporate counsel for", "businesses in motion."],
          paragraphs: [
            "Corporate Advisory is one of the core pillars of Rogad Chambers' legal practice. We provide comprehensive legal and strategic advisory services to businesses at every stage of their growth, from start-ups and emerging enterprises to established corporations, multinational companies, foreign investors, and public sector institutions.",
            "Our team advises on corporate governance, business formation, mergers and acquisitions, joint ventures, private investments, corporate restructuring, regulatory compliance, commercial contracts, and a broad spectrum of corporate and commercial transactions.",
            "Our lawyers combine legal excellence with commercial insight to help clients make informed business decisions, manage legal risks, and capitalize on emerging opportunities in an increasingly dynamic business environment. Whether advising on domestic transactions or cross-border investments, we deliver practical, innovative, and commercially driven solutions that align with our clients' strategic objectives while ensuring compliance with applicable laws and regulatory requirements."
          ]
        },
        {
          type: "list",
          eyebrow: "Our Capabilities",
          title: ["Full-service", "corporate legal", "advisory."],
          numbered: true,
          items: ["Corporate governance", "Business formation", "Mergers and acquisitions", "Joint ventures", "Private investments", "Corporate restructuring", "Regulatory compliance", "Commercial contracts", "Corporate and commercial transactions"]
        },
        {
          type: "split",
          eyebrow: "Who We Advise",
          title: ["Counsel for", "decision-makers."],
          paragraphs: ["We have experience advising business owners, boards of directors, shareholders, investors, financial institutions, private companies, government agencies, and international organisations operating across diverse sectors of the economy."],
          image: assets.backgrounds.boardroom,
          imageAlt: "Boardroom overlooking the city skyline at golden hour"
        },
        {
          type: "list",
          eyebrow: "Sector Experience",
          title: ["Across industries", "and markets."],
          items: ["Energy and natural resources", "Financial services", "Technology", "Telecommunications", "Real estate", "Manufacturing", "Healthcare", "Construction", "Infrastructure", "Agriculture", "Logistics", "Hospitality", "Retail", "Professional services"]
        },
        {
          type: "split",
          eyebrow: "Our Approach",
          title: ["A legal partner", "for long-term success."],
          paragraphs: ["At Rogad Chambers, we understand that every business decision carries legal implications. Our Corporate Advisory team works as a trusted legal partner, providing proactive counsel that supports sustainable growth, strengthens corporate governance, protects investments, and positions our clients for long-term success in both domestic and international markets."],
          image: assets.backgrounds.executiveDesk,
          imageAlt: "Fountain pen and documents on an executive desk at golden hour"
        }
      ],
      cta: { eyebrow: "Discuss this practice", title: ["Have a corporate matter", "that"], accent: "requires counsel?", label: "Discuss this practice" }
    },
    body: `Corporate Advisory is one of the core pillars of Rogad Chambers' legal practice. We provide comprehensive legal and strategic advisory services to businesses at every stage of their growth, from start-ups and emerging enterprises to established corporations, multinational companies, foreign investors, and public sector institutions. Our team advises on corporate governance, business formation, mergers and acquisitions, joint ventures, private investments, corporate restructuring, regulatory compliance, commercial contracts, and a broad spectrum of corporate and commercial transactions.

Our lawyers combine legal excellence with commercial insight to help clients make informed business decisions, manage legal risks, and capitalize on emerging opportunities in an increasingly dynamic business environment. Whether advising on domestic transactions or cross-border investments, we deliver practical, innovative, and commercially driven solutions that align with our clients' strategic objectives while ensuring compliance with applicable laws and regulatory requirements.

We have experience advising business owners, boards of directors, shareholders, investors, financial institutions, private companies, government agencies, and international organisations operating across diverse sectors of the economy. These sectors include energy and natural resources, financial services, technology, telecommunications, real estate, manufacturing, healthcare, construction, infrastructure, agriculture, logistics, hospitality, retail, and professional services.

At Rogad Chambers, we understand that every business decision carries legal implications. Our Corporate Advisory team works as a trusted legal partner, providing proactive counsel that supports sustainable growth, strengthens corporate governance, protects investments, and positions our clients for long-term success in both domestic and international markets.`
  },
  {
    title: "Litigation, Dispute Resolution & Arbitration", number: "02", image: assets.practices.litigation, tag: "Advocacy · Strategy · Resolution",
    description: "Strategic representation and dispute management across complex commercial matters.",
    detail: {
      intro: "Strategic advocacy and dispute management across complex commercial matters.",
      heroTitle: ["Litigation, Dispute", "Resolution &", "Arbitration"],
      seoDescription: "Rogad Chambers provides strategic litigation, dispute resolution and arbitration counsel for businesses, institutions and individuals across complex commercial and regulatory matters.",
      heroImageAlt: "Sunlit stone colonnade",
      heroImagePosition: "85% 35%",
      heroLabel: [
        "Strategy",
        "Experience",
        "Results"
      ],
      sections: [
        {
          type: "overview",
          eyebrow: "The Practice",
          title: [
            "Protecting rights.",
            "Resolving disputes."
          ],
          paragraphs: [
            "Rogad Chambers maintains a robust Litigation, Dispute Resolution and Arbitration Practice dedicated to protecting our clients' legal and commercial interests through strategic, effective, and results-oriented advocacy. We represent individuals, businesses, financial institutions, multinational corporations, government agencies, and private organisations in a broad range of contentious matters before courts, arbitral tribunals, regulatory bodies, and other dispute resolution forums.",
            "Our practice encompasses commercial litigation, civil and criminal litigation, arbitration, mediation, negotiation, regulatory investigations, enforcement proceedings, debt recovery, employment disputes, corporate and shareholder disputes, contract claims, property and real estate disputes, insolvency matters, intellectual property disputes, constitutional and administrative law, as well as sector-specific disputes across various industries. We also provide pre-dispute advisory services, legal risk assessments, due diligence reviews, case portfolio evaluations, and strategic counsel aimed at preventing disputes before they arise."
          ]
        },
        {
          type: "list",
          eyebrow: "Our Capabilities",
          title: [
            "Comprehensive",
            "dispute resolution",
            "services."
          ],
          numbered: true,
          columns: 4,
          items: [
            "Commercial litigation",
            "Civil and criminal litigation",
            "Arbitration",
            "Mediation",
            "Negotiation",
            "Regulatory investigations",
            "Enforcement proceedings",
            "Debt recovery",
            "Employment disputes",
            "Corporate and shareholder disputes",
            "Contract claims",
            "Property and real estate disputes",
            "Insolvency matters",
            "Intellectual property disputes",
            "Constitutional and administrative law",
            "Sector-specific disputes"
          ]
        },
        {
          type: "split",
          eyebrow: "Our Approach",
          title: [
            "Strategic thinking.",
            "Practical solutions."
          ],
          paragraphs: [
            "We understand that every dispute presents unique legal, financial, and reputational considerations. Accordingly, we adopt a tailored approach to every engagement, combining meticulous legal analysis with commercial insight to develop practical strategies that safeguard our clients' interests while pursuing timely and cost-effective resolutions.",
            "Where amicable settlement serves our clients' objectives, we actively pursue negotiated outcomes through mediation and other alternative dispute resolution mechanisms. Where litigation or arbitration becomes necessary, our lawyers provide vigorous representation with unwavering commitment and professionalism."
          ],
          image: assets.backgrounds.legalConsultation,
          imageAlt: "Counsel reviewing documents with a client in an office overlooking the city at sunset"
        },
        {
          type: "steps",
          eyebrow: "Our Dispute Strategy",
          title: [
            "A considered approach",
            "at every stage."
          ],
          steps: [
            {
              title: "Assess and advise",
              text: "Provide clear, realistic advice on the strengths, risks and options available."
            },
            {
              title: "Strategise and engage",
              text: "Develop a tailored strategy and pursue the most effective resolution path."
            },
            {
              title: "Resolve and protect",
              text: "Work towards favourable outcomes that protect client interests and support long-term commercial objectives."
            }
          ]
        },
        {
          type: "split",
          eyebrow: "Integrated Counsel",
          title: [
            "Drawing on",
            "deep legal expertise."
          ],
          paragraphs: [
            "Our dispute resolution team works closely with the firm's corporate, commercial, real estate, employment, and regulatory practice groups, enabling us to provide integrated legal solutions that address both the immediate dispute and the broader commercial objectives of our clients. This multidisciplinary approach allows us to anticipate legal risks, preserve business relationships where possible, and position our clients for sustainable success beyond the resolution of individual disputes."
          ],
          image: assets.backgrounds.strategyMeeting,
          imageAlt: "Legal team in a strategy meeting at golden hour, with the city skyline behind"
        },
        {
          type: "statement",
          unnumbered: true,
          eyebrow: "Our Commitment",
          title: [
            "Protect value.",
            "Enforce rights.",
            "Mitigate risk."
          ],
          paragraphs: [
            "At Rogad Chambers, we view dispute resolution not merely as the management of legal conflicts but as an opportunity to protect value, enforce rights, mitigate risk, and deliver strategic outcomes. Our commitment to excellence, integrity, responsiveness, and client service ensures that every matter entrusted to us receives the highest level of legal representation and dedicated attention."
          ]
        }
      ],
      cta: {
        eyebrow: "Discuss this practice",
        title: [
          "Have a dispute or",
          ""
        ],
        accent: "regulatory matter?",
        body: "Speak with our team to discuss your objectives and discover how we can support you with practical, strategic and commercially focused dispute resolution services.",
        label: "Discuss this practice"
      }
    },
    body: `Rogad Chambers maintains a robust Litigation, Dispute Resolution and Arbitration Practice dedicated to protecting our clients' legal and commercial interests through strategic, effective, and results-oriented advocacy. We represent individuals, businesses, financial institutions, multinational corporations, government agencies, and private organisations in a broad range of contentious matters before courts, arbitral tribunals, regulatory bodies, and other dispute resolution forums.

Our practice encompasses commercial litigation, civil and criminal litigation, arbitration, mediation, negotiation, regulatory investigations, enforcement proceedings, debt recovery, employment disputes, corporate and shareholder disputes, contract claims, property and real estate disputes, insolvency matters, intellectual property disputes, constitutional and administrative law, as well as sector-specific disputes across various industries. We also provide pre-dispute advisory services, legal risk assessments, due diligence reviews, case portfolio evaluations, and strategic counsel aimed at preventing disputes before they arise.

We understand that every dispute presents unique legal, financial, and reputational considerations. Accordingly, we adopt a tailored approach to every engagement, combining meticulous legal analysis with commercial insight to develop practical strategies that safeguard our clients' interests while pursuing timely and cost-effective resolutions. Where amicable settlement serves our clients' objectives, we actively pursue negotiated outcomes through mediation and other alternative dispute resolution mechanisms. Where litigation or arbitration becomes necessary, our lawyers provide vigorous representation with unwavering commitment and professionalism.

Our dispute resolution team works closely with the firm's corporate, commercial, real estate, employment, and regulatory practice groups, enabling us to provide integrated legal solutions that address both the immediate dispute and the broader commercial objectives of our clients. This multidisciplinary approach allows us to anticipate legal risks, preserve business relationships where possible, and position our clients for sustainable success beyond the resolution of individual disputes.

At Rogad Chambers, we view dispute resolution not merely as the management of legal conflicts but as an opportunity to protect value, enforce rights, mitigate risk, and deliver strategic outcomes. Our commitment to excellence, integrity, responsiveness, and client service ensures that every matter entrusted to us receives the highest level of legal representation and dedicated attention.`
  },
  {
    title: "Media & Entertainment", number: "03", image: assets.practices.mediaEntertainment, tag: "Creative Rights · Brands · Content",
    description: "Legal counsel for the businesses and people shaping the creative economy.",
    detail: {
      intro: "Legal counsel for the businesses and people shaping the creative economy.",
      seoDescription: "Rogad Chambers provides strategic legal and commercial counsel to creators, artists, producers, broadcasters, technology platforms and other participants in Nigeria's creative economy.",
      heroImageAlt: "Film strip caught in a beam of studio light",
      heroImagePosition: "50% 45%",
      heroLabel: [
        "Creative",
        "Business",
        "Legal support"
      ],
      sections: [
        {
          type: "overview",
          eyebrow: "The Practice",
          title: [
            "Protecting creativity.",
            "Enabling growth."
          ],
          paragraphs: [
            "Nigeria's media and entertainment industry has evolved into one of Africa's most dynamic creative economies, driven by innovation, digital transformation, and the global recognition of Nigerian music, film, fashion, sports, broadcasting, and creative content. As the industry continues to attract local and international investment, participants increasingly require sophisticated legal counsel to protect their creative works, structure commercial relationships, safeguard intellectual property, and navigate an evolving regulatory landscape.",
            "At Rogad Chambers, we provide comprehensive legal and commercial advisory services to creators, artists, producers, production companies, broadcasters, record labels, talent managers, sports professionals, advertising agencies, digital content creators, technology platforms, investors, and other stakeholders within the creative economy. Our lawyers understand both the legal and commercial realities of the industry and provide practical, business-focused solutions that enable our clients to maximize opportunities while effectively managing legal and regulatory risks."
          ]
        },
        {
          type: "list",
          eyebrow: "Our Capabilities",
          title: [
            "Comprehensive",
            "legal support."
          ],
          numbered: true,
          items: [
            "Contract negotiation and drafting",
            "Talent management agreements",
            "Music recording and publishing agreements",
            "Film production and distribution",
            "Broadcasting and digital media",
            "Sponsorship and endorsement arrangements",
            "Licensing",
            "Merchandising",
            "Advertising and marketing compliance",
            "Sports law",
            "Brand protection",
            "Regulatory compliance",
            "Corporate structuring",
            "Investment transactions",
            "Intellectual property strategy"
          ]
        },
        {
          type: "split",
          eyebrow: "Our Approach",
          title: [
            "Industry insight.",
            "Practical solutions."
          ],
          paragraphs: [
            "Our lawyers understand both the legal and commercial realities of the industry and provide practical, business-focused solutions that enable our clients to maximize opportunities while effectively managing legal and regulatory risks."
          ]
        },
        {
          type: "steps",
          eyebrow: "Media & Entertainment Strategy",
          title: [
            "Support at",
            "every stage."
          ],
          steps: [
            {
              title: "Protect",
              icon: "lightbulb",
              text: "Safeguard your creative works, brands and commercial interests."
            },
            {
              title: "Enable",
              icon: "chart",
              text: "Facilitate transactions, partnerships and growth opportunities."
            },
            {
              title: "Sustain",
              icon: "people",
              text: "Provide ongoing legal support for long-term success."
            }
          ]
        },
        {
          type: "statement",
          unnumbered: true,
          eyebrow: "Dispute Resolution",
          title: [
            "When creative matters",
            "become contentious."
          ],
          paragraphs: [
            "Where disputes arise, our Litigation, Dispute Resolution and Arbitration team provides strategic representation in matters involving copyright infringement, trademark disputes, licensing conflicts, breach of contract, royalty claims, defamation, digital content disputes, unfair competition, broadcasting rights, sponsorship agreements, image rights, technology-related disputes, and other commercial conflicts affecting the media and entertainment sector.",
            "We actively pursue negotiated settlements where appropriate but are fully prepared to protect our clients' interests through litigation, arbitration, or other alternative dispute resolution mechanisms whenever necessary."
          ]
        },
        {
          type: "split",
          eyebrow: "Integrated Counsel",
          title: [
            "A multidisciplinary perspective."
          ],
          paragraphs: [
            "Working closely with our Intellectual Property and Corporate Advisory teams, we assist clients in securing, commercialising, enforcing, and monetising their valuable intellectual assets while ensuring compliance with applicable Nigerian laws and international best practices."
          ],
          image: assets.backgrounds.editingStudio,
          imageAlt: "Video editor at a colour-grading suite in a warmly lit editing studio",
          imagePosition: "40% center",
          related: [
            "Intellectual Property & Technology",
            "Corporate Advisory",
            "Litigation, Dispute Resolution & Arbitration"
          ]
        },
        {
          type: "statement",
          unnumbered: true,
          tone: "cream",
          eyebrow: "Our Perspective",
          title: [
            "Creative assets are",
            "commercial assets."
          ],
          paragraphs: [
            "At Rogad Chambers, we recognise that creative assets are valuable commercial assets. Our objective is not only to resolve legal issues but also to help our clients build sustainable brands, protect innovation, unlock commercial value, and thrive in an increasingly competitive and globalised creative industry.",
            "Through responsive legal counsel, strategic thinking, and an unwavering commitment to excellence, we partner with our clients at every stage of their creative and commercial journey."
          ]
        }
      ],
      cta: {
        eyebrow: "Discuss this practice",
        title: [
          "Bring your creative",
          ""
        ],
        accent: "vision to life.",
        body: "Speak with our team to discuss your objectives and discover how we can support your creative and commercial ambitions with practical, strategic and industry-focused legal solutions.",
        label: "Discuss this practice"
      }
    },
    body: `Nigeria's media and entertainment industry has evolved into one of Africa's most dynamic creative economies, driven by innovation, digital transformation, and the global recognition of Nigerian music, film, fashion, sports, broadcasting, and creative content. As the industry continues to attract local and international investment, participants increasingly require sophisticated legal counsel to protect their creative works, structure commercial relationships, safeguard intellectual property, and navigate an evolving regulatory landscape.

At Rogad Chambers, we provide comprehensive legal and commercial advisory services to creators, artists, producers, production companies, broadcasters, record labels, talent managers, sports professionals, advertising agencies, digital content creators, technology platforms, investors, and other stakeholders within the creative economy. Our lawyers understand both the legal and commercial realities of the industry and provide practical, business-focused solutions that enable our clients to maximize opportunities while effectively managing legal and regulatory risks.

Our practice covers contract negotiation and drafting, talent management agreements, music recording and publishing agreements, film production and distribution, broadcasting and digital media, sponsorship and endorsement arrangements, licensing, merchandising, advertising and marketing compliance, sports law, brand protection, regulatory compliance, corporate structuring, investment transactions, and intellectual property strategy. Working closely with our Intellectual Property and Corporate Advisory teams, we assist clients in securing, commercialising, enforcing, and monetising their valuable intellectual assets while ensuring compliance with applicable Nigerian laws and international best practices.

Where disputes arise, our Litigation, Dispute Resolution and Arbitration team provides strategic representation in matters involving copyright infringement, trademark disputes, licensing conflicts, breach of contract, royalty claims, defamation, digital content disputes, unfair competition, broadcasting rights, sponsorship agreements, image rights, technology-related disputes, and other commercial conflicts affecting the media and entertainment sector. We actively pursue negotiated settlements where appropriate but are fully prepared to protect our clients' interests through litigation, arbitration, or other alternative dispute resolution mechanisms whenever necessary.

At Rogad Chambers, we recognise that creative assets are valuable commercial assets. Our objective is not only to resolve legal issues but also to help our clients build sustainable brands, protect innovation, unlock commercial value, and thrive in an increasingly competitive and globalised creative industry. Through responsive legal counsel, strategic thinking, and an unwavering commitment to excellence, we partner with our clients at every stage of their creative and commercial journey.`
  },
  {
    title: "Aviation & Maritime", number: "04", image: assets.practices.aviationMaritime, tag: "Transport · Trade · Regulation",
    description: "Legal counsel for highly regulated global industries in aviation, shipping, logistics and international trade.",
    detail: {
      intro: "Strategic legal counsel across aviation, maritime, transport and international trade.",
      seoDescription: "Rogad Chambers provides strategic legal counsel across aviation, shipping, maritime operations, logistics, infrastructure and international trade.",
      heroImageAlt: "Close-up of a jet engine fan blade in warm light",
      heroImagePosition: "50% 40%",
      heroLabel: [
        "Global industry",
        "Local insight"
      ],
      sections: [
        {
          type: "overview",
          eyebrow: "The Practice",
          title: [
            "Supporting movement.",
            "Enabling trade."
          ],
          paragraphs: [
            "The aviation and maritime sectors are among the most highly regulated and commercially significant industries in the global economy, requiring legal advisers who possess a thorough understanding of both complex regulatory frameworks and the commercial realities that shape these sectors. At Rogad Chambers, we provide strategic legal counsel to airlines, aircraft operators, shipping companies, logistics providers, financiers, insurers, marine service companies, investors, regulators, port operators, freight forwarders, and other participants across the aviation, maritime, transport, and international trade industries."
          ]
        },
        {
          type: "list",
          eyebrow: "Our Capabilities",
          title: [
            "Comprehensive",
            "industry support."
          ],
          groups: [
            {
              title: "Aviation",
              items: [
                "Aircraft acquisitions and disposals",
                "Aircraft leasing and financing",
                "Aviation regulatory compliance",
                "Aircraft registration and deregistration",
                "Operational agreements",
                "Airport and aviation infrastructure projects",
                "Insurance matters",
                "Employment issues",
                "Commercial contracts",
                "Liability claims and dispute resolution"
              ]
            },
            {
              title: "Maritime",
              items: [
                "Shipping and admiralty",
                "Marine insurance",
                "Offshore operations",
                "Logistics and international trade",
                "Port-related activities",
                "Charterparty agreements",
                "Bills of lading",
                "Ship acquisition and financing",
                "Vessel registration and ship mortgages",
                "Carriage of goods by sea",
                "Marine casualty and cargo claims",
                "Cabotage compliance",
                "Offshore energy projects",
                "Maritime employment matters",
                "Customs and port regulations",
                "Cross-border trade, import/export and trade finance"
              ]
            }
          ]
        },
        {
          type: "split",
          eyebrow: "Aviation",
          title: [
            "Legal counsel for",
            "aviation operations."
          ],
          paragraphs: [
            "Our Aviation Practice advises clients on aircraft acquisitions and disposals, leasing and financing transactions, aviation regulatory compliance, aircraft registration and deregistration, operational agreements, airport and aviation infrastructure projects, insurance matters, employment issues, commercial contracts, liability claims, and dispute resolution. We work closely with airlines, aviation service providers, financiers, lessors, manufacturers, and corporate operators to structure transactions, manage regulatory obligations, and protect their commercial interests throughout the lifecycle of aviation projects and operations."
          ]
        },
        {
          type: "split",
          eyebrow: "Maritime",
          title: [
            "Supporting shipping",
            "and global trade."
          ],
          reverse: true,
          paragraphs: [
            "Our Maritime Practice delivers comprehensive legal services across shipping, admiralty, marine insurance, offshore operations, logistics, international trade, and port-related activities. We advise on charterparty agreements, bills of lading, ship acquisition and financing, vessel registration, ship mortgages, carriage of goods by sea, marine casualty claims, cargo disputes, cabotage compliance, offshore energy projects, maritime employment matters, customs and port regulations, marine insurance, and international commercial transactions. Our lawyers also provide legal support in relation to cross-border trade, import and export operations, trade finance, and regulatory compliance affecting businesses operating within Nigeria and internationally."
          ]
        },
        {
          type: "split",
          eyebrow: "Our Approach",
          title: [
            "Industry knowledge.",
            "Practical solutions."
          ],
          paragraphs: [
            "Where disputes arise, our Litigation, Dispute Resolution and Arbitration team provides robust representation before courts, arbitral tribunals, and regulatory authorities in matters involving aviation liability, contractual disputes, insurance claims, maritime collisions, cargo claims, vessel arrests, debt recovery, commercial litigation, and other complex transportation and international trade disputes. We pursue practical and commercially sensible solutions through negotiation, mediation, arbitration, or litigation, always with the objective of protecting our clients' legal rights while minimising business disruption."
          ],
          image: assets.backgrounds.airportExecutive,
          imageAlt: "Executive with a tablet overlooking an airport apron at sunset",
          imagePosition: "30% center"
        },
        {
          type: "steps",
          eyebrow: "Our Industry Strategy",
          title: [
            "Support at",
            "every stage."
          ],
          steps: [
            {
              title: "Structure",
              icon: "plane",
              text: "Help clients structure transactions and navigate the legal and regulatory requirements affecting aviation and maritime operations."
            },
            {
              title: "Manage",
              icon: "ship",
              text: "Support clients in managing commercial, operational, contractual and regulatory risks."
            },
            {
              title: "Resolve",
              icon: "shield",
              text: "Provide legal support for resolving disputes while protecting clients' rights and commercial interests."
            }
          ]
        },
        {
          type: "split",
          eyebrow: "Integrated Counsel",
          title: [
            "A multidisciplinary perspective."
          ],
          paragraphs: [
            "Where disputes arise, our Litigation, Dispute Resolution and Arbitration team provides robust representation before courts, arbitral tribunals, and regulatory authorities in matters involving aviation liability, contractual disputes, insurance claims, maritime collisions, cargo claims, vessel arrests, debt recovery, commercial litigation, and other complex transportation and international trade disputes.",
            "By combining industry knowledge with practical legal solutions, we help our clients navigate complex transactions, manage operational risks, resolve disputes effectively, and achieve sustainable success in both domestic and international markets."
          ],
          image: assets.backgrounds.portCollaboration,
          imageAlt: "Two professionals reviewing a tablet at a container port at golden hour",
          imagePosition: "25% center",
          related: [
            "Corporate Advisory",
            "Litigation, Dispute Resolution & Arbitration"
          ]
        },
        {
          type: "statement",
          unnumbered: true,
          tone: "cream",
          eyebrow: "Our Perspective",
          title: [
            "Connecting legal certainty",
            "with commercial efficiency."
          ],
          paragraphs: [
            "At Rogad Chambers, we recognise that the aviation and maritime industries operate within an increasingly interconnected global marketplace where legal certainty, regulatory compliance, and commercial efficiency are essential. By combining industry knowledge with practical legal solutions, we help our clients navigate complex transactions, manage operational risks, resolve disputes effectively, and achieve sustainable success in both domestic and international markets."
          ]
        }
      ],
      cta: {
        eyebrow: "Discuss this practice",
        title: [
          "Let’s move",
          ""
        ],
        accent: "industry forward.",
        body: "Speak with our team to discuss your objectives and explore practical legal support for your aviation, maritime or international trade matters.",
        label: "Discuss this practice"
      }
    },
    body: `The aviation and maritime sectors are among the most highly regulated and commercially significant industries in the global economy, requiring legal advisers who possess a thorough understanding of both complex regulatory frameworks and the commercial realities that shape these sectors. At Rogad Chambers, we provide strategic legal counsel to airlines, aircraft operators, shipping companies, logistics providers, financiers, insurers, marine service companies, investors, regulators, port operators, freight forwarders, and other participants across the aviation, maritime, transport, and international trade industries.

Our Aviation Practice advises clients on aircraft acquisitions and disposals, leasing and financing transactions, aviation regulatory compliance, aircraft registration and deregistration, operational agreements, airport and aviation infrastructure projects, insurance matters, employment issues, commercial contracts, liability claims, and dispute resolution. We work closely with airlines, aviation service providers, financiers, lessors, manufacturers, and corporate operators to structure transactions, manage regulatory obligations, and protect their commercial interests throughout the lifecycle of aviation projects and operations.

Our Maritime Practice delivers comprehensive legal services across shipping, admiralty, marine insurance, offshore operations, logistics, international trade, and port-related activities. We advise on charterparty agreements, bills of lading, ship acquisition and financing, vessel registration, ship mortgages, carriage of goods by sea, marine casualty claims, cargo disputes, cabotage compliance, offshore energy projects, maritime employment matters, customs and port regulations, marine insurance, and international commercial transactions. Our lawyers also provide legal support in relation to cross-border trade, import and export operations, trade finance, and regulatory compliance affecting businesses operating within Nigeria and internationally.

Where disputes arise, our Litigation, Dispute Resolution and Arbitration team provides robust representation before courts, arbitral tribunals, and regulatory authorities in matters involving aviation liability, contractual disputes, insurance claims, maritime collisions, cargo claims, vessel arrests, debt recovery, commercial litigation, and other complex transportation and international trade disputes. We pursue practical and commercially sensible solutions through negotiation, mediation, arbitration, or litigation, always with the objective of protecting our clients' legal rights while minimising business disruption.

At Rogad Chambers, we recognise that the aviation and maritime industries operate within an increasingly interconnected global marketplace where legal certainty, regulatory compliance, and commercial efficiency are essential. By combining industry knowledge with practical legal solutions, we help our clients navigate complex transactions, manage operational risks, resolve disputes effectively, and achieve sustainable success in both domestic and international markets.`
  },
  {
    title: "Energy, Infrastructure & Real Estate", number: "05", image: assets.practices.energyInfrastructure, tag: "Projects · Assets · Investment",
    description: "Legal solutions for energy, infrastructure and real estate projects that drive development and sustainable growth.",
    detail: {
      intro: "Strategic legal counsel for investments, projects and assets that power development and create lasting value.",
      seoDescription: "Rogad Chambers provides strategic legal counsel across energy, infrastructure and real estate, supporting project development, investment, transactions, regulatory compliance and dispute resolution.",
      heroTitle: [
        "Energy,",
        "Infrastructure",
        "& Real Estate"
      ],
      heroImage: assets.practices.energyHero,
      heroImageAlt: "Energy facility, solar panels and an elevated expressway against a city skyline at golden hour",
      heroImagePosition: "35% center",
      heroLabel: [
        "Investment",
        "Infrastructure",
        "Opportunity"
      ],
      sections: [
        {
          type: "overview",
          eyebrow: "The Practice",
          title: [
            "Legal counsel",
            "for projects",
            "that shape growth."
          ],
          paragraphs: [
            "Energy, infrastructure and real estate remain fundamental drivers of economic development, investment, and sustainable growth. At Rogad Chambers, we provide strategic legal and commercial advice to investors, developers, financial institutions, project sponsors, contractors, government agencies, multinational corporations, private enterprises, and property owners involved in the development, financing, acquisition, operation, and management of major projects and real estate assets. Our multidisciplinary approach enables us to deliver commercially focused legal solutions that address the complex regulatory, financial, and operational issues associated with these sectors."
          ]
        },
        {
          type: "list",
          eyebrow: "Our Capabilities",
          title: [
            "Comprehensive",
            "sector support."
          ],
          numbered: true,
          items: [
            "Regulatory advisory",
            "Project development",
            "Transaction structuring",
            "Financing and investment",
            "Contract negotiation and drafting",
            "Due diligence",
            "Land acquisition and title advisory",
            "Construction and engineering",
            "Environmental and social compliance",
            "Risk management",
            "Dispute resolution",
            "Public-private partnerships",
            "Asset management",
            "Regulatory compliance",
            "Joint ventures and partnerships"
          ]
        },
        {
          type: "split",
          eyebrow: "Energy",
          title: [
            "Powering",
            "possibilities."
          ],
          paragraphs: [
            "Our Energy Practice advises clients across the oil and gas, power, renewable energy, mining, utilities, and emerging energy industries. We assist with project development, acquisitions and divestments, joint ventures, asset financing, engineering, procurement and construction (EPC) arrangements, production and service agreements, regulatory approvals, environmental compliance, local content requirements, licensing, and corporate structuring. Our lawyers work closely with clients to navigate Nigeria's evolving legal and regulatory landscape while supporting investment, operational efficiency, and long-term commercial success."
          ],
          image: assets.practices.energyRefinery,
          imageAlt: "Refinery towers, pipelines and storage tanks at sunset",
          imagePosition: "40% center"
        },
        {
          type: "split",
          eyebrow: "Infrastructure",
          title: [
            "Building for a",
            "connected future."
          ],
          reverse: true,
          paragraphs: [
            "Our Infrastructure Practice supports the delivery of public and private infrastructure projects across transportation, roads, ports, aviation, rail, telecommunications, healthcare, education, water resources, industrial development, and public-private partnerships. We advise on project finance, procurement, concession arrangements, construction contracts, regulatory compliance, risk allocation, and project implementation, helping clients manage legal complexities from project conception through completion and operation."
          ],
          image: assets.practices.infrastructureBridge,
          imageAlt: "Elevated expressway and bridge leading towards a city skyline at sunset",
          imagePosition: "50% center"
        },
        {
          type: "split",
          eyebrow: "Real Estate",
          title: [
            "Creating",
            "enduring value."
          ],
          paragraphs: [
            "Our Real Estate Practice provides comprehensive legal services covering land acquisition, title investigation, due diligence, property development, financing, leasing, mortgage transactions, construction, commercial and residential developments, hospitality projects, industrial facilities, and large-scale investment portfolios. We assist clients with the preparation and negotiation of conveyancing documents, perfection of title, regulatory approvals, land use compliance, property financing, asset management, and all aspects of real estate transactions. Our lawyers also advise on the real estate aspects of corporate acquisitions, infrastructure developments, and project finance transactions where property assets form a critical component of the investment."
          ],
          image: assets.practices.realEstateCommercial,
          imageAlt: "Glass-and-steel commercial building with landscaped grounds at golden hour",
          imagePosition: "40% center"
        },
        {
          type: "split",
          eyebrow: "Disputes & Risk Management",
          title: [
            "Protecting projects",
            "and investments."
          ],
          reverse: true,
          paragraphs: [
            "Where disputes arise, our Litigation, Dispute Resolution and Arbitration team provides strategic representation in matters involving land ownership, construction claims, project delays, contractual disputes, regulatory enforcement, compensation claims, environmental issues, energy-related disputes, and commercial real estate litigation. We pursue practical, commercially driven solutions through negotiation, mediation, arbitration, or litigation, always with the objective of protecting our clients' investments while preserving long-term commercial value."
          ],
          image: assets.practices.projectRisk,
          imageAlt: "Two project professionals in hard hats reviewing plans at a construction site at sunset",
          imagePosition: "35% center",
          related: [
            "Litigation, Dispute Resolution & Arbitration"
          ]
        },
        {
          type: "split",
          eyebrow: "Integrated Counsel",
          title: [
            "A multidisciplinary perspective."
          ],
          paragraphs: [
            "Our multidisciplinary approach brings together the legal considerations involved in energy, infrastructure, real estate, corporate transactions and dispute resolution."
          ],
          image: assets.practices.energyIntegratedCounsel,
          imageAlt: "Law books, scales and a laptop on a desk overlooking the city skyline at sunset",
          imagePosition: "left center",
          related: [
            "Corporate Advisory",
            "Litigation, Dispute Resolution & Arbitration"
          ]
        },
        {
          type: "statement",
          unnumbered: true,
          tone: "cream",
          eyebrow: "Our Perspective",
          title: [
            "Projects built on",
            "sound legal foundations."
          ],
          paragraphs: [
            "At Rogad Chambers, we understand that successful projects require more than technical legal advice—they demand commercially informed counsel, proactive risk management, and an appreciation of the commercial objectives driving every investment. By combining legal excellence with industry insight, we help our clients structure transactions efficiently, secure regulatory compliance, manage risk, resolve disputes effectively, and deliver projects that create lasting value for businesses, communities, and the broader economy."
          ]
        }
      ],
      cta: {
        eyebrow: "Discuss this practice",
        title: [
          "Build with",
          ""
        ],
        accent: "confidence.",
        body: "Speak with our team to discuss your objectives and explore practical legal support for your energy, infrastructure or real estate investments.",
        label: "Discuss this practice"
      }
    },
    body: `Energy, infrastructure and real estate remain fundamental drivers of economic development, investment, and sustainable growth. At Rogad Chambers, we provide strategic legal and commercial advice to investors, developers, financial institutions, project sponsors, contractors, government agencies, multinational corporations, private enterprises, and property owners involved in the development, financing, acquisition, operation, and management of major projects and real estate assets. Our multidisciplinary approach enables us to deliver commercially focused legal solutions that address the complex regulatory, financial, and operational issues associated with these sectors.

Our Energy Practice advises clients across the oil and gas, power, renewable energy, mining, utilities, and emerging energy industries. We assist with project development, acquisitions and divestments, joint ventures, asset financing, engineering, procurement and construction (EPC) arrangements, production and service agreements, regulatory approvals, environmental compliance, local content requirements, licensing, and corporate structuring. Our lawyers work closely with clients to navigate Nigeria's evolving legal and regulatory landscape while supporting investment, operational efficiency, and long-term commercial success.

Our Infrastructure Practice supports the delivery of public and private infrastructure projects across transportation, roads, ports, aviation, rail, telecommunications, healthcare, education, water resources, industrial development, and public-private partnerships. We advise on project finance, procurement, concession arrangements, construction contracts, regulatory compliance, risk allocation, and project implementation, helping clients manage legal complexities from project conception through completion and operation.

Our Real Estate Practice provides comprehensive legal services covering land acquisition, title investigation, due diligence, property development, financing, leasing, mortgage transactions, construction, commercial and residential developments, hospitality projects, industrial facilities, and large-scale investment portfolios. We assist clients with the preparation and negotiation of conveyancing documents, perfection of title, regulatory approvals, land use compliance, property financing, asset management, and all aspects of real estate transactions. Our lawyers also advise on the real estate aspects of corporate acquisitions, infrastructure developments, and project finance transactions where property assets form a critical component of the investment.

Where disputes arise, our Litigation, Dispute Resolution and Arbitration team provides strategic representation in matters involving land ownership, construction claims, project delays, contractual disputes, regulatory enforcement, compensation claims, environmental issues, energy-related disputes, and commercial real estate litigation. We pursue practical, commercially driven solutions through negotiation, mediation, arbitration, or litigation, always with the objective of protecting our clients' investments while preserving long-term commercial value.

At Rogad Chambers, we understand that successful projects require more than technical legal advice—they demand commercially informed counsel, proactive risk management, and an appreciation of the commercial objectives driving every investment. By combining legal excellence with industry insight, we help our clients structure transactions efficiently, secure regulatory compliance, manage risk, resolve disputes effectively, and deliver projects that create lasting value for businesses, communities, and the broader economy.`
  },
  {
    title: "Intellectual Property & Technology", number: "06", image: assets.practices.ipTechnology, tag: "Innovation · Technology · Protection",
    description: "Protecting ideas, innovation and technology for a competitive and connected global economy.",
    detail: {
      intro: "Strategic legal counsel for intellectual property, technology and innovation, helping businesses create, protect and commercialise their ideas in a rapidly evolving digital economy.",
      heroLead: "Protecting innovation. Enabling growth.",
      heroCta: "Discuss this practice",
      seoDescription: "Rogad Chambers provides strategic legal counsel on intellectual property, technology transactions, data protection, software agreements, regulatory compliance and IP disputes.",
      heroTitle: [
        "Intellectual",
        "Property &",
        "Technology"
      ],
      heroImage: assets.practices.ipHero,
      heroImageAlt: "Laptop, brass scales, intellectual property reference books and a patent application on a desk",
      heroImagePosition: "60% center",
      heroLabel: [],
      sections: [
        {
          type: "overview",
          eyebrow: "The Practice",
          title: [
            "Legal counsel",
            "for innovation",
            "and a digital future."
          ],
          paragraphs: [
            "Innovation, technology, and intellectual property have become some of the most valuable assets of modern businesses. As organisations continue to expand across digital platforms and global markets, protecting intellectual assets, commercialising innovation, and ensuring regulatory compliance have become critical to long-term business success. At Rogad Chambers, we provide strategic legal advice that enables businesses, innovators, entrepreneurs, creators, technology companies, investors, and multinational organisations to protect, develop, commercialise, and enforce their intellectual property and technology-related rights."
          ]
        },
        {
          type: "list",
          eyebrow: "Our Capabilities",
          title: [
            "Comprehensive IP and",
            "technology support."
          ],
          continuous: true,
          groups: [
            {
              title: "Intellectual property",
              items: [
                "Intellectual property registration and protection",
                "Trademark and brand protection",
                "Copyright advisory",
                "Patent-related advisory",
                "Industrial designs",
                "Trade secrets and confidential information",
                "Domain names",
                "Licensing and franchising",
                "Technology transfer agreements",
                "IP portfolio management"
              ]
            },
            {
              title: "Technology and commercial advisory",
              items: [
                "Technology transactions",
                "Software development and licensing agreements",
                "Data protection and privacy",
                "Cybersecurity and risk advisory",
                "Cloud computing arrangements",
                "Digital payments and electronic commerce",
                "Outsourcing and technology procurement",
                "Regulatory compliance",
                "Consumer protection and advertising compliance",
                "IP and technology dispute support"
              ]
            }
          ]
        },
        {
          type: "split",
          eyebrow: "Intellectual Property",
          title: [
            "Protecting ideas.",
            "Unlocking value."
          ],
          reverse: true,
          paragraphs: [
            "Our Intellectual Property Practice advises clients on the creation, acquisition, registration, licensing, management, enforcement, and commercial exploitation of intellectual property assets. We assist with trademarks, copyrights, patents, industrial designs, trade secrets, domain names, franchising, licensing arrangements, technology transfer agreements, brand protection strategies, and intellectual property portfolio management. We also advise on the legal aspects of product development, research collaborations, software licensing, digital content, advertising, sponsorship, publishing, and commercial agreements involving intellectual property rights."
          ],
          image: assets.backgrounds.executiveDesk,
          imageAlt: "Fountain pen and documents on an executive desk at golden hour",
          imagePosition: "45% center"
        },
        {
          type: "split",
          eyebrow: "Technology",
          title: [
            "Legal frameworks for",
            "a digital economy."
          ],
          paragraphs: [
            "Our Technology Practice provides comprehensive legal support to businesses operating within the digital economy. We advise technology companies, fintech businesses, software developers, telecommunications providers, e-commerce platforms, artificial intelligence enterprises, digital service providers, and emerging technology ventures on corporate structuring, technology transactions, software development agreements, cloud computing arrangements, data protection and privacy, cybersecurity, digital payments, electronic commerce, outsourcing, regulatory compliance, and technology procurement. Our lawyers work closely with clients to ensure that innovation is supported by sound legal and commercial frameworks capable of sustaining growth in rapidly evolving markets."
          ],
          image: assets.practices.ipTechnologyDeveloper,
          imageAlt: "Software developer working at multiple monitors showing code and a digital globe",
          imagePosition: "30% center"
        },
        {
          type: "split",
          eyebrow: "Regulatory & Commercial Advisory",
          title: [
            "Supporting",
            "responsible innovation."
          ],
          reverse: true,
          paragraphs: [
            "We also assist clients in navigating Nigeria's intellectual property and technology regulatory environment by providing advice on registration requirements, technology transfer arrangements, product regulatory approvals, advertising and marketing compliance, consumer protection obligations, and engagements with relevant governmental and regulatory authorities. Our multidisciplinary approach allows us to integrate intellectual property strategy with corporate, commercial, regulatory, employment, media, entertainment, and competition law considerations, providing clients with comprehensive legal solutions under one roof."
          ],
          image: assets.practices.ipRegulatoryAdvisory,
          imageAlt: "Two professionals in a focused discussion at a meeting table",
          imagePosition: "40% center"
        },
        {
          type: "split",
          eyebrow: "Disputes & Integrated Counsel",
          title: [
            "Protecting valuable",
            "business assets."
          ],
          paragraphs: [
            "Where disputes arise, our Litigation, Dispute Resolution and Arbitration team represents clients in matters involving trademark infringement, copyright protection, patent disputes, breach of licensing agreements, software and technology disputes, domain name conflicts, unfair competition, confidential information, trade secrets, counterfeiting, passing off, and other intellectual property and technology-related claims. We pursue commercially sensible resolutions through negotiation, mediation, arbitration, or litigation while remaining firmly committed to protecting our clients' valuable intellectual assets and business interests."
          ],
          image: assets.practices.ipDisputes,
          imageAlt: "Gavel, law books and a laptop on an executive desk in warm light",
          imagePosition: "60% center",
          related: [
            "Litigation, Dispute Resolution & Arbitration"
          ]
        },
        {
          type: "split",
          eyebrow: "Integrated Counsel",
          title: [
            "A multidisciplinary perspective."
          ],
          reverse: true,
          paragraphs: [
            "We work across intellectual property, technology, corporate advisory and dispute resolution to address the legal and commercial considerations affecting clients throughout the innovation lifecycle."
          ],
          image: assets.backgrounds.strategyMeeting,
          imageAlt: "Legal team in a strategy meeting at golden hour, with the city skyline behind",
          imagePosition: "40% center",
          related: [
            "Corporate Advisory",
            "Litigation, Dispute Resolution & Arbitration",
            "Media & Entertainment"
          ]
        },
        {
          type: "statement",
          unnumbered: true,
          tone: "cream",
          eyebrow: "Our Perspective",
          title: [
            "Protect what you create.",
            "Unlock what you build."
          ],
          paragraphs: [
            "At Rogad Chambers, we recognise that intellectual property and technology are no longer merely legal considerations—they are fundamental business assets that drive innovation, competitiveness, and economic growth. Our objective is to provide commercially focused, forward-looking legal solutions that empower our clients to innovate with confidence, protect what they create, unlock the value of their intellectual assets, and succeed in an increasingly connected global economy."
          ]
        }
      ],
      cta: {
        eyebrow: "Discuss this practice",
        title: [
          "Protect what you create.",
          ""
        ],
        accent: "Unlock what you build.",
        body: "Strategic legal counsel for intellectual property, technology and innovation.",
        label: "Discuss this practice"
      }
    },
    body: `Innovation, technology, and intellectual property have become some of the most valuable assets of modern businesses. As organisations continue to expand across digital platforms and global markets, protecting intellectual assets, commercialising innovation, and ensuring regulatory compliance have become critical to long-term business success. At Rogad Chambers, we provide strategic legal advice that enables businesses, innovators, entrepreneurs, creators, technology companies, investors, and multinational organisations to protect, develop, commercialise, and enforce their intellectual property and technology-related rights.

Our Intellectual Property Practice advises clients on the creation, acquisition, registration, licensing, management, enforcement, and commercial exploitation of intellectual property assets. We assist with trademarks, copyrights, patents, industrial designs, trade secrets, domain names, franchising, licensing arrangements, technology transfer agreements, brand protection strategies, and intellectual property portfolio management. We also advise on the legal aspects of product development, research collaborations, software licensing, digital content, advertising, sponsorship, publishing, and commercial agreements involving intellectual property rights.

Our Technology Practice provides comprehensive legal support to businesses operating within the digital economy. We advise technology companies, fintech businesses, software developers, telecommunications providers, e-commerce platforms, artificial intelligence enterprises, digital service providers, and emerging technology ventures on corporate structuring, technology transactions, software development agreements, cloud computing arrangements, data protection and privacy, cybersecurity, digital payments, electronic commerce, outsourcing, regulatory compliance, and technology procurement. Our lawyers work closely with clients to ensure that innovation is supported by sound legal and commercial frameworks capable of sustaining growth in rapidly evolving markets.

We also assist clients in navigating Nigeria's intellectual property and technology regulatory environment by providing advice on registration requirements, technology transfer arrangements, product regulatory approvals, advertising and marketing compliance, consumer protection obligations, and engagements with relevant governmental and regulatory authorities. Our multidisciplinary approach allows us to integrate intellectual property strategy with corporate, commercial, regulatory, employment, media, entertainment, and competition law considerations, providing clients with comprehensive legal solutions under one roof.

Where disputes arise, our Litigation, Dispute Resolution and Arbitration team represents clients in matters involving trademark infringement, copyright protection, patent disputes, breach of licensing agreements, software and technology disputes, domain name conflicts, unfair competition, confidential information, trade secrets, counterfeiting, passing off, and other intellectual property and technology-related claims. We pursue commercially sensible resolutions through negotiation, mediation, arbitration, or litigation while remaining firmly committed to protecting our clients' valuable intellectual assets and business interests.

At Rogad Chambers, we recognise that intellectual property and technology are no longer merely legal considerations—they are fundamental business assets that drive innovation, competitiveness, and economic growth. Our objective is to provide commercially focused, forward-looking legal solutions that empower our clients to innovate with confidence, protect what they create, unlock the value of their intellectual assets, and succeed in an increasingly connected global economy.`
  }
];

export const practiceSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const practicePath = (practice) => `/practice-areas/${practiceSlug(practice.title)}`;
export const findPractice = (slug) => practices.find((p) => practiceSlug(p.title) === slug);

export const practiceSummaries = {
  "01": "Comprehensive legal and strategic advisory for businesses at every stage of growth — corporate governance, business formation, mergers and acquisitions, joint ventures, private investments, corporate restructuring, regulatory compliance and commercial contracts. Our lawyers combine legal excellence with commercial insight to support sustainable growth and sound governance in both domestic and international markets.",
  "02": "Strategic, results-oriented advocacy before courts, arbitral tribunals and regulatory bodies — commercial and civil litigation, arbitration, mediation, regulatory investigations, enforcement proceedings, debt recovery, employment disputes, and corporate and shareholder disputes. We pursue negotiated outcomes where they serve our clients' objectives, and provide vigorous representation where proceedings become necessary.",
  "03": "Legal and commercial counsel for Nigeria's creative economy — talent management agreements, music recording and publishing, film production and distribution, broadcasting and digital media, sponsorship and endorsement, licensing and brand protection. Working with our Intellectual Property team, we help creators, producers, labels and investors secure, commercialise and enforce their intellectual assets.",
  "04": "Strategic counsel across two highly regulated industries — aircraft acquisitions, leasing and financing, registration and deregistration, aviation regulatory compliance, charterparties, admiralty, marine insurance, port operations and international trade. We advise airlines, lessors, financiers, insurers, shipping companies and logistics providers throughout the lifecycle of their projects and operations.",
  "05": "Counsel for the projects, assets and investments powering growth — oil and gas, project finance and EPC contracting, power and infrastructure transactions, title perfection, commercial leasing and development finance. We advise investors, developers, lenders and public sector entities across the full lifecycle of energy, infrastructure and real estate matters.",
  "06": "Protection and commercialisation of innovation — trademark portfolios and oppositions, copyright, technology transactions, data protection, fintech regulation and cybersecurity. We advise creators, technology companies, financial institutions and investors on securing, enforcing and monetising intellectual assets in a digital economy."
};
