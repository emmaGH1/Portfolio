import { useState, useEffect, PropsWithoutRef} from 'react'

type GetGreetingsProps = {
  className?: string;
}

const GetGreetings = ({ className }: GetGreetingsProps) => {
 const [greeting, setGreeting] = useState<string>('')

 const date: Date = new Date()
 const hour: number = date.getHours()

 useEffect(() => {

    if (hour >= 5 && hour < 12) {
        setGreeting('Top of the morning ☕')
      } else if (hour >= 12 && hour < 18) {
        setGreeting('Good afternoon 🌞')
      } else if (hour >= 18 && hour < 22) {
        setGreeting('Good evening 🌙')
      } else {
        setGreeting('Hello, night owl 🦉')
      }
 })

  return <div className={className}>{greeting}</div>
}

export default GetGreetings