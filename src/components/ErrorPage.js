const ErrorPage = ({children}) => {
    return (
        <section id="catalog-page error-page">
            <h1>404</h1>
            <h1>Page Not Found</h1>


    { children && <h3 className="no-articles">{children}</h3> }
        </section>
    );
};

export default ErrorPage;