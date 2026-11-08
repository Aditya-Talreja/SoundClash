import { useEffect, useRef } from 'react';
import Dither from '../Dither/Dither';
import ProfileCard from '../ProfileCard/ProfileCard';

const CREW_ROLES = [
  {
    title: 'PRESIDENT',
    slot: 1,
    name: 'Kartik Shrivastava',
    email: 'shrivastavakartik13@gmail.com',
    instagram: '@kartik_s1_3',
    linkedin: 'kartikshrivastava13',
    linkedinUrl: 'https://www.linkedin.com/in/kartikshrivastava13/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlmFdh3kMRzSnPa15FsykQw%3D%3D',
  },
  { title: 'VICE PRESIDENT', slot: 2 },
];
const CREW_SLOTS = [3, 4, 5];

function TheCrewSection({ active = true }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (active) {
      scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [active]);

  return (
    <section className="relative h-full w-full overflow-hidden bg-[#120f17]">
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <Dither
          waveColor="#bcbcbc"
          backgroundColor="#120f17"
          ditherMode="bayer"
          colorNum={4}
          pixelSize={2}
          waveSpeed={0.05}
          waveFrequency={3}
          waveAmplitude={0.3}
          mouseEffect="erase"
          mouseRadius={0.3}
          palette={[]}
          scale={1}
          contrast={1}
          brightness={0}
          mouseStrength={1}
          trail={0.5}
          enableMouseInteraction
          clickRipple={false}
          intro
          disableAnimation={!active}
          className="pointer-events-none"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div
        ref={scrollContainerRef}
        className="absolute inset-0 z-10 h-full w-full overflow-y-auto overflow-x-hidden pointer-events-auto [touch-action:pan-y] [overscroll-behavior-y:contain]"
        style={{
          paddingTop: 'var(--section-content-top)',
          paddingBottom: 'clamp(80px, 12vh, 120px)',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="crew-profile-layout" aria-label="Crew members">
          <div className="crew-leadership-grid">
            {CREW_ROLES.map(({ title, slot, name, email, instagram, linkedin, linkedinUrl }) => (
              <ProfileCard
                key={title}
                title={title}
                slot={slot}
                name={name}
                email={email}
                instagram={instagram}
                linkedin={linkedin}
                linkedinUrl={linkedinUrl}
                className="crew-leader-card"
              />
            ))}
          </div>

          <div className="crew-member-grid">
            {CREW_SLOTS.map((slot) => (
              <ProfileCard key={slot} slot={slot} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheCrewSection;
