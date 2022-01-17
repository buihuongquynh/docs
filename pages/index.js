import useSWR from 'swr'
import ReactMarkdown from 'react-markdown'
const fetcher = (query) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

export default function Index() {
  const { data, error } = useSWR('{ getData { data } }', fetcher)
  console.log(data)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { users } = data

  return (
    <div>
      <ReactMarkdown children={data?.getData.data}/>,
    </div>
  )
}
