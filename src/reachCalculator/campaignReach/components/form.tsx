import { SyntheticEvent, useRef } from "react"

export default function Form({ onSubmit }: {
  onSubmit: (minAge: number, maxAge: number) => void
}) {
  const minAgeInput = useRef<HTMLInputElement>(null)
  const maxAgeInput = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: SyntheticEvent) => {
    onSubmit(
      parseInt(minAgeInput.current?.value || ''),
      parseInt(maxAgeInput.current?.value || '')
    )
    e.preventDefault()
  }

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">min age:</label>
      <input name="name" type="number" ref={minAgeInput} required />
      <label htmlFor="name">max age:</label>
      <input name="name" type="number" ref={maxAgeInput} required />
      <input type="submit" />
    </form>
  )
}