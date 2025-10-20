import Hero from '../Hero';

export default function HeroExample() {
  return <Hero onViewProjects={() => console.log('View projects clicked')} />;
}
