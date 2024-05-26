import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResourcesBody from "./components/resources"



export default function resources(){
    
    return(
    <div className="bg-[#F5F5F5] min-h-[calc(100vh-56px)]  ">
        <Tabs defaultValue="Resources" className=" flex flex-col w-full items-center " >
  <TabsList className="border-2 w-fit p-0 m-0" >
    <TabsTrigger value="Resources" className="w-[200px] rounded-r-none text-sm border-r-2 text-black">Resources</TabsTrigger>
    <TabsTrigger value="Requests" className="w-[200px] rounded-none border-r-2 text-black">Requests</TabsTrigger>
    <TabsTrigger value="Users" className="w-[200px] text-black">Users</TabsTrigger>
  </TabsList>
  
  <TabsContent value="Resources" className="w-full"><ResourcesBody/></TabsContent>
  <TabsContent value="Requests">Under Development </TabsContent>
  <TabsContent value="Users">Under Development</TabsContent>
</Tabs>

    </div>
    )
}