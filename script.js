
"use strict";

/* ========================================
   PC ADVISOR — Corrected Application Logic
======================================== */

/* ---------- Translations ---------- */

const translations = {
  ar: {
    navHome: "الرئيسية",
    navAdvisor: "المستشار",
    navHow: "كيف يعمل؟",
    navStart: 'ابدأ الآن <span>↗</span>',
    heroBadge: "مستشارك التقني الشخصي",
    heroTitle: 'جهازك المثالي،<br><span class="gradient-text">يبدأ من هنا.</span>',
    heroDescription: "محتار تختار بي سي أو لابتوب؟ حدد ميزانيتك واستخدامك وخلي علينا نساعدك تختار المواصفات الأنسب إلك.",
    heroButton: "اكتشف جهازك المثالي",
    heroSecondary: "اكتشف كيف يعمل",
    trustTitle: "قرار شراء أذكى",
    trustDescription: "مواصفات تناسب احتياجك وميزانيتك",
    floatingAiTitle: "اختيار ذكي",
    floatingAiDescription: "حسب احتياجاتك",
    floatingBudgetTitle: "ميزانيتك أولاً",
    floatingBudgetDescription: "أفضل قيمة مقابل السعر",
    screenLabel: "أداء بلا حدود",
    heroBottom: "ابحث عن الجهاز المناسب لك",

    advisorBadge: "التوصية المخصصة",
    advisorTitle: 'خلينا نختار <span class="gradient-text">جهازك القادم.</span>',
    advisorDescription: "جاوب على كم سؤال بسيط، وراح نحدد لك المواصفات المناسبة حسب احتياجك.",
    stepLabel: "خطوة 01 — معلوماتك",
    formTitle: "شنو تحتاج بالضبط؟",
    budgetLabel: "ميزانيتك",
    budgetHint: "أدخل ميزانيتك بالعملة التي تختارها.",
    currencyLabel: "العملة",
    currencyIQD: "دينار عراقي",
    currencyUSD: "دولار أمريكي",
    deviceLabel: "نوع الجهاز",
    devicePC: "كمبيوتر مكتبي",
    devicePCDesc: "أداء أعلى وقابلية تطوير",
    deviceLaptop: "لابتوب",
    deviceLaptopDesc: "قابل للحمل والتنقل",
    usageLabel: "الاستخدام الرئيسي",
    usageGaming: "ألعاب",
    usageGamingDesc: "Gaming",
    usageEditing: "مونتاج وتصميم",
    usageEditingDesc: "Creative",
    usageStudy: "دراسة وبرمجة",
    usageStudyDesc: "Study & Code",
    usageOffice: "استخدام يومي",
    usageOfficeDesc: "Everyday",
    priorityLabel: "شنو أهم شي عندك؟",
    priorityPerformance: "أعلى أداء ممكن",
    priorityValue: "أفضل قيمة مقابل السعر",
    priorityUpgrade: "قابلية التطوير مستقبلاً",
    priorityPortable: "البطارية وسهولة التنقل",
    priorityQuiet: "هدوء واستهلاك أقل للطاقة",
    submitButton: "حلّل احتياجي واختر جهازي",
    formDisclaimer: "توصيات مبدئية مبنية على ميزانيتك واحتياجك، وليست فحصاً للأسعار المباشرة.",

    resultKicker: "نتيجتك بانتظارك",
    resultTitle: "جهازك المثالي<br>على بُعد خطوة.",
    resultDescription: "أدخل ميزانيتك واختياراتك، وخلي المستشار يساعدك تعرف المواصفات الأنسب لك.",
    featureSpecs: "مواصفات مقترحة",
    featureBudget: "مراعاة الميزانية",
    featureUpgrade: "نصائح للتطوير",
    resetButton: "جرّب ميزانية ثانية",

    howBadge: "بكل بساطة",
    howTitle: 'ثلاث خطوات، <span class="gradient-text">واختيار أذكى.</span>',
    howDescription: "ما تحتاج تكون خبير هاردوير حتى تختار جهاز يناسبك.",
    howStep1Title: "حدد ميزانيتك",
    howStep1Desc: "اكتب المبلغ اللي تريد تخصصه لجهازك الجديد.",
    howStep2Title: "اختر استخدامك",
    howStep2Desc: "ألعاب، مونتاج، دراسة أو استخدام يومي.",
    howStep3Title: "احصل على توصيتك",
    howStep3Desc: "تعرف على المواصفات المقترحة والنصائح المناسبة لك.",

    ctaBadge: "خطوتك القادمة تبدأ هنا",
    ctaTitle: "لا تدفع أكثر من حاجتك.",
    ctaDescription: "اختيار صحيح اليوم، تجربة أفضل كل يوم.",
    ctaButton: "ابدأ اختيارك",
    footerText: "اختيار تقني أذكى، بميزانية تناسبك.",

    errorBudget: "يرجى إدخال ميزانية صحيحة أكبر من صفر.",
    resultHeading: "توصيتك الشخصية",
    resultBadge: "توصية مخصصة",
    desktopGaming: "كمبيوتر ألعاب متوازن",
    desktopEditing: "محطة عمل للتصميم والمونتاج",
    desktopStudy: "كمبيوتر للدراسة والبرمجة",
    desktopOffice: "كمبيوتر للاستخدام اليومي",
    laptopGaming: "لابتوب للألعاب",
    laptopEditing: "لابتوب للإبداع وصناعة المحتوى",
    laptopStudy: "لابتوب للدراسة والبرمجة",
    laptopOffice: "لابتوب للاستخدام اليومي",
    budgetTight: "ميزانية اقتصادية",
    budgetMid: "فئة متوسطة",
    budgetHigh: "فئة متقدمة",
    budgetPremium: "فئة احترافية",
    recommendationIntro: "هذه مواصفات استرشادية مقترحة بناءً على ميزانيتك واستخدامك.",
    budgetUsed: "ميزانيتك المدخلة",
    specsTitle: "المواصفات المقترحة",
    processor: "المعالج",
    graphics: "كرت الشاشة",
    memory: "الذاكرة RAM",
    storage: "التخزين",
    display: "الشاشة",
    motherboard: "اللوحة الأم",
    power: "مزود الطاقة",
    cooling: "التبريد",
    battery: "البطارية",
    portability: "قابلية الحمل",
    adviceTitle: "نصيحة المستشار",
    adviceGaming: "للألعاب، أعطِ الأولوية لكرت الشاشة وتأكد أن المعالج لا يحد من أدائه. اختر 16GB RAM على الأقل إن أمكن.",
    adviceEditing: "للمونتاج، ركز على المعالج متعدد الأنوية وذاكرة 32GB عند الإمكان، مع SSD سريع ومساحة كافية لمشاريعك.",
    adviceStudy: "للدراسة والبرمجة، ركز على SSD سريع وذاكرة 16GB إن أمكن، وشاشة مريحة ولوحة مفاتيح جيدة.",
    adviceOffice: "للاستخدام اليومي، لا تحتاج غالباً إلى كرت شاشة منفصل. استثمر في SSD وذاكرة كافية وشاشة جيدة.",
    adviceLaptop: "إذا اخترت لابتوب، انتبه إلى حرارة الجهاز وقدرة كرت الشاشة الفعلية وعمر البطارية.",
    adviceDesktop: "الكمبيوتر المكتبي غالباً يوفر أداء أعلى مقابل السعر وإمكانية تطوير القطع لاحقاً.",
    adviceUpgrade: "احتفظ بجزء من الميزانية للملحقات والترقية المستقبلية، وتأكد من توافق القطع قبل الشراء.",
    adviceValue: "قارن أداء القطع وأسعارها محلياً، ولا تدفع زيادة كبيرة مقابل فرق أداء صغير.",
    advicePortable: "إذا كان التنقل مهماً، اختر جهازاً بوزن مناسب وبطارية جيدة، وتحقق من المراجعات.",
    adviceQuiet: "للحصول على جهاز هادئ، انتبه إلى كفاءة الطاقة وجودة التبريد وضجيج المراوح.",
    adviceLowBudget: "إذا كانت الميزانية محدودة، فكر بجهاز مستعمل بعد فحصه، أو بمواصفات أساسية قابلة للتطوير.",
    estimateLabel: "تقدير الميزانية",
    estimateNote: "هذا تقدير تقريبي لفئة الجهاز وليس عرض سعر أو ضماناً بتوفر القطع. الأسعار تختلف حسب البلد والمتجر وحالة القطع.",
    desktop: "مكتبي",
    laptop: "لابتوب",
    gaming: "ألعاب",
    editing: "مونتاج وتصميم",
    study: "دراسة وبرمجة",
    office: "استخدام يومي",
    currencyError: "الميزانية منخفضة جداً للحصول على جهاز جديد بالمواصفات المطلوبة. جرّب زيادة الميزانية أو فكر بجهاز مستعمل بعد فحصه.",
    priceRange: "الفئة السعرية"
  },

  en: {
    navHome: "Home",
    navAdvisor: "Advisor",
    navHow: "How it works",
    navStart: 'Get started <span>↗</span>',
    heroBadge: "Your personal tech advisor",
    heroTitle: 'Your perfect setup,<br><span class="gradient-text">starts right here.</span>',
    heroDescription: "Not sure whether to choose a desktop or laptop? Set your budget and intended use to find the right specifications.",
    heroButton: "Find your perfect device",
    heroSecondary: "Discover how it works",
    trustTitle: "A smarter buying decision",
    trustDescription: "Specs that fit your needs and budget",
    floatingAiTitle: "Smart recommendations",
    floatingAiDescription: "Tailored to your needs",
    floatingBudgetTitle: "Budget comes first",
    floatingBudgetDescription: "Better value for your money",
    screenLabel: "Unlimited performance",
    heroBottom: "Find the right device for you",

    advisorBadge: "Personalized recommendations",
    advisorTitle: 'Let’s choose <span class="gradient-text">your next device.</span>',
    advisorDescription: "Answer a few simple questions to discover specifications suited to your needs.",
    stepLabel: "STEP 01 — YOUR DETAILS",
    formTitle: "What do you need?",
    budgetLabel: "Your budget",
    budgetHint: "Enter your budget in your selected currency.",
    currencyLabel: "Currency",
    currencyIQD: "Iraqi dinar",
    currencyUSD: "US dollar",
    deviceLabel: "Device type",
    devicePC: "Desktop PC",
    devicePCDesc: "More performance and upgrade options",
    deviceLaptop: "Laptop",
    deviceLaptopDesc: "Portable and convenient",
    usageLabel: "Primary use",
    usageGaming: "Gaming",
    usageGamingDesc: "Gaming",
    usageEditing: "Video & design",
    usageEditingDesc: "Creative",
    usageStudy: "Study & coding",
    usageStudyDesc: "Study & Code",
    usageOffice: "Everyday use",
    usageOfficeDesc: "Everyday",
    priorityLabel: "What matters most?",
    priorityPerformance: "Maximum performance",
    priorityValue: "Best value for money",
    priorityUpgrade: "Future upgradeability",
    priorityPortable: "Battery life and portability",
    priorityQuiet: "Quiet operation and efficiency",
    submitButton: "Analyze my needs",
    formDisclaimer: "Initial recommendations based on your budget and needs, not live market prices.",

    resultKicker: "Your result is waiting",
    resultTitle: "Your ideal device<br>is one step away.",
    resultDescription: "Enter your budget and preferences to discover specifications suited to you.",
    featureSpecs: "Suggested specifications",
    featureBudget: "Budget-conscious",
    featureUpgrade: "Upgrade advice",
    resetButton: "Try another budget",

    howBadge: "It's that simple",
    howTitle: 'Three steps, <span class="gradient-text">a smarter choice.</span>',
    howDescription: "You don't need to be a hardware expert to choose the right device.",
    howStep1Title: "Set your budget",
    howStep1Desc: "Enter the amount you want to spend on your new device.",
    howStep2Title: "Choose your use case",
    howStep2Desc: "Gaming, editing, studying, or everyday use.",
    howStep3Title: "Get your recommendation",
    howStep3Desc: "Explore suggested specifications and practical advice.",

    ctaBadge: "Your next step starts here",
    ctaTitle: "Don't spend more than you need.",
    ctaDescription: "A smarter choice today, a better experience every day.",
    ctaButton: "Start choosing",
    footerText: "Smarter tech choices, tailored to your budget.",

    errorBudget: "Please enter a valid budget greater than zero.",
    resultHeading: "Your personal recommendation",
    resultBadge: "Personalized",
    desktopGaming: "Balanced gaming desktop",
    desktopEditing: "Creative workstation desktop",
    desktopStudy: "Desktop for study and coding",
    desktopOffice: "Everyday desktop computer",
    laptopGaming: "Gaming laptop",
    laptopEditing: "Laptop for creative work",
    laptopStudy: "Laptop for study and coding",
    laptopOffice: "Everyday laptop",
    budgetTight: "Entry level",
    budgetMid: "Mid-range",
    budgetHigh: "High-end",
    budgetPremium: "Professional tier",
    recommendationIntro: "Suggested specifications based on your budget and intended use.",
    budgetUsed: "Your entered budget",
    specsTitle: "Suggested specifications",
    processor: "Processor",
    graphics: "Graphics",
    memory: "Memory (RAM)",
    storage: "Storage",
    display: "Display",
    motherboard: "Motherboard",
    power: "Power supply",
    cooling: "Cooling",
    battery: "Battery",
    portability: "Portability",
    adviceTitle: "Advisor's tip",
    adviceGaming: "For gaming, prioritize the graphics card and ensure the CPU can keep up. Aim for at least 16GB of RAM.",
    adviceEditing: "For video editing, prioritize a multicore CPU, 32GB of RAM when possible, fast SSD storage, and enough project space.",
    adviceStudy: "For studying and coding, prioritize a fast SSD, 16GB of RAM if possible, a comfortable display, and a good keyboard.",
    adviceOffice: "For everyday tasks, a dedicated graphics card is usually unnecessary. Invest in SSD storage, sufficient RAM, and a good display.",
    adviceLaptop: "For laptops, check actual GPU power, thermals, and battery life.",
    adviceDesktop: "A desktop often offers better performance per dollar and more flexibility for future upgrades.",
    adviceUpgrade: "Reserve part of your budget for accessories and future upgrades, and verify component compatibility.",
    adviceValue: "Compare local prices and real performance. Avoid paying a large premium for a small performance gain.",
    advicePortable: "If portability matters, consider weight and battery life, and check independent reviews.",
    adviceQuiet: "For a quieter computer, consider power efficiency, cooling quality, and fan noise.",
    adviceLowBudget: "With a tight budget, consider a well-tested used device or a basic system that can be upgraded later.",
    estimateLabel: "Budget estimate",
    estimateNote: "This is an approximate device tier, not a live quote or a guarantee of availability. Prices vary by country, retailer, and component condition.",
    desktop: "Desktop",
    laptop: "Laptop",
    gaming: "Gaming",
    editing: "Video & design",
    study: "Study & coding",
    office: "Everyday use",
    currencyError: "This budget may be too low for a new device. Consider increasing it or looking at a carefully inspected used device.",
    priceRange: "Price tier"
  }
};

