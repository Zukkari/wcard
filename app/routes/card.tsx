import {Invitation} from "~/features/card/invitation";
import {useSearchParams} from "react-router";

export default function Card()
{
    const [searchParams] = useSearchParams();
    
    const name = searchParams.get("g") ?? "S2FsbGlzIGv8bGFsaW5lIQ==";
    
    return (
        <div className="w-screen h-screen">
            <Invitation heading={atob(name)}/>
        </div>
    )
}