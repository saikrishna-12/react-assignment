'use client'
import { Input } from "@/components/ui/input"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Card from "./cards"
import { useEffect, useState } from "react";
import { fetchResources } from "../api/api";


interface Resource {
    id: string;
    title: string;
    icon_url: string;
    link: string;
    description: string;
    category: string;
    tag: string;
  }

export default function ResourcesBody(){
    const cardData = {
        "title": "Nickelson and Sons",
        "icon_url": "http://loremflickr.com/640/480",
        "link": "https://gaseous-pod.net",
        "description": "Eligendi cum eligendi nemo accusamus natus vero dolor.",
        "category": "Automotive",
        "tag": "request",
        "id": "1"
    };
    const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getResources = async () => {
      try {
        const data = await fetchResources();
        setResources(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    getResources();
  }, []);

    return(
        <div className="pt-6 mx-14 px-14">
           <Command className="max-w-[648px] ml-8">
           <CommandInput placeholder="search" />
          </Command>

          <div className="flex flex-wrap justify-around mt-8">
          {(loading) && (<div className="w-full min-h-[calc(100vh-500px)] flex justify-center items-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                                <p className="px-2">Loading......</p>
                            </div>)}
          {(error) && (<div>Error: {error}</div>)}
          {(resources.length !== 0) && (
           resources.map((x,index)=>(
            <div className="my-4">
            <Card {...x}/>
            </div>
           ))
          )}


          </div>

          
        </div>
    )
}