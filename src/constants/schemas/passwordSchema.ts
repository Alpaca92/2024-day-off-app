import { z } from 'zod';

const regexes = {
  hasNumber: new RegExp(/.*[0-9].*/),
  hasLetter: new RegExp(/.*[a-zA-Z].*/),
  hasSpecial: new RegExp(/[!@#$%^&*]/),
};

export const passwordSchema = z
  .string()
  .regex(regexes.hasSpecial, '특수문자(!@#$%^&*)를 포함해야 합니다')
  .regex(regexes.hasNumber, '숫자를 포함해야 합니다')
  .regex(regexes.hasLetter, '영문자를 포함해야 합니다')
  .min(8, '비밀번호는 최소 8자 이상이어야 합니다');
