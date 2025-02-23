const redirects = {
    "http://sup-admission.com/": "https://jlexaii.github.io/sup-admission.com/",
    "http://www.sup-admission.com/": "https://jlexaii.github.io/sup-admission.com/",
    "https://sup-admission.com/": "https://jlexaii.github.io/sup-admission.com/"
};

const currentURL = window.location.href;
const newURL = redirects[currentURL];

if (newURL) {
    window.location.replace(newURL); // 301 редирект (смена URL в истории браузера)
}
