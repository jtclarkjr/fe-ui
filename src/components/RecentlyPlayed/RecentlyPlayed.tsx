import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Skeleton from '../Skeleton/Skeleton';
import Card, { ICard } from '../Card/Card';
import { useAppDispatch } from '../../store/hooks';
import { set } from '../../store/reducers/albumSlice';

interface IRecentPlayed {
  albums: Array<ICard>;
  loading: boolean;
}

const RecentlyPlayed: React.FC<IRecentPlayed> = ({ albums, loading }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCard = (id: number, title: string, thumbnail: string) => {
    dispatch(set({ title, thumbnail }));
    navigate(`/album/${id}`);
  };

  return (
    <section className="rplayed">
      <h2 className="subtitle">Recently Played</h2>
      <div className="rplayed__grid">
        {loading ? (
          <>
            <Skeleton height="270px" />
            <Skeleton height="270px" />
            <Skeleton height="270px" />
            <Skeleton height="270px" />
          </>
        ) : (
          albums.map((album) => (
            <Card
              id={album.id}
              title={album.title}
              artist={album.artist}
              thumbnail={album.thumbnail}
              // eslint-disable-next-line
              // @ts-ignore
              onClick={() => handleCard(album.id, album.title, album.thumbnail)}
              key={album.id}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default RecentlyPlayed;
