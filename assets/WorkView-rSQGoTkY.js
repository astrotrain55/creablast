import{_ as m,r as g,o,c as n,a as e,w as a,b as r,t as c,d}from"./index-ESwRaZdX.js";const b="/assets/afcon-6ea1XGcE.webp",u="/assets/jbl-vc-SbFsJ.webp",w="/assets/kia-bAS1-Bgj.webp",f="/assets/meller-6zuNn9oY.gif",j="/assets/pepsico-pUN9rUt0.webp",k="/assets/wish-AB69xIVe.gif",h={props:{image:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0}},computed:{src(){return new URL(Object.assign({"../assets/images/projects/afcon.webp":b,"../assets/images/projects/jbl.webp":u,"../assets/images/projects/kia.webp":w,"../assets/images/projects/meller.gif":f,"../assets/images/projects/pepsico.webp":j,"../assets/images/projects/wish.gif":k})[`../assets/images/projects/${this.image}`],import.meta.url).href}}},v={class:"card"},x=["src","alt"];function y(_,l,s,V,C,p){const i=g("router-link");return o(),n("div",v,[e(i,{to:`/work/${s.name}`},{default:a(()=>[r("img",{src:p.src,alt:s.name},null,8,x)]),_:1},8,["to"]),r("div",null,c(s.description),1),e(i,{to:`/work/${s.name}`},{default:a(()=>[d(c(s.link),1)]),_:1},8,["to"])])}const t=m(h,[["render",y]]),S={class:"projects"},N={__name:"WorkView",setup(_){return(l,s)=>(o(),n("div",S,[e(t,{class:"projects__item",name:"wish",image:"wish.gif",link:"Wish x Young Glory entrance",description:"Christmas COVID special"}),e(t,{class:"projects__item",name:"jbl",image:"jbl.webp",link:"JBL 75 years",description:"Digital special"}),e(t,{class:"projects__item",name:"kia",image:"kia.webp",link:"KIa MOHAVE",description:"Celebrity endorsement"}),e(t,{class:"projects__item",name:"afcon",image:"afcon.webp",link:"AFCON",description:"Social impact"}),e(t,{class:"projects__item",name:"pepsico",image:"pepsico.webp",link:"Domik v derevne (Pepsico)",description:"Packaging activation"}),e(t,{class:"projects__item",name:"meller",image:"meller.gif",link:"Meller film",description:"OLV"})]))}};export{N as default};
