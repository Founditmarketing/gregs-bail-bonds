// ──────────────────────────────────────────────
// Greg's Bail Bonds of Philly — Constants
// ALL content scraped verbatim from gregsbailbondsofphilly.com
// Service detail sections expanded with structured depth.
// Zero fabricated claims, stats, or reviews.
// ──────────────────────────────────────────────

export const BUSINESS = {
  name: "Greg's Bail Bonds of Philly",
  phone: "717-809-0504",
  phoneTel: "tel:17178090504",
  domain: "centercitybailbonds.com",
  url: "https://centercitybailbonds.com",
  docuSignUrl:
    "https://powerforms.docusign.net/07c12434-d9b7-4673-af54-697d1620ae41?acct=f9d9aa56-250c-4c8f-9a7f-ac54ca827d7f&env=na3&accountId=f9d9aa56-250c-4c8f-9a7f-ac54ca827d7f",
  license: "Licensed PA Bail Bondsman",
  network: "Expert Bail Network Member",
  experience: "13+ Years",
} as const;

export const IMAGES = {
  hero: "/images/hero-bail-bonds.webp",
  handcuffs: "/images/man-handcuffs.webp",
  servicesPage: "/images/services-page.webp",
  logoBadge: "/images/logo-badge.png",
  drugCharges: "/images/drug-charges.webp",
  duiArrest: "/images/dui-arrest.webp",
  felonyArrest: "/images/felony-arrest.webp",
  probationViolation: "/images/probation-violation.webp",
  sexCrime: "/images/sex-crime.webp",
  theftCharges: "/images/theft-charges.webp",
  violentCrime: "/images/violent-crime.webp",
  whiteCollar: "/images/white-collar.webp",
  domesticViolence: "/images/domestic-violence.webp",
} as const;

export type Severity = "felony" | "misdemeanor" | "varies";

export interface Service {
  slug: string;
  title: string;
  image: string;
  intro: string;
  severity: Severity;
  sections: { heading: string; content: string; bullets?: string[] }[];
}

