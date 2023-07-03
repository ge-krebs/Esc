import { FormEvent, useState, ChangeEvent } from 'react'
import App from './App'
import { useNavigate } from 'react-router-dom'

interface Props {
  userId: string
}

export function wordleForm({ userId }: Props) {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const passcode = 'proxy'

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()

    console.log(input, 'input')
    console.log(passcode, 'passcode')
    if (input !== passcode) {
      return window.alert('try again')
    }
    return navigate(`/game/${userId}/scene/4`)
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value)
  }
  return (
    <>
      <div>
        <h2>ENTER PASSCODE</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="my-input">Passcode</label>
          <input id="my-input" type="password" onChange={handleChange}></input>
          <button>Enter</button>
        </form>
      </div>
    </>
  )
}

export default wordleForm
