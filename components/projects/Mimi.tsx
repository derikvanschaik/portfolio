export default function Mimi(){
    return (
        <>
            <div class='py-5'>
                <h1 class='font-bold underline'>Project Description:</h1>
                <p>
                Mimi is a full stack, drag and drop interface mindmap application that allows
                users to easily create mindmaps on the web! Users can log in and save their mindmaps across many sessions! 
                To try the application, head to <a class='underline text-blue-500' href='https://mimi-fresh.deno.dev/register'>mimi-fresh.deno.dev/register</a> and register.
                </p>
            </div>
            <div class='py-5'>
                <h1 class='font-bold underline'>Technologies</h1>
                <p>
                    Typescript, React, Deno, SSR, PostgreSQL, Fresh JS.
                </p>
                See more at: <a class='underline text-blue-500'  href='https://github.com/derikvanschaik/mimi_fresh'>github.com/derikvanschaik/mimi_fresh</a>
            </div>

            {/* screenshots */}
            <div class='py-5'>

                <h1 class='font-bold underline'>Overview:</h1>
                <div class='relative px-5 rounded-lg w-full'>
                    <p class='text-lg italic bg-white rounded py-5'>Users can create/edit/delete mindmaps in the main dashboard</p>
                    <img src='mimilist.png' class='static border-1 border-black rounded-lg'></img>
                </div>

                <div class='relative px-5 py-10 rounded-lg w-full'>
                    <p class='text-lg italic bg-white rounded py-5'>By navigating to a mindmap, user can start creating mindmaps similar to this: </p>
                    <img src='mimimindmap.png' class='static border-1 border-black rounded-lg'></img>
                    <p class='text-lg italic bg-white rounded py-5'>
                        Textboxes can be easily <span class='font-bold'>
                            dragged, connected with lines, disconnected with lines, deleted and edited!
                        </span>
                    </p>
                </div>
            </div>

        </>
    )
}