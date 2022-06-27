import { Headers } from "../components/Headers";
import { Lesson } from "../components/Lesson";
import { Player } from "../components/Player";
import { Sidebar } from "../components/Sidebar";

export function Event(){
  return(
    <div className="flex flex-col min-h-screen">
      <Headers/>
      <main className="flex flex-1">
        <Player/>
        <Sidebar/>
      </main>
    </div>
  )
} 