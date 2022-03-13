//import '../public/css/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <title>Rovel Discord List</title>
                <meta name="description" content="test" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default appWithTranslation(MyApp);