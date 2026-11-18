export const PAGE_PATH = "/immigration-lawyer-citizenship-tampa";
export const SITE_URL = "https://www.vienlaw.com";
export const CONTACT_URL = "https://www.vienlaw.com/#contact";
export const KEYWORD = "immigration lawyer for citizenship Tampa";

export const META_TITLE = "Immigration Lawyer for Citizenship Tampa | Vien Law";
export const META_DESCRIPTION =
  "Vien Law assists Tampa residents with citizenship applications, N-400 filing, eligibility reviews and complex naturalization cases.";

export const HERO = {
  h1: "Immigration Lawyer for Citizenship Tampa, Apply With Confidence and Become a U.S. Citizen",
  intro:
    "The naturalization journey comes with strict rules and extensive documentation. You want clear answers and a dedicated immigration lawyer for citizenship Tampa to guide you safely through the system. We identify potential eligibility concerns early so you can gather the exact evidence needed and walk into your interview with absolute confidence.",
};

export type Item = { title: string; text: string };

export type CardsSection = {
  id: string;
  title: string;
  intro: string;
  items: Item[];
  columns?: 2 | 3;
  dark?: boolean;
};

export const ELIGIBILITY = {
  id: "eligibility",
  title: "Ready to Apply for Citizenship? Check Your Eligibility First",
  intro:
    "Before submitting your Form N-400, you must be sure that you have fulfilled all the basic requirements. Now is the time to review with care so that there will not be costly rejections later.",
  bullets: [
    "The normal age limit for applicants is 18 years on the day of official submission of the application.",
    "Applicants typically need to have a Green Card and meet the residency requirement (typically 3–5 years).",
    "Candidates must have continuous housing in the USA for a period of time as specified by the statute without visiting abroad for a long period of time which may lead to disqualification.",
    "The presence in the U.S. of at least half of the necessary statutory period must be established.",
    "USCIS officers assess your background, including any criminal record and tax status.",
    "Most applicants need to show they can read, write and speak basic English unless they are exempt on grounds of age or medical reasons.",
    "Applicants are required to have an understanding of US History and Government unless there is an official exemption.",
    "Eligible individuals complete the entire naturalization journey by taking the Oath of Allegiance to the United States.",
  ],
};

export const SPECIAL_PATHS: CardsSection = {
  id: "special-paths",
  title: "Special Paths to U.S. Citizenship for Tampa, FL Applicants",
  intro:
    "Sometimes there are special circumstances that allow applicants to become citizens quicker. This is where the law allows special provisions for certain individuals.",
  columns: 2,
  items: [
    {
      title: "Naturalization Through Marriage to the U.S. Citizen",
      text: "Those who are permanent residents and married to and residing with their U.S. citizen spouse will often qualify for a quicker route. They will only be required to wait 3 years before applying for naturalization. This is under the provision that they meet strict requirements relating to their marriage union. They must also provide strong evidence to show that they live together.",
    },
    {
      title: "Acquired or Derived Citizenship Through Parents",
      text: "There are some people who are automatically citizens without knowing. You may be automatically derived or acquired citizenship by having a citizen parent. This can depend on the particular laws that are currently in place at the time you were born.",
    },
    {
      title: "Citizenship for Children Born Abroad to U.S. Citizen Parents",
      text: "If one or both of a child's parents is a U.S. citizen, the child may be granted citizenship at birth. The U.S. citizen parent must demonstrate that they were physically present in the United States in accordance with certain provisions prior to the birth of the child.",
    },
    {
      title: "Naturalization Options for Military Service Members and Veterans",
      text: "Military personnel and veterans from the U.S. armed forces may qualify for expedited naturalization. The government often overlooks typical residency and physical presence requirements due to their service to the country either in peace time or in wartime.",
    },
    {
      title: "Naturalization Eligibility for Refugees and Asylees",
      text: "Asylees and refugees that are granted permanent residency can apply for citizenship at a later time. The government often calculates their continuous residence period with a special rollback to their original date of entry or asylum approval.",
    },
    {
      title: "Citizenship After Obtaining Permanent Residence Through VAWA",
      text: "Permanent residents who are victims of abuse by a U.S. citizen spouse are given special consideration. Even if the marriage has been dissolved, they may be eligible for the three-year naturalization process.",
    },
    {
      title: "Medical Exceptions to English and Civics Testing",
      text: "Failing a physical, developmental or mental disability that prevents an applicant from learning English or civics may be grounds for an applicant to request a waiver. To get this disability exception, they need to provide a completed Form N-648 signed by a certifying medical practitioner.",
    },
  ],
};

