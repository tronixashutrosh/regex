// length constraint ,already fixed the first character, so we give {7,29}.
// We use ^ and $ to specify the beginning and end of matching and will make sure that nothing but these alphabets will be matched.
// We use * to match all.
//To verify and check regex visit https://www.regextester.com/95625 

const validateName = /^[A-Za-z]+$/
const validateFloat = /^[0-9]*(\.[0-9]+)*$/
const validateNumber = /^[0-9]*$/
const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const validateUsername = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
const percentage = /^(0*100{1,1}\.?((?<=\.)0*)?%?$)|(^0*\d{0,2}?)$%/
const percentageWithDecimal = /^(0*100{1,1}\.?((?<=\.)0*)?%?$)|(^0*\d{0,2}\.?\d+\.\d{0,2}$%?)$/
const decimalCheck = /^\d+\.\d{0,2}$/ //where "2" is the maximum allowed decimal places.
