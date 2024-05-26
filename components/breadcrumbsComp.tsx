'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";
import { useState,useEffect, useMemo } from "react";

  
  export default function BreadcrumbsComponent(){
    const pathname= usePathname();
    const [crumbs, setCrumbs]= useState<string[]>([])
    useMemo(()=>
      (setCrumbs(pathname.split('/'))
    ),[pathname])

    function capitalizeFirstChar(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }


    return(
        <div className="bg-[#F5F5F5] pt-6 pb-4 px-6">
        <Breadcrumb className="flex">
  
  {crumbs.map((x, index)=>(
    <BreadcrumbList key={x}>
    {(index === 0)? (
      <BreadcrumbItem >
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    ):(
      <><BreadcrumbSeparator />
      <BreadcrumbItem >
      
      <BreadcrumbLink href={`/${crumbs.slice(1, index + 1).join('/')}`}>{capitalizeFirstChar(x)}</BreadcrumbLink>
    </BreadcrumbItem></>
    )}
      </BreadcrumbList>
  ))}  
 
</Breadcrumb>

        </div>
    );
  }