export const DOCUMENTS: CardsSection = {
  id: "documents",
  title: "Documents Needed for an American Citizenship Application",
  intro:
    "It is absolutely essential that the documents for the naturalization application are accurate in order to be a success. The specific documents required will vary greatly depending on an individual's circumstances, marital status and immigration journey.",
  columns: 3,
  dark: true,
  items: [
    { title: "Green Card and Permanent Resident Information", text: "The best evidence of your current status is a clear copy of your PR Card. To comply with the initial filing requirement, the front and back of the card must be duplicated." },
    { title: "Form N-400 and Filing Fee Records", text: "You need to submit the fully completed Application for Naturalization along with proof of payment. If you cannot afford the fee, you must include a properly documented and approved fee waiver request." },
    { title: "Passport and International Travel History", text: "Current and old passports are required to confirm your international travel dates and to prove you meet the physical presence and continuous residence criteria." },
    { title: "Form G-28 for Attorney Representation", text: "This form officially informs USCIS that you have an attorney representing you. It ensures your attorney receives copies of all correspondence and will be able to represent you." },
    { title: "Legal Name Change Documents", text: "If your name is different now then what is on your green card, you will need to provide official documentation. This could be marriage certificates, divorce papers or a court order." },
    { title: "Marriage Certificate and Spouse's Citizenship Evidence", text: "Those who are applying under the 3-year marriage rule must prove their marriage is a legal relationship. They also require proof of citizenship for their spouse such as a passport or birth certificate from the USA." },
    { title: "Divorce Decrees and Previous Marriage Records", text: "Complete records of any prior marriages for both you and your current spouse are mandatory. These documents prove your current marriage is legally recognized and all previous unions were properly terminated." },
    { title: "Military Service and Discharge Documents", text: "You will need form N-426 and DD Form 214 as proof of military service. This ensures they have a record that you served in the military and that you were discharged honourably." },
    { title: "Continuous Residence and Physical Presence Evidence", text: "Officers often ask for evidence such as lease agreements, mortgage statements, employment history and utility bills. This evidence establishes exactly where you have lived and worked during your required statutory period." },
    { title: "Child Support and Spousal Support Records", text: "Court orders and payment receipts prove you meet your financial obligations to dependents. This documentation is a critical element for passing the good moral character requirement." },
    { title: "Arrest Reports and Certified Court Dispositions", text: "Certified records for any arrest, citation, or conviction must be disclosed and provided. You have to submit these documents even if the record was expunged or the charges were completely dropped." },
    { title: "IRS Tax Transcripts and Tax Filing Documents", text: "Tax returns over the past three to five years demonstrate your financial compliance. They show the government that you do not have unresolved tax debts and meet the standard for good moral character." },
    { title: "Medical Evidence for Disability-Based Exceptions", text: "You will need to submit detailed medical information and Form N-648 in order to be eligible for an exemption. Medical documents provided should be detailed and clearly show how your particular diagnosis is preventing you from learning what you need to learn." },
    { title: "Selective Service Registration Information", text: "Males age 18 to 26 years of age who have lived in the U.S. should present proof of their selective service registration. A status information letter is required if they failed to register during that window." },
  ],
};

