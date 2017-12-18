function c (a) { console.log(a) }

document.addEventListener('DOMContentLoaded', () => {

	let URLmanager = {
		init () {
			this.cahceDOM()
			this.bindListeners()
		},
		maganeAnchors (e) { e.preventDefault()
			this.$this = ( e.target.nodeName === 'I' ) ? e.target.parentNode : e.target
			this.$this = this.$this.getAttribute('href')
			document.querySelector('main').classList.add('outOnFade')
			setTimeout(() => {
				window.location.href = `./${this.$this}/index.html`
			}, 300)
		},
		bindListeners () {
			this.anchors.forEach( el => {
				el.addEventListener('click', this.maganeAnchors.bind(this))
			})
		},
		cahceDOM () {
			this.anchors = document.querySelectorAll('a')
			c( this.anchors )

		}
	}

	URLmanager.init()

})
