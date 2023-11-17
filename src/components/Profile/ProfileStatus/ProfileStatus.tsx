import React from 'react'

type PropsType = {
    status: string
}

type ProfileStatusStateType = {
    editMode: boolean
}

class ProfileStatus extends React.Component<PropsType> {

    state: ProfileStatusStateType = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus />
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus