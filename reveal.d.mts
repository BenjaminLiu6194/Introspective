import type{GraphNode}from'./graph.mjs';import type{Interpretation}from'./model';
export function nodeDelay(node:GraphNode,seed?:number):number;
export function wordSchedule(nodes:GraphNode[],concepts:Interpretation['concepts'],seed?:number):Map<string,number>;
export function nodeOffset(node:GraphNode,elapsed:number,seed?:number):{x:number;y:number};
