
import IconEnlace from "../icons/Botones/IconEnlace.astro";
import IconSteam from "../icons/Botones/IconSteam.astro";
import IconAndroid from "../icons/Botones/IconAndroid.astro";
import IconTrailer from "../icons/Botones/IconTrailer.astro";
import IconItchio from "../icons/Botones/IconItchio.astro";
import IconSwitch from "../icons/Botones/IconSwitch.astro";
import IconCorreo from "../icons/Botones/IconCorreo.astro";
import IconLinkedin from "../icons/Botones/IconLinkedin.astro";
import IconVacio from "../icons/Botones/IconVacio.astro";

const buttons: Record<string, { name: string; color: string; Icon: any; }> = {
  ENLACE: {
    name: "Web",
    color: "bg-gray-800 text-white",
    Icon: IconEnlace,

  },
  SWITCH: {
    name: "",
    color: "bg-[#fe0016] text-[#FBFEFB]",
    Icon: IconSwitch,
  },
  STEAM: {
    name: "",
    color: "bg-[#0A1A31] text-white",
    Icon: IconSteam,
  },
  ANDROID: {
    name: "",
    color: "bg-[#39AF66] text-white",
    Icon: IconAndroid,
  },
  TRAILER: {
    name: "Trailer",
    color: "bg-black text-white",
    Icon: IconTrailer,
  },
  ITCHIO: {
    name: "",
    color: "bg-[#FF2B4F] text-white",
    Icon: IconItchio,
  },
  CONTACTAME: {
    name: "Contáctame",
    color: "bg-[#1F2937] text-white shadow-[0_0px_3px_rgba(8,_112,_184,_0.7)] shadow-[#4ACFA8]",
    Icon: IconCorreo,
  },
  LINKEDIN: {
    name: "LinkedIn",
    color: "bg-[#1F2937] text-white shadow-[0_0px_3px_rgba(8,_112,_184,_0.7)] shadow-[#4ACFA8]",
    Icon: IconLinkedin,
  },
  VACIO: {
    name: "",
    color: "disabled",
    Icon: IconVacio,
  },
};

export default buttons

