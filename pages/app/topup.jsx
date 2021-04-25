import { CustomLayout } from '../../components'
export default function Topup() {
    return (
        <CustomLayout bg="bg-white">
            <div className="px-4">
                <p className="mb-4 fw-bold" style={{ color: "black" }}>How To Top Up</p>
                <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                    <div className="d-flex">
                        <span className="color-main fw-bold align-self-center">1</span>
                        <div className="ms-3 my-auto">
                            <p className="m-0" style={{ fontSize: "12px" }}>Go to the nearest ATM or you can use E-Banking.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                    <div className="d-flex">
                        <span className="color-main fw-bold align-self-center">2</span>
                        <div className="ms-3 my-auto">
                            <p className="m-0" style={{ fontSize: "12px" }}>Type your security number on the ATM or E-Banking.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                    <div className="d-flex">
                        <span className="color-main fw-bold align-self-center">3</span>
                        <div className="ms-3 my-auto">
                            <p className="m-0" style={{ fontSize: "12px" }}>Select “Transfer” in the menu</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                    <div className="d-flex">
                        <span className="color-main fw-bold align-self-center">4</span>
                        <div className="ms-3 my-auto">
                            <p className="m-0" style={{ fontSize: "12px" }}>Type the virtual account number that we provide you at the top.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                    <div className="d-flex">
                        <span className="color-main fw-bold align-self-center">5</span>
                        <div className="ms-3 my-auto">
                            <p className="m-0" style={{ fontSize: "12px" }}>Type the amount of the money you want to top up.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                    <div className="d-flex">
                        <span className="color-main fw-bold align-self-center">6</span>
                        <div className="ms-3 my-auto">
                            <p className="m-0" style={{ fontSize: "12px" }}>Read the summary details</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                    <div className="d-flex">
                        <span className="color-main fw-bold align-self-center">7</span>
                        <div className="ms-3 my-auto">
                            <p className="m-0" style={{ fontSize: "12px" }}>Press transfer / top up</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                    <div className="d-flex">
                        <span className="color-main fw-bold align-self-center">8</span>
                        <div className="ms-3 my-auto">
                            <p className="m-0" style={{ fontSize: "12px" }}>You can see your money in Zwallet within 3 hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </CustomLayout>
    )
}
