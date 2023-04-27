import './UsersList.css'

import Card from '../../shared/components/UIElements/Card'
import UserItem from './UserItem'

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <Card>
        <h2>No users found.</h2>
      </Card>
    )
  }

  return (
    <ul className='users-list'>
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  )
}

export default UsersList
