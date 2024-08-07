import NotFound from "../components/NotFound/NotFound";
import { Helmet } from "react-helmet-async";

function ErrorPage() {
    return (


        <div className="ErrorPage">

            <Helmet>
                <title>404 Not Found</title>
                <meta name="author" content="Altra Volf" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>

            <NotFound />
        </div>
    );
}

export default ErrorPage;