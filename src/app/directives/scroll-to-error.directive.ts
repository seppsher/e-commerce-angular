import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: 'form[appScrollToFirstError]',
})
export class ScrollToFirstErrorDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly formGroupDir = inject(FormGroupDirective);

  @HostListener('ngSubmit')
  onSubmit() {
    const form = this.formGroupDir.form;
    form.markAllAsTouched();

    const formEl = this.host.nativeElement;

    const firstInvalid = formEl.querySelector('.ng-invalid') as HTMLElement | null;
    if (!firstInvalid) return;

    const top = firstInvalid.getBoundingClientRect().top + window.scrollY - 70;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });

    firstInvalid.focus({ preventScroll: true });
  }
}
