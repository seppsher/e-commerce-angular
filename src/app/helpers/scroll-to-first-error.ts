export function scrollToFirstError() {
  setTimeout(() => {
    requestAnimationFrame(() => {
      const errorComponents = Array.from(
        document.querySelectorAll('app-field-errors'),
      ) as HTMLElement[];

      const errorComponent = errorComponents.find(err => err.querySelector('mat-error') !== null);

      if (!errorComponent) return;

      const formField = errorComponent.closest('mat-form-field') as HTMLElement | null;

      const target = formField ?? errorComponent;

      const top = target.getBoundingClientRect().top + window.scrollY - 70;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    });
  });
}
