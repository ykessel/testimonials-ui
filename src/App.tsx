import './App.css';
import Testimonial from './components/Testimonial';
import list from './data.json';

export type TestimonialType = {
  title: string;
  shadow: string;
  text: string;
  userImg: string;
  name: string;
  jobTitle: string;
  shadowColor: string;
  primaryColor: string;
};

function App() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {list.map((t: TestimonialType) => (
        <Testimonial key={t.name} test={t} />
      ))}
    </div>
  );
}

export default App;
