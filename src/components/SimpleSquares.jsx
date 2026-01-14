import './SimpleSquares.css';

const SimpleSquares = ({
  squareSize = 40,
  borderColor = '#fff',
  speed = 1,
  direction = 'diagonal',
  className = ''
}) => {
  return (
    <div 
      className={`simple-squares simple-squares--${direction} ${className}`}
      style={{
        '--square-size': `${squareSize}px`,
        '--border-color': borderColor,
        '--animation-duration': `${20 / speed}s`,
      }}
    />
  );
};

export default SimpleSquares;
