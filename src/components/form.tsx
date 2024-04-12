import { SyntheticEvent, useRef } from "react"

export default function Form({ onSubmit }: {
  onSubmit: (name: string) => void
}) {
  const nameInput = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: SyntheticEvent) => {
    onSubmit(nameInput.current?.value || '')
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
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" ref={nameInput} required />
      <input type="submit" />
    </form>
  )
}