export const COMPLEX_CASES: CardsSection = {
  id: "complex-cases",
  title: "How Complex and High-Risk Tampa Cases Affect Citizenship Applications",
  intro:
    "It is essential that you have a thorough legal risk assessment done before submitting your forms. If you neglect to do this, you may be refused and could be placed into deportation proceedings.",
  columns: 3,
  items: [
    { title: "Criminal Convictions and Pending Charges in Florida", text: "Some crimes will permanently disqualify you from becoming a citizen. However, there are other crimes that will only temporarily affect your \"good character\" period meaning you can apply after a period of time has passed." },
    { title: "Previous Deportation Proceedings or Removal Orders", text: "If you have an old or pending removal order it can be extremely dangerous to make a new application. This can inform the immigration authorities of your whereabouts and result in active attempts to remove you." },
    { title: "Extended Absences From the United States", text: "Longer trips will affect your continuous residence. If you are away for more than a year then you will usually lose it completely and have to start again." },
    { title: "Previous Visa Fraud or Immigration Misrepresentation", text: "Officers look back at how you obtained your original Green Card during the naturalization process. The government will deny your citizenship and likely revoke your permanent residence if they discover any past fraud." },
    { title: "Unresolved Tax Debts and Unfiled Returns", text: "The IRS and USCIS share information regarding your financial compliance. A refusal to file taxes or ignoring outstanding IRS debts is an immediate red flag for good moral character." },
    { title: "Domestic Violence Allegations and Related Court Orders", text: "Civil protection orders or domestic incidents can ruin an application even without a formal conviction. USCIS heavily scrutinizes an applicant's character when police reports suggest a history of domestic disturbances." },
    { title: "Conditional Green Cards With Pending Form I-751 Petitions", text: "You can apply for citizenship while your I-751 is pending as long as you meet the three-year rule. You must wait until the I-751 is adjudicated by USCIS." },
    { title: "Expired Green Cards and Pending Immigration Matters", text: "Even if your green card has expired, you will still be a permanent resident. If you have overlapping applications then you will need to take care with the legal process to make sure they do not affect each other adversely." },
    { title: "Conflicting Information in Previous Immigration Records", text: "You will run into major issues if you have conflicting information on your current n-400 application and previous visa applications. The officer will ask you questions about any contradictions with your employment history, home addresses and family members." },
  ],
};

export const DENIED_DELAYED: CardsSection = {
  id: "denied-or-delayed",
  title: "Why Citizenship Applicants Get Denied or Delayed Without an Immigration Lawyer in Tampa, Florida",
  intro:
    "Simple clerical mistakes and failure to pay attention to what you are eligible for can cost thousands of applicants. A qualified attorney will help avoid any issues that may come up during your interview.",
  columns: 2,
  dark: true,
  items: [
    { title: "Extended International Travel That Raises Residence Concerns", text: "A lot of applicants fail to take into consideration how many long international trips they are making over the 5 year period. This will lead to physical presence or continuous residence issues." },
    { title: "Missing Selective Service Registration Information", text: "Failure to register is a big issue. If you can not prove that it was an innocent mistake then you will almost certainly be denied." },
    { title: "Criminal History Disclosures That Conflict With Court Records", text: "It is common for people to forget to disclose small citations that have been cleared by a judge years ago. USCIS will interpret this as being untruthful and deny your case on grounds of poor moral character." },
    { title: "Unresolved Tax Issues That Raise Good Moral Character Concerns", text: "An application submitted without an active IRS payment plan in place is a terrible strategy. A lack of proof regarding your tax compliance will almost certainly stall or end your case." },
    { title: "Gaps in Employment and Residential History", text: "Missing time frames on your N-400 will cause a lot of delays with the background check. This will cause your officer to ask you tough questions during your interview to figure out what is actually going on. Conviction for past immigration offenses can impact a person's naturalization process. These are unauthorized employment and visa overstays. These infractions may be brought to officers' attention during the review and will be used to evaluate your good moral character and immigration law compliance since you got your Green Card." },
    { title: "Missing Documents or Inaccurate Form N-400 Answers", text: "Simple clerical errors or missing translations halt progress immediately. These mistakes result in Requests for Evidence that delay cases by several months." },
    { title: "Conflicting Information Across Immigration Applications", text: "Before approving citizenship, USCIS will read through your alien file. Discrepancies in marriage, children or job history can easily lead to a fraud investigation." },
  ],
};

