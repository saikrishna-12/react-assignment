import Resourceform from "./components/resourceform";


export default function AddResource(){
    return(
        <div className="grid grid-cols-2 grid-rows-1 bg-[#F5F5F5] gap-0 h-[calc(100vh-116px)]">
  <div className="col-start-1 col-end-2 row-start-1 bg-[#F5F5F5] row-end-2 flex items-center">
    {/* Content for the first grid item */}
    <Resourceform/>
  </div>
  <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-contain justify-center bg-no-repeat bg-[url('/image9.png')]">
    
  </div>
</div>
    );
}

// bg-contain