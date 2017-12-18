function c (a) { console.log(a) }

document.addEventListener('DOMContentLoaded', () => {

	let SnippetGenerator = {
		init () {
			this.cahceDOM()
			this.bindListeners()
		},
		highlit () {
			this.text = this.$textarea.value
			this.text = this.text.replace(/</g, '&lt;')
			this.text = this.text.replace(/>/g, '&gt;')
			this.text = this.text.replace(/(&lt;\/?(span|p|div|li|a|h1|h2|h3|h4|h5|h6|ul|small|center|b|strong|i|u)&gt;)/g, '<red>$1</red>')
			this.text = this.text.replace(/((Text|Snippet|Image|Page)*\..*\$)/g, '<yellow>$1</yellow>')
			this.$mirror.innerHTML = this.text.replace(/(\$)/g, '<purple>$1</purple>')

			this.secondProccess = this.$mirror.textContent.replace(/((Text|Snippet|Image|Page)*\..*\$)/g, '[[$1]]')
			this.temp = ''
			for (let i = 0; i < 20; i++) {
				this.temp += this.secondProccess.replace(/\$/g, i)
				this.temp += '\n'
			}
			this.$screen.textContent = this.temp
		},
		bindListeners () {
			this.$textarea.addEventListener('input', this.highlit.bind(this))
		},
		cahceDOM () {
			this.$mirror = document.querySelector('md-mirror')
			this.$textarea = document.querySelector('#snippetGenerator')
			this.$screen = document.querySelector('md-screen')
			c( this.$textarea )
		}
	}

	SnippetGenerator.init()

})
