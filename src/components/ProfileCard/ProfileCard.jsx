import { useRef } from 'react';
import VariableProximity from '../VariableProximity/VariableProximity';
import WarpText from '../WarpText/WarpText';

const DEFAULT_PROFILE = {
  name: 'Your name',
  email: 'email@example.com',
  instagram: '@username',
  linkedin: 'Your profile',
};

function ProfileDetail({ label, value, href, containerRef }) {
  const textProps = {
    className: 'variable-proximity-demo profile-detail-text',
    fromFontVariationSettings: "'wght' 400, 'opsz' 9",
    toFontVariationSettings: "'wght' 1000, 'opsz' 40",
    containerRef,
    radius: 90,
    falloff: 'linear',
    smoothing: 0.2,
    scale: 1,
    lift: 0,
    idleWave: false,
    fontSize: 'clamp(16px, 1.8vw, 22px)',
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    style: {
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
  };

  return (
    <div className="profile-detail-row">
      <VariableProximity label={`${label} :`} {...textProps} />
      {href ? (
        <a href={href} className="profile-detail-link" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
          <VariableProximity label={value} {...textProps} style={{ ...textProps.style, color: '#00f0ff' }} />
        </a>
      ) : (
        <VariableProximity label={value} {...textProps} />
      )}
    </div>
  );
}

function ProfileCard({ title, slot, name, email, instagram, linkedin, linkedinUrl, className = '' }) {
  const detailsRef = useRef(null);
  const headingText = title || 'ROLE';
  const emailValue = email || DEFAULT_PROFILE.email;
  const instagramValue = instagram || DEFAULT_PROFILE.instagram;
  const instagramHandle = instagramValue.replace(/^@/, '');
  const details = [
    { label: 'Name', value: name || DEFAULT_PROFILE.name },
    { label: 'Instagram', value: instagramValue, href: `https://www.instagram.com/${instagramHandle}/` },
    { label: 'LinkedIn', value: linkedin || DEFAULT_PROFILE.linkedin, href: linkedinUrl },
    { label: 'Email', value: emailValue, href: `mailto:${emailValue}` },
  ];

  const accessibleTitle = title?.replace(/\n/g, ' ') || 'Crew member';

  return (
    <article
      className={`brutalist-card card-wide crew-member-card profile-card relative animate-card-${slot} ${className}`.trim()}
      aria-label={`${accessibleTitle} profile`}
    >
      <div className="profile-card-heading">
        {headingText ? (
          <WarpText
            text={headingText}
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
            fontSize="clamp(1.75rem, 14cqi, 4rem)"
            fontWeight={900}
            color="#ffffff"
            style={{ height: '100%', width: '100%' }}
            fontFamily="'Space Grotesk', system-ui, sans-serif"
            letterSpacing="-0.04em"
            lineHeight={0.92}
          />
        ) : null}
      </div>

      <div ref={detailsRef} className="profile-card-details">
        {details.map((detail) => (
          <ProfileDetail key={detail.label} {...detail} containerRef={detailsRef} />
        ))}
      </div>
    </article>
  );
}

export default ProfileCard;
