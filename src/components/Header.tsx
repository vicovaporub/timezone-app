export const Header = () => {
  return (
    <div
      className="sm:fixed fixed sm:left-1/2 left-1/2 -translate-x-1/2
       bg-gradient-to-r from-blue-400 to-purple-500 
      shadow-lg backdrop-blur-[0.5rem] sm:top-[5rem] top-[2rem] sm:h-[3.8rem] h-[5.6rem]
      rounded-lg w-[17rem] p-4
      sm:w-[25rem] sm:rounded-lg sm:p-1"
    >
      <h1 className="text-2xl font-bold text-white text-center w-full">
        Timezone Checker
      </h1>
      <p className="text-sm text-white text-center w-full">
        São Paulo to the World
      </p>
    </div>
  );
};
