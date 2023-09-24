import { useEffect, useState, FC } from 'react';
import './favoriteLink.css';

interface FavoriteLinkProps {
  imgName: string;
  label: string;
  url: string;
}

const FavoriteLink: FC<FavoriteLinkProps> = ({ imgName, label, url }) => {
  const [alt, setAlt] = useState<string>('');

  const getAltFavoriteLink = (img: string): string => {
    return img.split('.')[0].replace('-', ' ');
  };

  useEffect(() => {
    setAlt(getAltFavoriteLink(imgName));
  }, [imgName]);

  return (
    <div className='favorite-item'>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className='favorite-item__top'>
          <div className='favorite-item__img-wrapper'>
            <img src={`/src/assets/${imgName}`} alt={alt} />
          </div>
        </div>
        <div className='favorite-item__bottom'>
          <div className='favorite-item__label-wrapper'>
            <span>{label}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FavoriteLink;
