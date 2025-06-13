import { useState } from "react";
import { ListingRoadmapsApi } from "../../../services/roadmap/listing/api";

interface Roadmap {
   id: number | null;
   category: string;
   label: string;
   estimatedHours: number;
 }

   async function fetchRoadmap() {
       try {
         const data = await ListingRoadmapsApi();
         setRoadmaps(data);
       } catch (error) {
         console.error("Error fetching roadmaps:", error);
       }
     }


const [roadmaps, setRoadmaps] = useState<Roadmap[]>([])

export const buttonsRoadmaps = [
   
   {name: 'Back End', path: '/roadmaps/back-end'},
   

]

