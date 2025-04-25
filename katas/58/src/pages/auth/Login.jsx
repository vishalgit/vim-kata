import { validateEmail } from '../../utils/validation';

function Login() {
    // TODO add error handling
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* TODO: Add form validation */}
            <input type="email" />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login; 