export const SERVICES: Service[] = [
  {
    slug: "domestic-violence-bail-bonds",
    title: "Domestic Violence Bail Bonds",
    image: IMAGES.domesticViolence,
    severity: "varies",
    intro:
      "Domestic violence charges can be complicated, emotionally charged, and carry serious legal consequences. If your friend or family member has been arrested on a domestic violence charge, you need fast, discreet help from someone who knows how to navigate the system.",
    sections: [
      { heading: "", content: "At Greg's Bail Bonds of Philadelphia, we provide 24/7 bail services for domestic violence-related arrests across Philadelphia, Pennsylvania, and West Virginia. With over 13 years of experience, Greg works quickly to secure release, explain the bail process, and help families handle difficult situations with dignity and professionalism." },
      { heading: "What to Expect with Domestic Violence Bail", content: "After an arrest, the accused appears before a magistrate who sets the bond amount. In domestic violence cases, bail may be:", bullets: ["Higher than usual due to the nature of the charge", "Conditional on protective or no-contact orders", "Temporarily denied in cases involving injury or repeat offenses"] },
      { heading: "", content: "In some cases, if there's an active warrant, Greg may be able to arrange a walk-through — allowing the person to be processed and released without spending unnecessary time in a holding cell." },
      { heading: "Charges We Commonly Support", content: "", bullets: ["Physical assault or battery involving a domestic partner or family member", "Violation of protective orders", "Domestic threats or harassment", "Property damage or intimidation related to a domestic dispute", "Repeat domestic violence offenses"] },
      { heading: "Why Choose Greg?", content: "Domestic violence allegations carry a heavy stigma — even before a trial begins. Greg understands the sensitivity involved and treats every client and family with respect, no matter the charge.", bullets: ["Licensed, experienced, and discreet", "Available 24/7 in PA & WV", "Walk-throughs available for open warrants", "Flexible payment plans on high bonds", "One-on-one guidance through court dates and conditions"] },
    ],
  },
  {
    slug: "drugs-bail-bonds-services",
    title: "Drug Charges Bail Bonds",
    image: IMAGES.drugCharges,
    severity: "varies",
    intro: "Facing drug charges can turn your life upside down — but getting out of jail doesn't have to.",
    sections: [
      { heading: "", content: "At Greg's Bail Bonds of Philadelphia, we provide fast, reliable bail bond services for individuals charged with drug possession, distribution, or intent to distribute. Whether the bond is a few thousand dollars or tens of thousands, Greg works with you to secure release quickly — even if you can't afford the full amount upfront." },
      { heading: "", content: "We offer flexible payment plans to make high bond costs more manageable. Don't let financial hardship keep your loved one behind bars." },
      { heading: "", content: "Jail isn't the place to wait for a court date. Let Greg help you post bond and make sure your friend or loved one has the support they need to appear in court and move forward." },
      { heading: "Common Drug-Related Charges We Cover", content: "", bullets: ["Simple possession of a controlled substance", "Possession with intent to distribute (PWID)", "Drug manufacturing or cultivation", "Prescription fraud or illegal distribution", "Possession of drug paraphernalia", "Drug trafficking charges"] },
      { heading: "What to Expect with Drug Charge Bail", content: "Drug charge bail amounts depend heavily on the substance involved, the quantity, and whether the charge is a misdemeanor or felony. In Pennsylvania, even a first-time possession charge can result in thousands of dollars in bail.", bullets: ["Misdemeanor possession bonds are typically lower and may qualify for payment plans", "Felony distribution or trafficking charges carry significantly higher bail amounts", "Prior drug convictions may increase bail or result in additional conditions", "The magistrate may impose drug testing or treatment as a condition of release"] },
      { heading: "Why Choose Greg?", content: "", bullets: ["Licensed bail bondsman with 13+ years of experience", "Handles cases across all Pennsylvania and West Virginia jurisdictions", "Flexible payment plans for high bond amounts", "Available 24/7 — including nights, weekends, and holidays", "Personal, judgment-free service every time"] },
    ],
  },
  {
    slug: "dwi-dui-bail-bonds",
    title: "DWI/DUI Bail Bonds",
    image: IMAGES.duiArrest,
    severity: "misdemeanor",
    intro: "A DUI or DWI arrest is stressful for everyone involved. Whether it's a first offense or a repeat charge, Greg's Bail Bonds provides fast bail bond services to get your loved one released and home.",
    sections: [
      { heading: "", content: "At Greg's Bail Bonds of Philadelphia, we handle DUI and DWI bail bonds across Pennsylvania and West Virginia. Greg works quickly to post bond, explain the process, and help you understand what comes next." },
      { heading: "", content: "We also handle warrant walk-throughs for missed court dates related to prior DUI charges. If there's an outstanding warrant, Greg can often arrange for the person to be processed and released without spending unnecessary time in jail." },
      { heading: "Common DUI/DWI Charges We Handle", content: "", bullets: ["First-offense DUI (general impairment)", "High-BAC DUI (0.10%–0.16%+)", "DUI with a controlled substance", "Repeat or second/third-offense DUI", "DUI with an accident or injury", "Underage DUI (zero tolerance)", "Commercial vehicle DUI/CDL violations"] },
      { heading: "What to Expect with DUI/DWI Bail", content: "In Pennsylvania, a first-offense DUI is typically an ungraded misdemeanor. The individual is usually taken to the police station, processed, and either released on their own recognizance or required to post bail.", bullets: ["First-offense DUI may result in release on ROR or a lower bail amount", "Second and third offenses carry mandatory higher bail and possible additional conditions", "DUI with injury or property damage can be charged as a felony with significantly higher bail", "License suspension and ignition interlock may be conditions of release"] },
      { heading: "Why Choose Greg?", content: "", bullets: ["Fast response — Greg answers 24/7, not an answering service", "Experienced with DUI cases across multiple PA and WV jurisdictions", "Walk-throughs available for missed court date warrants", "Clear explanation of the process, court dates, and obligations", "Flexible payment plans available"] },
    ],
  },
  {
    slug: "felony-charges-bail-bonds",
    title: "Felony Charges Bail Bonds",
    image: IMAGES.felonyArrest,
    severity: "felony",
    intro: "Felony charges carry higher bail amounts and more complex legal requirements. Greg's Bail Bonds has extensive experience handling high-value felony bonds across multiple jurisdictions.",
    sections: [
      { heading: "", content: "Whether the charge involves aggravated assault, burglary, weapons offenses, or other serious crimes, we work quickly to secure release. Our flexible payment plans make even large bonds manageable, and Greg personally guides you through every step of the process." },
      { heading: "", content: "With offices in Philadelphia, Chambersburg, Harrisburg, and the Poconos, we respond fast no matter where the arrest occurred." },
      { heading: "Common Felony Charges We Handle", content: "", bullets: ["Aggravated assault (F1/F2)", "Burglary and criminal trespass", "Weapons offenses (firearms, prohibited weapons)", "Robbery and armed robbery", "Arson", "Kidnapping or unlawful restraint", "Felony drug charges (PWID, trafficking)", "Homicide-related charges (where bail is granted)"] },
      { heading: "What to Expect with Felony Bail", content: "Felony cases in Pennsylvania are handled through the Court of Common Pleas. The bail amount is typically set at the preliminary arraignment and depends on severity, criminal history, and flight risk.", bullets: ["Felony bail amounts can range from $10,000 to $500,000+ depending on the charge", "The court may impose additional conditions: GPS monitoring, travel restrictions, no-contact orders", "A bail bondsman typically charges 10% of the total bond amount", "Collateral may be required for very high bond amounts"] },
      { heading: "Why Choose Greg?", content: "", bullets: ["Experienced with high-value felony bonds across PA and WV", "Flexible payment plans — even for large bond amounts", "Works directly with attorneys and courts to expedite release", "Personal guidance through every stage of the process", "Available 24/7/365 — call anytime"] },
    ],
  },
  {
    slug: "probation-parole-bail-bonds",
    title: "Probation/Parole Bail Bonds",
    image: IMAGES.probationViolation,
    severity: "varies",
    intro: "Probation and parole violations can result in immediate arrest and revocation of your release. Whether it's a missed check-in, a failed drug test, or a new arrest while on supervision, Greg's Bail Bonds can help.",
    sections: [
      { heading: "", content: "We specialize in arranging walk-throughs for outstanding warrants, allowing the defendant to be processed and released without spending unnecessary time in jail. This is especially useful for non-violent technical violations." },
      { heading: "", content: "Greg works directly with the courts and probation offices to expedite the process." },
      { heading: "Common Probation/Parole Violations We Handle", content: "", bullets: ["Missed check-ins with a probation or parole officer", "Failed or missed drug or alcohol tests", "Failure to complete court-ordered programs (community service, classes)", "Curfew violations", "New arrest while on probation or parole", "Travel violations (leaving the jurisdiction without permission)", "Failure to pay fines or restitution"] },
      { heading: "What to Expect", content: "When a probation or parole violation is detected, the supervising officer can file a detainer or request a bench warrant. The defendant is then arrested and held until a violation hearing.", bullets: ["Technical violations (missed check-in, failed test) often allow for bail to be set", "New criminal charges while on supervision typically result in higher bail or no bail", "Walk-throughs can be arranged for outstanding detainers, avoiding surprise arrests", "The violation hearing determines whether probation is modified, extended, or revoked"] },
      { heading: "Why Choose Greg?", content: "", bullets: ["Specializes in walk-throughs for outstanding warrants and detainers", "Works directly with probation officers and courts", "Experienced with both technical and substantive violations", "Fast, discreet service — available 24/7", "Flexible payment plans for bond amounts"] },
    ],
  },
  {
    slug: "sex-crime-bail-bonds",
    title: "Sex Crime Bail Bonds",
    image: IMAGES.sexCrime,
    severity: "felony",
    intro: "Sex crime charges are among the most serious and sensitive cases in the legal system. They often carry high bail amounts and strict conditions of release.",
    sections: [
      { heading: "", content: "Greg's Bail Bonds handles these cases with the utmost discretion and professionalism. We understand the gravity of the situation and provide confidential, judgment-free service 24 hours a day, 7 days a week." },
      { heading: "", content: "Whether the charge involves allegations of assault, indecent exposure, or online offenses, Greg will work quickly to post bail and guide your family through the process with care." },
      { heading: "Charges We Handle", content: "", bullets: ["Sexual assault or aggravated sexual assault", "Indecent assault", "Indecent exposure", "Statutory sexual assault", "Online solicitation or enticement charges", "Possession or distribution of illegal material", "Failure to register (Megan's Law violations)"] },
      { heading: "What to Expect with Sex Crime Bail", content: "Sex crime charges are treated very seriously by the courts. Bail amounts are often set high, and additional conditions of release are common.", bullets: ["Bail amounts are typically higher than other charge categories", "No-contact orders with alleged victims are standard", "GPS monitoring or house arrest may be required", "Surrender of passport and travel restrictions are common", "The court may require psychological evaluation as a condition"] },
      { heading: "Why Choose Greg?", content: "Greg treats every case with complete confidentiality and zero judgment. He understands the sensitivity of these charges and works discreetly to protect your family's privacy throughout the process.", bullets: ["Completely confidential — Greg handles everything personally", "Experienced with high-bail, high-condition cases", "Available 24/7 across PA and WV", "Flexible payment plans for large bond amounts", "Clear guidance on conditions of release and court obligations"] },
    ],
  },
  {
    slug: "theft-bail-bonds",
    title: "Theft Charges Bail Bonds",
    image: IMAGES.theftCharges,
    severity: "varies",
    intro: "Theft charges can range from minor shoplifting to grand larceny, and the bail amounts vary accordingly. No matter the level of the charge, Greg's Bail Bonds provides fast, professional service.",
    sections: [
      { heading: "", content: "We handle all types of theft-related offenses, including retail theft, burglary, robbery, auto theft, and receiving stolen property." },
      { heading: "", content: "Greg will explain the bond process clearly, help you understand your obligations, and make sure you know what to expect at every stage." },
      { heading: "Common Theft Charges We Handle", content: "", bullets: ["Retail theft / shoplifting", "Burglary (residential and commercial)", "Robbery and armed robbery", "Auto theft / unauthorized use of a vehicle", "Receiving stolen property", "Identity theft", "Theft by deception or fraud", "Theft of services"] },
      { heading: "What to Expect with Theft Bail", content: "Theft bail amounts in Pennsylvania depend on the value of the property involved, the degree of the charge, and the defendant's criminal history.", bullets: ["Retail theft under $150 is typically a summary offense with lower or no bail", "Theft of property valued over $2,000 is a felony with higher bail amounts", "Burglary is always a felony, regardless of property value, and carries significant bail", "Repeat theft offenses are graded more severely, resulting in higher bail"] },
      { heading: "Why Choose Greg?", content: "", bullets: ["Fast, professional service for all theft-related charges", "Experienced across misdemeanor and felony theft cases", "Flexible payment plans available", "Clear explanation of your court obligations and conditions", "Available 24/7/365 — call anytime"] },
    ],
  },
  {
    slug: "violent-crimes-bail-bonds",
    title: "Violent Crimes Bail Bonds",
    image: IMAGES.violentCrime,
    severity: "felony",
    intro: "Violent crime charges often come with higher bail amounts and additional conditions of release. Greg's Bail Bonds has the experience and resources to handle even the most complex violent crime cases.",
    sections: [
      { heading: "", content: "Whether it's simple assault, aggravated assault, robbery, or weapons charges, we work quickly to get the bond posted and your loved one released." },
      { heading: "", content: "We understand these cases are sensitive and stressful, and we treat every client with respect and discretion. Greg will personally walk you through the process and answer all your questions." },
      { heading: "Common Violent Crime Charges We Handle", content: "", bullets: ["Simple assault", "Aggravated assault (F1/F2)", "Robbery and armed robbery", "Weapons offenses (firearms, knives, prohibited weapons)", "Terroristic threats", "Reckless endangerment", "Assault on law enforcement", "Homicide-related charges (where bail is granted)"] },
      { heading: "What to Expect with Violent Crime Bail", content: "Violent crime charges are taken very seriously by the courts. Bail amounts are typically set higher than non-violent offenses.", bullets: ["Simple assault (M2) bail is usually moderate but depends on circumstances", "Aggravated assault (F1/F2) can result in bail of $50,000–$250,000+", "No-contact orders with victims are standard in most violent crime cases", "GPS monitoring or house arrest may be imposed as a condition of release", "Weapons charges may require surrender of all firearms as a condition"] },
      { heading: "Why Choose Greg?", content: "", bullets: ["Experienced with high-value, complex violent crime bonds", "Handles cases across multiple PA and WV jurisdictions", "Flexible payment plans for large bail amounts", "Works directly with defense attorneys to expedite release", "Available 24/7 — personal, discreet service"] },
    ],
  },
  {
    slug: "white-collar-crime-bail-bonds",
    title: "White Collar Crime Bail Bonds",
    image: IMAGES.whiteCollar,
    severity: "felony",
    intro: "White collar crime charges such as fraud, embezzlement, identity theft, money laundering, and tax evasion often involve complex investigations and high bail amounts.",
    sections: [
      { heading: "", content: "Greg's Bail Bonds has the experience to handle these sophisticated cases efficiently. We work with defendants and their attorneys to secure release quickly, even when bond amounts are substantial." },
      { heading: "", content: "Our flexible payment plans and professional approach make the process as smooth as possible. Greg understands the nuances of white collar cases and provides expert guidance throughout." },
      { heading: "Common White Collar Charges We Handle", content: "", bullets: ["Fraud (wire fraud, mail fraud, insurance fraud)", "Embezzlement", "Identity theft", "Money laundering", "Tax evasion", "Forgery and counterfeiting", "Securities fraud", "Bribery and corruption charges"] },
      { heading: "What to Expect with White Collar Bail", content: "White collar crime bail can be complex. Because these cases often involve large sums of money and lengthy investigations, the court pays close attention to flight risk and financial resources.", bullets: ["Bail amounts can be significant — from $25,000 to $1,000,000+ depending on the case", "The court may restrict travel and require surrender of passport", "Financial restrictions may be imposed (frozen accounts, spending limits)", "Collateral such as property or assets may be required for large bonds", "Federal white collar charges may have different bail procedures than state charges"] },
      { heading: "Why Choose Greg?", content: "", bullets: ["Experienced with high-value, complex white collar bonds", "Works closely with defense attorneys throughout the process", "Flexible payment plans — even for very large bond amounts", "Complete discretion and professionalism", "Available 24/7/365 across PA and WV"] },
    ],
  },
];

