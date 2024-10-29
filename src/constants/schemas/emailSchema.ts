import { z } from 'zod';

const regexes = {
  email: new RegExp(/^[a-zA-Z0-9._%+-]+@t-win\.kr$/),
};

export const emailSchema = z.string().regex(regexes.email, '@t-win.kr도메인을 사용해주세요');
