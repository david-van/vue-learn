import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock([
  {
    url: '/api/user/id2',
    method: 'GET',
    body: { a: 1, b: 2 },
  },
])
