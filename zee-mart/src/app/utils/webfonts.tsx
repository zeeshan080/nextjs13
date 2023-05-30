// function made to manage google fonts on server side and passed to client when needed

import { Poppins } from "next/font/google";

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
  });
  
