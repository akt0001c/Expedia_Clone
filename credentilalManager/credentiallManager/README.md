# credentiallManager

This service handles OTP generation, validation, and reuse for email verification.

## OTP flow

1. User enters an email address in the front-end form.
2. User clicks the **Send OTP** button.
3. The front end sends the request to this service.
4. The service extracts the email address and checks whether an OTP already exists for that email in the database.
5. If an OTP is found, the service checks:
   - the OTP record timestamp
   - whether the OTP is expired
6. An OTP is valid for **1 minute** only.
7. If the OTP exists and is still valid, the same OTP is reused and sent to the user email through the email service.
8. If the OTP is missing or expired, a new OTP is generated, saved in the database, and then sent to the user email.
9. The front end receives the OTP in encrypted form.
10. When the user enters the OTP on the form, the encrypted value is compared with the encrypted OTP already stored in the front end flow.
11. If both values match, the OTP validation flow is completed.

## Suggested improvements

- Store the OTP hash instead of the plain OTP in the database.
- Use a separate expiry field or TTL-aware column to make expiration checks simpler.
- Add rate limiting for OTP requests to prevent abuse.
- Invalidate the OTP after a successful verification to avoid reuse.

## About OTP reuse

If you invalidate an OTP immediately after a successful verification, then there is no reason to keep it reusable after that point. The main value of saving it in the database is to support these checks before verification:

- avoid generating multiple OTPs for the same email within the valid window
- reuse the same OTP until it expires
- verify expiration and audit the request lifecycle

Once the OTP is verified, it should be marked as used or deleted so it cannot be reused again.

## Tech stack

- Java 21
- Spring Boot
- Spring Web MVC
- Spring Data JDBC

## Run locally

```bash
mvn spring-boot:run
```

## Test

```bash
mvn test
```
