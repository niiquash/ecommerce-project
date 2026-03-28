import Header from "../components/Header";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <>
      <title>404 - Page Not Found</title>
      <Header />
      <div className="error-page">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </>
  );
}

export default ErrorPage;
