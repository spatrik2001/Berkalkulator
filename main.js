// Nettó bér kiszámolása és a toast message üzenet feldobása esetleges hiba esetén
function nettoCalculator(bruttoInput, nettoOsszeg) {
    const bruttoBer = parseInt(document.getElementById(bruttoInput).value);
    const nettoBer = parseInt(document.getElementById(nettoOsszeg).value);
    const jovedelemAdo = 0.15;
    const biztositasiDij = 0.013;
    if (!bruttoBer) {
        const toastTrigger = document.getElementById('berButton')
        const hibaToast = document.getElementById('liveToast')
        if (toastTrigger) {
            const toast = new bootstrap.Toast(hibaToast)
            toast.show()
        }
    } else {
        const kiszamol = bruttoBer - bruttoBer * (jovedelemAdo + biztositasiDij);
        document.getElementById(nettoOsszeg).value = kiszamol;
        // console.log(kiszamol);
    }
}

// Copyright az aktuális évvel
const aktualisEv = new Date().getFullYear();
//console.log(aktualisEv);
document.getElementById('ev').textContent = aktualisEv + " © spatrik2001";