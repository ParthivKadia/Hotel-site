import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Experiences from '../components/Experiences';
import Destinations from '../components/Destinations';
import BranchDivider from '../components/BranchDivider';
import Lifestyle from '../components/Lifestyle';
// import GiftBanner from '../components/Explore';
import Explore from '../components/Explore';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Experiences />
      <Lifestyle />
      <Destinations />
      <BranchDivider className="mx-auto max-w-3xl px-6" />
      
      <Explore />
    </>
  );
}
