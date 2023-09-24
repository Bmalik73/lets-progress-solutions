import { TextField, AppBar, Toolbar, InputAdornment, Button } from '@mui/material';
import { Search, Apps as AppsIcon } from '@mui/icons-material';
import './App.css';
import FavoriteLink from './component/FavoriteLink/FavoriteLink';
import mockFavoriteLinks from './data/mockFavoriteLinks';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="toolbar">
          <div className="right-nav">
            <Button color="inherit">Gmail</Button>
            <Button color="inherit">Images</Button>
            <AppsIcon />
            <div className="profile-icon">
              J
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className="content">
        <img src="/src/assets/Google_logo_white.svg" alt="Google Logo" className="google-logo" />
        <TextField
          className="custom-textfield"
          variant="outlined"
          placeholder="Search Google or type a URL"
          InputProps={{
            className: "custom-input",
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img src="/src/assets/Google_Mic_Icon.svg" alt="Micro" className="icon micro-icon" />
                <img src="/src/assets/icon_google-lens.svg" alt="Camera" className="icon lens-icon" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="favorite-grid">
        {mockFavoriteLinks.map(link => (
          <FavoriteLink 
            key={link.id} 
            imgName={link.imgName} 
            label={link.label} 
            url={link.url} 
          />
        ))}
      </div>
      <button className="customize-btn">
        <img src="/src/assets/pen-icon.png" alt="Customize" /> Customize Chrome
      </button>
    </div>
  );
}

export default App;