/* ---------- Application State ---------- */

const state = {
  language: "ar",
  theme: "dark"
};

/* ---------- DOM Elements ---------- */

const form = document.getElementById("advisorForm");
const budgetInput = document.getElementById("budget");
const currencyLabel = document.getElementById("currencyLabel");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const languageToggle = document.getElementById("languageToggle");
const resultsPlaceholder = document.getElementById("resultsPlaceholder");
const resultsContent = document.getElementById("resultsContent");
const recommendationOutput = document.getElementById("recommendationOutput");
const resetButton = document.getElementById("resetButton");

const getElement = (id) => document.getElementById(id);

/* ---------- Translation ---------- */

function t(key) {
  return translations[state.language]?.[key]
    || translations.en[key]
    || key;
}

function applyLanguage(language) {
  state.language = language === "en" ? "en" : "ar";

  document.documentElement.lang = state.language;
  document.documentElement.dir =
    state.language === "ar" ? "rtl" : "ltr";

  document.body.dir =
    state.language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = translations[state.language][key];

    if (translated !== undefined) {
      element.innerHTML = translated;
    }
  });

  if (languageToggle) {
    const label = languageToggle.querySelector("span");

    if (label) {
      label.textContent = state.language === "ar" ? "EN" : "عربي";
    }

    languageToggle.setAttribute(
      "aria-label",
      state.language === "ar"
        ? "Switch to English"
        : "التبديل إلى العربية"
    );
  }

  document.title =
    state.language === "ar"
      ? "PC Advisor | مستشارك التقني"
      : "PC Advisor | Your Tech Advisor";

  updateCurrencyLabel();

  if (resultsContent && !resultsContent.hidden) {
    generateRecommendation();
  }

  applyTheme(state.theme);
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    applyLanguage(state.language === "ar" ? "en" : "ar");
  });
}