export const AFTER_DENIAL: CardsSection = {
  id: "after-denial",
  title: "What Options Are Available After a Citizenship Application Denial?",
  intro:
    "If you receive a denial letter, that doesn't mean your dream of citizenship is forever gone. The steps you can take next will depend on the circumstances of your situation and the reasons for the rejection.",
  columns: 3,
  items: [
    { title: "Requesting a Hearing Through Form N-336", text: "You may file Form N-336 within 30 days if you think USCIS made a mistake, based on a factual or legal error. This form requests a new hearing with a different, higher-level immigration officer to review the evidence." },
    { title: "Addressing the Legal Issues Identified in the Denial Notice", text: "Your denial letter will contain details of what actually happened. Once you have done what is necessary to rectify the problem, whether it be paying back taxes or waiting until a criminal probation period ends, you can take steps to correct it." },
    { title: "Submitting Additional Evidence for Administrative Review", text: "The N-336 hearing gives you a second chance to prove your case. You have the opportunity to submit new, stronger documentation that cures the original deficiency pointed out by the first officer." },
    { title: "Filing a New Naturalization Application When Eligible", text: "The most practical strategy is sometimes just a matter of patience. You can simply wait until a temporary bar has passed and file a fresh N-400 with a clean record." },
    { title: "Seeking Federal Court Review After an Administrative Hearing", text: "You still have rights if your N-336 is unfairly denied by the second officer. You have the ability to seek a de novo review in a U.S. District Court and let a federal judge decide." },
  ],
};

export const PROCESSING: CardsSection = {
  id: "processing-time",
  title: "How Long You Should Expect for Citizenship Application Processing",
  intro:
    "There are a number of factors in the naturalization process that you don't control that affect the timeline. The time it takes to process depends a lot on the workload at the Tampa USCIS field office as well as the FBI background check processing time",
  columns: 3,
  dark: true,
  items: [
    { title: "Form N-400 Receipt and Initial Review", text: "A physical receipt notice should be received a few weeks after filing. With this document you know that your case is now in the system and have a tracking number." },
    { title: "Biometrics Appointment and Background Checks", text: "USCIS usually schedules a fingerprinting appointment shortly after they process your payment. This step initiates the mandatory FBI and background security checks required for all applicants." },
    { title: "Naturalization Interview and Examination Scheduling", text: "An interview notice is usually issued several months after your background checks are cleared. The exact wait time depends on how many cases are backlogged at the Tampa field office." },
    { title: "Additional Evidence Requests and Application Review", text: "The officer might need more information to make a final decision post-interview. They will issue a Request for Evidence in this scenario, which extends the timeline based on how quickly you respond." },
    { title: "Final Decision and Oath Ceremony Scheduling", text: "You will be scheduled for an Oath Ceremony once the officer officially approves your case. We always recommend checking current USCIS processing times online for the most up-to-date estimates for the Tampa area." },
  ],
};

