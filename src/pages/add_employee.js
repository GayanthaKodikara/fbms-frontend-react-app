
function AddEmployee() {

    return (
        <div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div>
                    <h4>Add Employee</h4>
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="first_name" className="form-label">
                                    First Name
                                </label>
                                <input type="text" className="form-control" id="first_name" />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="last_name" className="form-label">
                                    Last Name
                                </label>
                                <input type="text" className="form-control" id="last_name" />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" />
                        </div>
                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label htmlFor="birthday" className="form-label">Birth Date</label>
                                <input type="" className="form-control" id="birthday" />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="nic" className="form-label">NIC Number</label>
                                <input type="text" className="form-control" id="nic" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="addroles" className="form-label">Add Roles</label> <br />

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="RoleCheckbox1"
                                    value="Administrator"
                                />
                                <label className="form-check-label" htmlFor="RoleCheckbox1">
                                    Administrator
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="RoleCheckbox2"
                                    value="Customer Support Engineer"
                                />
                                <label className="form-check-label" htmlFor="RoleCheckbox2">
                                    Customer Support Engineer
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="RoleCheckbox3"
                                    value="Project Manager"
                                />
                                <label className="form-check-label" htmlFor="RoleCheckbox3">
                                    Project Manager
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="RoleCheckbox4"
                                    value="Workshop Supervisour"
                                />
                                <label className="form-check-label" htmlFor="RoleCheckbox4">
                                    Workshop Supervisour
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="RoleCheckbox5"
                                    value="Designer"
                                />
                                <label className="form-check-label" htmlFor="RoleCheckbox5">
                                    Designer
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="RoleCheckbox6"
                                    value="Fabricator"
                                />
                                <label className="form-check-label" htmlFor="RoleCheckbox6">
                                    Fabricator
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="RoleCheckbox7"
                                    value="Other"
                                />
                                <label className="form-check-label" htmlFor="RoleCheckbox7">
                                    Other
                                </label>
                            </div>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="add_deisgn_cat" className="form-label">Add Design Category</label> <br />

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="Checkbox1"
                                    value="3D Product Design"
                                />
                                <label className="form-check-label" htmlFor="Checkbox1">
                                    3D Product Design
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="Checkbox2"
                                    value="fabricator"
                                />
                                <label className="form-check-label" htmlFor="Checkbox2">
                                   A 
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="Checkbox3"
                                    value="programmer"
                                />
                                <label className="form-check-label" htmlFor="Checkbox3">
                                    B
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">Add</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default AddEmployee;