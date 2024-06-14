import React from 'react'
import { cookies } from "next/headers";

export default function Dashboard() {

    async function createCookie(params:any) {
        "use server"

        const selectedTheme = params.get('theme')
        cookies().set('theme',selectedTheme)
        console.log(cookies().getAll())
    }
    async function eliminateCookie() {
        "use server"
        cookies().delete('theme')
    }
  return (
    <div>
      <form action={createCookie}>
        <select name='theme'>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
        <button type='submit'>Save Theme</button>
        <button onClick={eliminateCookie}>Eliminate Cookie</button>
      </form>
      
    </div>
  )
}
