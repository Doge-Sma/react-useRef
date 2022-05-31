import { useEffect, useState,useRef } from "react";

export function RefInteractingWithDom() {
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef();

    function showFakeModal() {
        setShowModal(true);
    }

    useEffect(() => {
        inputRef.current?.focus(); 
    }, [showModal])

    return (
        <div>
            <h1>useRef para interagir com elementos da DOM</h1>
            <button onClick={showFakeModal}>
                Clique aqui para informar seu email e não perder nenhuma novidade ;3
            </button>
            {
                showModal && (
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <br />
                        <input ref={inputRef} id="email" type="email" />
                    </div>
                )
            }
        </div>

    )
}