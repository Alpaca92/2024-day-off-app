import { z } from 'zod';

const regexes = {
  phoneNumber: new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/),
  koreanName: new RegExp(/^[가-힣]+$/),
};

export const phoneSchema = z.string().regex(regexes.phoneNumber, '휴대폰 번호를 입력해주세요');

export const koreanNameSchema = z.string().min(2).max(10).regex(regexes.koreanName, '한글 이름을 입력해주세요');
