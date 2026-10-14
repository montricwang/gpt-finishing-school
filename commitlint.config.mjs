// Repository-wide policy: English type/scope, Chinese subject and optional body.
const hasHan = (value) => /\p{Script=Han}/u.test(value ?? '');
export default {
  rules: {
    'type-enum': [2, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'header-max-length': [2, 'always', 100],
    'scope-ascii': [2, 'always'],
    'subject-han': [2, 'always'],
    'body-han': [2, 'always'],
  },
  plugins: [{
    rules: {
      'scope-ascii': ({ scope }) => [/^[a-z0-9][a-z0-9._/-]*$/.test(scope ?? ''), 'scope must be lowercase ASCII'],
      'subject-han': ({ subject }) => [hasHan(subject), 'subject must include Chinese characters'],
      'body-han': ({ body }) => [!body || hasHan(body), 'commit body, when present, must include Chinese'],
    },
  }],
};
