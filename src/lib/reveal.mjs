function random(key,seed){let n=Math.imul((key|0)^(seed|0),0x45d9f3b);n=Math.imul(n^(n>>>16),0x45d9f3b);return((n^(n>>>16))>>>0)/4294967296}
// Independent local bursts: no preferred direction and no global sweep.
// Shared seed keeps journal echoes synchronized with this particular assembly.
export function nodeDelay(node,seed=0){const cellX=Math.floor((node.x||0)/45),cellY=Math.floor(node.y/50);const burst=random(Math.imul(cellX+1,73856093)^Math.imul(cellY+1,19349663),seed);const jitter=random(node.id+917,seed);return .35+burst*12+jitter*2.5}
export function wordSchedule(nodes,concepts,seed=0){const schedule=new Map;for(const node of nodes){const word=node.label.toLocaleLowerCase().trim();if(!word)continue;const delay=nodeDelay(node,seed);if(!schedule.has(word)||delay<schedule.get(word))schedule.set(word,delay)}return schedule}
// A small sideways arc settles each vertex into its final position. Edges use
// these same offsets, so their endpoints stay attached throughout the motion.
export function nodeOffset(node,elapsed,seed=0){const t=Math.max(0,Math.min(1,(elapsed-nodeDelay(node,seed))/4.8));if(t===1)return {x:0,y:0};const angle=random(node.id+4821,seed)*Math.PI*2,distance=24+random(node.id+751,seed)*55,ease=(1-t)**3,arc=Math.sin(t*Math.PI)*(1-t)*12;return{x:Math.cos(angle)*distance*ease-Math.sin(angle)*arc,y:Math.sin(angle)*distance*.65*ease+Math.cos(angle)*arc}}
