// Contact form configuration.
//
// The site is a static export, so there is no server of ours to POST to. The
// form is relayed by Web3Forms: the browser posts JSON to the endpoint below
// and Web3Forms emails the submission to the inbox the access key was issued
// to. Nothing is stored on the numblop.gutcloud.cz host.
//
// The access key is public by design ("Access key is public" — Web3Forms FAQ):
// it is an alias for an inbox, not a credential. Worst case someone can send
// mail to that inbox, which knowing the address would allow anyway. It is kept
// in the source rather than an env var on purpose: deploy/update-landing.sh
// builds on the server, where a missing .env.local would silently ship a dead
// form.
// Issued for emichalgut@gmail.com — that is where messages arrive.
export const WEB3FORMS_ACCESS_KEY = '7735b6f3-93ee-4bc9-9798-0ba91fd5518b'

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

// Subject line on the relayed mail, and on the mailto: fallback, so both land
// in the same thread-able bucket in the inbox.
export const CONTACT_SUBJECT = 'Numblop – message from the website'

// Fallback shown when the relay is unreachable, so nobody hits a dead end. Same
// inbox the access key delivers to.
export const CONTACT_EMAIL = 'emichalgut@gmail.com'
