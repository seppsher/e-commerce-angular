import { schema, validate } from '@angular/forms/signals';
import { REGEX } from './regex';

export const phoneSchema = schema<string>(phone => {
  validate(phone, ctx => {
    const value = ctx.value()?.trim() ?? '';

    if (!value) {
      return undefined;
    }

    if (!REGEX.phone.test(value)) {
      return {
        kind: 'phone',
      };
    }

    return undefined;
  });
});
