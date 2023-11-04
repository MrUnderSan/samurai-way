import React, {FC} from 'react'
import spinner from '../../../assets/images/loading-spinner.webp';

type PropsType = {}

export const Preloader: FC<PropsType> = ({}) => {
    return (
        <div>
            <img src={spinner} alt="spinner"/>
        </div>
    )
}