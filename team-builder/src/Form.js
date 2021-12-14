import React from 'react'

export default function TeamForm(props) {

    const { values, update, submit } = props;
    
    const onChange = evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        name="username"
                        type="text"
                        placeholder="type name here"
                        maxLength="30"
                        value={values.username}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input
                    name="email"
                    type="email"
                    placeholder="EMAIL ME"
                    value={values.email}
                    onChange={onChange}
                    />
                </label>

                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                    <option value="">-- Select a Role --</option>
                    <option value="Senior Engineer">Senior Engineer</option>
                    <option value="Junior Engineer">Junior Engineer</option>
                    <option value="Intern">Intern</option>
                    </select>
                </label>

                <div>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )

}