export const CIVICS_PREP: CardsSection = {
  id: "civics-test-preparation",
  title: "How a Tampa Immigration Lawyer Prepares Applicants for the U.S. Citizenship Civics Test",
  intro:
    "Walking into an exam without proper preparation is a recipe for immense anxiety. A legal professional ensures you study the right materials and know exactly how the officer will conduct the questioning.",
  columns: 2,
  items: [
    { title: "Identifying the Applicable Civics Test Version", text: "The version of the test you take depends entirely on when you file your application. We ensure you study the correct version of the USCIS civics exam so you do not memorize the wrong answers." },
    { title: "Reviewing Form N-400 Answers Before the Interview", text: "Officers test your English comprehension by asking you to define terms straight from your N-400. We review the entire application with you so you understand every single word on the document." },
    { title: "Practising English Reading, Writing, and Speaking", text: "The language portion of the exam requires you to read a sentence aloud and write one dictated by the officer. We provide targeted guidance on exactly what vocabulary to expect for the reading and writing portions." },
    { title: "Preparing for Questions About Immigration and Travel History", text: "You must be able to confidently explain your past international trips under pressure. We help you memorize and articulate the exact dates and reasons for your travel so your answers match your paperwork perfectly." },
    { title: "Practising With Mock Naturalization Interviews", text: "Simulated interviews drastically reduce anxiety and build confidence. These practice sessions help you handle difficult questions effectively in a safe environment before the real day arrives." },
    { title: "Understanding Age-Based and Long-Term Residency Exceptions", text: "We identify right away if you qualify for the 50/20, 55/15, or 65/20 rules. These exceptions allow you to take the test in your native language or take a much shorter version of the exam." },
    { title: "Organizing Supporting Evidence for the Interview", text: "Disorganized paperwork irritates officers and makes you look unprepared. We ensure your interview binder is perfectly arranged so you can hand the officer documents smoothly and confidently." },
  ],
};

export const OATH_BENEFITS: CardsSection = {
  id: "citizenship-benefits",
  title: "What You Gain the Moment You Take the Oath of Citizenship",
  intro:
    "Naturalization provides profound legal stability and opens doors to new civic opportunities. The benefits of citizenship drastically change your life and secure your family's future.",
  columns: 3,
  dark: true,
  items: [
    { title: "Eligibility to Apply for a U.S. Passport", text: "Citizens can immediately obtain a U.S. passport after their ceremony. This document offers extensive visa-free travel and guarantees federal protection when you go abroad." },
    { title: "Petitioning for Additional Qualifying Family Members", text: "Citizens have the power to sponsor parents, siblings, and married adult children. Permanent residents do not have the legal authority to sponsor these specific family groups." },
    { title: "Eligibility for Federal Employment Requiring Citizenship", text: "Many prestigious government jobs and intelligence positions are reserved exclusively for U.S. citizens. Citizenship is an absolute prerequisite for obtaining any level of federal security clearance." },
    { title: "Voting Rights in Federal, State, and Local Elections", text: "You gain the constitutional right to vote the moment you take the oath. This allows you to participate fully in the democratic process and shape your community's future." },
    { title: "Protection From Removal Under Standard Immigration Grounds", text: "Citizens cannot be deported or stripped of their status for minor criminal offenses. This permanence offers incredible peace of mind and security for you and your entire family." },
    { title: "Eligibility for Certain Federal Benefits and Programs", text: "Citizens enjoy unrestricted access to all federal grants, scholarships, and social welfare programs. They never have to worry about public charge rules affecting their status." },
  ],
};

export const FEES = {
  id: "fees-and-waivers",
  title: "Naturalization Fees and Waivers for 2026 Citizenship Applicants",
  intro:
    "The process of filing for citizenship requires financial planning, as government fees and legal costs add up quickly. You should understand all expected expenses before you begin the paperwork.",
  items: [
    { title: "USCIS Filing Fee", text: "Form N-400 requires a standard filing fee to process the application. Online filing often features a slight discount compared to mailing a paper application to the lockbox." },
    { title: "Reduced Filing Fee", text: "Applicants with household incomes between 150% and 400% of the Federal Poverty Guidelines receive a break. They may qualify to pay a substantially reduced government fee." },
    { title: "Fee Waiver", text: "Form I-912 allows applicants with severe financial hardship to bypass the cost entirely. Those receiving means-tested benefits can apply for a complete waiver of the filing fee." },
    { title: "Attorney Fees", text: "Legal costs always depend on overall case complexity. Simple filings cost less, while cases involving criminal records or medical exceptions require extensive preparation and higher fees." },
    { title: "Additional Documentation Costs", text: "Budget for extra expenses related to certified court dispositions and certified document translations. Medical examinations also cost money if you need to request an N-648 disability waiver." },
  ] as Item[],
};