/* ---------- Dark / Light Theme ---------- */

function applyTheme(theme) {
  state.theme = theme === "light" ? "light" : "dark";

  document.body.classList.toggle(
    "light-mode",
    state.theme === "light"
  );

  if (themeIcon) {
    themeIcon.textContent =
      state.theme === "dark" ? "☀" : "☾";
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      state.language === "ar"
        ? (state.theme === "dark"
            ? "تفعيل الوضع الفاتح"
            : "تفعيل الوضع الداكن")
        : (state.theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode")
    );
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  });
}

/* ---------- Currency ---------- */

function getCurrency() {
  const selected = form?.querySelector(
    'input[name="currency"]:checked'
  );

  return selected?.value || "IQD";
}

function formatMoney(amount, currency = getCurrency()) {
  const locale =
    state.language === "ar" ? "ar-IQ" : "en-US";

  if (currency === "IQD") {
    const formatted = new Intl.NumberFormat(locale, {
      maximumFractionDigits: 0
    }).format(Math.round(amount));

    return formatted +
      (state.language === "ar" ? " د.ع" : " IQD");
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
}

function updateCurrencyLabel() {
  if (!currencyLabel) return;

  currencyLabel.textContent =
    getCurrency() === "IQD"
      ? (state.language === "ar" ? "د.ع" : "IQD")
      : "USD";
}

/* ---------- Selection Cards ---------- */

function updateSelectedCards() {
  document.querySelectorAll(".choice-card, .usage-card").forEach(
    (card) => {
      const input = card.querySelector("input");

      if (input) {
        card.classList.toggle("selected", input.checked);
      }
    }
  );
}

if (form) {
  form.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener("change", updateSelectedCards);
  });

  form.querySelectorAll('input[name="currency"]').forEach((input) => {
    input.addEventListener("change", () => {
      updateSelectedCards();
      updateCurrencyLabel();

      if (resultsContent && !resultsContent.hidden) {
        generateRecommendation();
      }
    });
  });
}

