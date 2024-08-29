import {ReactNode} from "react";

<<<<<<< HEAD
export function Background({children}:{children:ReactNode}) {
=======
export function Background({children}:any) {
>>>>>>> f81b0b8 (chnages in code)
    return (
      <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" >
        {children}
      </div>
    );
  }