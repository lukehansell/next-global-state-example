import { useGlobalState } from "../hooks/useGlobalState"

export default function Card({ name, age }: {
  name: string,
  age: number
}) {
  return <div style={{
    'background': '#3333ee',
    'color': '#eee',
    padding: 5
  }}>
    <dl>
      <dt>name:</dt>
      <dd>{name}</dd>
      <dt>age:</dt>
      <dd>{age}</dd>
    </dl>
  </div>
}