/* ---------- Recommendation Engine ---------- */

/* Approximate planning conversion only; not live exchange rates. */
const IQD_PER_USD = 1300;

function getBudgetUSD() {
  const enteredBudget = Number(budgetInput?.value);

  if (!Number.isFinite(enteredBudget) || enteredBudget <= 0) {
    return 0;
  }

  return getCurrency() === "IQD"
    ? enteredBudget / IQD_PER_USD
    : enteredBudget;
}

function getDeviceType() {
  return form?.querySelector('input[name="device"]:checked')?.value
    || "pc";
}

function getUsage() {
  return form?.querySelector('input[name="usage"]:checked')?.value
    || "study";
}

function getPriority() {
  return getElement("priority")?.value || "value";
}

function getTier(budgetUSD, device) {
  const minimum = device === "pc" ? 250 : 350;

  if (budgetUSD < minimum) return "tight";
  if (budgetUSD < 650) return "mid";
  if (budgetUSD < 1100) return "high";

  return "premium";
}

function getTierName(tier) {
  const names = {
    tight: "budgetTight",
    mid: "budgetMid",
    high: "budgetHigh",
    premium: "budgetPremium"
  };

  return t(names[tier] || "budgetTight");
}

function getProductTitle(device, usage) {
  const deviceName = device === "pc" ? "desktop" : "laptop";

  const usageNames = {
    gaming: "Gaming",
    editing: "Editing",
    study: "Study",
    office: "Office"
  };

  return t(deviceName + (usageNames[usage] || "Study"));
}

