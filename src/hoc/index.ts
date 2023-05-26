import { Home, About, Work, Skills, Contact } from "../pages";

import PageWrapper from "./PageWrapper";

export const HomePage = PageWrapper(Home)
export const AboutPage = PageWrapper(About)
export const WorkPage = PageWrapper(Work)
export const SkillsPage = PageWrapper(Skills)
export const ContactPage = PageWrapper(Contact)