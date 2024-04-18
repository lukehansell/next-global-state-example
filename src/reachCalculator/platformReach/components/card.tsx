import { AgeReach } from "../state/types/state"

export default function Card({ reachData }: {
  reachData: AgeReach[]
}) {
  return <div style={{
    'background': '#3333ee',
    'color': '#eee',
    padding: 5
  }}>
    <h1>Reach</h1>
    <table>
      <thead>
        <tr>
          <th>age</th>
          <th>reach</th>
        </tr>
      </thead>
      <tbody>
        {reachData.map(({ reach, age }) => (
          <tr key={age}>
            <td>{age}</td>
            <td>{reach}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}