/* ---------- Desktop Specifications ---------- */

function buildPCSpecs(tier, usage, priority) {
  let cpu;
  let gpu;
  let ram;
  let storage;
  let motherboard;
  let power;
  let cooling;

  if (tier === "tight") {
    cpu = "AMD Ryzen 5 5600G / Intel Core i3";
    gpu = "Integrated graphics / used entry GPU";
    ram = "16GB DDR4";
    storage = "500GB NVMe SSD";
    motherboard = "Compatible entry-level board";
    power = "Quality 450–550W PSU";
    cooling = "Stock cooler with good airflow";

  } else if (tier === "mid") {
    cpu = "AMD Ryzen 5 5600 / Intel Core i5";
    gpu = usage === "gaming"
      ? "Radeon RX 6600 / similar GPU"
      : "Entry or midrange dedicated GPU";
    ram = usage === "editing" ? "32GB DDR4" : "16–32GB DDR4";
    storage = "1TB NVMe SSD";
    motherboard = "B550 / compatible B-series board";
    power = "Quality 550–650W PSU";
    cooling = "Tower air cooler";

  } else if (tier === "high") {
    cpu = "AMD Ryzen 5 7600 / Intel Core i5";
    gpu = usage === "gaming"
      ? "Radeon RX 7700 XT / RTX 4060-class"
      : "Midrange GPU with suitable VRAM";
    ram = "32GB DDR5";
    storage = "1TB–2TB NVMe SSD";
    motherboard = "B650 / compatible modern board";
    power = "Quality 650–750W PSU";
    cooling = "Quality tower air cooler";

  } else {
    cpu = usage === "editing"
      ? "Ryzen 7 / Ryzen 9 or Intel Core Ultra 7-class"
      : "Ryzen 7 / Intel Core Ultra 7-class";
    gpu = usage === "gaming"
      ? "RTX 4070-class or better, based on local pricing"
      : "Powerful GPU suited to your workload";
    ram = usage === "editing" ? "32–64GB DDR5" : "32GB DDR5";
    storage = "2TB NVMe SSD";
    motherboard = "Quality compatible B-series / Z-series board";
    power = "Quality 750–850W PSU, matched to GPU";
    cooling = "High-quality air or liquid cooling as needed";
  }

  if (priority === "upgrade") {
    motherboard += "; prioritize upgrade support";
  }

  if (priority === "quiet") {
    cooling += "; prioritize low-noise fans";
  }

  if (usage === "office") {
    gpu = "Integrated graphics are usually sufficient";
  } else if (usage === "study") {
    gpu = "Integrated graphics or an entry GPU";
  }

  return [
    ["processor", cpu],
    ["graphics", gpu],
    ["memory", ram],
    ["storage", storage],
    ["motherboard", motherboard],
    ["power", power],
    ["cooling", cooling]
  ];
}

