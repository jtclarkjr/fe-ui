import React from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css'
import {ISuggestion} from '../../store/middleware/api.middleware'
import Chip from '../Chip/Chip'
import Skeleton from '../Skeleton/Skeleton'
import {useAppDispatch} from '../../store/hooks'
import {set} from '../../store/reducers/albumSlice'

interface IGreeting {
  greetingSuggestions: Array<ISuggestion>
  loading: boolean
}

const Greeting: React.FC<IGreeting> = ({greetingSuggestions, loading}) => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleChip = (id: number, title: string, thumbnail: string) => {
    dispatch(set({title, thumbnail}))
    history.push(`/album/${id}`)
  }

  // Add a function that determines time of day for welcome title

  return (
    <section className="greeting">
      <h2 className="title">Good afternoon</h2>
      <div className="greeting__grid">
        {loading ? (
          <>
            <Skeleton height="80px" />
            <Skeleton height="80px" />
            <Skeleton height="80px" />
            <Skeleton height="80px" />
          </>
        ) : (
          greetingSuggestions.map(suggestion => (
            <Chip
              thumbnail={suggestion.thumbnail}
              onClick={() =>
                handleChip(
                  suggestion.id,
                  suggestion.title,
                  suggestion.thumbnail
                )
              }
              key={suggestion.id}
            >
              {suggestion.title}
            </Chip>
          ))
        )}
      </div>
    </section>
  )
}

export default Greeting
