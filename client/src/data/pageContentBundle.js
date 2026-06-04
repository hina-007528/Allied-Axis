import { whyIntro, whyItems, processSteps, growthBuildCards, homeProofCards } from './homeContent';
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

const PAGE_CONTENT = {
  'home-content': {
    whyIntro,
    whyItems,
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
    a: 'Every engagement begins with a free 30-minute diagnostic conversation. We assess your current infrastructure, identify gaps, and propose a custom roadmap — no pitch, no pressure.',
  },
  {
    q: 'Can you work with small businesses?',
    a: 'Yes. Our launch packages are designed for growth-stage businesses. The investment scales — a boutique firm can build a lean version focused on the highest-impact elements.',
  },
  {
    q: 'Will I be involved in the process?',
    a: 'Absolutely. We maintain weekly reporting and direct access to the team. Strategy decisions are collaborative; execution is handled by us.',
  },
  {
    q: 'How do you measure campaign success?',
    a: 'We track leads, cost per lead, conversion rates, and ROI. You get a monthly dashboard with complete transparency. No vanity metrics.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. Domain registration, hosting, and ad spend are separate costs clearly outlined upfront. Third-party tool costs are specified before engagement.',
  },
  {
    q: 'How long does a project take?',
    a: 'Essential launches: 2-4 weeks. Complete systems: 6-10 weeks. Ongoing optimisation is continuous. We move fast without cutting corners.',
  },
];

export const STATIC_CLIENT_LOGOS = [
  { name: 'Affra Afzal Tourism', src: '/images/clients/affra-afzal-tourism.svg' },
  { name: 'Human Consultancy', src: '/images/clients/human-consultancy.svg' },
  { name: 'My Choice Tourism', src: '/images/clients/my-choice-tourism.svg' },
  { name: 'High Way Travel', src: '/images/clients/high-way-travel.svg' },
  { name: 'Arabia Horizons', src: '/images/clients/arabia-horizons.svg' },
  { name: 'DMB', src: '/images/clients/dmb.svg' },
  { name: 'Moon Star', src: '/images/clients/moon-star.svg' },
];

export default PAGE_CONTENT;
