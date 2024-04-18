export default function TabSelector({
  onChange,
  selectedTab,
  tabs
}: {
  onChange: (selectedTab: number) => void,
  selectedTab: any,
  tabs: { name: string, value: any }[]
}) {
  return (
    <ul style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 5,
      flex: 1,
      justifyContent: 'flex-end',
      margin: 5
    }}>
      {tabs.map(tab => (
        <li key={tab.value}>
          <a 
            onClick={() => onChange(tab.value)} 
            style={{
              fontWeight: selectedTab === tab.value ? 500 : 200
            }}
            >{tab.name}</a>
        </li>
      ))}
    </ul>
  )
}