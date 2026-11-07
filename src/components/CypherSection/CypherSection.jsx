import { useRef, useEffect, useState } from 'react';
import FaultyTerminal from '../FaultyTerminal/FaultyTerminal';
import WarpText from '../WarpText/WarpText';
import VariableProximity from '../VariableProximity/VariableProximity';
import TiltedCard, { TiltedCardLayer } from '../TiltedCard/TiltedCard';
import groovityLogo from '../../assets/logo.png';
import cypherImg from '../../assets/cypher.webp';

const DEFAULT_SOCIALS = [
  { name: 'Instagram', label: 'Instagram → @groovity.vitb', url: 'https://www.instagram.com/groovity.vitb?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==' },
  { name: 'Official Website', label: 'Official Website → www.groovity.studio', url: 'https://www.groovity.studio'},
  { name: 'LinkedIn', label: 'LinkedIn → Groovity', url: 'https://www.linkedin.com/company/groovityclub/'}
];

function CypherSection({
  active = false,
  cardLeftContent = null,
  cardRightContent = null,
  cardBottomContent = null,
  cardSocialContent = null,
  onNavigateToGraffiti,
  registerFormUrl = '#register',
  socialLinks = DEFAULT_SOCIALS,
}) {
  const containerRef = useRef(null);
  const rightDetailsRef = useRef(null);
  const bottomDetailsRef = useRef(null);
  const socialRef = useRef(null);
  const getInGetLoudRef = useRef(null);
  const stayInTheLoopRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(pointer: coarse)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mql = window.matchMedia('(max-width: 768px)');
    const onChange = e => setIsMobile(e.matches || window.matchMedia('(pointer: coarse)').matches);
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, []);

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
    <section className="relative w-full h-full overflow-hidden bg-[#0d0d12]">
      {/* Full-screen Procedural FaultyTerminal Background - Fixed in place while cards scroll */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <FaultyTerminal
          tint="#A7EF9E"
          glyphs="blocks"
          scale={1.5}
          digitSize={1.2}
          timeScale={0.5}
          brightness={0.75}
          glow={0.5}
          persistence={0.5}
          mouseStrength={0.5}
          mouseGlow={0.6}
          curvature={0.1}
          vignette={0.25}
          clickEffect="none"
          scramble={0.5}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          mouseReact={!isMobile}
          pageLoadAnimation
          pause={!active}
          lightMode={false}
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
              {/* Top-Right Hanging Bookmark Ribbon: Transparent glass matching card, logo only */}
              <div
                className="card-bookmark"
                style={{
                  backgroundColor: 'rgba(10, 8, 16, 0.72)',
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
                      text={'CYPHER.\nSTREET.\ngrooVITy.'}
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
                          'Groovity Club is organizing an open street cypher jamming session right here on campus, completely free of cost. Heavy 808s, raw freestyle circles, beatboxers, and an open floor are all lined up. Step into the circle, drop your moves, catch the rhythm, and vibe with the underground.'
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
                      <div>
                        <VariableProximity
                          label={
                            'Hungry for even more creative expression? Experience the raw splash of colors and spray cans at our campus graffiti jam'
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
                          fontSize="clamp(26px, 3.1vw, 38px)"
                          fontFamily="'Space Grotesk', system-ui, sans-serif"
                          style={{
                            fontFamily: "'Space Grotesk', system-ui, sans-serif",
                            lineHeight: 1.22,
                            letterSpacing: '-0.025em',
                            color: '#ffffff',
                          }}
                        />
                      </div>

                      <div>
                        <VariableProximity
                          label={'Explore our Graffiti session →'}
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

                      <div>
                        <a
                          href="#get-in-get-loud"
                          onClick={scrollToGetInGetLoud}
                          className="inline-block pointer-events-auto no-underline"
                        >
                          <VariableProximity
                            label={'Register for Cypher Groovity →'}
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

            {/* Card 2: Narrow Card with Semi-Transparent Black Shadow */}
            <div className="brutalist-card card-narrow animate-card-2">
              {cardRightContent ? (
                cardRightContent
              ) : (
                <>
                  <div className="w-full overflow-hidden select-none -mt-2">
                    <WarpText
                      text={'BARS\nOVER\nEVERYTHING.'}
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

                  {/* Tilted Photograph with In-Flow SVG Sizer for Deterministic Height */}
                  <div
                    className="w-full select-none"
                    style={{
                      position: 'relative',
                      width: '100%',
                      marginTop: '2rem',
                      marginBottom: '2rem',
                    }}
                  >
                    {/* In-flow intrinsic SVG sizer guaranteeing physical height in normal flow */}
                    <svg
                      viewBox="0 0 1086 1448"
                      aria-hidden="true"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        visibility: 'hidden',
                        pointerEvents: 'none',
                      }}
                    />
                    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                      <TiltedCard
                        imageSrc={cypherImg}
                        altText="Groovity Cypher Photograph"
                        containerWidth="100%"
                        imageWidth="100%"
                        containerHeight="100%"
                        imageHeight="100%"
                        aspectRatio="1086 / 1448"
                        rotateAmplitude={12}
                        scaleOnHover={1.04}
                        glare={0}
                        shadow={0.4}
                        flipOnClick={false}
                        showTooltip={false}
                        backContent={null}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                      >
                        <TiltedCardLayer depth={30}>
                          <h3
                            style={{
                              position: 'absolute',
                              left: 20,
                              bottom: 16,
                              color: '#fff',
                              fontFamily: "'Space Grotesk', system-ui, sans-serif",
                              fontWeight: 900,
                              letterSpacing: '-0.02em',
                              textShadow: '0 2px 10px rgba(0,0,0,0.85)',
                            }}
                          >
                            Groovity Cypher February 2026
                          </h3>
                        </TiltedCardLayer>
                      </TiltedCard>
                    </div>
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
                        label={'Date : 5 December 2026'}
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
                        label={'Timing : 05:30 PM IST'}
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
                        label={'Venue : Academic Block 1'}
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
                    <div>
                      <VariableProximity
                        label={
                          'This part of the event is open for everyone completely free without any cost. Step into the cypher circle, bring your crew, and feel the raw street energy unfold live on the floor.'
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

                    <div>
                      <a
                        href={registerFormUrl}
                        target={registerFormUrl.startsWith('http') ? '_blank' : undefined}
                        rel={registerFormUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-block pointer-events-auto no-underline"
                      >
                        <VariableProximity
                          label={'Register with Google Forms →'}
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

                    <div className="mt-2 flex flex-col gap-3">
                      <div>
                        <VariableProximity
                          label={
                            'Stay connected with the crew, catch surprise jam sessions, and get to know the faces behind the movement.'
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

                      <div>
                        <a
                          href="#stay-in-the-loop"
                          onClick={scrollToStayInLoop}
                          className="inline-block pointer-events-auto no-underline"
                        >
                          <VariableProximity
                            label={'Know our team & connect with us →'}
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
                            onClick={scrollToStayInLoop}
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
                    </div>
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
                          'Drop into our channels for live session announcements, behind-the-scenes footage, battle brackets, and community cyphers.'
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

                    <div className="mt-2 flex flex-col gap-3">
                      {socialLinks.map((social) => (
                        <div key={social.name}>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block pointer-events-auto no-underline"
                          >
                            <VariableProximity
                              label={social.label}
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

export default CypherSection;
