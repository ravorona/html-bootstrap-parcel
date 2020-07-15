import Main from '~/scripts/components/Main'

/**
 * Application scripts
 */
const checkReadyState = () => {
    if (document.readyState === 'complete') {
        const stylesheets: NodeListOf<HTMLElement> | undefined = document.querySelectorAll('link[as=style]')

        window.application = new Main('HTML Boilerplate')

        /**
         * Load stylesheets
         */
        stylesheets.forEach(
            (stylesheet: Element): void => {
                stylesheet.setAttribute('rel', 'stylesheet')
                stylesheet.removeAttribute('as')
            }
        )

        /**
         * Start app
         */
        window.application.start()
    }
}

/**
 * Reset page scroll
 */
if (window.history && 'scrollRestoration' in window.history) {
    history.scrollRestoration = 'manual'
} else {
    window.scrollTo(0, 0)
}

/**
 * Add document state event listener
 */
document.addEventListener('readystatechange', checkReadyState)

/**
 * Check state on start
 */
checkReadyState()

