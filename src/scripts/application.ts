/**
 * Application scripts
 */
const checkReadyState = () => {
    if (document.readyState === 'complete') {
        const stylesheets: NodeListOf<HTMLElement> | undefined = document.querySelectorAll('link[as=style]')

        /**
         * Load stylesheets
         */
        stylesheets.forEach(
            (stylesheet: Element): void => {
                stylesheet.setAttribute('rel', 'stylesheet')
                stylesheet.removeAttribute('as')
            }
        )
    }
}

document.addEventListener(
    'readystatechange',
    () => {
        checkReadyState()
    }
)

if (window.history && 'scrollRestoration' in window.history) {
    history.scrollRestoration = 'manual'
} else {
    window.scrollTo(0, 0)
}

checkReadyState()

