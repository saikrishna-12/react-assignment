'use client'
import Image from "next/image";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export default function Navebar(){
    const pathname = usePathname();
    const router = useRouter();
    
    return(
        <div className="w-full px-8 py-2 flex justify-between shadow-md">
            <Image alt='logo' src= '/NxtWave-logo.png' width={82} height={40}/>
            <div className="flex ">
              {(pathname === '/resources')&& <Button className="mx-2 font-normal hover:bg-primary text-sm" onClick={()=>router.push('/add-resource')}><Plus size={20} /> ADD</Button>}  
            <Avatar className="mx-2">
      <AvatarImage height={40} width={40} src="avatar.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>
        </div>
    );
}