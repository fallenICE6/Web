const textTag= document.getElementById('text_tag')
const textInput = document.getElementById('text_input')
const newDiv = document.createElement('div')


function InsertBeforeTag() {
	if (textInput.value === '') return	
	newDiv.textContent = textInput.value
	textTag.parentNode.insertBefore(newDiv, textTag)
}
function InsertAfterTag() {
	if (textInput.value === '') return
	newDiv.textContent = textInput.value
	textTag.parentNode.insertBefore(newDiv, textTag.nextSibling)
}
function ReplaceTag() {
	if (textInput.value === '') return
	textTag.textContent = textInput.value
}




