import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'id_1',
      name: 'Person 1',
      image: 'https://loremflickr.com/g/320/240/travel',
      places: 3
    },
    {
      id: 'id_2',
      name: 'Person 2',
      image: 'https://loremflickr.com/g/320/240/tour',
      places: 3
    }
  ]

  return <UsersList items={USERS} />
}

export default Users
