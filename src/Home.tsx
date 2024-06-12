import Hero from './pages/Home/sections/Hero/Hero';
import About from './pages/Home/sections/About/About';
import Projects from './pages/Home/sections/Projects/Projects';

const Home = () => {
    return (
      <div>
        <Hero />
        <About />
        <Projects />
        {/* Adicione outras seções */}
      </div>
    );
  };

export default Home;
