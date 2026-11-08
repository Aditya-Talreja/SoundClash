import { useRef, useEffect } from 'react';
import Dither from '../Dither/Dither';
import WarpText from '../WarpText/WarpText';
import VariableProximity from '../VariableProximity/VariableProximity';
import groovityLogo from '../../assets/logo.svg';

const DEFAULT_SOCIALS = [
  { name: 'Instagram', label: 'Instagram → @groovity.vitb', url: 'https://www.instagram.com/groovity.vitb?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==' },
  { name: 'Official Website', label: 'Official Website → www.groovity.studio', url: 'https://www.groovity.studio' },
  { name: 'LinkedIn', label: 'LinkedIn → Groovity', url: 'https://www.linkedin.com/company/groovityclub/' }
];

function SoundClashSection({
  active = true,
  cardLeftContent = null,
  cardRightContent = null,
  cardBottomContent = null,
  cardSocialContent = null,
  onNavigateToGraffiti,
  onNavigateToCypher,
  onNavigateToCrew,
  socialLinks = DEFAULT_SOCIALS,
}) {
  const containerRef = useRef(null);
  const rightDetailsRef = useRef(null);
  const bottomDetailsRef = useRef(null);
  const socialRef = useRef(null);
  const getInGetLoudRef = useRef(null);
  const stayInTheLoopRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (active) {
      scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [active]);

  const scrollToGetInGetLoud = (e) => {
    e?.preventDefault();
    getInGetLoudRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToStayInLoop = (e) => {
    e?.preventDefault();
    stayInTheLoopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full h-full overflow-hidden bg-[#120f17]">
      {/* Full-screen Procedural Dither Background - Fixed in place while cards scroll */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
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
          enableMouseInteraction={true}
          clickRipple={false}
          intro={true}
          disableAnimation={!active}
          className="pointer-events-none"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Foreground Scroll Container: Native touch scrolling */}
      <div
        ref={scrollContainerRef}
        className="absolute inset-0 z-10 w-full h-full overflow-y-auto overflow-x-hidden pointer-events-auto [touch-action:pan-y] [overscroll-behavior-y:contain]"
        style={{
          paddingTop: 'var(--section-content-top)',
          paddingBottom: 'clamp(80px, 12vh, 120px)',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div
          className={`w-full max-w-[1380px] px-4 sm:px-6 md:px-10 lg:px-12 ${
            active ? 'section-active' : 'section-inactive'
          }`}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div className="arcade-grid w-full">
            {/* Card 1: Wide Card with Hanging Bookmark Ribbon */}
            <div className="brutalist-card card-wide relative animate-card-1">
              {/* Top-Right Hanging Bookmark Ribbon */}
              <div
                className="card-bookmark"
                style={{
                  backgroundColor: 'rgba(18, 15, 23, 0.85)',
                  boxShadow: '0 6px 14px rgba(0, 0, 0, 0.45)',
                }}
              >
                <img
                  src={groovityLogo}
                  alt="Groovity Logo"
                  className="card-bookmark-logo"
                  draggable={false}
                />
              </div>

              {cardLeftContent ? (
                cardLeftContent
              ) : (
                <>
                  <div className="card-title-reserve w-full mb-6 overflow-hidden select-none -mt-2">
                    <WarpText
                      text={'DECIBEL.\nDUEL.\nSC2026.'}
                      align="left"
                      warpStrength={0.08}
                      warpScale={1.7}
                      speed={0.55}
                      lens="bulge"
                      pointerInfluence={0.42}
                      pointerStrength={0.38}
                      refraction={0.018}
                      chromatic={0.35}
                      idleDrift={0.2}
                      ripple
                      clickRipple
                      intro
                      fontSize="clamp(2.75rem, 14cqi, 7.25rem)"
                      fontWeight={900}
                      color="#ffffff"
                      style={{ height: 'clamp(11rem, 42cqi, 21.25rem)', width: '100%' }}
                      fontFamily="'Space Grotesk', system-ui, sans-serif"
                      letterSpacing="-0.04em"
                      lineHeight={0.92}
                    />
                  </div>

                  <div
                    ref={containerRef}
                    style={{ position: 'relative' }}
                    className="w-full my-6 pl-3 select-none cursor-default flex flex-col gap-8"
                  >
                    <div>
                      <VariableProximity
                        label={
                          'grooVITy presents SoundClash - the signature underground sound battleground on campus. High-voltage beat face-offs, live DJ clashes, custom stem duels, and crowd-judged showdowns. Experience raw sonic warfare where decibels decide who walks away with the crown.'
                        }
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                        smoothing={0.2}
                        scale={1}
                        lift={0}
                        idleWave={false}
                        fontSize="clamp(28px, 3.4vw, 42px)"
                        fontFamily="'Space Grotesk', system-ui, sans-serif"
                        style={{
                          fontFamily: "'Space Grotesk', system-ui, sans-serif",
                          lineHeight: 1.22,
                          letterSpacing: '-0.025em',
                          color: '#ffffff',
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      {onNavigateToGraffiti && (
                        <div>
                          <VariableProximity
                            label={'Explore the open Graffiti jam →'}
                            className={'variable-proximity-demo cursor-pointer'}
                            fromFontVariationSettings="'wght' 500, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={120}
                            falloff="linear"
                            smoothing={0.2}
                            scale={1}
                            lift={0}
                            idleWave={false}
                            fontSize="clamp(26px, 3.1vw, 38px)"
                            fontFamily="'Space Grotesk', system-ui, sans-serif"
                            onClick={onNavigateToGraffiti}
                            style={{
                              fontFamily: "'Space Grotesk', system-ui, sans-serif",
                              lineHeight: 1.22,
                              letterSpacing: '-0.025em',
                              color: '#00f0ff',
                              textDecoration: 'underline',
                              textUnderlineOffset: '8px',
                              textDecorationThickness: '3px',
                              cursor: 'pointer',
                            }}
                          />
                        </div>
                      )}

                      {onNavigateToCypher && (
                        <div>
                          <VariableProximity
                            label={'Step into the Cypher battle circle →'}
                            className={'variable-proximity-demo cursor-pointer'}
                            fromFontVariationSettings="'wght' 500, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={120}
                            falloff="linear"
                            smoothing={0.2}
                            scale={1}
                            lift={0}
                            idleWave={false}
                            fontSize="clamp(26px, 3.1vw, 38px)"
                            fontFamily="'Space Grotesk', system-ui, sans-serif"
                            onClick={onNavigateToCypher}
                            style={{
                              fontFamily: "'Space Grotesk', system-ui, sans-serif",
                              lineHeight: 1.22,
                              letterSpacing: '-0.025em',
                              color: '#00f0ff',
                              textDecoration: 'underline',
                              textUnderlineOffset: '8px',
                              textDecorationThickness: '3px',
                              cursor: 'pointer',
                            }}
                          />
                        </div>
                      )}

                      {onNavigateToCrew && (
                        <div>
                          <VariableProximity
                            label={'Get to know The Crew behind grooVITy →'}
                            className={'variable-proximity-demo cursor-pointer'}
                            fromFontVariationSettings="'wght' 500, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={120}
                            falloff="linear"
                            smoothing={0.2}
                            scale={1}
                            lift={0}
                            idleWave={false}
                            fontSize="clamp(26px, 3.1vw, 38px)"
                            fontFamily="'Space Grotesk', system-ui, sans-serif"
                            onClick={onNavigateToCrew}
                            style={{
                              fontFamily: "'Space Grotesk', system-ui, sans-serif",
                              lineHeight: 1.22,
                              letterSpacing: '-0.025em',
                              color: '#00f0ff',
                              textDecoration: 'underline',
                              textUnderlineOffset: '8px',
                              textDecorationThickness: '3px',
                              cursor: 'pointer',
                            }}
                          />
                        </div>
                      )}

                      <div>
                        <a
                          href="#get-in-get-loud"
                          onClick={scrollToGetInGetLoud}
                          className="inline-block pointer-events-auto no-underline"
                        >
                          <VariableProximity
                            label={'Register for SoundClash Battle →'}
                            className={'variable-proximity-demo cursor-pointer'}
                            fromFontVariationSettings="'wght' 500, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={120}
                            falloff="linear"
                            smoothing={0.2}
                            scale={1}
                            lift={0}
                            idleWave={false}
                            fontSize="clamp(26px, 3.1vw, 38px)"
                            fontFamily="'Space Grotesk', system-ui, sans-serif"
                            onClick={scrollToGetInGetLoud}
                            style={{
                              fontFamily: "'Space Grotesk', system-ui, sans-serif",
                              lineHeight: 1.22,
                              letterSpacing: '-0.025em',
                              color: '#00f0ff',
                              textDecoration: 'underline',
                              textUnderlineOffset: '8px',
                              textDecorationThickness: '3px',
                              cursor: 'pointer',
                            }}
                          />
                        </a>
                      </div>

                      <div>
                        <a
                          href="#stay-in-the-loop"
                          onClick={scrollToStayInLoop}
                          className="inline-block pointer-events-auto no-underline"
                        >
                          <VariableProximity
                            label={'Connect with us →'}
                            className={'variable-proximity-demo cursor-pointer'}
                            fromFontVariationSettings="'wght' 500, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={120}
                            falloff="linear"
                            smoothing={0.2}
                            scale={1}
                            lift={0}
                            idleWave={false}
                            fontSize="clamp(26px, 3.1vw, 38px)"
                            fontFamily="'Space Grotesk', system-ui, sans-serif"
                            onClick={scrollToStayInLoop}
                            style={{
                              fontFamily: "'Space Grotesk', system-ui, sans-serif",
                              lineHeight: 1.22,
                              letterSpacing: '-0.025em',
                              color: '#00f0ff',
                              textDecoration: 'underline',
                              textUnderlineOffset: '8px',
                              textDecorationThickness: '3px',
                              cursor: 'pointer',
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Card 2: Narrow Card with Dither Integration */}
            <div className="brutalist-card card-narrow animate-card-2">
              {cardRightContent ? (
                cardRightContent
              ) : (
                <>
                  <div className="w-full overflow-hidden select-none -mt-2">
                    <WarpText
                      text={'WHEN.\nWHERE.\nWHAT.'}
                      align="left"
                      warpStrength={0.08}
                      warpScale={1.7}
                      speed={0.55}
                      lens="bulge"
                      pointerInfluence={0.42}
                      pointerStrength={0.38}
                      refraction={0.018}
                      chromatic={0.35}
                      idleDrift={0.2}
                      ripple
                      clickRipple
                      intro
                      fontSize={116}
                      fontWeight={900}
                      color="#ffffff"
                      style={{ height: 'clamp(200px, 26vw, 290px)', width: '100%' }}
                      fontFamily="'Space Grotesk', system-ui, sans-serif"
                      letterSpacing="-0.04em"
                      lineHeight={0.92}
                    />
                  </div>

                  {/* Event Details: Date & Venue using Variable Proximity */}
                  <div
                    ref={rightDetailsRef}
                    style={{
                      position: 'relative',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.25rem',
                    }}
                    className="select-none cursor-default"
                  >
                    <div>
                      <VariableProximity
                        label={'Date : 6 December 2026'}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={rightDetailsRef}
                        radius={100}
                        falloff="linear"
                        smoothing={0.2}
                        scale={1}
                        lift={0}
                        idleWave={false}
                        fontSize="clamp(22px, 2.6vw, 34px)"
                        fontFamily="'Space Grotesk', system-ui, sans-serif"
                        style={{
                          fontFamily: "'Space Grotesk', system-ui, sans-serif",
                          lineHeight: 1.22,
                          letterSpacing: '-0.02em',
                          color: '#ffffff',
                        }}
                      />
                    </div>

                    <div>
                      <VariableProximity
                        label={'Venue : Central Amphitheatre'}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={rightDetailsRef}
                        radius={100}
                        falloff="linear"
                        smoothing={0.2}
                        scale={1}
                        lift={0}
                        idleWave={false}
                        fontSize="clamp(22px, 2.6vw, 34px)"
                        fontFamily="'Space Grotesk', system-ui, sans-serif"
                        style={{
                          fontFamily: "'Space Grotesk', system-ui, sans-serif",
                          lineHeight: 1.22,
                          letterSpacing: '-0.02em',
                          color: '#ffffff',
                        }}
                      />
                    </div>

                    <div>
                      <VariableProximity
                        label={'Format : 1v1 DJ & Producer Battles'}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={rightDetailsRef}
                        radius={100}
                        falloff="linear"
                        smoothing={0.2}
                        scale={1}
                        lift={0}
                        idleWave={false}
                        fontSize="clamp(22px, 2.6vw, 34px)"
                        fontFamily="'Space Grotesk', system-ui, sans-serif"
                        style={{
                          fontFamily: "'Space Grotesk', system-ui, sans-serif",
                          lineHeight: 1.22,
                          letterSpacing: '-0.02em',
                          color: '#ffffff',
                        }}
                      />
                    </div>

                    <div>
                      <VariableProximity
                        label={'Entry : Free & Open to All'}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={rightDetailsRef}
                        radius={100}
                        falloff="linear"
                        smoothing={0.2}
                        scale={1}
                        lift={0}
                        idleWave={false}
                        fontSize="clamp(22px, 2.6vw, 34px)"
                        fontFamily="'Space Grotesk', system-ui, sans-serif"
                        style={{
                          fontFamily: "'Space Grotesk', system-ui, sans-serif",
                          lineHeight: 1.22,
                          letterSpacing: '-0.02em',
                          color: '#ffffff',
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Card 3: Centered Card Below Top 2 Cards */}
          <div
            ref={getInGetLoudRef}
            id="get-in-get-loud"
            className="w-full flex justify-center scroll-mt-24 sm:scroll-mt-28 animate-card-3"
            style={{
              marginTop: '2.25rem',
            }}
          >
            <div
              className="brutalist-card card-wide w-full select-none"
              style={{
                maxWidth: 'clamp(320px, calc((100% - 2.25rem) * 1.25 / 2.25), 740px)',
                minHeight: 'clamp(440px, 50vh, 580px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                textAlign: 'left',
                margin: 0,
              }}
            >
              {cardBottomContent ? (
                cardBottomContent
              ) : (
                <>
                  <div className="w-full overflow-hidden select-none -mt-2">
                    <WarpText
                      text={'GET IN.\nGET LOUD.'}
                      align="left"
                      warpStrength={0.08}
                      warpScale={1.7}
                      speed={0.55}
                      lens="bulge"
                      pointerInfluence={0.42}
                      pointerStrength={0.38}
                      refraction={0.018}
                      chromatic={0.35}
                      idleDrift={0.2}
                      ripple
                      clickRipple
                      intro
                      fontSize={110}
                      fontWeight={900}
                      color="#ffffff"
                      style={{ height: 'clamp(200px, 26vw, 290px)', width: '100%' }}
                      fontFamily="'Space Grotesk', system-ui, sans-serif"
                      letterSpacing="-0.04em"
                      lineHeight={0.92}
                    />
                  </div>

                  <div
                    ref={bottomDetailsRef}
                    style={{ position: 'relative' }}
                    className="w-full mt-6 px-2 sm:px-6 cursor-default flex flex-col items-start gap-6 text-left"
                  >
                    <div className="w-full">
                      <VariableProximity
                        label={
                          'Ready to throw down your best tracks, live edits, and battle routines? Step up to the consoles and compete for campus supremacy. Limited battle slots open for DJs and beatmakers. Audience passes are 100% free.'
                        }
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={bottomDetailsRef}
                        radius={100}
                        falloff="linear"
                        smoothing={0.2}
                        scale={1}
                        lift={0}
                        idleWave={false}
                        fontSize="clamp(22px, 2.6vw, 32px)"
                        fontFamily="'Space Grotesk', system-ui, sans-serif"
                        style={{
                          fontFamily: "'Space Grotesk', system-ui, sans-serif",
                          lineHeight: 1.25,
                          letterSpacing: '-0.02em',
                          color: '#ffffff',
                          textAlign: 'left',
                          width: '100%',
                        }}
                      />
                    </div>

                    {onNavigateToCrew && (
                      <div className="mt-2 w-full">
                        <VariableProximity
                          label={'Meet our crew & sound engineers →'}
                          className={'variable-proximity-demo cursor-pointer'}
                          fromFontVariationSettings="'wght' 500, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={bottomDetailsRef}
                          radius={120}
                          falloff="linear"
                          smoothing={0.2}
                          scale={1}
                          lift={0}
                          idleWave={false}
                          fontSize="clamp(22px, 2.6vw, 32px)"
                          fontFamily="'Space Grotesk', system-ui, sans-serif"
                          onClick={onNavigateToCrew}
                          style={{
                            fontFamily: "'Space Grotesk', system-ui, sans-serif",
                            lineHeight: 1.25,
                            letterSpacing: '-0.02em',
                            color: '#00f0ff',
                            textDecoration: 'underline',
                            textUnderlineOffset: '8px',
                            textDecorationThickness: '3px',
                            cursor: 'pointer',
                          }}
                        />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Card 4: Stay in the Loop Socials Card */}
          <div
            ref={stayInTheLoopRef}
            id="stay-in-the-loop"
            className="w-full flex justify-center scroll-mt-24 sm:scroll-mt-28 animate-card-4"
            style={{
              marginTop: '2.25rem',
            }}
          >
            <div
              className="brutalist-card card-wide w-full select-none"
              style={{
                maxWidth: 'clamp(320px, calc((100% - 2.25rem) * 1.25 / 2.25), 740px)',
                minHeight: 'clamp(400px, 46vh, 540px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: 0,
              }}
            >
              {cardSocialContent ? (
                cardSocialContent
              ) : (
                <>
                  <div className="w-full overflow-hidden select-none -mt-2">
                    <WarpText
                      text={'STAY IN\nTHE LOOP.'}
                      align="left"
                      warpStrength={0.08}
                      warpScale={1.7}
                      speed={0.55}
                      lens="bulge"
                      pointerInfluence={0.42}
                      pointerStrength={0.38}
                      refraction={0.018}
                      chromatic={0.35}
                      idleDrift={0.2}
                      ripple
                      clickRipple
                      intro
                      fontSize={104}
                      fontWeight={900}
                      color="#ffffff"
                      style={{ height: 'clamp(180px, 24vw, 260px)', width: '100%' }}
                      fontFamily="'Space Grotesk', system-ui, sans-serif"
                      letterSpacing="-0.04em"
                      lineHeight={0.92}
                    />
                  </div>

                  <div
                    ref={socialRef}
                    style={{ position: 'relative' }}
                    className="w-full mt-6 px-2 sm:px-6 cursor-default flex flex-col gap-6 text-left"
                  >
                    <div>
                      <VariableProximity
                        label={
                          'Drop into our channels for live tournament brackets, artist track drops, behind-the-scenes soundchecks, and future cyphers.'
                        }
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={socialRef}
                        radius={100}
                        falloff="linear"
                        smoothing={0.2}
                        scale={1}
                        lift={0}
                        idleWave={false}
                        fontSize="clamp(22px, 2.6vw, 32px)"
                        fontFamily="'Space Grotesk', system-ui, sans-serif"
                        style={{
                          fontFamily: "'Space Grotesk', system-ui, sans-serif",
                          lineHeight: 1.25,
                          letterSpacing: '-0.02em',
                          color: '#ffffff',
                          textAlign: 'left',
                          width: '100%',
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                      {socialLinks.map((item) => (
                        <div key={item.name}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block pointer-events-auto no-underline"
                          >
                            <VariableProximity
                              label={item.label}
                              className={'variable-proximity-demo cursor-pointer'}
                              fromFontVariationSettings="'wght' 500, 'opsz' 9"
                              toFontVariationSettings="'wght' 1000, 'opsz' 40"
                              containerRef={socialRef}
                              radius={120}
                              falloff="linear"
                              smoothing={0.2}
                              scale={1}
                              lift={0}
                              idleWave={false}
                              fontSize="clamp(22px, 2.6vw, 32px)"
                              fontFamily="'Space Grotesk', system-ui, sans-serif"
                              style={{
                                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                                lineHeight: 1.25,
                                letterSpacing: '-0.02em',
                                color: '#00f0ff',
                                textDecoration: 'underline',
                                textUnderlineOffset: '8px',
                                textDecorationThickness: '3px',
                                cursor: 'pointer',
                              }}
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoundClashSection;