export const WHY_CITIZENSHIP: CardsSection = {
  id: "why-vien-law-citizenship",
  title: "Why Tampa Residents Choose Vien Law for Citizenship Cases",
  intro:
    "When your future is on the line, verified credentials and a compassionate approach matter most. Clients trust us because we combine sharp legal analysis with genuine care for their success.",
  columns: 3,
  items: [
    { title: "Florida Bar Attorney Credentials and Immigration Court Admissions", text: "Attorney Viengphone Vongsyprasom, Esq. is a proud member of The Florida Bar with a J.D. from Western Michigan University Cooley Law School and a B.S. from the University of South Florida. She is admitted to practice before the U.S. Immigration Courts and the Supreme Court of Florida, and she brings vital litigation experience as former GEICO staff counsel." },
    { title: "Experience With Complex Immigration Matters", text: "Our firm is highly equipped to handle difficult cases that other offices might turn away. We successfully manage cases involving extensive travel, minor criminal histories, or complicated marital backgrounds." },
    { title: "Individualized Review of Citizenship Eligibility", text: "We completely reject cookie-cutter approaches to legal representation. We audit your entire alien file to ensure you are truly eligible before you spend a single dollar on government filing fees." },
    { title: "Written Fee Agreements Before Representation", text: "We believe in total financial transparency from the very first meeting. You will receive a clear, written agreement outlining our scope of work and exact legal fees upfront." },
    { title: "English and Lao Language Communication", text: "Attorney Vongsyprasom proudly serves clients directly in both English and Lao. She also serves as President of the Asian Pacific American Bar Association in Tampa Bay, ensuring deep cultural understanding and strong community ties." },
    { title: "Attorney Guidance Through Application and Interview Stages", text: "You are never left to figure out the next step alone when you hire us. We stand by you from the initial consultation all the way through your final interview preparation." },
  ],
};

export const COMPARISON = {
  id: "what-sets-us-apart",
  title: "What Sets Vien Law Apart From Other Immigration Law Firms?",
  head: ["Service Area", "Vien Law", "Other Immigration Law Firms"],
  rows: [
    ["Attorney Involvement", "Direct handling by Attorney Viengphone Vongsyprasom at every stage.", "Attorney involvement varies heavily by firm and service model."],
    ["Eligibility Assessment", "Deep-dive review of your full immigration history before filing.", "Assessment methods vary widely by provider."],
    ["Complex Cases", "Verified litigation and agency experience handling complex histories.", "Experience varies among individual attorneys and practices."],
    ["Application Review", "Meticulous, multi-stage document verification to prevent RFEs.", "Review procedures differ between providers."],
    ["Interview Preparation", "Comprehensive mock interviews and file organization strategies.", "Preparation services vary significantly in scope."],
    ["Client Communication", "Bilingual (English/Lao) support with responsive case updates.", "Communication practices and response times vary by firm."],
    ["Fee Transparency", "Clear, upfront written fee agreements with no hidden surprises.", "Fee structures and included services differ from firm to firm."],
  ],
};

export const LICENSED_ATTORNEY = {
  id: "licensed-attorney",
  title: "Vien Law Puts a Licensed Attorney on Every U.S. Citizenship Case",
  text: "We refuse to hand your future over to a processing mill where paralegals do all the work. Vien Law manages every naturalization matter actively by a credentialed immigration lawyer for citizenship Tampa. We take a highly personalized approach to evaluate eligibility risks, prepare your forms accurately, scrutinize your supporting documents, and provide strategic legal guidance if complications suddenly arise. You gain a dedicated advocate who stands directly beside you throughout the entire naturalization journey when you choose our firm.",
};

