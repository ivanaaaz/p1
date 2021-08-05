import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import { members } from "..";
import { useRouter } from "next/router";


export default function Home2() {
  const router = useRouter();
  let mid = router.query.id;
  let member = members[members.findIndex(x => x.id === mid
    )];
    return(
     <div>   
      <h1>Details of members</h1>
    <ul>  
      <li> <p>{member.name}</p></li> 
      <li><p>{member.email}</p></li>     
      </ul>
      </div>)
       };
