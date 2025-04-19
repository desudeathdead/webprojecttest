import STYLE from "@/app/contants/style";
import { logoutUser } from "../../../../utils/LoginUser";


export default function page() {
  return (
    <div>
      <button 
        className={STYLE}
        onClick={logoutUser}>Logout</button>
    </div>
  )
}