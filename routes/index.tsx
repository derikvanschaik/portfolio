import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Derik | Dev</title>
      </Head>

      <div class="flex flex-col items-center justify-center h-screen">

        <ul class='flex flex-row justify-center text-3xl underline w-full my-4'>
          <li class='px-3'>
            <a href="/experience" class="inline-flex items-center justify-center p-5 text-base font-medium rounded-lg bg-gray-50 ">
                <span class="w-full">Experience</span>
                <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> 
          </li>
          <li class='px-3'>
            <a href="/projects" class="inline-flex items-center justify-center p-5 text-base font-medium rounded-lg bg-gray-50 ">
                <span class="w-full">Projects</span>
                <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> 
          </li>
          <li class='px-3'>
            <a href="/skills" class="inline-flex items-center justify-center p-5 text-base font-medium rounded-lg bg-gray-50 ">
                <span class="w-full">Skills</span>
                <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> 
          </li>
        </ul>
        <div class='flex justify-between px-2 py-2 w-2/3 border-y-2 border-gray-300'>
          <div class='flex flex-col justify-center px-2'>
            <h1 class='text-4xl'>Derik</h1>
            <h3 class='text-3xl italic text-gray-400'>Full Stack Developer</h3>
          </div>
          
          <img src='profile.jpeg' width='400' class='rounded-lg'></img>
        </div>

        <p class='text-xl'>
          Passionate. Friendly. Driven.
        </p>
      </div>
    </>
  );
}
