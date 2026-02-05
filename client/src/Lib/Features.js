import moment from "moment";

const fileFormat= (url="")=>{
    const fileExt=url.split(".").pop();
    if(fileExt==="mp4"|| fileExt==="Webm"||fileExt ==="ogg")
        return "video";

  if(fileExt==="mp3"|| fileExt==="Wev")
        return "audio";
    
   if(fileExt==="png"|| fileExt==="jpg"||fileExt ==="jpeg" || fileExt=== "gif")

        return "image";

        return "file";
};

const transformImage = (url="", width=100) =>url; 

const getLast7Days=()=>{
const CurrentDate=moment();
const last7Days=[];

for(let i=0; i<7;i++){

    const dayDate=CurrentDate.clone().subtract(i,"days");
    const dayName=dayDate.format("dddd");
    last7Days.unshift(dayName);
}
return last7Days;
}; 


export {fileFormat, transformImage, getLast7Days};