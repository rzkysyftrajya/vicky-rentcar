# VRN Lead Capture Apps Script

`Code.gs` is the receiver for the existing `Lead Web Match SBY` sheet. It
preserves the existing A-G lead format and appends WhatsApp click events to
the existing A-O schema. It does not create or rename tabs, change headers, or
replace the private Master Control Apps Script.

## Install and deploy

1. Do not edit the production Apps Script project/deployment or production
   spreadsheet for this test. Create a separate Apps Script Preview project
   and a test copy of the spreadsheet. This keeps both the existing receiver
   and historical production rows untouched.
2. Replace the Preview project's `Code.gs` with this file. In its Script
   Properties set `VRN_SPREADSHEET_ID` to the test spreadsheet's ID and
   `VRN_INGEST_HMAC_SECRET` to the existing backend secret (32+ characters).
   Keep these values out of source code.
3. Save and run `setupVrnCaptureReceiver()` once from the Preview Apps Script
   editor, then approve the requested spreadsheet permissions.
   - It only checks that `Lead Web Match SBY` exists and that the legacy A-G
     headers match. It does not create tabs, write headers, reformat cells, or
     modify existing data.
4. Deploy the Preview Apps Script project as a web app (Execute as Me /
   Anyone). Use the `/exec` URL assigned to that Preview deployment; do not
   update the production receiver deployment.
5. In the website's **Preview** environment, set the existing server-side
   `VRN_CAPTURE_WEBAPP_URL` to that Preview `/exec` URL and
   `VRN_INGEST_HMAC_SECRET` to the same secret configured in Preview Apps
   Script. The existing `VRN_LEAD_ENABLED=true` gate must be enabled for this
   endpoint. Keep `VRN_PHONE_HMAC_KEY` configured as before if Preview tests
   need the legacy lead path. Do not expose any of these as `NEXT_PUBLIC_*`.
6. After code review and approval, deploy the website to Preview and run the
   checks below. Production Apps Script, spreadsheet, Vercel environment, and
   deployment must remain unchanged until separate approval.

## Payload and signature contract

The browser sends a `WHATSAPP_CLICK` event to the same-origin
`/api/vrn-lead/` endpoint without waiting for the response. The Next.js
endpoint validates and forwards a server-signed envelope:

```text
{ ts, nonce, data, sig }
sig = lowercase-hex(HMAC-SHA256(secret, String(ts) + "." + nonce + "." + JSON.stringify(data)))
```

`data` has this property order: `eventType`, `eventId`, `timestamp`, `page`,
then optional `car`, `gclid`, `gbraid`, `wbraid`, and `utm`. The Apps Script
verifies the signature over the parsed `data` object before validating or
writing it. Both sides use the same field order and representation. A valid
click does not require a phone number, GCLID, or form consent. Missing click
IDs and UTM values stay blank in the sheet; they are never fabricated.

For a click, the receiver appends exactly 15 cells to a new row in
`Lead Web Match SBY`: A is blank, B is `Surabaya`, C is GCLID when present,
D is the click time in WIB, E is blank, F is the event ID, G is `RECORDED`,
H is `WHATSAPP_CLICK`, I is the page, J is the vehicle, and K-O contain
GBRAID, WBRAID, UTM source, UTM medium, and UTM campaign when present. Other
attribution fields remain blank. No phone number, form consent, or GCLID is
required for this event.

The receiver sanitizes text before it reaches Sheets and serializes writes
with a script lock. It checks the persistent event ID in column F while
holding the lock, so retries (even with a newly signed request nonce) receive
`{ "ok": true, "duplicate": true }` without adding a second row. The existing
lead branch continues to require `phoneHash`, `city`, `gclid`, and
`consent: true`, and appends only to A-G of the same sheet.

## Preview verification

1. Confirm the Preview deployment responds from
   `/rental-mobil-surabaya/` and that the `/api/vrn-lead/` request is not
   redirected.
2. Open the Surabaya page with a clearly test-only UTM, for example
   `?utm_source=manual-test&utm_medium=qa&utm_campaign=wa-capture-check`.
   Do not invent a GCLID/GBRAID/WBRAID for the test; leave them absent.
3. Click one existing WhatsApp button. The WhatsApp page must open directly,
   and `Lead Web Match SBY` must receive exactly one new row. Check that A
   and E are blank, B is `Surabaya`, C is blank when GCLID is absent, D is
   WIB, F is the event ID, G is `RECORDED`, H is `WHATSAPP_CLICK`, I is the
   source path, and the UTM columns match the test URL.
4. Verify that historical rows and their contents in `Lead Web Match SBY` are
   unchanged.
5. To verify duplicate protection, resend the same signed event through the
   Preview backend with the same `eventId`; the receiver should respond
   `{ "ok": true, "duplicate": true }` and the sheet row count should not
   increase. A fresh browser click has a new event ID and should create a new
   row.
6. With the Preview receiver deliberately unavailable, click WhatsApp again:
   navigation must remain immediate. The capture endpoint can return an
   error, but it must not block WhatsApp.

The Apps Script project is not committed to Google by this file. The Preview
deployment and test spreadsheet are not created automatically. Production
cutover is deliberately outside these instructions and must wait for approval.
