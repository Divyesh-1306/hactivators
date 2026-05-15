import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import SolutionWorkflow from './components/SolutionWorkflow';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import HardwarePrototype from './components/HardwarePrototype';
import Stakeholders from './components/Stakeholders';
import TechStack from './components/TechStack';
import Impact from './components/Impact';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggle} />
      <Hero />
      <ProblemStatement />
      <SolutionWorkflow />
      <Features />
      <DashboardPreview />
      <HardwarePrototype />
      <Stakeholders />
      <TechStack />
      <Impact />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
