// length constraint ,already fixed the first character, so we give {7,29}.
// We use ^ and $ to specify the beginning and end of matching. 
// We use * to match all.

const validateFloat = /^[0-9]*(\.[0-9]+)*$/
const validateNumber = /^[0-9]*$/
const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const validateUsername = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
