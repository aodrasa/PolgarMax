import {Button} from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


const Navbar = () => {
  return (
    <div className="flex items-center p-4">
        <Button variant="ghost" size="icon" className="md:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </Button>
        <div className="flex w-full justify-end">
            <UserButton/>
        </div>
    </div>
  )
}

export default Navbar;