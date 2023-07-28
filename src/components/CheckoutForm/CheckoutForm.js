import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div className="container">
            <form onSubmit={handleConfirm}>
                <label className="label">Nombre</label>
                    <div className="control">
                        <input className="input"
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        />
                    </div>
                <label className="label">Telefono</label>
                    <div className="control">
                        <input className="input"
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        />
                    </div>
                <label className="label">Email</label>
                    <div className="control">
                        <input className="input"
                        type='text'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        />
                    </div>
                <div>
                    <button className="button is-dark" type='submit'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;