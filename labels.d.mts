import type{GraphNode}from'./graph.mjs';import type{Interpretation}from'./model';
export function scatterIdeas(nodes:GraphNode[],concepts:Interpretation['concepts']):Set<number>;
export function placeLabels(nodes:GraphNode[],concepts:Interpretation['concepts'],important:Set<number>,focus:number|null,scale:number,tx:number,ty:number,width:number):Map<number,{x:number;y:number;font:number;text:string}>;