/* ---------- Laptop Specifications ---------- */

function buildLaptopSpecs(tier, usage, priority) {
  let cpu;
  let gpu;
  let ram;
  let storage;
  let display;
  let battery;
  let portability;

  if (tier === "tight") {
    cpu = "Recent Ryzen 5 / Intel Core i5 U-series";
    gpu = "Integrated graphics";
    ram = "16GB RAM, preferably upgradeable";
    storage = "512GB NVMe SSD";
    display = "1080p IPS";
    battery = "Check independent battery tests";
    portability = "Lightweight everyday chassis";

  } else if (tier === "mid") {
    cpu = "Ryzen 5 / Intel Core i5 H- or U-series";
    gpu = usage === "gaming"
      ? "Entry dedicated GPU if affordable"
      : "Integrated or entry dedicated GPU";
    ram = usage === "editing"
      ? "32GB RAM"
      : "16GB RAM, upgradeable if possible";
    storage = "512GB–1TB NVMe SSD";
    display = "1080p IPS, good color coverage for creative work";
    battery = "Compare real-world battery reviews";
    portability = "Balanced size and weight";

  } else if (tier === "high") {
    cpu = "Ryzen 7 / Intel Core i7 H-series-class";
    gpu = usage === "gaming"
      ? "RTX 4060-class laptop GPU or comparable"
      : "Dedicated GPU suited to your software";
    ram = "32GB RAM preferred for editing";
    storage = "1TB NVMe SSD";
    display = usage === "editing"
      ? "Color-accurate display"
      : "1080p–1600p high-refresh display";
    battery = "Check battery capacity and reviews";
    portability = "Performance-focused laptop";

  } else {
    cpu = "High-performance Ryzen 7/9 or Intel Core Ultra 7/9-class";
    gpu = usage === "gaming"
      ? "Higher-tier RTX laptop GPU, subject to local prices"
      : "Powerful dedicated GPU for creative workloads";
    ram = "32GB RAM or more";
    storage = "1TB–2TB NVMe SSD";
    display = usage === "editing"
      ? "High-resolution, color-accurate display"
      : "High-refresh 1600p-class display";
    battery = "Check independent battery and thermal tests";
    portability = "Choose chassis size based on travel needs";
  }

  if (usage === "office" || usage === "study") {
    gpu = "Modern integrated graphics are generally sufficient";
  }

  if (priority === "portable") {
    portability = "Prioritize a lightweight chassis and efficient CPU";
    battery = "Prioritize verified long battery life";
  }

  if (priority === "quiet") {
    portability += "; check fan-noise reviews";
  }

  return [
    ["processor", cpu],
    ["graphics", gpu],
    ["memory", ram],
    ["storage", storage],
    ["display", display],
    ["battery", battery],
    ["portability", portability]
  ];
}

