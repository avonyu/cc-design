export function Clients() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          <div className="h-11 flex items-center">
            <span className="text-2xl font-bold text-gray-400">Company 1</span>
          </div>
          
          <div className="w-0.5 h-14 bg-[#c0c5d2]" />
          
          <div className="h-12 flex items-center">
            <span className="text-2xl font-bold text-gray-400">Company 2</span>
          </div>
          
          <div className="w-0.5 h-14 bg-[#c0c5d2]" />
          
          <div className="h-13 flex items-center">
            <span className="text-2xl font-bold text-gray-400">Company 3</span>
          </div>
          
          <div className="w-0.5 h-14 bg-[#c0c5d2]" />
          
          <div className="h-9 flex items-center gap-3">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-4 h-4 bg-[#f25022]" />
              <div className="w-4 h-4 bg-[#7fba00]" />
              <div className="w-4 h-4 bg-[#00a4ef]" />
              <div className="w-4 h-4 bg-[#ffb900]" />
            </div>
            <span className="text-xl font-semibold text-gray-500">Microsoft</span>
          </div>
        </div>
      </div>
    </section>
  );
}