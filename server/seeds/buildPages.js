const { loadDataFile, loadNamedModule } = require('./loadClientData');

function buildPageContentEntries() {
  const home = loadNamedModule('homeContent.js');
  const aboutEngagement = loadNamedModule('aboutEngagement.js');
  const aboutIndustries = loadNamedModule('aboutIndustries.js');
  const aboutMarkets = loadNamedModule('aboutMarkets.js');
  const aboutWhyWin = loadNamedModule('aboutWhyWin.js');
  const aboutCoreServices = loadNamedModule('aboutCoreServices.js');
  const aboutFounder = loadNamedModule('aboutFounder.js');
  const aboutGrowthFramework = loadNamedModule('aboutGrowthFramework.js');
  const aboutSolution = loadNamedModule('aboutSolution.js');
  const b2bPageContent = loadNamedModule('b2bPageContent.js');
  const b2bPage = loadNamedModule('b2bPage.js');
  const servicesPageContent = loadNamedModule('servicesPageContent.js');
  const servicesCatalog = loadNamedModule('servicesCatalog.js');
  const servicesIndividual = loadNamedModule('servicesIndividual.js');
  const servicesProduction = loadNamedModule('servicesProduction.js');
  const servicesRetainers = loadNamedModule('servicesRetainers.js');
  const servicesClosingCta = loadNamedModule('servicesClosingCta.js');
  const servicesImportantNotes = loadNamedModule('servicesImportantNotes.js');
  const contactPageContent = loadNamedModule('contactPageContent.js');
  const teamPageContent = loadNamedModule('teamPageContent.js');
  const testimonialsPageContent = loadNamedModule('testimonialsPageContent.js');
  const portfolioPageContent = loadNamedModule('portfolioPageContent.js');
  const teamPage = loadNamedModule('teamPage.js');
  const servicesModule = loadNamedModule('services.js');

  const launchPackages = servicesModule.launchPackages || [];

  return [
    {
      key: 'home-content',
      content: {
        whyIntro: home.whyIntro,
        whyItems: home.whyItems,
        processSteps: home.processSteps,
        growthBuildCards: home.growthBuildCards,
        homeProofCards: home.homeProofCards,
      },
    },
    { key: 'about-engagement', content: { aboutEngagementStats: aboutEngagement.aboutEngagementStats } },
    { key: 'about-industries', content: { aboutIndustries: aboutIndustries.aboutIndustries } },
    { key: 'about-markets', content: { aboutMarkets: aboutMarkets.aboutMarkets } },
    { key: 'about-why-win', content: { aboutWhyWinItems: aboutWhyWin.aboutWhyWinItems } },
    {
      key: 'about-core-services',
      content: {
        aboutCoreServiceRows: aboutCoreServices.aboutCoreServiceRows,
        aboutCoreServicesFootnote: aboutCoreServices.aboutCoreServicesFootnote,
        aboutMissionVision: aboutCoreServices.aboutMissionVision,
      },
    },
    {
      key: 'about-founder',
      content: {
        founderAchievements: aboutFounder.founderAchievements,
        founderCertifications: aboutFounder.founderCertifications,
        founderCertsLabel: aboutFounder.founderCertsLabel,
        founderCertsFoot: aboutFounder.founderCertsFoot,
      },
    },
    { key: 'about-growth-framework', content: { aboutGrowthPhases: aboutGrowthFramework.aboutGrowthPhases } },
    {
      key: 'about-solution',
      content: {
        aboutSolutionLayers: aboutSolution.aboutSolutionLayers,
        aboutSolutionTagline: aboutSolution.aboutSolutionTagline,
      },
    },
    {
      key: 'b2b-page',
      content: {
        ...b2bPageContent,
        b2bServices: b2bPage.b2bServices,
        b2bProblems: b2bPage.b2bProblems,
        b2bSolutions: b2bPage.b2bSolutions,
        b2bWhyCards: b2bPage.b2bWhyCards,
      },
    },
    {
      key: 'services-page',
      content: {
        servicesHeroContent: servicesPageContent.servicesHeroContent,
        servicesPillarsContent: servicesPageContent.servicesPillarsContent,
        catalog: servicesCatalog.servicesCatalog,
        individual: servicesIndividual.servicesIndividual,
        servicesIndividualIntro: servicesIndividual.servicesIndividualIntro,
        production: servicesProduction.servicesProduction,
        servicesProductionIntro: servicesProduction.servicesProductionIntro,
        retainersIntro: servicesRetainers.servicesRetainersIntro,
        retainersRows: servicesRetainers.servicesRetainersRows,
        closingCta: servicesClosingCta.servicesClosingCta,
        importantNotesIntro: servicesImportantNotes.servicesImportantNotesIntro,
        importantNotes: servicesImportantNotes.servicesImportantNotes,
        launchPackages,
      },
    },
    { key: 'contact-page', content: { ...contactPageContent } },
    {
      key: 'team-page',
      content: {
        hiringPerks: teamPage.hiringPerks,
        coreTeam: teamPage.coreTeam,
      },
    },
    { key: 'team-page-content', content: { ...teamPageContent } },
    { key: 'testimonials-page', content: { ...testimonialsPageContent } },
    { key: 'portfolio-page', content: { ...portfolioPageContent } },
  ];
}

module.exports = { buildPageContentEntries };
