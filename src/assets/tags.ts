import TagUnity from "../icons/Tags/TagUnity.astro";
import TagCSharp from "../icons/Tags/TagCSharp.astro";
import TagReact from "../icons/Tags/TagReact.astro";
import TagNode from "../icons/Tags/TagNode.astro";
import TagSEO from "../icons/Tags/TagSEO.astro";
import TagWPO from "../icons/Tags/TagWPO.astro";
import TagCopywritting from "../icons/Tags/TagCopywritting.astro";
import TagJava from "../icons/Tags/TagJava.astro";
import TagUnreal from "../icons/Tags/TagUnreal.astro";

const tags:Record<string, { name: string; color: string; Icon: any }> = {
  UNITY: {
    name: "Unity",
    color: "bg-white text-black",
    Icon: TagUnity,
  },
  UNREAL: {
    name: "Unreal 5",
    color: "bg-[#000000] text-white",
    Icon: TagUnreal,
  },
  VERSE: {
    name: "Verse",
    color: "bg-[#000000] text-white",
    Icon: TagUnreal,
  },
  "C#": {
    name: "C#",
    color: "bg-[#2F086D] text-white",
    Icon: TagCSharp,
  },
  "REACT.JS": {
    name: "React.js",
    color: "bg-[#0D0628] text-white",
    Icon: TagReact,
  },
  "NODE.JS": {
    name: "Node.js",
    color: "bg-[#03281e] text-white",
    Icon: TagNode,
  },
  "JAVA": {
    name: "Java",
    color: "bg-white text-black",
    Icon: TagJava,
  },
  SEO: {
    name: "SEO",
    color: "bg-slate-800 text-white",
    Icon: TagSEO,
  },
  WPO: {
    name: "WPO",
    color: "bg-[#FF2E56] text-white",
    Icon: TagWPO,
  },
  COPYWRITTING: {
    name: "Copywritting",
    color: "bg-slate-900 text-white",
    Icon: TagCopywritting,
  },
  
};
export default tags