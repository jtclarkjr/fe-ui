import { ICard } from '../components/Card/Card';
import { ITrack } from '../components/Track/Track';
import recentPlayed from '../data/recentPlayed.json';
import suggestions from '../data/suggestions.json';
import playlists from '../data/playlists.json';
import tracks from '../data/tracks.json';

export interface ISuggestion {
  id: number;
  thumbnail: string;
  title: string;
}

export const getGreeting = (): Promise<Array<ISuggestion>> => {
  return new Promise<Array<ISuggestion>>((resolve) => {
    setTimeout(() => {
      resolve(suggestions)
    }, Math.random() * 2 * 1000)
  });
};

export const getRecentPlayed = (): Promise<Array<ICard>> => {
  return new Promise<Array<ICard>>((resolve) => {
    setTimeout(() => {
      resolve(recentPlayed);
    }, Math.random() * 3 * 1000);
  });
};

export const getPlaylists = (): Promise<Array<string>> => {
  return new Promise<Array<string>>((resolve) => {
    setTimeout(() => {
      resolve(playlists);
    }, Math.random() * 3 * 1000);
  });
};

export const getTracks = (): Promise<Array<ITrack>> => {
  return new Promise<Array<ITrack>>((resolve) => {
    setTimeout(() => {
      resolve(tracks);
    }, Math.random() * 3 * 1000);
  });
};
