import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { ProfileButton } from "./ProfileButton/ProfileButton";

export function Header(props: any) {

    function checkLogged() {
        if(props.isLoggedIn) {
            return <ProfileButton></ProfileButton>
        } else {
            return
            // add here Reusable Button Component
            // <button className="w-[73px] h-[26px] text-white border-solid border-[1px] border-[#7E2020] rounded-[3px]">Log In</button>
        }
    }

    return (
        <div className="flex flex-row justify-between items-center w-full h-[27vw] px-[5vw] bg-[#16171B]">
            {checkLogged()}
            <BurgerMenu></BurgerMenu>
        </div>
    );
}