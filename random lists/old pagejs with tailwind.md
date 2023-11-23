div className="relative 
      flex 
      place-items-center 
      before:absolute 

      before:h-[500px] 
      before:w-[880px] 
      
      before:-translate-x-1/2 
      before:translate-y-1/2

      before:rounded-full 
      before:bg-gradient-radial 
      before:from-[#c45aa3]
      before:to-transparent
      before:content-[''] 
      after:absolute 
      after:-z-20 
      after:h-[180px] 
      after:w-[240px] 
      after:translate-x-2/3 
      after:bg-gradient-conic 
      after:from-[#a164e0]
      after:via-[#e55061] 
      after:content-[''] 

      /* Dark mode */
      
      before:dark:bg-gradient-to-br 
      before:dark:from-transparent 
      before:dark:to-[#c45aa3]
      before:dark:opacity-10 
      after:dark:from-[#d55583]
      after:dark:via-[#e55061] 
      after:dark:opacity-40 
      before:lg:h-[360px] 
      z-[-1]">  
      </div>



lightmode:
  --tile-start-rgb: 239, 245, 249;
  --tile-end-rgb: 228, 232, 233;
  --tile-border: conic-gradient(
    #00000080,
    #00000040,
    #00000030,
    #00000020,
    #00000010,
    #00000010,
    #00000080
  );

darkmode:
   --tile-start-rgb: 2, 13, 46;
    --tile-end-rgb: 2, 5, 19;
    --tile-border: conic-gradient(
      #ffffff80,
      #ffffff40,
      #ffffff30,
      #ffffff20,
      #ffffff10,
      #ffffff10,
      #ffffff80
    );