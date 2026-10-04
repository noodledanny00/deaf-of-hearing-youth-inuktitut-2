// Tab Switching Functionality
function switchTab(evt, tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const activeContent = document.getElementById(tabId);
  if (activeContent) activeContent.classList.add('active');

  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
  }
}

// Switch Tabs Directly from Footer
function switchTabDirect(tabId) {
  const buttons = document.querySelectorAll('.tab-btn');
  const targetBtn = Array.from(buttons).find(btn => 
    btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${tabId}'`)
  );

  if (targetBtn) {
    targetBtn.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Modal Windows Controls
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// Multilingual Dictionary (Updated with About Us Translations)
const translations = {
  en: {
    siteTitle: "Inuktitut Sign Language & Youth Resources",
    navHome: "Home", navAbout: "About Us", navVideos: "Videos", navCulture: "Inuit Sign Language", navCommunity: "Youth Forum", navResources: "Resources", navExplore: "Explore More!",
    homeTitle: "Welcome / Tunngasugit", homeDesc: "Supporting Deaf and Hard of Hearing Inuit youth with accessible resources, language learning, and community connection across Nunavut.",
    aboutTitle: "About Us", aboutDesc: "We are dedicated to supporting Deaf and Hard of Hearing Inuit youth across Nunavut. Our mission is to promote accessibility, protect and share Inuit Sign Language (ISL), and build a connected community where young people can thrive.",
    aboutMDesc: "To ensure every Deaf and Hard of Hearing youth in Nunavut has access to language, culture, educational tools, and strong peer support networks.",
    aboutVDesc: "An inclusive Arctic where Inuit Sign Language is celebrated, preserved, and widely recognized alongside Nunavut's official languages.",
    aboutWDesc: "We connect youth with educational videos, language resources, community events, and advocacy organizations dedicated to Deaf rights and Arctic accessibility.",
    videosTitle: "Video Resources", videosDesc: "Watch video stories, signed tutorials, and community updates curated for youth.",
    cultureTitle: "Inuit Sign Language (ISL)", cultureDesc: "Learn about Inuit Sign Language history, indigenous signed dialects, and ongoing cultural preservation efforts.",
    communityTitle: "Youth Community", communityDesc: "Connect with other youth, join discussions, share experiences, and learn about local Arctic events.",
    resourcesTitle: "Helpful Resource Links", resourcesDesc: "Explore official Government of Nunavut portals, Inuit Sign Language initiatives, and youth support networks:",
    exploreTitle: "Explore More!", exploreDesc: "Watch featured videos highlighting Nunavut life, culture, community, and language initiatives:",
    vid1Title: "Come to Nunavut - English/Innuinaqtun", vid1Desc: "Discover the vibrant land, culture, performing arts, and fast-growing youth community across Nunavut.",
    vid2Title: "Life in Iqaluit Nunavut", vid2Desc: "Explore daily life in Iqaluit, local architecture, arctic community traditions, and local highlights.",
    vid3Title: "Iqaluit, NU - Culture & Youth Heritage", vid3Desc: "A deep dive into Iqaluit's diverse community and how youth are reclaiming their language and culture.",
    fNavAbout: "About Us", fNavExplore: "Explore More!"
  },
  iu: {
    siteTitle: "ᐃᓄᒃᑎᑐᑦ ᐊᒡᒐᐃᑦ ᐅᖃᐅᓯᖓ ᐊᒻᒪ ᐃᓅᓱᒃᑐᓄᑦ ᐃᑲᔪᕈᑎᒃᓴᑦ",
    navHome: "ᐊᐃᑉᐸᖓ", navAbout: "ᐅᕙᒍᑦ ᒥᒃᓵᓄᑦ", navVideos: "ᑕᕐᕆᔭ glass", navCulture: "ᐃᓄᐃᑦ ᐊᒡᒐᐃᑦ ᐅᖃᐅᓯᖓ", navCommunity: "ᐃᓅᓱᒃᑐᑦ ᑲᑎᕝᕕᖓ", navResources: "ᐃᑲᔪᕈᑎᒃᓴᑦ", navExplore: "ᖃᐅᔨᒋᐊᒃᑲᓐᓂᕆᑦ!",
    homeTitle: "ᑐᓐᖓᓱᒋᑦ (Tunngasugit)", homeDesc: "ᐃᑲᔪᖅᑐᐃᓂᖅ ᑐᓵᔪᓐᓇᖏᑦᑐᓂᒃ ᐊᒻᒪ ᑐᓵᑦᑎᐊᖏᑦᑐᓂᒃ ᐃᓄᐃᑦ ᐃᓅᓱᒃᑐᓂᒃ ᐃᑲᔪᕈᑎᒃᓴᓂᒃ.",
    aboutTitle: "ᐅᕙᒍᑦ ᒥᒃᓵᓄᑦ", aboutDesc: "ᐃᑲᔪᖅᑐᐃᕗᒍᑦ ᑐᓵᔪᓐᓇᖏᑦᑐᓂᒃ ᐊᒻᒪ ᑐᓵᑦᑎᐊᖏᑦᑐᓂᒃ ᐃᓄᐃᑦ ᐃᓅᓱᒃᑐᓂᒃ ᓄᓇᕗᓕᒫᒥ.",
    aboutMDesc: "ᐃᑲᔪᖅᑐᐃᓂᖅ ᐃᓅᓱᒃᑐᓂᒃ ᐅᖃᐅᓯᒃᑯᑦ, ᐃᓕᖅᑯᓯᒃᑯᑦ, ᐊᒻᒪ ᐃᓕᓐᓂᐊᕈᑎᒃᓴᑎᒍᑦ.",
    aboutVDesc: "ᓄᓇᕗᒻᒥ ᐃᓄᐃᑦ ᐊᒡᒐᐃᑦ ᐅᖃᐅᓯᖓ ᐃᓕᑕᕆᔭᐅᓯᒪᓗᓂ ᐊᒻᒪ ᐱᓯᒪᔭᐅᑦᑎᐊᕐᓗᓂ.",
    aboutWDesc: "ᑲᑎᑎᑦᑎᓂᖅ ᐃᓅᓱᒃᑐᓂᒃ ᑕᕐᕆᔭ glass ᒃᓴᓄᑦ ᐊᒻᒪ ᐃᑲᔪᕈᑎᒃᓴᓄᑦ.",
    videosTitle: "ᑕᕐᕆᔭ glass ᐃᑲᔪᕈᑎᒃᓴᑦ", videosDesc: "ᑕᑯᒃᓴᐅᔪᑦ, ᐊᒡᒐᒥᒍᑦ ᐅᖃᐅᓯᓕᕆᔪᑦ, ᐊᒻᒪ ᓄᓇᓕᖕᓂ ᑐᓴᖅᑕᐅᔪᒃᓴᑦ.",
    cultureTitle: "ᐃᓄᐃᑦ ᐊᒡᒐᐃᑦ ᐅᖃᐅᓯᖓ (ISL)", cultureDesc: "ᐃᓕᓐᓂᐊᕐᓂᖅ ᐃᓄᐃᑦ ᐊᒡᒐᐃᑦ ᐅᖃᐅᓯᖓᑕ ᒥᒃᓵᓄᑦ ᐊᒻᒪ ᐃᓕᖅᑯᓯᕐᒥᒃ ᐱᓯᒪᐃᓐᓇᕐᓂᕐᒥᒃ.",
    communityTitle: "ᐃᓅᓱᒃᑐᑦ ᓄᓇᓕᖓ", communityDesc: "ᑲᑎᖃᑎᖃᕐᓂᖅ ᐃᓅᓱᒃᑐᓂᒃ ᐊᒻᒪ ᓄᓇᓕᖕᓂ ᖃᓄᐃᓕᐅᕈᑕᐅᔪᓂᒃ.",
    resourcesTitle: "ᐃᑲᔪᕈᑎᒃᓴᑦ ᐃᑭᐊᖅPath", resourcesDesc: "ᕿᒥᕐᕈᓗᑎᑦ ᓄᓇᕗᑦ ᒐᕙᒪᖓᑕ ᐃᑭᐊᖅPathᖏᓐᓂᒃ ᐊᒻᒪ ᐃᓅᓱᒃᑐᓄᑦ ᐃᑲᔪᖅᑐᐃᔨᓂᒃ:",
    exploreTitle: "ᖃᐅᔨᒋᐊᒃᑲᓐᓂᕆᑦ!", exploreDesc: "ᑕᕐᕆᔭ glass ᓗᒋᑦ ᑕᑯᒃᓴᐅᑎᑦᑎᔪᑦ ᐃᓅᓯᕐᒥᒃ, ᐃᓕᖅᑯᓯᕐᒥᒃ, ᐊᒻᒪ ᐃᓄᐃᑦ ᐊᒡᒐᐃᑦ ᐅᖃᐅᓯᖓᓐᓂᒃ ᓄᓇᕗᒻᒥ:",
    vid1Title: "ᖃᐃᒋᑦ ᓄᓇᕗᒻᒧᑦ - English/Innuinaqtun", vid1Desc: "ᑕᑯᔭᖅᑐᕐᓗᒍ ᓄᓇ, ᐃᓕᖅᑯᓯᖅ, ᐊᒻᒪ ᐃᓅᓱᒃᑐᑦ ᓄᓇᕗᒻᒥ.",
    vid2Title: "ᐃᓅᓯᖅ ᐃᖃᓗᓐᓂ ᓄᓇᕗᒻᒥ", vid2Desc: "ᖃᐅᔨᒋᐊᕐᓗᒍ ᖃᐅᑕᒫᑦ ᐃᓅᓯᖅ ᐃᖃᓗᓐᓂ, ᐃᒡᓗᐃᑦ ᐊᒻᒪ ᐅᑭᐅᖅᑕᖅᑐᒥ ᐃᓕᖅᑯᓯᖅ.",
    vid3Title: "ᐃᖃᓗᐃᑦ, ᓄᓇᕗᑦ - ᐃᓕᖅᑯᓯᖅ ᐊᒻᒪ ᐃᓅᓱᒃᑐᑦ", vid3Desc: "ᖃᐅᔨᒋᐊᕐᓂᖅ ᐃᖃᓗᐃᑦ ᓄᓇᓕᖓᓐᓂᒃ ᐊᒻᒪ ᐃᓅᓱᒃᑐᑦ ᐅᑎᖅᑎᑦᑎᓂᖓᓐᓂᒃ ᐅᖃᐅᓯᕐᒥᒃ.",
    fNavAbout: "ᐅᕙᒍᑦ ᒥᒃᓵᓄᑦ", fNavExplore: "ᖃᐅᔨᒋᐊᒃᑲᓐᓂᕆᑦ!"
  },
  ikt: {
    siteTitle: "Inuinnaqtun Uqauhiit & Nutaraat Ikayuutiit",
    navHome: "Aullaqtiqvighaq", navAbout: "Uvaptiknik", navVideos: "Pikutat", navCulture: "Inuit Sign Language", navCommunity: "Inulrammiit Forum", navResources: "Ikayuutighat", navExplore: "Qiniqhiavaffiarit!",
    homeTitle: "Tunngahugit / Quana", homeDesc: "Ikayuqtuqtaat Naalattiangittut nutaraat Nunavunmi ikayuutighatigut.",
    aboutTitle: "Uvaptiknik", aboutDesc: "Ikayuqtuqtavut Naalattiangittut inulrammiit Nunavunmi uqauhiitigut unalu ilitquhitigut.",
    aboutMDesc: "Nutaraat Nunavunmi tamarmik ikayuutighatigut unalu ilinniarutighatigut.",
    aboutVDesc: "Inuit Uqauhiit ilitariyauhimayuq unalu tamaqtailimayuq.",
    aboutWDesc: "Katitigut inulrammiit pikutatigut unalu ikayuutitigut.",
    videosTitle: "Pikutat Ikayuutighat", videosDesc: "Qiniqlugit pikutat unalu nutaraat tusaqtitauyut.",
    cultureTitle: "Inuit Sign Language (ISL)", cultureDesc: "Ilinniarlahiit Inuit Uqauhiit unalu ilitquhit.",
    communityTitle: "Inulrammiit Katilviit", communityDesc: "Katilugit inulrammiit, uqalaqataulutik.",
    resourcesTitle: "Ikayuutighat Kangiqhitiit", resourcesDesc: "Qiniqlugit Nunavut Kavamatkunni ikayuutit.",
    exploreTitle: "Qiniqhiavaffiarit!", exploreDesc: "Qiniqlugit pikutat uqauhiitigut unalu inulrammiini Nunavunmi:",
    vid1Title: "Qailirit Nunavunmun - English/Innuinaqtun", vid1Desc: "Qiniqlugu nuna, ilitquhit, unalu inulrammiit Nunavunmi.",
    vid2Title: "Inuuniq Iqalungni Nunavut", vid2Desc: "Qiniqlugu qautamaat inuuniq Iqalungni unalu ukiuqtaqtumi ilitquhit.",
    vid3Title: "Iqaluit, NU - Ilitquhiit unalu Nutaraat", vid3Desc: "Inulrammiit utiqtitait uqauhiit unalu ilitquhiinik.",
    fNavAbout: "Uvaptiknik", fNavExplore: "Qiniqhiavaffiarit!"
  },
  fr: {
    siteTitle: "Langue des signes inuite et ressources pour les jeunes",
    navHome: "Accueil", navAbout: "À propos", navVideos: "Vidéos", navCulture: "Langue des signes inuite", navCommunity: "Forum Jeunesse", navResources: "Ressources", navExplore: "Explorer Plus!",
    homeTitle: "Bienvenue / Tunngasugit", homeDesc: "Soutien aux jeunes Inuits sourds et malentendants avec des ressources accessibles.",
    aboutTitle: "À propos de nous", aboutDesc: "Nous nous consacrons au soutien des jeunes Inuits sourds et malentendants du Nunavut en promouvant l'accessibilité et la langue des signes inuite (ISL).",
    aboutMDesc: "Offrir à chaque jeune sourd du Nunavut un accès à la langue, à la culture et à un réseau d'entraide.",
    aboutVDesc: "Un Arctique inclusif où la langue des signes inuite est célébrée et préservée.",
    aboutWDesc: "Mettre en relation les jeunes avec des vidéos éducatives, des ressources linguistiques et des événements.",
    videosTitle: "Ressources Vidéo", videosDesc: "Regardez des histoires en vidéo, des tutoriels signés et des nouvelles.",
    cultureTitle: "Langue des signes inuite (ISL)", cultureDesc: "Découvrez l'histoire, les signes et la préservation culturelle.",
    communityTitle: "Communauté Jeunesse", communityDesc: "Connectez-vous avec d'autres jeunes et participez aux événements.",
    resourcesTitle: "Liens Utiles", resourcesDesc: "Explorez les portails du gouvernement du Nunavut et les réseaux de soutien:",
    exploreTitle: "Explorer Plus!", exploreDesc: "Regardez des vidéos mettant en valeur la vie, la culture et la langue au Nunavut :",
    vid1Title: "Venez au Nunavut - Anglais/Innuinaqtun", vid1Desc: "Découvrez le territoire, la culture et la jeunesse en pleine croissance au Nunavut.",
    vid2Title: "La vie à Iqaluit au Nunavut", vid2Desc: "Explorez la vie quotidienne à Iqaluit, l'architecture et les traditions nordiques.",
    vid3Title: "Iqaluit, NU - Culture et patrimoine", vid3Desc: "Une plongée dans la communauté d'Iqaluit et la réappropriation de la culture par les jeunes.",
    fNavAbout: "À propos", fNavExplore: "Explorer Plus!"
  }
};

function changeLanguage(langKey) {
  const t = translations[langKey] || translations['en'];

  const setTxt = (id, text) => {
    const el = document.getElementById(id);
    if (el && text) el.innerText = text;
  };

  setTxt('site-title', t.siteTitle);
  setTxt('nav-home', t.navHome);
  setTxt('nav-about', t.navAbout);
  setTxt('nav-videos', t.navVideos);
  setTxt('nav-culture', t.navCulture);
  setTxt('nav-community', t.navCommunity);
  setTxt('nav-resources', t.navResources);
  setTxt('nav-explore', t.navExplore);

  setTxt('home-title', t.homeTitle);
  setTxt('home-desc', t.homeDesc);
  setTxt('about-title', t.aboutTitle);
  setTxt('about-desc', t.aboutDesc);
  setTxt('about-m-desc', t.aboutMDesc);
  setTxt('about-v-desc', t.aboutVDesc);
  setTxt('about-w-desc', t.aboutWDesc);

  setTxt('videos-title', t.videosTitle);
  setTxt('videos-desc', t.videosDesc);
  setTxt('culture-title', t.cultureTitle);
  setTxt('culture-desc', t.cultureDesc);
  setTxt('community-title', t.communityTitle);
  setTxt('community-desc', t.communityDesc);
  setTxt('resources-title', t.resourcesTitle);
  setTxt('resources-desc', t.resourcesDesc);

  setTxt('explore-title', t.exploreTitle);
  setTxt('explore-desc', t.exploreDesc);
  setTxt('vid1-title', t.vid1Title);
  setTxt('vid1-desc', t.vid1Desc);
  setTxt('vid2-title', t.vid2Title);
  setTxt('vid2-desc', t.vid2Desc);
  setTxt('vid3-title', t.vid3Title);
  setTxt('vid3-desc', t.vid3Desc);

  if (t.fNavAbout) setTxt('f-nav-about', t.fNavAbout);
  if (t.fNavExplore) setTxt('f-nav-explore', t.fNavExplore);
}
