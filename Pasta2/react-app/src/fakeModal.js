import { useEffect } from "react";



export default function FakeModal({ forwardedRef }) {
    useEffect(() => {
        forwardedRef.current?.focus(); 
    }, [forwardedRef])

    return (
        <div>
            <label htmlFor="email">E-mail</label>
            <br />
            <input ref={forwardedRef} id="email" type="email" />
        </div>
    )
}