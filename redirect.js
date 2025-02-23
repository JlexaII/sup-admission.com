const redirects = {
    "http://sup-admission.com/": "https://jlexaii.github.io/sup-admission.com/",
    "http://www.sup-admission.com/": "https://jlexaii.github.io/sup-admission.com/",
    "https://sup-admission.com/": "https://jlexaii.github.io/sup-admission.com/"
};

// Проверяем текущий URL
const currentURL = window.location.href;

// Если URL найден в списке, делаем редирект
if (redirects[currentURL]) {
    window.location.replace(redirects[currentURL]); // 301 редирект
}
