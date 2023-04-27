import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'id_1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://loremflickr.com/g/320/240/empire',
    address: 'J 6/91 L, Nehru Market, Rajouri Garden',
    location: {
      lat: 42.465401,
      lng: -92.217735
    },
    creator: 'u1'
  },
  {
    id: 'id_2',
    title: 'Sunshine Rose Building',
    description: 'One of the most famous suicide spot!',
    imageUrl: 'https://loremflickr.com/g/320/240/tower',
    address: 'J 6/91 L, Nehru Market, Rajouri Garden',
    location: {
      lat: 22.465401,
      lng: 92.217735
    },
    creator: 'u2'
  }
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
