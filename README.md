# Bérkalkulátor

Egy egyszerű kalkulátor, amiből a bruttó bér megadásával megkaphatod a nettó bért. Az ihletet az egyik iskolaszövetkezet bélkalkulátora adta.
A weboldalban annyi extra még található, hogy a footer részben az év automatikusan változik az adott naptári évre.

## Hogyan is kell használni?

1. A bruttó bérhez beírod a bruttó béred.
2. Rányomsz a `Számol` gombra.
3. A nettó bérnél megkapod a nettó béred.

**Figyelem!** Ez a kalkulátor az ötletadóhoz hasonlóan csak az SZJA-val, illetve a biztosítási díjjal számol, ha te mindenképp a többi járulékkal is számolni akarsz, akkor az SZJA mintájára (`const jarulek1 = ...;`) megadhatod azt, viszont akkor a kiszámolás menetét is módosítanod kell, mint pl. `const kiszamol = bruttoBer - bruttoBer * (jovedelemAdo + biztositasiDij + jarulek1 + ...)`.

## Képernyőkép
![Képernyőkép](https://i.imgur.com/XwUln8d.png)
