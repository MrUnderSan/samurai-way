import React, {ChangeEvent} from 'react'

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType> {

    state: ProfileStatusStateType = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<ProfileStatusStateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {

        this.props.updateUserStatus(this.state.status)
        this.setState({
            editMode: false
        })

    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input
                            value={this.state.status}
                            onChange={this.onStatusChange}
                            onBlur={this.deactivateEditMode}
                            autoFocus
                        />
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