export default function Card({
  reach
}: {
  reach: number
}) {
  return <div style={{
    'background': '#3333ee',
    'color': '#eee',
    padding: 5
  }}>
    <dl>
      <dt>reach:</dt>
      <dd>{reach}</dd>
    </dl>
  </div>
}