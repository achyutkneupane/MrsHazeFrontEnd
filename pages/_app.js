import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("%cThis site is developed by Achyut Neupane(https://achyut.com.np)", "color:black; font-size:15px");
  return <Component {...pageProps} />
}

export default MyApp
