import { Canvas } from 'react-three-fiber';
import Box from '../Box/Box';
import './Header.css';
function Header() {
  return (
    <>
      <header className="header">
        <div className="header__nav">
          <img />
          <div className="header__nav-wrapper">
            <ul className="header__navigation">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>{' '}
        <Canvas className="canvas">
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          <Box />
        </Canvas>
      </header>
    </>
  );
}
export default Header;
