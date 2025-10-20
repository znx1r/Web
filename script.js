const PROFILE_URL = "https://www.roblox.com/users/8288880179/profile";

const THUMBNAILS = [
  { image:"https://sp.deevid.ai/storage/v1/object/public/user-image/38460562-6830-4c2f-8abe-96fa1da9c706.png", title:"" },
  { image:"https://sp.deevid.ai/storage/v1/object/public/user-image/b247bc89-9d32-472b-9b4b-1fa651b82ef0.png", title:"" },
  { image:"https://sp.deevid.ai/storage/v1/object/public/user-image/10cdf614-8524-435d-a4a8-fc9fb9d7915d.png", title:"" },
  { image:"file:///C:/Users/Juan/Downloads/white%20(3)%20(5)%20(1).jpg", title:"" },
  { image:"https://sp.deevid.ai/storage/v1/object/public/user-image/3b8df1ce-9cf3-466a-8800-2324acd14d92.png", title:"" },
  { image:"https://sp.deevid.ai/storage/v1/object/public/user-image/4d45b624-0438-4fb4-9433-86cce4296359.png", title:"" },
  { image:"https://cdn.discordapp.com/attachments/1417274577523834911/1429416342087536670/image.png?ex=68f6b7f5&is=68f56675&hm=bf031202eb4b10686db218eaa828f3e042a8bb6d4958cf4c9f8e1a67c3b86947", title:"" },
  { image:"https://media.discordapp.net/attachments/1170722135845642330/1429590061891977216/d153fb03-5b47-4c14-89f0-965faf73e663.png?ex=68f6b0ff&is=68f55f7f&hm=26049c023f46e10ab97c77bac7819c89b596268409b9671eec739dafbe75713e&=&format=webp&quality=lossless&width=1400&height=800", title:"" },
  { image:"https://media.discordapp.net/attachments/1170722135845642330/1429590062512996464/f38f0613-a455-48a5-bcf6-9f0adc6c9aea.png?ex=68f6b0ff&is=68f55f7f&hm=6181cd4aa011b67d14a1657cd7040e608e1b17309a06319d56e2de9f45872462&=&format=webp&quality=lossless&width=1400&height=800", title:"" },
  // add more thumbnails here...
];

// ---- Setup ----
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("viewProfile").addEventListener("click",()=>window.open(PROFILE_URL));
document.getElementById("copyProfile").addEventListener("click",async()=>{
  await navigator.clipboard.writeText(PROFILE_URL);
  alert("Profile link copied!");
});

// ---- Thumbnails ----
const thumbGrid=document.getElementById("thumbGrid");
THUMBNAILS.forEach(t=>{
  const img=document.createElement("img");
  img.src=t.image;
  img.alt=t.title;
  img.loading="lazy";
  thumbGrid.appendChild(img);
});

// ---- Contact form ----
const form=document.getElementById("contactForm");
form.addEventListener("submit",async e=>{
  e.preventDefault();
  alert("Message sent!");
  form.reset();
});

// ---- Smooth scroll ----
function scrollToId(id){ document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); }
