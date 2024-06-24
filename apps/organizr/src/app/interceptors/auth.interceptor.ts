import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const cookieService = inject(CookieService);
  const authToken = cookieService.get("auth_token");

  if (authToken) {
    const cloned = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${authToken}`),
    });
    return next(cloned);
  }

  return next(req);
};
