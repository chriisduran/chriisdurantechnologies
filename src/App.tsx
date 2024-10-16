import './styles/main.css';
import patreonLogo from '../public/images/logos/img-patreon-logo.png';
import buyMeACoffeeLogo from '../public/images/logos/img-buymeacoffee-logo.png';
import kofiLogo from '../public/images/logos/img-kofi-logo.png';
import instagramLogo from '../public/images/logos/img-instagram-logo.png';
import githubLogo from '../public/images/logos/img-github-logo.png';

function App() {

  return (
    <div className="loading">
      <div className="finger finger-1">
        <div className="finger-item">
          <span></span>
          <i></i>
        </div>
      </div>

      <div className="finger finger-2">
        <div className="finger-item">
          <span></span>
          <i></i>
        </div>
      </div>

      <div className="finger finger-3">
        <div className="finger-item">
          <span></span>
          <i></i>
        </div>
      </div>

      <div className="finger finger-4">
        <div className="finger-item">
          <span></span>
          <i></i>
        </div>
      </div>

      <div className="last-finger">
        <div className="last-finger-item">
          <span></span>
          <i></i>
        </div>
      </div>

      <p className="available-text">🧘🏻‍♀️Be patient!🧘🏻</p>

      <div className="image-links">
        <a href="https://patreon.com/chriisduran?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" target="_blank" rel="noopener noreferrer">
          <img src={patreonLogo} alt="PatreonLogo" />
        </a>
        <a href="https://ko-fi.com/chriisduran" target="_blank" rel="noopener noreferrer">
          <img src={kofiLogo} alt="KofiLogo" />
        </a>
        <a href="https://buymeacoffee.com/chriisduran" target="_blank" rel="noopener noreferrer">
          <img src={buyMeACoffeeLogo} alt="BuyMeACoffee" />
        </a>
        <a href="https://www.instagram.com/chriis.duran/profilecard/?igsh=Z3lsNTl2bGtuMXlk" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="InstagramLogo" />
        </a>
        <a href="https://github.com/chriisduran" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GithubLogo" />
        </a>
      </div>
    </div>
  );
}

export default App;
