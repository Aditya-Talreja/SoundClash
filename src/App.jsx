import { useState } from 'react';
import GooeyNav from './components/GooeyNav/GooeyNav';
import SoundClashSection from './components/SoundClashSection/SoundClashSection';
import GraffitiSection from './components/GraffitiSection/GraffitiSection';
import CypherSection from './components/CypherSection/CypherSection';
import TheCrewSection from './components/TheCrewSection/TheCrewSection';
import groovityLogo from './assets/logo.png';

const sectionItems = [
  { label: 'SoundClash' },
  { label: 'Graffiti' },
  { label: 'Cypher' },
  { label: 'TheCrew' }
];

const logoItem = [
  {
    label: '',
    href: 'https://www.groovity.studio',
    icon: (
      <span className="flex h-[1.5em] w-[1.5em] items-center justify-center">
        <img src={groovityLogo} alt="SoundClash home" className="h-full w-full object-contain" draggable={false} />
      </span>
    )
  }
];

const items = [...logoItem, ...sectionItems];

const PILL_COLOR = '#ffffff';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-h-[100dvh] bg-[#0a0a0a] overflow-hidden">
      {/* Main GooeyNav with the logo shortcut as its leading item. */}
      <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[100] isolate pointer-events-auto max-w-[calc(100vw-1.5rem)]">
        <GooeyNav
          items={items}
          className="site-navbar"
          activeIndex={activeIndex + 1}
          onChange={(index) => setActiveIndex(Math.max(0, index - 1))}
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
        {/* Previous standalone logo navbar, retained for easy experimentation:
        <GooeyNav
          items={logoItem}
          activeIndex={0}
          theme="dark"
          color="#000000"
          activeTextColor="#ffffff"
          size="lg"
          frame
          style={{ '--gn-x': '11px' }}
        />
        */}
      </div>

      {/* Section Content: Mount only active section to avoid WebGL context collisions */}
      <main className="relative w-full h-[100dvh] overflow-hidden">
        {activeIndex === 0 && (
          <div className="absolute inset-0 w-full h-full pointer-events-auto">
            <SoundClashSection
              active={true}
              onNavigateToGraffiti={() => setActiveIndex(1)}
              onNavigateToCypher={() => setActiveIndex(2)}
              onNavigateToCrew={() => setActiveIndex(3)}
            />
          </div>
        )}

        {activeIndex === 1 && (
          <div className="absolute inset-0 w-full h-full pointer-events-auto">
            <GraffitiSection
              active={true}
              onNavigateToCypher={() => setActiveIndex(2)}
            />
          </div>
        )}

        {activeIndex === 2 && (
          <div className="absolute inset-0 w-full h-full pointer-events-auto">
            <CypherSection
              active={true}
              onNavigateToGraffiti={() => setActiveIndex(1)}
            />
          </div>
        )}

        {activeIndex === 3 && (
          <div className="absolute inset-0 w-full h-full pointer-events-auto">
            <TheCrewSection
              active={true}
              onNavigateToSoundClash={() => setActiveIndex(0)}
              onNavigateToGraffiti={() => setActiveIndex(1)}
              onNavigateToCypher={() => setActiveIndex(2)}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
