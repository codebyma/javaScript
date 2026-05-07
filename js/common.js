window.addEventListener('DOMContentLoaded', function () {
    const dataFnTargets = document.querySelectorAll('[data-fn-target]');
    dataFnTargets.forEach(function (dataFnTarget) {
        dataFnTarget.addEventListener('click', function () {
            const fn = dataFnTarget.innerText;
            const target = dataFnTarget.dataset.fnTarget
            document.getElementById(target).textContent = eval(fn);
        })
    })
})