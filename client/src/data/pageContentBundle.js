import {
  whyIntro,
  whyItems,
  whyTrustBrands,
  whyFeaturePillars,
  processSteps,
  growthBuildCards,
  homeProofCards,
} from './homeContent';
import * as aboutEngagement from './aboutEngagement';
import * as aboutIndustries from './aboutIndustries';
import * as aboutMarkets from './aboutMarkets';
import * as aboutWhyWin from './aboutWhyWin';
import * as aboutCoreServices from './aboutCoreServices';
import * as aboutFounder from './aboutFounder';
import * as aboutGrowthFramework from './aboutGrowthFramework';
import * as aboutSolution from './aboutSolution';
import * as b2bPageContent from './b2bPageContent';
import * as b2bPage from './b2bPage';
import * as servicesPageContent from './servicesPageContent';
import * as servicesCatalog from './servicesCatalog';
import * as servicesIndividual from './servicesIndividual';
import * as servicesProduction from './servicesProduction';
import * as servicesRetainers from './servicesRetainers';
import * as servicesClosingCta from './servicesClosingCta';
import * as servicesImportantNotes from './servicesImportantNotes';
import * as contactPageContent from './contactPageContent';
import * as teamPageContent from './teamPageContent';
import * as testimonialsPageContent from './testimonialsPageContent';
import * as portfolioPageContent from './portfolioPageContent';
import { hiringPerks, leadership, coreTeam } from './teamPage';
import { launchPackages } from './services';
import { CLIENT_LOGOS } from './clientLogos';

const PAGE_CONTENT = {
  'home-content': {
    whyIntro,
    whyItems,
    whyTrustBrands,
    whyFeaturePillars,
    processSteps,
    growthBuildCards,
    homeProofCards,
  },
  'about-engagement': {
    aboutEngagementStats: aboutEngagement.aboutEngagementStats,
  },
  'about-industries': {
    aboutIndustries: aboutIndustries.aboutIndustries,
  },
  'about-markets': {
    aboutMarkets: aboutMarkets.aboutMarkets,
  },
  'about-why-win': {
    aboutWhyWinItems: aboutWhyWin.aboutWhyWinItems,
  },
  'about-core-services': {
    aboutCoreServiceRows: aboutCoreServices.aboutCoreServiceRows,
    aboutCoreServicesFootnote: aboutCoreServices.aboutCoreServicesFootnote,
    aboutMissionVision: aboutCoreServices.aboutMissionVision,
  },
  'about-founder': {
    founderAchievements: aboutFounder.founderAchievements,
    founderCertifications: aboutFounder.founderCertifications,
    founderCertsLabel: aboutFounder.founderCertsLabel,
    founderCertsFoot: aboutFounder.founderCertsFoot,
  },
  'about-growth-framework': {
    aboutGrowthPhases: aboutGrowthFramework.aboutGrowthPhases,
  },
  'about-solution': {
    aboutSolutionLayers: aboutSolution.aboutSolutionLayers,
    aboutSolutionTagline: aboutSolution.aboutSolutionTagline,
  },
  'b2b-page': {
    ...b2bPageContent,
    b2bServices: b2bPage.b2bServices,
    b2bProblems: b2bPage.b2bProblems,
    b2bSolutions: b2bPage.b2bSolutions,
    b2bWhyCards: b2bPage.b2bWhyCards,
  },
  'services-page': {
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
  'contact-page': { ...contactPageContent },
  'team-page': { hiringPerks, leadership, coreTeam },
  'team-page-content': { ...teamPageContent },
  'testimonials-page': { ...testimonialsPageContent },
  'portfolio-page': { ...portfolioPageContent },
};

export const STATIC_FAQS = [
  {
    q: 'How do you start a new project?',
    a: 'We begin with a free discovery call to understand your business goals, target audience, and challenges. Then we craft a tailored strategy before any work begins.',
  },
  {
    q: 'Can you work with small businesses?',
    a: 'Absolutely. We work with startups, SMEs, and enterprises across UAE, UK, and Pakistan. Every package is designed to deliver ROI regardless of business size.',
  },
  {
    q: 'Will I be involved in the process?',
    a: "Yes — we involve you at every key milestone. You approve strategy, design, and copy before we proceed. You're always in control.",
  },
  {
    q: 'How do you measure campaign success?',
    a: 'We track leads, cost per lead, conversion rates, and ROI. You get a monthly dashboard with complete transparency.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'Zero. Pricing is 100% transparent. Full asset ownership is always included — no retainers, no lock-ins.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most projects go live in 2–4 weeks. Complex ecosystems with AI automation can take 6–8 weeks depending on scope.',
  },
];

export const STATIC_CLIENT_LOGOS = CLIENT_LOGOS.map(({ name, src }) => ({ name, src }));

export default PAGE_CONTENT;
