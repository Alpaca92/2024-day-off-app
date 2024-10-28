import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js 내장 모듈
            'external', // npm 패키지
            'internal', // 프로젝트 내부 모듈
            ['sibling', 'parent'], // 상대 경로 import
            'index', // 현재 디렉토리 import
            'type', // 타입 import
          ],
          'newlines-between': 'always', // 그룹 간 빈 줄 추가
          alphabetize: {
            order: 'asc', // 알파벳 순 정렬
            caseInsensitive: true,
          },
          pathGroups: [
            // react 관련 패키지를 최상단에 위치
            {
              pattern: 'react**',
              group: 'external',
              position: 'before',
            },
            // 그 다음 외부 라이브러리
            {
              pattern: '{clsx,react-router-dom,react-query}',
              group: 'external',
              position: 'after',
            },
            // @로 시작하는 경로
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            // 상대 경로
            {
              pattern: './**',
              group: 'sibling',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
        },
      ],
    },
  },
);
