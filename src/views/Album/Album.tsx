import React, {useState, useEffect} from 'react'
import Back from '../../components/Back/Back'
import Play from '../../components/Play/Play'
import Heart from '../../components/Heart/Heart'
import DotMenu from '../../components/DotMenu/DotMenu'
import Skeleton from '../../components/Skeleton/Skeleton'
import Track, {ITrack} from '../../components/Track/Track'
import {getTracks} from '../../store/middleware/api.middleware'
import { useAppSelector } from '../../store/hooks'
import './styles.css'

const Album = () => {
  const album = useAppSelector((state) => state.album)
  const [tracks, setTracks] = useState<Array<ITrack>>([])
  const [loading, setLoading] = useState(true)
  const main = document.querySelector('main')!

  useEffect(() => {
    (async () => {
      main.scrollTo(0, 0)
      window.scrollTo(0, 0) // mobile :|
      const res = await getTracks()
      setTracks(res)
      setLoading(false)
    })()
  }, [main])

  return (
    <>
      <Back url="/" />
      <header className="header">
        <div className="header__image" style={{backgroundImage: `url(${album.thumbnail})`}}></div>
        <div className="header__wrapper">
          <h2 className="header__subtitle">album</h2>
          <h1 className="header__title">{album.title}</h1>
        </div>
      </header>
      <div className="actions">
        <Play size="big" />
        <Heart size="big" />
        <DotMenu />
      </div>
      <hr className="separator" />
      <div className="tracks">
        {loading ? 
          [...Array(10).keys()].map(n => (<Skeleton height="50px" key={n} />)) :
          tracks.map((track, idx) => <Track name={track.name} length={track.length} number={track.number} key={idx} />)
        }
      </div>
    </>
  )
}

export default Album
