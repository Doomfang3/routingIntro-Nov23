import { useState } from 'react'

const AboutPage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>About Page</h1>
      <button type='button' onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </>
  )
}

export default AboutPage