/* ---------- Advisor Tips ---------- */

function getAdvice(usage, device, priority, tier) {
  const advice = [];

  const usageAdvice = {
    gaming: "adviceGaming",
    editing: "adviceEditing",
    study: "adviceStudy",
    office: "adviceOffice"
  };

  advice.push(t(usageAdvice[usage] || "adviceStudy"));

  advice.push(
    t(device === "laptop" ? "adviceLaptop" : "adviceDesktop")
  );

  const priorityAdvice = {
    performance: null,
    value: "adviceValue",
    upgrade: "adviceUpgrade",
    portable: "advicePortable",
    quiet: "adviceQuiet"
  };

  if (priorityAdvice[priority]) {
    advice.push(t(priorityAdvice[priority]));
  }

  if (tier === "tight") {
    advice.push(t("adviceLowBudget"));
  }

  return advice;
}

/* ---------- Render Recommendation ---------- */

function generateRecommendation() {
  if (!form || !budgetInput || !recommendationOutput) {
    console.error("PC Advisor: Required HTML elements are missing.");
    return;
  }

  const budgetUSD = getBudgetUSD();

  if (!Number.isFinite(budgetUSD) || budgetUSD <= 0) {
    return;
  }

  const device = getDeviceType();
  const usage = getUsage();
  const priority = getPriority();
  const tier = getTier(budgetUSD, device);
  const budgetAmount = Number(budgetInput.value);
  const currency = getCurrency();

  const title = getProductTitle(device, usage);

  const specs = device === "pc"
    ? buildPCSpecs(tier, usage, priority)
    : buildLaptopSpecs(tier, usage, priority);

  const advice = getAdvice(usage, device, priority, tier);

  const minimumUSD = device === "pc" ? 250 : 350;
  const belowMinimum = budgetUSD < minimumUSD;

  const formattedBudget = formatMoney(budgetAmount, currency);

  const specHTML = specs.map(([name, value]) => `
    <div class="spec-item">
      <span class="spec-name">${escapeHTML(t(name))}</span>
      <span class="spec-value">${escapeHTML(value)}</span>
    </div>
  `).join("");

  const adviceHTML = advice.map((item) => `
    <p>${escapeHTML(item)}</p>
  `).join("");

  recommendationOutput.innerHTML = `
    <div class="result-topline">
      <div>
        <span class="result-kicker">
          ${escapeHTML(t("resultHeading"))}
        </span>
        <h3>${escapeHTML(t("resultHeading"))}</h3>
      </div>

      <span class="result-badge">
        ${escapeHTML(t("resultBadge"))}
      </span>
    </div>

    <div class="recommendation-hero">
      <div class="recommendation-icon">
        ${device === "pc" ? "▣" : "▱"}
      </div>

      <h4>${escapeHTML(title)}</h4>

      <p>${escapeHTML(t("recommendationIntro"))}</p>

      <div class="recommendation-price">
        <span>${escapeHTML(t("budgetUsed"))}</span>
        <strong>${escapeHTML(formattedBudget)}</strong>
      </div>

      <div class="recommendation-price">
        <span>${escapeHTML(t("priceRange"))}</span>
        <strong>${escapeHTML(getTierName(tier))}</strong>
      </div>
    </div>

    ${belowMinimum ? `
      <div class="result-advice">
        <h4>${escapeHTML(t("adviceTitle"))}</h4>
        <p>${escapeHTML(t("currencyError"))}</p>
      </div>
    ` : ""}

    <div class="specs-heading">
      <h4>${escapeHTML(t("specsTitle"))}</h4>
      <span>
        ${escapeHTML(t(device === "pc" ? "desktop" : "laptop"))}
      </span>
    </div>

    <div class="spec-list">${specHTML}</div>

    <div class="result-advice">
      <h4>✦ ${escapeHTML(t("adviceTitle"))}</h4>
      ${adviceHTML}
    </div>

    <p class="result-note">
      ${escapeHTML(t("estimateNote"))}
    </p>
  `;

  if (resultsPlaceholder) {
    resultsPlaceholder.hidden = true;
  }

  if (resultsContent) {
    resultsContent.hidden = false;
  }
}

