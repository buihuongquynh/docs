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
if (loading) return null;
if (error) return `Error! ${error}`;
  console.log(data)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <ReactMarkdown children={data?.getData.data}/>,
    </div>
  )
}
