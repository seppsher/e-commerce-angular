import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ErrorService } from '@services/error/error.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService: ErrorService = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'Wystąpił nieznany błąd';

      switch (true) {
        case error.status === 0:
          message = 'Brak połączenia z serwerem';
          break;

        case error.status === 404:
          message = 'Nie znaleziono zasobu';
          break;

        case error.status >= 500:
          message = 'Błąd serwera. Spróbuj ponownie później';
          break;

        case !!error.error?.message:
          message = error.error.message;
          break;
      }

      errorService.show(message);

      return throwError(() => error);
    }),
  );
};
