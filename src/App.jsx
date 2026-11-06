import { useState } from 'react';
import GooeyNav from './components/GooeyNav/GooeyNav';
import GraffitiSection from './components/GraffitiSection/GraffitiSection';
import CypherSection from './components/CypherSection/CypherSection';

const items = [
  { label: 'Graffiti' },
  { label: 'Cypher' },
];

// Both Graffiti and Cypher use identical white pill color
const PILL_COLOR = '#ffffff';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden select-none">
      {/* Centered GooeyNav navbar with high z-index and explicit isolation */}
      <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[100] isolate pointer-events-auto max-w-[calc(100vw-1.5rem)]">
        <GooeyNav
          items={items}
          activeIndex={activeIndex}
          onChange={(index) => setActiveIndex(index)}
          theme="dark"
          color={PILL_COLOR}
          activeTextColor="#000000"
          size="lg"
          frame
          particleCount={15}
          spread={56}
          animationTime={600}
          timeVariance={300}
          gooeyness={0.5}
          wobble={0.5}
          hoverEffect
        />
      </div>

      {/* Crossfading Section Content */}
      <main className="relative w-full h-screen overflow-hidden">
        {/* Graffiti Section */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            activeIndex === 0 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          style={{ willChange: 'opacity' }}
        >
          <GraffitiSection
            active={activeIndex === 0}
            onNavigateToCypher={() => setActiveIndex(1)}
          />
        </div>

        {/* Cypher Section */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            activeIndex === 1 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          style={{ willChange: 'opacity' }}
        >
          <CypherSection
            active={activeIndex === 1}
            onNavigateToGraffiti={() => setActiveIndex(0)}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
