import Link from 'next/link'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <Link href='/'>Home</Link>
        <br />
        <Link href={'/dashboard'}>Dash</Link>
    </div>
  )
}

export default About