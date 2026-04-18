import ApiError from "../utils/api-error.js";

/**
 * TODO: Handle 404 errors
 *
 * Return 404 with { error: { message: "Route not found" } }
 */
export function notFound(req, res, next) {
  // return ApiError.notfound(`Route ${req.originalUrl} not found`);
  next();
}
