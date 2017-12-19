function c (a) { console.log(a) }

document.addEventListener('DOMContentLoaded', () => {

	let SnippetGenerator = {
		init () {
			this.cahceDOM()
			this.bindListeners()
		},
		highlit () {
			c('round')
			this.text = this.$textarea.value
			this.text = this.text.replace(/</g, '&lt;')
			this.text = this.text.replace(/>/g, '&gt;')
			this.text = this.text.replace(/(&lt;\/?(span|p|div|li|a|h1|h2|h3|h4|h5|h6|ul|small|center|b|strong|i|u) *.*&gt;)/g, '<red>$1</red>')
			this.text = this.text.replace(/((Text|Snippet|Image|Page)*\..*\$)/g, '<yellow>$1</yellow>')
			//this.text = this.text.replace(/(&lt;.* )(.*=".*")(\/?&gt;)/g, '$1<light>$2</light>$3')
			this.$mirror.innerHTML = this.text.replace(/(\$)/g, '<purple>$1</purple>')

			this.secondProccess = this.$mirror.textContent.replace(/((Text|Snippet|Image|PageSnippet)\..*\$)/g, '[[$1]]')
			this.temp = ''
			for (let i = 1; i <= parseInt(this.$qutty.value); i++) {

				c('rounded')

				this.$qwe = parseInt(this.$qutty.value)
				c( this.$qwe > 9 && this.$qwe <= 99 )
				c( typeof this.$qwe )

				if ( this.$qwe > 0 && this.$qwe <= 9 ) {
					this.temp += this.secondProccess.replace(/\$/g, `${i}`)
				}

				if ( this.$qwe > 9 && this.$qwe <= 99 ) {

					if ( i > 9 ) {
						this.temp += this.secondProccess.replace(/\$/g, `${i}`)
					} else {
						this.temp += this.secondProccess.replace(/\$/g, `0${i}`)
					}

				}

				if ( this.$qwe > 99 && this.$qwe <= 999 ) {

					if ( i > 99 ) {
						this.temp += this.secondProccess.replace(/\$/g, `${i}`)
					} else if ( i > 9 ) {
						this.temp += this.secondProccess.replace(/\$/g, `0${i}`)
					} else {
						this.temp += this.secondProccess.replace(/\$/g, `00${i}`)
					}

				}

				/*if ( this.$qutty.value > 9 ) {
					this.temp += this.secondProccess.replace(/\$/g, `0${i}`)
				} else if ( this.$qutty.value > 99 ) {
					this.temp += this.secondProccess.replace(/\$/g, `00${i}`)
				} else if ( this.$qutty.value > 999 ) {
					this.temp += this.secondProccess.replace(/\$/g, `00${i}`)
				}*/


				this.temp += '\n'
			}
			this.$screen.textContent = this.temp
		},
		bindListeners () {
			this.$textarea.addEventListener('input', this.highlit.bind(this))
			this.$qutty.addEventListener('input', this.highlit.bind(this))
		},
		cahceDOM () {
			this.$mirror = document.querySelector('md-mirror')
			this.$textarea = document.querySelector('#snippetGenerator')
			this.$screen = document.querySelector('md-screen')
			this.$qutty = document.querySelector('[name=qutty]')
			c( this.$textarea )
		}
	}

	SnippetGenerator.init()

})
