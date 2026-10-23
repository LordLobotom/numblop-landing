// `lastModified` dates for the routes whose copy does not live in the content
// registry. These are deliberately hand-maintained constants: stamping every
// URL with the build time (`new Date()`) told crawlers the whole site changed on
// every deploy, which is exactly the signal that gets discounted.
//
// Bump the relevant entry when the copy on that route actually changes.

export const revisions = {
  /** Landing page — bumped when hero/section copy or the FAQ changes. */
  home: '2026-09-02',
  about: '2026-10-23',
  contact: '2026-09-02',
  links: '2026-09-01',
} as const
