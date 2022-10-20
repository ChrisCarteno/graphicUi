import { useState, useEffect } from 'react';
import Link from "next/link"


export default function Home() {

  // useEffect(() => {
  //   setTimeout(() => {

  //   }, 2000);
  // }, [])

  return (
    <main >
      {/* <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div> */}
      <div>
        <Link href ="/page2" passHref>
          <button> Go to Page 2</button>
        </Link>

      </div>
    </main>
  )
}
