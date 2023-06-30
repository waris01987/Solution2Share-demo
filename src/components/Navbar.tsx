import {Menu} from '@fluentui/react-northstar'

const Navbar = ({data}: any) => {
    return (
      <>
        <Menu defaultActiveIndex={0} items={data} />
      </>
    ); 
}

export default Navbar