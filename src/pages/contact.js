import React from "react"
import { Button, Footer, Heading, Map, Nav, Screen } from "../components"
import { typography } from "../constants/styles"

const sendGoogleForm = async ({ phone, email, message, name }) => {
  const googleFormURL =
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeUhbR6fAnZS-jmK_zVyvIp9jcbyfiBptP0Xs8TpSaoWuOy8A/formResponse"

  const formFieldIds = {
    PHONE: "entry.876223673",
    EMAIL: "emailAddress",
    MESSAGE: "entry.478157795",
    NAME: "entry.109752583",
  }
  const formData = new FormData()
  formData.append(formFieldIds.PHONE, phone)
  formData.append(formFieldIds.EMAIL, email)
  formData.append(formFieldIds.MESSAGE, message)
  formData.append(formFieldIds.NAME, name)

  try {
    await window.fetch(googleFormURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
  } catch (error) {
    console.error(error)
  }
}

const handleSubmit = event => {
  event.preventDefault()
  const [name, email, phone, message] = event.target
  sendGoogleForm({
    name: name.value || "Joe",
    email: email.value || "misterfraley@gmail.com",
    phone: phone.value || "5033671627",
    message: message.value || "Test message",
  })
  name.value = ""
  email.value = ""
  phone.value = ""
  message.value = "Thanks! I'll get back to you real quick!"
}

const Contact = () => {
  const offset = 96

  return (
    <>
      <style jsx>
        {`
          :global(*) {
            box-sizing: border-box;
            border: none;
            padding: 0;
            margin: 0;
          }
          @font-face {
            font-family: Blacktop;
            font-display: optional;
            src: ${typography.heading.base64} format("woff");
          }
          form {
            display: flex;
            flex-flow: column;
            flex-grow: 1;
          }
          :global(input, textarea) {
            border: 1px solid black;
            border-radius: 5px;
            padding: 10px;
            display: block;
            width: 100%;
          }
          :global(form) > * {
            margin-bottom: 20px;
          }
          :global(label) {
            font-family: Arial;
          }
        `}
      </style>
      <Nav />
      <Screen style={{ marginTop: `${offset}px` }}>
        <Heading size="lg" style={{ textAlign: "center" }}>
          Contact
        </Heading>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input maxLength="200" type="text" name="name" />
            </label>
            <label>
              Email:
              <input
                maxLength="200"
                type="email"
                name="email"
                placeholder="email@provider.com"
              />
            </label>
            <label>
              Phone Number:
              <input
                maxLength="20"
                type="tel"
                name="phone"
                placeholder="(###) - ### - ####"
              />
            </label>
            <label>
              Message:
              <textarea maxLength="1000" name="message" rows={10} />
            </label>
            <Button role="submit">Send</Button>
          </form>
          <div style={{ padding: "1em" }}>
            <Map />
          </div>
        </div>
      </Screen>

      <Footer style={{ background: "white" }} />
    </>
  )
}

export default Contact
