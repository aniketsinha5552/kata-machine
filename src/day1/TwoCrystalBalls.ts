export default function two_crystal_balls(breaks: boolean[]): number {
    let len = breaks.length;
    let jump = Math.floor(Math.sqrt(len));
    for(let i=0;i<len;i+=jump){
        if(breaks[i]){
            for(let j=i-jump;j<=i;j++){
                if(breaks[j]) return j;
            }  
        }
    }
    return -1;
}