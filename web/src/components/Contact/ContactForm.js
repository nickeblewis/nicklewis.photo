import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import 'whatwg-fetch'

const Form = styled.form`
  margin: 0 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    border: 2px solid var(--color-tertiary);
    outline: none;
    background: var(--color-base);
    color: var(--color-secondary);
    border-radius: 2px;
    padding: 1rem;
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
    &:-webkit-autofill {
      box-shadow: inset 0 0 0 9999px var(--color-base);
    }
  }
  &::before {
    content: '';
    background: var(--color-secondary);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Name = styled.input`
  margin: 0 0 2rem 0;
  width: 100%;
  @media (min-width: 35em) {
    width: 48%;
  }
`

const Email = styled.input`
  margin: 0 0 2rem 0;
  width: 100%;
  @media (min-width: 35em) {
    width: 48%;
  }
`

const Message = styled.textarea`
  width: 100%;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  min-height: 250px;
  resize: vertical;
`

const Submit = styled.input`
  background: var(--color-tertiary) !important;
  color: var(--color-base) !important;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;
  &:hover {
    border: 2px solid var(--color-highlight) !important;
    background: var(--color-highlight) !important;
  }
  @media (min-width: 55em) {
    width: 48%;
  }
`

const Modal = styled.div`
  background: var(--color-base);
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: 35em) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const Button = styled.div`
  background: var(--color-tertiary) !important;
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: var(--color-tertiary) !important;
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <Name
          name="name"
          type="text"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <Email
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <Message
          name="message"
          type="text"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
        />
        <Submit name="submit" type="submit" value="Send" />

        <Modal visible={this.state.showModal}>
          <p>
            Thank you for reaching out. I will get back to you as soon as
            possible.
          </p>
          <Button onClick={this.closeModal}>Okay</Button>
        </Modal>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
