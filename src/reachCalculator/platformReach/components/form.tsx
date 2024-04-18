import { SyntheticEvent, useRef } from "react"

export default function Form({ onSubmit }: {
  onSubmit: (minAge: number, maxAge: number) => void
}) {
  const minAgeInput = useRef<HTMLInputElement>(null)
  const maxAgeInput = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: SyntheticEvent) => {
    onSubmit(parseInt(minAgeInput.current?.value || '3'), parseInt(maxAgeInput.current?.value || '16'))
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
      <label htmlFor="minAge">Min Age:</label>
      <input name="minAge" type="number" ref={minAgeInput} required />
      <label htmlFor="minAge">Max Age:</label>
      <input name="minAge" type="number" ref={maxAgeInput} required />
      <input type="submit" />
    </form>
  )
}