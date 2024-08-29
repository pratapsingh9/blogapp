import {ReactNode} from "react";

export function Background({children}:any) {
    return (
      <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" >
        {children}
      </div>
    );
  }