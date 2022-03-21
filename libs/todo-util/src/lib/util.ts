export function getStatus(status:string){
 switch(status){
     case 'Active' :return 1
     case 'Inactive' :return 2
     default :return -1
 }
}