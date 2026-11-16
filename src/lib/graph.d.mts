import type {Interpretation} from '../types/model';
export type GraphNode={id:number;x:number;y:number;c:number;label:string;part:number;primary?:boolean};
export type GraphEdge={from:number;to:number;kind:string;meaning:string};
export function buildGraph(art:Interpretation):{nodes:GraphNode[];edges:GraphEdge[]};