export const PROCESS = {
  id: "citizenship-application-process",
  title: "Vien Law's Citizenship Application Process for Tampa Residents",
  intro:
    "We intentionally optimize the path to naturalization so you always know exactly where your case stands. When you hire an immigration lawyer for citizenship Tampa at Vien Law, we guide you properly from the initial consultation to the final decision.",
  steps: [
    { title: "Initial Consultation and Eligibility Assessment", text: "We start by evaluating your timeline, residency, and personal background. This ensures we confirm you are legally ready to apply before any paperwork begins." },
    { title: "Review of Immigration History and Potential Risks", text: "We audit your past visas and Green Card history with extreme care. This process allows us to identify and mitigate any red flags early on." },
    { title: "Legal Guidance for Individual Case Concerns", text: "We develop an active legal strategy if you have tax issues, past citations, or extended absences. This customized plan addresses your unique vulnerabilities before USCIS spots them." },
    { title: "Form N-400 Preparation and Document Verification", text: "We draft your application meticulously to avoid careless clerical errors. We then compile all necessary supporting evidence into a clean, organized package." },
    { title: "USCIS Filing and Application Monitoring", text: "We officially file the N-400 on your behalf and handle the logistics. We track all correspondence from USCIS so you never miss an important deadline." },
    { title: "Preparation for Biometrics and Background Checks", text: "We guide you smoothly through the fingerprinting process and monitor background check timelines. We keep you informed about how the FBI clearance impacts your waiting period." },
    { title: "Naturalization Interview and Test Preparation", text: "We conduct rigorous mock interviews to test your knowledge under pressure. We review civics questions and testing procedures until you feel completely ready." },
    { title: "Guidance on Additional Evidence or Administrative Hearings", text: "We draft the appropriate legal response if USCIS issues a Request for Evidence. We also handle the heavy lifting if you require an N-336 hearing after an unfair denial." },
    { title: "Final Decision and Post-Naturalization Guidance", text: "We celebrate your final approval and advise you on crucial post-citizenship steps. This includes guidance on updating your Social Security records and applying for your new passport." },
  ] as Item[],
};

export const WHY_IMMIGRATION: CardsSection = {
  id: "why-vien-law-immigration",
  title: "Why Tampa Residents Choose Vien Law for Immigration Matters",
  intro:
    "Our firm builds long-lasting relationships by delivering honest advice and fierce advocacy. We protect your rights at every stage of the complex immigration process.",
  columns: 3,
  dark: true,
  items: [
    { title: "Attorney Education and Professional Credentials", text: "Our foundational legal training translates to incredibly robust client advocacy. With a J.D. from WMU Cooley Law School and admission to U.S. Immigration Courts, we know how to fight for you." },
    { title: "Knowledge of U.S. Immigration and Nationality Law", text: "The legal scenario changes constantly and we adapt quickly to protect your case. We stay current on shifting USCIS policies, fee changes, and procedural updates." },
    { title: "Legal Guidance for Complicated Immigration Histories", text: "We know exactly how to interpret complex statutes and case law. This skill allows us to defend clients who have less-than-perfect backgrounds and need aggressive representation." },
    { title: "Clear Written Fee Agreements", text: "You will always understand exactly what you are paying for when you hire us. We provide transparent documentation before we begin work to eliminate any billing surprises." },
    { title: "Multilingual Client Communication", text: "We bridge communication gaps and build deep trust by providing services in both English and Lao. This linguistic ability ensures you understand every nuance of your case." },
    { title: "Accessible Updates Throughout the Case", text: "We prioritize client communication above all else. You never have to guess the status of your application because we keep you informed every step of the way." },
  ],
};

