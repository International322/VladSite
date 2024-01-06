import { HomeSection } from './Home/HomeSection';
import { sectionData } from '../_data/home.data';

export default function Home() {
  return (
    <div className="">
      {sectionData.map(section => (
        <HomeSection key={section.id} {...section} />
      ))}
    </div>
  );
}
