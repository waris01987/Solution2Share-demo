import {Menu} from '@fluentui/react-northstar'
import { mainDataType } from '../types'

const Navbar = ({data}: mainDataType) => {

    return (
        <>
        <Menu defaultActiveIndex={0} items={data} />
        </>
    ) 
}

export default Navbar