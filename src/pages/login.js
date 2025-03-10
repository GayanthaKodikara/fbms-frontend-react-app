
function Login() {

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">

                        <div className="card-header">
                            <h4>Login</h4>
                        </div>

                        <div className="card-body">

                            <form>

                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;