/* ---------- Escape HTML ---------- */

function escapeHTML(value) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };

  return String(value).replace(/[&<>"']/g, (character) => {
    return entities[character];
  });
}

/* ---------- Form Events ---------- */

if (form && budgetInput) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const budget = Number(budgetInput.value);

    if (!Number.isFinite(budget) || budget <= 0) {
      budgetInput.setCustomValidity(t("errorBudget"));
      budgetInput.reportValidity();
      budgetInput.setCustomValidity("");
      budgetInput.focus();
      return;
    }

    generateRecommendation();

    const resultsPanel = getElement("resultsPanel");

    if (resultsPanel) {
      resultsPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });

  budgetInput.addEventListener("input", () => {
    budgetInput.setCustomValidity("");
  });
}

/* ---------- Reset Button ---------- */

if (resetButton) {
  resetButton.addEventListener("click", () => {
    if (resultsContent) {
      resultsContent.hidden = true;
    }

    if (resultsPlaceholder) {
      resultsPlaceholder.hidden = false;
    }

    const advisor = getElement("advisor");

    if (advisor) {
      advisor.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    budgetInput?.focus();
  });
}

/* ---------- Footer Year ---------- */

const currentYear = getElement("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* ---------- Initial Setup ---------- */

applyTheme("dark");
applyLanguage("ar");
updateSelectedCards();
updateCurrencyLabel();
