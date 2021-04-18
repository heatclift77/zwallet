import { TemplatePage, CustomLayout } from '../components'
export default function Topup() {
    return (
        <div>
            <TemplatePage
                page="topup"
                type="general"
            >
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <p className="mb-4 fw-bold" style={{ color: "black" }}>How To Top Up</p>
                        <button className="border-0 bg-transparent mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <div className="d-flex">
                                <span className="color-main fw-bold align-self-center">1</span>
                                <div className="ms-3 my-auto">
                                    <p className="m-0" style={{ fontSize: "12px" }}>Go to the nearest ATM or you can use E-Banking.</p>
                                </div>
                            </div>
                        </button>
                        <button className="border-0 bg-transparent mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <div className="d-flex">
                                <span className="color-main fw-bold align-self-center">2</span>
                                <div className="ms-3 my-auto">
                                    <p className="m-0" style={{ fontSize: "12px" }}>Type your security number on the ATM or E-Banking.</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </CustomLayout>
            </TemplatePage>
        </div>
    )
}
