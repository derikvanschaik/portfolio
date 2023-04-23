export default function Mimi(){
    return (
        <>
            <p>
            Mimi is a full stack, drag and drop interface mindmap application that allows
            users to create and save mindmap applications on the web!
            </p>
            {/* screenshots */}
            <div class='relative px-5 py-10 rounded-lg w-full'>
                <div class='absolute top-0 left-0 text-3xl rounded-full px-5 bg-purple-500 text-white'>1</div>
                <p class='text-lg italic bg-white rounded py-5'>Users can create/edit/delete mindmaps in the main dashboard</p>
                <img src='mimilist.png' class='static border-1 border-black rounded-lg'></img>
            </div>

            <div class='relative px-5 py-10 rounded-lg w-full'>
                <div class='absolute top-0 left-0 text-3xl rounded-full px-5 bg-purple-500 text-white'>2</div>
                <p class='text-lg italic bg-white rounded py-5'>By navigating to a mindmap, user can start creating mindmaps similar to this: </p>
                <img src='mimimindmap.png' class='static border-1 border-black rounded-lg'></img>
                <p class='text-lg italic bg-white rounded py-5'>
                    Textboxes can be easily <span class='font-bold'>
                        dragged, connected with lines, disconnected with lines, deleted and edited!
                    </span>
                </p>
            </div>
        </>
    )
}