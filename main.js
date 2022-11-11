// Nettó bér kiszámolása és a toast message üzenet feldobása esetleges hiba esetén
const bruttoBer = Number(document.getElementById('bruttoInput'));
const nettoBer = Number(document.getElementById('nettoBer'));

function nettoCalculator() {
    if (bruttoBer.value == "") {
        const toastTrigger = document.getElementById('berButton')
        const hibaToast = document.getElementById('liveToast')
        if (toastTrigger) {
            const toast = new bootstrap.Toast(hibaToast)
            toast.show()
        }
    } else if (bruttoBer.value == 0 || bruttoBer.value < 0) {
        const toastTrigger = document.getElementById('berButton')
        const hibaToast2 = document.getElementById('liveToast2')
        if (toastTrigger) {
            const toast = new bootstrap.Toast(hibaToast2)
            toast.show()
        }
    } else {
        nettoBer == bruttoBer - bruttoBer * (0.15 + 0.013);
        // document.getElementById('nettoBer').innerHTML.value == nettoBer;
        console.log(nettoBer);
    }
}
