import { useEffect, useState,useRef } from "react";
import FakeModal from "./fakeModal";

export function RefInteractingWithDom() {
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef();

    function showFakeModal() {
        setShowModal(true);
    }

    

    return (
        <div>
            <h1>useRef para interagir com elementos da DOM</h1>
            <button onClick={showFakeModal}>
                Clique aqui para informar seu email e não perder nenhuma novidade ;3
            </button>
            {
                showModal && <FakeModal forwardedRef={inputRef}/>
            }
        </div>

    )
}