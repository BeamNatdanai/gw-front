import Header from './header'

const Layout = (props) => {
    return (
        <div className="gw-body">
            <div>
                <Header/>
            </div>
            <div className="gw-content" id="main">
                <center>
                    {props.children}
                </center>
            </div>
        </div>
    )

} 

export default Layout