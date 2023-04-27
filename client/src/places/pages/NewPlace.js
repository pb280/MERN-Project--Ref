import { VALIDATOR_REQUIRE } from '../../shared/util/validator'
import './NewPlace.css'

import Input from '../../shared/components/FormElements/Input'

const NewPlace = () => {
  return (
    <form className='place-form'>
      <Input
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
      />
    </form>
  )
}

export default NewPlace
