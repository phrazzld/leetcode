// 929. Unique Email Addresses

const numUniqueEmails = emails => {
  let strippedEmails = new Set()
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i].split('@')
    let local = email[0].split('+')[0].replace(/\./g, ''),
      domain = email[1]
    let strippedEmail = `${local}@${domain}`
    if (!strippedEmails.has(strippedEmail))
      strippedEmails.add(strippedEmail)
  }
  return strippedEmails.size
}

// Test case
let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
]
console.log(`${numUniqueEmails(emails)} (expected 2)`)
