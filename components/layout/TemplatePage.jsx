import {Navbar, Footer, SideNav} from '../../components'
export default function TemplatePage({type, page, children}) {
    if(type === "general"){
        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-3 hide show-lg">
                                    <div className="my-5">
                                        <SideNav 
                                        page={page}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-9">
                                    <div className="my-5">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }else{
        return (
            <div></div>
        )
    }
}

