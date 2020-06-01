import routes from "./routes"

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "비밀의 화원";
    res.locals.routes = routes;
    next();
};