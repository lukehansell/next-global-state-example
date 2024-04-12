export default function TabSelector({
  onChange,
  selectedTab
}: {
  onChange: (selectedTab: number) => void,
  selectedTab: number
}) {
  return (
    <ul>
      <li>
        <a 
          onClick={() => onChange(1)} 
          style={{
            fontWeight: selectedTab === 1 ? 500 : 200
          }}
        >Tab 1</a>
      </li>
      <li>
        <a
          onClick={() => onChange(2)}
          style={{
            fontWeight: selectedTab === 2 ? 500 : 200
          }}
        >Tab 2</a>
      </li>
    </ul>
  )
}