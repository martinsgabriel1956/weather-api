export default {
  '*.{js,mjs,cjs,ts}': (filenames) => [
    `npm run test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
