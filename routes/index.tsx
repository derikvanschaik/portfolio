import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Derik | Dev</title>
      </Head>
      {/* Intro Section */}
      <div class="flex flex-col items-center justify-center h-screen">
        {/* profile pic + title */}
        <div class='flex justify-between px-2 py-2 shadow-md'>
          <div class='flex flex-col justify-center px-2'>
            <h1 class='text-4xl'>Derik V.</h1>
            <h3 class='text-3xl italic font-thin'>Full Stack Developer</h3>
          </div>
          <div class=''>
            <img src='profile.jpeg' width='400' class='rounded-lg'></img>
          </div>
        </div>
        {/* navigation */}
        <ul class='flex text-4xl w-1/2 justify-center'>
        <li>
          <a href='#' class='underline px-3'>Experience</a>
        </li>
        <li>
          <a href='#' class='underline px-3'>Projects</a>
        </li>
      </ul>
      </div>
    </>
  );
}
