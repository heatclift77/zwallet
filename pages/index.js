import Head from 'next/head'
import Image from 'next/image'
import {Footer} from '../components'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"></link>
      </Head>
      <section className="container-fluid bg-main position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto py-4">
              <div className="d-flex justify-content-between">
                <h3 className="text-white fw-bold">Zwallet</h3>
                <div>
                  <button className="bg-main text-white py-2 px-4 rounded-sm me-4 fw-bold" style={{ border: "2px solid white" }} onClick={()=>{router.push('/auth/login')}} >Login</button>
                  <button className="bg-white color-main py-2 px-4 rounded-sm fw-bold" style={{ border: "2px solid white" }} onClick={()=>{router.push('/auth/signup')}} >Sign Up</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 d-flex">
              <div className="align-self-center">
                <h1 style={{ fontSize: "70px", lineHeight: "100px" }} className="text-white fw-bold mb-5" >Awesome App For Saving Time.</h1>
                <p className="text-white fw-light mb-5" style={{ fontSize: "20px", lineHeight: "38px" }}>We bring you a mobile app for banking problems thatoftenly wasting much of your times.</p>
                <button className="bg-white color-main py-2 px-4 rounded-sm fw-bold mb-5" style={{ border: "2px solid white" }}>Try it Free</button>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <Image
                src="/assets/png-phone.png"
                width={550}
                height={707}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid position-relative" style={{ background: "#eeedf7" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 py-5 d-flex justify-content-center">
              <Image
                src="/assets/vendor.png"
                width={1140}
                height={120}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid position-relative" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="row">
                <div className="col-12 col-lg-6 mx-auto text-center">
                  <div className="mb-5">
                    <div className="mb-4 fw-bold" style={{ fontSize: "60px" }}><span className="color-main">About</span> the Application.</div>
                    <p className="fw-light px-5">We have some great features from the application and it’s totally free to use by all users around the world.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 my-4 mylg-0 mx-auto bg-white rounded-sm shadow text-center p-4">
              <div className="mx-auto">
                <button className="p-3 rounded-circle mb-4 border-0" style={{ background: "#e1dff5" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.5 20.1501V23.9001C26.5015 24.2482 26.4301 24.5928 26.2907 24.9118C26.1512 25.2308 25.9467 25.5171 25.6901 25.7525C25.4336 25.9878 25.1308 26.167 24.801 26.2785C24.4712 26.39 24.1218 26.4315 23.775 26.4001C19.9286 25.9822 16.2338 24.6678 12.9875 22.5626C9.96732 20.6435 7.40671 18.0828 5.48754 15.0626C3.37501 11.8016 2.06034 8.08886 1.65004 4.22512C1.6188 3.87945 1.65988 3.53107 1.77066 3.20215C1.88145 2.87323 2.0595 2.57098 2.2935 2.31465C2.52749 2.05831 2.81229 1.85351 3.12978 1.71327C3.44726 1.57304 3.79046 1.50045 4.13754 1.50012H7.88754C8.49417 1.49415 9.08228 1.70897 9.54224 2.10454C10.0022 2.5001 10.3026 3.04943 10.3875 3.65012C10.5458 4.8502 10.8394 6.02853 11.2625 7.16262C11.4307 7.61003 11.4671 8.09626 11.3674 8.56372C11.2677 9.03118 11.0361 9.46026 10.7 9.80012L9.11254 11.3876C10.892 14.5171 13.4831 17.1082 16.6125 18.8876L18.2 17.3001C18.5399 16.964 18.969 16.7324 19.4364 16.6327C19.9039 16.533 20.3901 16.5694 20.8375 16.7376C21.9716 17.1608 23.15 17.4543 24.35 17.6126C24.9572 17.6983 25.5118 18.0041 25.9082 18.472C26.3046 18.9399 26.5152 19.5371 26.5 20.1501Z" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="fs-5 fw-bold mb-4 text-black">24/7 Support</div>
              <p className="fw-light">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
            </div>
            <div className="col-12 col-lg-3 my-4 mylg-0 mx-auto bg-white rounded-sm shadow text-center p-4">
              <div className="mx-auto">
                <button className="p-3 rounded-circle mb-4 border-0" style={{ background: "#e1dff5" }}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.75 13.75H6.25C4.86929 13.75 3.75 14.8693 3.75 16.25V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V16.25C26.25 14.8693 25.1307 13.75 23.75 13.75Z" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.75 13.75V8.75C8.75 7.0924 9.40848 5.50269 10.5806 4.33058C11.7527 3.15848 13.3424 2.5 15 2.5C16.6576 2.5 18.2473 3.15848 19.4194 4.33058C20.5915 5.50269 21.25 7.0924 21.25 8.75V13.75" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="fs-5 fw-bold mb-4 text-black">Data Privacy</div>
              <p className="fw-light">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
            </div>
            <div className="col-12 col-lg-3 my-4 mylg-0 mx-auto bg-white rounded-sm shadow text-center p-4">
              <div className="mx-auto">
                <button className="p-3 rounded-circle mb-4 border-0" style={{ background: "#e1dff5" }}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.25 18.75V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V18.75" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.75 12.5L15 18.75L21.25 12.5" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 18.75V3.75" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="fs-5 fw-bold mb-4 text-black">Easy Download</div>
              <p className="fw-light">Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid position-relative" style={{ paddingTop: "7rem", paddingBottom: "7rem", background: "#eeedf7"  }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">

            </div>
            <div className="col-12 col-lg-6">
              <div className="mb-4 fw-bold" style={{ fontSize: "60px" }}>All The <span className="color-main">Great</span> Zwallet Features.</div>
              <div className="mb-3 w-100 p-3 rounded-md shadow-sm bg-white">
                <div className="fw-bold"><span className="color-main">1. </span> Small free</div>
                <div className="mt-3">
                  <p className="m-0" style={{ fontSize: "14px" }}>We only charge 5% of every success transaction done in Zwallet app.</p>
                </div>
              </div>
              <div className="mb-3 w-100 p-3 rounded-md shadow-sm bg-white">
                <div className="fw-bold"><span className="color-main">2. </span> Data Secured</div>
                <div className="mt-3">
                  <p className="m-0" style={{ fontSize: "14px" }}>All your data is secured properly in our system and it’s encrypted.</p>
                </div>
              </div>
              <div className="mb-3 w-100 p-3 rounded-md shadow-sm bg-white">
                <div className="fw-bold"><span className="color-main">3. </span> User Friendly</div>
                <div className="mt-3">
                  <p className="m-0" style={{ fontSize: "14px" }}>Zwallet come up with modern and sleek design and not complicated.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid position-relative" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto text-center">
              <div className="mb-4 fw-bold" style={{ fontSize: "60px" }}>What Users are <span className="color-main">Saying.</span></div>
            </div>
            <div className="col-12 col-lg-5 mx-auto text-center">
              <p className="">We have some great features from the application and it’s totally free to use by all users around the world.</p>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-2 mx-auto"></div>
                <div className="col-8 mx-auto text-center bg-white rounded-sm shadow p-5">
                  <div className="mx-auto mb-3 rounded-sm my-auto d-flex justify-content-center" style={{ width: "100px", height: "100px", backgroundPosition: "center", overflow: "hidden" }}>
                    <Image
                    src="/assets/profil.png"
                    width={100}
                    height={100}
                    className="align-self-center"
                    />
                  </div>
                  <div>
                    <h4 className="fw-bold">Aditya Pratama</h4>
                    <div style={{fontSize:"14px"}}>
                      <p className="mb-4">Full Stack Web Developer</p>
                      <p>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
