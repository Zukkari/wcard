import {animated, useSpring} from "@react-spring/web";
import {useState} from "react";

function FrontSide({heading}: Readonly<{ heading: string }>) {
    return (
        <>
            <p className="cursive text-6xl">
                {heading}
            </p>
            <p className="flex flex-col gap-0.5 text-center text-xl pt-5 font-medium">
                <span>Olete oodatud meie abielu sõlmimisele</span>
                <span>ja pidulikule õhtusöögile</span>
            </p>
            <div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 font-bold text-xl lg:text-2xl">
                <span>Mari-Liis</span>
                <span>&</span>
                <span>Stanislav</span>
            </div>
            <div
                className="flex flex-col items-center justify-center gap-2 text-md font-medium text-center">
                <p>
                    20. september 2025 kell 15.30
                </p>
                <p>
                    Tartu Perekonnaseisuamet
                </p>
                <p>
                    Tiigi 12, Tartu linn
                </p>
            </div>
        </>
    )
}

function BackSide() {
    return (
        <div className="rotate-y-180">
            <div className="flex flex-col text-start items-start gap-2 min-w-[30rem] p-14">
                <p className="font-semibold text-xl lg:text-2xl">
                    Info
                </p>
                <ul className="list-none md:list-disc list-inside">
                    <li>Riietus: <span className="italic">smart-casual</span></li>
                    <li>Kingituseks sobivad soojad soovid ... paberkandjal</li>
                    <li>Palume kinnitada osalemine 20. augustiks kirjutades: <a className="cursor-pointer"
                                                                            href="mailto:mariliisoruste@gmail.com">mariliisoruste@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Invitation({heading}: Readonly<{ heading: string }>) {
    const [flipped, setFlipped] = useState(false)

    const {rotation} = useSpring({
        rotation: flipped ? 180 : 0,
        config: {tension: 100, friction: 20},
    })

    const handleRotate = () => {
        setFlipped(!flipped);
    };

    return (
        <>
            <animated.div
                style={{
                    transform: rotation.to(r => `rotateY(${r}deg)`)
                }}
                className="flex flex-col items-center justify-center h-full perspective-midrange max-w-[29rem] m-auto">

                <div className="relative aspect-square flex justify-center items-center">
                    <div className="absolute inset-0 z-10 bg-[url('/assets/bg.svg')] bg-no-repeat bg-contain bg-[position:50%_50%] bg-clip-content pointer-events-none"/>

                    {/* Card content */}
                    <div className="relative p-28 text-center bg-white/90 backdrop-blur-md">
                        <div className="flex flex-col items-center justify-center gap-10 backface-hidden">
                            {flipped ? <BackSide/> : <FrontSide heading={heading}/>}
                        </div>
                    </div>
                </div>
            </animated.div>
            <div className="absolute left-0 right-0 bottom-0 mt-4 mb-2 lg:mb-14 m-auto">
                <div className="flex flex-row items-center justify-center font-medium text-xl gap-4">
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M10.9126 2.02905C11.2569 1.96564 11.6117 2.00663 11.9322 2.1461C12.2526 2.28549 12.5229 2.51629 12.7117 2.80727C12.9003 3.09808 12.9999 3.4371 13 3.78241L13 7.03095C16.7414 7.26795 19.2742 8.85318 20.8455 11.341C22.4987 13.9586 23 17.4414 23 21C23 21.424 22.7327 21.8018 22.3329 21.943C21.9331 22.0841 21.4878 21.9578 21.2216 21.6278C19.9872 20.0973 19.0943 18.9971 17.8244 18.2297C16.7356 17.5717 15.2945 17.1206 13 17.0208L13 20.2164C12.9999 20.5617 12.9003 20.9008 12.7117 21.1916C12.5229 21.4826 12.2526 21.7134 11.9322 21.8528C11.6117 21.9922 11.2569 22.0332 10.9126 21.9698C10.5684 21.9064 10.2524 21.742 10.0028 21.4997L1.54125 13.2827C1.36907 13.1154 1.23276 12.9151 1.14013 12.6947C1.04752 12.4744 1 12.238 1 11.9994C1 11.7609 1.04752 11.5244 1.14013 11.3041C1.23276 11.0838 1.36883 10.8837 1.54101 10.7164L10.0027 2.49935C10.2522 2.25697 10.5684 2.09244 10.9126 2.02905ZM11 4.31872L11 9H12C15.7048 9 17.8619 10.3624 19.1545 12.409C20.1133 13.927 20.6422 15.8935 20.8675 18.1422C20.2708 17.5324 19.6219 16.9791 18.8589 16.518C17.2035 15.5176 15.1099 15 12 15H11L11 19.6801L3.09059 11.9994L11 4.31872Z"
                              fill="#000000"/>
                    </svg>
                    <button
                        className="cursor-pointer"
                        onClick={handleRotate}>
                        Vajuta siia
                    </button>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M13.0874 2.02906C12.7431 1.96564 12.3883 2.00663 12.0678 2.14611C11.7474 2.2855 11.4771 2.51629 11.2883 2.80727C11.0997 3.09808 11.0001 3.43711 11 3.78241L11 7.03095C7.25861 7.26795 4.72577 8.85318 3.15451 11.341C1.5013 13.9586 1 17.4414 1 21C1 21.424 1.26733 21.8018 1.66711 21.943C2.06688 22.0841 2.5122 21.9578 2.77837 21.6278C4.01283 20.0973 4.90572 18.9971 6.17555 18.2297C7.26436 17.5717 8.70545 17.1206 11 17.0208L11 20.2164C11.0001 20.5617 11.0997 20.9008 11.2883 21.1916C11.4771 21.4826 11.7474 21.7134 12.0678 21.8528C12.3883 21.9922 12.7431 22.0332 13.0874 21.9698C13.4316 21.9064 13.7476 21.742 13.9972 21.4997L22.4587 13.2827C22.6309 13.1154 22.7672 12.9151 22.8599 12.6947C22.9525 12.4744 23 12.238 23 11.9994C23 11.7609 22.9525 11.5244 22.8599 11.3041C22.7672 11.0838 22.6312 10.8837 22.459 10.7164L13.9973 2.49935C13.7478 2.25698 13.4316 2.09244 13.0874 2.02906ZM13 4.31872L13 9H12C8.29522 9 6.13808 10.3624 4.84549 12.409C3.88672 13.927 3.35775 15.8935 3.13254 18.1422C3.72922 17.5324 4.37809 16.9791 5.14111 16.518C6.7965 15.5176 8.89011 15 12 15H13L13 19.6801L20.9094 11.9994L13 4.31872Z"
                              fill="#000000"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export {
    Invitation
}