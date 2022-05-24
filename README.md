# Seminarska naloga za vaje Kom

Pridružili ste se podjetju \_\_\_\_\_ (vstavi ime vašega podjetja). Ker gre za start-up, podjetje nima nikakršne IT infrastrukture. Tu nastopite vi. Šef vam naloži naslednja opravila:

* uporabniki in strežniki morajo biti vsak v svojem segmentu.
* (opcijsko) uporabiti morate heterogene operacijske sisteme (vsaj po en Windows, Linux)
* segment "uporabniki" naj ima omrežje 10.X.0.0/24 in segment "strežniki" naj ima omrežje 192.168.X.0/24 (pri čemer je X=številka vaše [skupine](https://ucilnica.fri.uni-lj.si/mod/choice/view.php?id=45650 "Skupine")). Vaš ISP (LRK :)) vam je dodelil [eno "zunanjo" IP številko in IPv6 naslovni prostor](https://ucilnica.fri.uni-lj.si/mod/page/view.php?id=7467).
* V omrežju imejte tudi en segment, ki bo uporabljal **samo IPv6** protokol (_ipv6only_). V njem uporabite privatne IPv6 naslove (_unique local address_ - ULA), in jih s tehniko **NPTv6** (IPv6-to-IPv6 Network Prefix Translation - RFC 6296) preslikajte v enega izmed vam dodeljenih zunanjih IPv6 segmentov, **ki ga še niste uporabili kje drugje** (dodeljeni /62 je razdeljen na 4x /64, prvi je za povezavo z internetom, dva za dual stack omrežji DMZ in internal, zadnji pa za NPTv6 ipv6-only segment. NPTv6 je v Vyosu podprt v verziji VyOS >=1.2.
* Nastavite ostale pomembne parametre: DNS, domensko ime, NTP strežnike, ... (torej vse "splošne" nastavitve, ki jih potrebujete v podjetju).
* Smiselno nastavite storitvi DHCP in NAT. Strežniki naj imajo vedno enako IP številko, vendar mora vseeno biti dodeljena preko DHCP-ja. Uporabniki morajo imet dostop do interneta. Izpostaviti morate tudi nekaj storitev na vaših strežnikih (npr [REST](https://ucilnica.fri.uni-lj.si/mod/page/view.php?id=45670 "REST"), Grafana, Cacti, ntop, ... glejte spodaj).
* Nastavite tudi IPv6, segmentirajte ga sami, pri tem uporabite [dodeljen naslovni prostor IPv6](https://ucilnica.fri.uni-lj.si/mod/page/view.php?id=7467). Storitve, ki jih boste nudili uporabnikom izven vašega podjetja, morajo biti dostopne tudi preko IPv6 (kjer je to smiselno). IPv6 nastavite:
  * na VyOS statično
  * (vsaj) na enemu segmentu z uporabo SLAAC
  * (vsaj) na enem segmentu z uporabo DHCPv6

* Sprogramirajte eno [REST](https://ucilnica.fri.uni-lj.si/mod/page/view.php?id=45670 "REST") storitev, kakšne vire (resources) boste izpostavili vašim uporabnikom se lahko odločite sami. Vira naj bosta vsaj dva, med seboj vsaj nekoliko povezana (npr. torej podobno kot je bilo predstavljeno na vajah za stranke in naročila).

  * viri naj podpirajo tehnike pogajanja o vsebini (_content negotiation_), podpreti morate vsaj tri formate (XML, JSON in enega poljubnega - html, text, itd.).
  * (opcijsko) Vsaj ena operacija nad podatki naj bo zaščitena, torej dostopna samo izbrani skupini uporabnikov, ki so vpisani v enem od LDAP strežnikov. Razmislite, katere operacije bodo "prosto" dostopne, katere pa so takšne, da jih lahko uporabljajo le avtenticirani in avtorizirani uporabniki.
  * povezave do vaših [REST](https://ucilnica.fri.uni-lj.si/mod/page/view.php?id=45670 "REST") storitev naj bodo varne
  * (opcijsko) Storitve naj bodo povezane s podatkovno bazo, tako da se vsebina ohrani tudi ob ponovnem zagonu strežnika
  * Storitve naj bodo dostopne poleg HTTP1.1 tudi preko HTTP/2
  * (opcijsko) HTTP/3  

  * (opcijsko) enako naredite tudi v GraphQL

* Postavite imenik uporabnikov (lahko AD - Microsoft Active Directory, lahko pa uporabite tudi kakšen drug LDAP strežnik!), vpišite par testnih uporabnikov, ki jih boste potem uporabljali v ostalih delih vašega sistema (VPN, avtentikacija za [REST](https://ucilnica.fri.uni-lj.si/mod/page/view.php?id=45670 "REST") storitve, ...).
* **Smiselno** **postavite** **požarne zidove**. Razmislite (in dokumentirajte!), kakšna naj bodo pravila znotraj vašega omrežja, kakšna za dostop od zunaj in kakšna za izhodni promet, katere storitve boste izpostavili navzven, katere bodo samo notranje dostopne, katere bodo uporabljale vaše stranke, katere pa administratorji sistema... Ne pozabite, da je vaše omrežje IPv4 in IPv6 (t.i. dual stack)
* Omrežje mora omogočati oddaljen dostop uporabnikov preko navideznih zasebnih omrežij (VPN dostop do vašega omrežja). Pazite na to, da bo VPN dostop varen.  
    (Opcijsko) Avtentikacija naj se izvaja na vaš aktivni imenik (ali LDAP kot je OpenLDAP). Torej za tiste uporabnike, ki so vpisani v vašem AD strežniku, oz. imajo v njem celo shranjena digitalna potrdila.
* Upravljanje in nadzor omrežja in storitev:

  * Skonfigurirajte SNMP za beleženje dogodkov (beleženje vsaj enega vira, npr. spletnega ali aplikacijskega strežnika, procesorja, pomnilnika ... Poskusite najti nekaj smiselnega za vaš primer postavitve), podatki naj bodo vidni grafično (Cacti, Prometheus+Grafana, ali kar koli drugega...), zato nastavite ustrezno kratke intervale za SNMP pooling (da se bo na zagovoru sploh kaj videlo na grafih).
  * (opcija) Nastavite netflow ali sflow beleženje tokov, generirajte nekaj prometa, ki naj se nato vidi v analizatorju tokov. Integrirate lahko v Cacti (uporabljali ste ga najbrž zgoraj za SNMP - tu morate instalirati vtičnik - plugin) ali pa uporabite kakšen drug programček, npr. "ntop" (ki ima že vgrajeno podporo) in je to ločena storitev za administratorja vašega omrežja.

* (opcija) IDS/IPS: namestite in demostrirajte uporabo IDS/IPS z npr. skeniranjem vašega omrežja z orodjem nmap, uganjevanjem SSH gesla, itd. Uporabite lahko katerokoli odprtokodno rešitev iz tega segmenta, npr. Snort + Snorby, itd.
* [RAFT](https://ucilnica.fri.uni-lj.si/mod/page/view.php?id=45688 "Raft"): postavite v vašem podjetju primer storitve, ki uporablja protokol [RAFT](https://ucilnica.fri.uni-lj.si/mod/page/view.php?id=45688 "Raft"), na vsaj 3 računalnikih. Lahko je karkoli, kar uporablja [RAFT](https://ucilnica.fri.uni-lj.si/mod/page/view.php?id=45688 "Raft"), npr. etcd ali kaj podobnega.

Na zagovor morate prinesti tudi tehnično **poročilo**, v katerem natančno opišete vaše rešitve problemov. Predvsem naj ne manjka **natančna shema omrežja, strežnikov, opis storitev, nastavitve požarnih zidov, ...** Poročilo se bo tudi točkovalo, je del ocene seminarske naloge. Poročilo naj bo napisano v smislu **tehnične dokumentacije** (npr. razmislite, kaj bi vi želeli imeti dokumentirano, če bi prišli v eno od takšnih podjetij namesto vašega kolega iz druge [skupine](https://ucilnica.fri.uni-lj.si/mod/choice/view.php?id=45650 "Skupine"), ki je vse to postavil...).

Zagovori bodo zadnja dva tedna semestra. Razpored bomo objavili na učilnici, kamor se boste lahko prijavili v prosti termin. [Skupine](https://ucilnica.fri.uni-lj.si/mod/choice/view.php?id=45650 "Skupine") se lahko med seboj tudi zamenjajo termine, le obvestite me o tem.