export const PRACTICE_AREAS = {
  id: "practice-areas",
  title: "Practice Areas and Cities Vien Law Handles Across Florida",
  intro:
    "Vien Law provides comprehensive representation for families and individuals managing the complex U.S. immigration system. We proudly serve the greater Tampa Bay area and surrounding communities with personalized legal strategies.",
  groups: [
    {
      title: "Immigration Services Available to Tampa Residents",
      items: [
        "U.S. Citizenship and Naturalization",
        "Green Card Applications",
        "Family-Based Immigration",
        "Marriage-Based Immigration",
        "Adjustment of Status",
        "Consular Processing",
        "Removal Defense",
        "Immigration Waivers",
        "VAWA Immigration Cases",
        "U Visas and Humanitarian Immigration Options",
      ],
    },
    {
      title: "Tampa Neighborhoods Served",
      items: [
        "Downtown Tampa",
        "South Tampa",
        "Hyde Park",
        "Westshore",
        "Carrollwood",
        "Seminole Heights",
        "Ybor City",
        "New Tampa",
        "Town 'N' Country",
      ],
    },
    {
      title: "Surrounding Hillsborough County Communities",
      items: ["Brandon", "Riverview", "Temple Terrace", "Plant City", "Citrus Park", "Seffner"],
    },
  ],
};

export const CTA = {
  title: "Start Your Immigration Case With Vien Law Today",
  before:
    "Do not leave your citizenship application to chance when your future is at stake. Discuss your eligibility, case history, and future goals with an experienced attorney who genuinely cares about your success.",
  linkText: "Contact Vien Law",
  after: "to schedule your comprehensive naturalization consultation.",
};

export const FAQS: Item[] = [
  {
    title: "Can I Apply for U.S. Citizenship if My Green Card Has Expired?",
    text: "An expired Green Card does not mean you have lost your permanent resident status. You may be required to file Form I-90 to renew the card before or concurrently with your N-400, depending on current USCIS guidelines.",
  },
  {
    title: "Do I Have to Take the Citizenship Test if I Am Over 50 Years Old?",
    text: "Age alone does not automatically excuse you from testing requirements. You are exempt from the English language requirement and may take the civics test in your native language only if you are 50 or older and have held a Green Card for at least 20 years. The civics test is always required unless a formal medical exception applies to your case.",
  },
  {
    title: "Can an Immigration Lawyer Attend My Naturalization Interview With Me?",
    text: "You have the absolute right to have an attorney present at your naturalization interview by filing Form G-28. Your lawyer can clarify complex legal questions posed by the officer during the examination.",
  },
];

export type PageImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  name: string;
  caption: string;
};

/** Optimized WebP images with metadata (alt text, intrinsic size, schema.org name/caption). */
export const IMAGES = {
  attorney: {
    src: "/images/citizenship-tampa/attorney-viengphone-vongsyprasom.webp",
    alt: "Attorney Viengphone Vongsyprasom, Esq., Tampa immigration and citizenship lawyer at Vien Law",
    width: 900,
    height: 1318,
    name: "Attorney Viengphone Vongsyprasom, Esq.",
    caption:
      "Viengphone Vongsyprasom, Esq. — Florida Bar member serving Tampa citizenship and naturalization clients in English and Lao.",
  } satisfies PageImage,
};

export const CTA_STRIPS = [
  {
    title: "Not sure you qualify yet?",
    text: "We review your full history before you spend a dollar on filing fees.",
    button: "Get My Eligibility Reviewed",
  },
  {
    title: "Have a criminal record, tax issue or long trips abroad?",
    text: "Talk to an attorney before you file so problems are handled first, not discovered by USCIS.",
    button: "Discuss My Situation",
  },
  {
    title: "Want to know your exact costs?",
    text: "You receive a clear written agreement outlining scope and legal fees upfront.",
    button: "Request a Fee Agreement",
  },
] as const;

export const NAV_LINKS = [
  { href: "#eligibility", label: "Eligibility" },
  { href: "#documents", label: "Documents" },
  { href: "#citizenship-application-process", label: "Process" },
  { href: "#fees-and-waivers", label: "Fees" },
  { href: "#faq", label: "FAQ" },
] as const;
