import { useState } from "preact/hooks";
import Mimi from "../components/projects/Mimi.tsx";
import Quotes from "../components/projects/Quotes.tsx";

export default function ProjectIsland() {
    const [curIdx , setCurIdx] = useState(0);
    const projects = ['Mimi', 'Fresh quotes'];

    const renderCurProjectSpotlight = function(idx: number){
        if(idx === 0){
            return <Mimi />;
        }else if (idx === 1){
            return <Quotes />
        }
        return null;
    }
    return (
      <div>
        <div class="h-screen">

            <h2 class='relative text-2xl mb-4 w-full py-5 border-b-2 border-gray-300 text-center'>
                Projects
                <p class='absolute -bottom-5 right-12 bg-gray-50 italic font-extrabold'>{projects[curIdx]}</p>
            </h2>

          <div class='h-5/6 w-full flex flex-row'>
              {/* tabs */}
              <div class='w-1/4 flex flex-col px-2'>
                  {
                      projects.map((project, i) =>{
                        return (
                            <div
                              onClick={() => setCurIdx(i)}
                              className={`px-5 py-5 underline cursor-pointer ${curIdx === i? 'bg-gray-300': ''}`}>{project}</div>
                        )
                      })
                  }
              </div>

              {/* Selected Project Info box */}
              <div class='flex flex-col w-3/4'>
                  <div class='h-full overflow-y-scroll px-5'>
                      {
                          renderCurProjectSpotlight(curIdx)
                      }
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
  