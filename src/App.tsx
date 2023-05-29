import Testimonial from './components/Testimonial';
import type { TestimonialType } from './types/TestimonialType';

const list: TestimonialType[] = [
  {
    primaryColor: 'bg-[#DEF4ED] ',
    shadow: 'shadow-gs',
    borderColor: 'border-[#22C55E]',
    ratingColor: 'bg-[#22C55E]',
    title: 'Impressive Curriculum',
    text: 'I have tried several platforms in the past, but none have been as comprehensive and well-structured as CodingSpace.',
    userImg: 'https://randomuser.me/api/portraits/med/women/82.jpg',
    name: 'Emily Williams',
    jobTitle: 'Frontend Developer at Google',
  },
  {
    primaryColor: 'bg-[#FCDDE1] ',
    shadow: 'shadow-rs',
    borderColor: 'border-[#FE6B7E]',
    ratingColor: 'bg-[#FE6B7E]',
    title: 'Great for Beginners',
    text: 'I am a beginner in coding and Codingspace has been a great resource for me. I really like the interactive coding exercises',
    userImg: 'https://randomuser.me/api/portraits/med/women/84.jpg',
    name: 'Sarah Johnson',
    jobTitle: 'UI Developer at Razorpay',
  },
  {
    primaryColor: 'bg-[#CEDDFF] ',
    shadow: 'shadow-bs',
    borderColor: 'border-[#175CFF]',
    ratingColor: 'bg-[#175CFF]',
    title: 'Great Experience',
    text: 'I have been using Codingspace for the past few months to learn coding and it has been an amazing experience',
    userImg: 'https://randomuser.me/api/portraits/med/men/52.jpg',
    name: 'Michael Johnson',
    jobTitle: 'Full-stack Developer at Hashnode',
  },
];

function App() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {list.map((t: TestimonialType) => (
        <Testimonial key={t.name} testiomonio={t} />
      ))}
    </div>
  );
}

export default App;
