import React from 'react'
import './styles.css'

export interface ICreatePlaylist {
  onClick?: () => void
}

const CreatePlaylist: React.FC<ICreatePlaylist> = ({onClick}) => {
  return (
    <nav className="menu" onClick={onClick}>
      <ul className="menu__list">
        <li className="list-item">
          <svg
            className="list-item__icon__create"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
          </svg>
          <label className="list-item__label__create">Create Playlist</label>
        </li>

      </ul>
    </nav>
  )
}

export default CreatePlaylist