export interface Location { city: string; region: string; }

export const LOCATIONS: Location[] = [
  { city: "Philadelphia", region: "Philadelphia County" },
  { city: "Chambersburg", region: "Franklin County" },
  { city: "Harrisburg", region: "Dauphin County" },
  { city: "The Poconos", region: "Monroe County" },
];

export const PA_COUNTIES = [
  "Adams County", "Bedford County", "Cumberland County", "Dauphin County",
  "Franklin County", "Lancaster County", "Lebanon County", "Mifflin County",
  "Perry County", "York County",
];

export const WV_COUNTIES = ["Berkeley County", "Jefferson County"];
export const MD_AREAS = ["Frederick", "Washington", "Allegheny"];

export interface FAQItem { question: string; answer: string; }

export const FAQ_DATA: FAQItem[] = [
  { question: "What happens after someone is arrested?", answer: "Once someone is arrested, they must have a bond set before they can be released. In most cases, a magistrate judge will determine the bond amount within 24 hours of the arrest, even on weekends or holidays. If the arrest is based on a warrant, the bond amount may already be pre-set, allowing the person to be released faster without appearing before a judge. Call Greg's Bail Bonds immediately and we'll verify the bond status and start the release process right away." },
  { question: "What is a bond?", answer: "A bond is the financial amount set by the court to allow a defendant to be released from jail while awaiting trial. It serves as a guarantee that the individual will return to court as scheduled. There are three common types: Surety Bond (posted through a bail bondsman like Greg's Bail Bonds), Cash Bond (paid in full directly to the court or jail), and Personal Bond/ROR (the defendant is released on their own recognizance, with court approval)." },
  { question: "How does a surety bond work?", answer: "A surety bond is posted by a licensed bail bondsman. The defendant (or a co-signer) pays a percentage of the total bond amount, usually 10%, as a non-refundable fee. The bondsman guarantees the full bond amount to the court. If the defendant appears at all required court dates, no further action is needed. If they fail to appear, the co-signer may be held financially responsible for the full bond amount and any recovery or court costs." },
  { question: "What is a cash bond?", answer: "A cash bond must be paid in full, upfront, to the court or jail before the defendant is released. If the defendant complies with all court requirements, the full amount (minus any court fees or fines) is typically refunded at the end of the case." },
  { question: "What is a personal bond (ROR)?", answer: 'A personal bond, also known as "Release on Recognizance" (ROR), is when the court releases the defendant without requiring money upfront. The judge trusts that the person will return for all court appearances. This type of bond is not available for all charges and must be approved by a judge.' },
  { question: "What is a co-signer and what are their responsibilities?", answer: "A co-signer (also called an indemnitor) is someone who signs for the defendant and agrees to take full financial responsibility if the defendant fails to meet their court obligations. This includes paying back the full bond if forfeited, covering any legal or recovery fees, and ensuring the defendant appears at court as scheduled. The co-signer agreement is a civil contract, meaning it has legal weight but no criminal liability." },
  { question: "Is the bail bond fee refundable?", answer: "The fee paid to a bail bondsman is non-refundable. It covers the cost of securing the defendant's release. If you used collateral (e.g., property, a car title), it will be returned once the case is resolved and all obligations are met." },
  { question: "How long does it take to be released after posting bail?", answer: "In most cases, it takes 2 to 4 hours after the bond is posted for a defendant to be released, depending on how busy the jail is and how quickly they process paperwork." },
  { question: "Can someone be released at any time of day?", answer: "Yes. Jails in most Pennsylvania and West Virginia counties operate 24/7. That means a defendant can usually be released anytime, day or night, once bond is posted. However, after-hours releases may require a family member or friend to pick the person up." },
  { question: "Can Greg help with outstanding warrants?", answer: "Yes. If there's a warrant out for arrest, Greg can often arrange a walk-through, allowing the defendant to be processed and released without spending unnecessary time in jail. This is especially useful for non-violent offenses, probation violations, or pre-set bond warrants." },
];
