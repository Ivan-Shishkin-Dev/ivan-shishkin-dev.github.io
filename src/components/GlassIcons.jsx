import { useState, useEffect } from 'react';

const gradientMapping = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))',
  gray: 'linear-gradient(hsl(0, 0%, 40%), hsl(0, 0%, 30%))',
  white: 'linear-gradient(hsl(0, 0%, 70%), hsl(0, 0%, 50%))'
};

const GlassIcon = ({ item, index, animateIn }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(!animateIn);

  useEffect(() => {
    if (animateIn) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800 + index * 150); // Start after 800ms, stagger by 150ms each
      return () => clearTimeout(timer);
    }
  }, [animateIn, index]);

  const getBackgroundStyle = (color) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  const handleClick = async (e) => {
    if (item.copyText) {
      try {
        await navigator.clipboard.writeText(item.copyText);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      } catch (err) {
        // Clipboard failed
      }
    }
  };

  return (
    <a
      href={item.link || '#'}
      target={item.link ? '_blank' : undefined}
      rel={item.link ? 'noopener noreferrer' : undefined}
      aria-label={item.label}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        background: 'transparent',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '4em',
        height: '4em',
        perspective: '24em',
        transformStyle: 'preserve-3d',
        textDecoration: 'none',
        display: 'block',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease'
      }}
    >
      {/* Background colored layer */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '1em',
          display: 'block',
          transition: 'transform 0.3s cubic-bezier(0.83, 0, 0.17, 1)',
          transformOrigin: '100% 100%',
          transform: isHovered
            ? 'rotate(25deg) translate3d(-0.5em, -0.5em, 0.5em)'
            : 'rotate(15deg)',
          willChange: 'transform',
          boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)',
          ...getBackgroundStyle(item.color)
        }}
      />

      {/* Glass front layer */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '1em',
          background: 'hsla(0, 0%, 100%, 0.15)',
          transition: 'transform 0.3s cubic-bezier(0.83, 0, 0.17, 1)',
          transformOrigin: '80% 50%',
          display: 'flex',
          backdropFilter: 'blur(0.75em)',
          WebkitBackdropFilter: 'blur(0.75em)',
          willChange: 'transform',
          boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset',
          transform: isHovered ? 'translate3d(0, 0, 2em)' : 'translate3d(0, 0, 0)'
        }}
      >
        <span style={{
          margin: 'auto',
          width: '1.5em',
          height: '1.5em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
          {item.icon}
        </span>
      </span>

      {/* Label */}
      <span
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          lineHeight: 2,
          fontSize: '0.875rem',
          color: '#fff',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          transform: isHovered ? 'translateY(20%)' : 'translateY(0)'
        }}
      >
        {showCopied ? 'Copied!' : item.label}
      </span>
    </a>
  );
};

const GlassIcons = ({ items, className, animateIn = false }) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        gap: '2em',
        paddingTop: '1.5em',
        overflow: 'visible'
      }}
    >
      {items.map((item, index) => (
        <GlassIcon key={index} item={item} index={index} animateIn={animateIn} />
      ))}
    </div>
  );
};

export default GlassIcons;
