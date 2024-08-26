// export default function Container({children}) {
//   return 
//     <div className="max-w-[1200px]">
//       {children}
//     </div>
  
// }
import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[1200px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">{children}</div>;
}
