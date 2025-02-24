const redirects = [
    "http://sup-admission.com/",
    "http://www.sup-admission.com/",
    "https://sup-admission.com/"
];

const currentURL = window.location.href;

// Если URL совпадает — редиректим
if (redirects.includes(currentURL)) {
    window.location.replace("https://jlexaii.github.io/sup-admission.com/");
}
