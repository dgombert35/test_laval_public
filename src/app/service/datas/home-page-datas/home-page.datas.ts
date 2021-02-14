import { IotaCode } from "src/app/models/home-page-models/home-page.models"

export const ViewsList = [
    '--',
    'Country',
    'Date',
    'Destination',
    'Duration',
    'Week'
]

export const IotaCodeList: IotaCode[] = [
    {
        cityAirport: 'Madrid',
        code: 'MAD'
    },

]
/* ACE: {subType: "AIRPORT", detailedName: "LANZAROTE"}
AGP: {subType: "AIRPORT", detailedName: "MALAGA AIRPORT"}
AKL: {subType: "AIRPORT", detailedName: "AUCKLAND INTERNATIONAL"}
ALC: {subType: "AIRPORT", detailedName: "ALICANTE AIRPORT"}
AMM: {subType: "AIRPORT", detailedName: "QUEEN ALIA"}
AMS: {subType: "AIRPORT", detailedName: "SCHIPHOL AIRPORT"}
ASU: {subType: "AIRPORT", detailedName: "SILVIO PETTIROSSI INTL"}
ATH: {subType: "AIRPORT", detailedName: "ATHENS INT E VENIZELOS"}
ATL: {subType: "AIRPORT", detailedName: "HARTSFIELD-JACKSON INT"}
BCN: {subType: "AIRPORT", detailedName: "AIRPORT"}
BER: {subType: "AIRPORT", detailedName: "BRANDENBURG"}
BHX: {subType: "AIRPORT", detailedName: "BIRMINGHAM"}
BIO: {subType: "AIRPORT", detailedName: "BILBAO AIRPORT"}
BJS: {subType: "CITY", detailedName: "BEIJING"}
BKK: {subType: "AIRPORT", detailedName: "SUVARNABHUMI INTL"}
BLQ: {subType: "AIRPORT", detailedName: "GUGLIELMO MARCONI"}
BOD: {subType: "AIRPORT", detailedName: "MERIGNAC"}
BOG: {subType: "AIRPORT", detailedName: "EL DORADO INTL"}
BOS: {subType: "AIRPORT", detailedName: "EDWARD L LOGAN INTL"}
BRI: {subType: "AIRPORT", detailedName: "PALESE"}
BRU: {subType: "AIRPORT", detailedName: "BRUSSELS AIRPORT"}
BUD: {subType: "AIRPORT", detailedName: "LISZT FERENC INTL"}
BUE: {subType: "CITY", detailedName: "BUENOS AIRES"}
BUH: {subType: "CITY", detailedName: "BUCHAREST"}
CAG: {subType: "AIRPORT", detailedName: "ELMAS"}
CAI: {subType: "AIRPORT", detailedName: "CAIRO INTL"}
CAS: {subType: "AIRPORT", detailedName: "ANFA"}
CCS: {subType: "AIRPORT", detailedName: "SIMON BOLIVAR INTL"}
CDG: {subType: "AIRPORT", detailedName: "CHARLES DE GAULLE"}
CGN: {subType: "AIRPORT", detailedName: "COLOGNE/BONN"}
CHI: {subType: "CITY", detailedName: "CHICAGO"}
CLO: {subType: "AIRPORT", detailedName: "ALFONSO B ARAGON INTL"}
CMB: {subType: "AIRPORT", detailedName: "BANDARANAIKE INTL"}
CMN: {subType: "AIRPORT", detailedName: "MOHAMMED V"}
CPH: {subType: "AIRPORT", detailedName: "KASTRUP"}
CTA: {subType: "AIRPORT", detailedName: "FONTANAROSSA"}
CUN: {subType: "AIRPORT", detailedName: "INTERNATIONAL"}
DBV: {subType: "AIRPORT", detailedName: "DUBROVNIK"}
DEL: {subType: "AIRPORT", detailedName: "INDIRA GANDHI INTL"}
DPS: {subType: "AIRPORT", detailedName: "NGURAH RAI"}
DUB: {subType: "AIRPORT", detailedName: "DUBLIN INTERNATIONAL"}
DUS: {subType: "AIRPORT", detailedName: "INTERNATIONAL AIRPORT"}
DXB: {subType: "AIRPORT", detailedName: "DUBAI INTL"}
EAS: {subType: "AIRPORT", detailedName: "SAN SEBASTIAN AIRPORT"}
EDI: {subType: "AIRPORT", detailedName: "AIRPORT"}
EIN: {subType: "AIRPORT", detailedName: "EINDHOVEN"}
EWR: {subType: "AIRPORT", detailedName: "NEWARK LIBERTY INTL"}
EZE: {subType: "AIRPORT", detailedName: "MINISTRO PISTARINI"}
FAO: {subType: "AIRPORT", detailedName: "AIRPORT"}
FCO: {subType: "AIRPORT", detailedName: "FIUMICINO"}
FLR: {subType: "AIRPORT", detailedName: "PERETOLA"}
FNC: {subType: "AIRPORT", detailedName: "MADEIRA"}
FRA: {subType: "AIRPORT", detailedName: "FRANKFURT INTL"}
FUE: {subType: "AIRPORT", detailedName: "FUERTEVENTURA"}
GRU: {subType: "AIRPORT", detailedName: "GUARULHOS INTL"}
GRX: {subType: "AIRPORT", detailedName: "FEDERICO GARCIA LORCA"}
GVA: {subType: "AIRPORT", detailedName: "GENEVA INTERNATIONAL"}
GYE: {subType: "AIRPORT", detailedName: "JOSE JOAQUIN DE OLMEDO"}
GYN: {subType: "AIRPORT", detailedName: "SANTA GENOVEVA"}
HAM: {subType: "AIRPORT", detailedName: "HAMBURG"}
HAN: {subType: "AIRPORT", detailedName: "NOI BAI INTL"}
HAV: {subType: "AIRPORT", detailedName: "JOSE MARTI INTL"}
HEL: {subType: "AIRPORT", detailedName: "HELSINKI VANTAA"}
HER: {subType: "AIRPORT", detailedName: "NIKOS KAZANTZAKIS"}
HKG: {subType: "AIRPORT", detailedName: "INTERNATIONAL"}
IBZ: {subType: "AIRPORT", detailedName: "IBIZA"}
IEV: {subType: "AIRPORT", detailedName: "ZHULIANY INTL"}
IST: {subType: "AIRPORT", detailedName: "ISTANBUL AIRPORT"}
JFK: {subType: "AIRPORT", detailedName: "JOHN F KENNEDY INTL"}
JKT: {subType: "CITY", detailedName: "JAKARTA"}
JNB: {subType: "AIRPORT", detailedName: "O.R. TAMBO INTL"}
JTR: {subType: "AIRPORT", detailedName: "SANTORINI"}
KRK: {subType: "AIRPORT", detailedName: "JOHN PAUL II BALICE"}
KUL: {subType: "AIRPORT", detailedName: "KUALA LUMPUR INTL"}
LAS: {subType: "AIRPORT", detailedName: "MCCARRAN INTERNATIONAL"}
LAX: {subType: "AIRPORT", detailedName: "LOS ANGELES INTL"}
LCG: {subType: "AIRPORT", detailedName: "A CORUNA AIRPORT"}
LEI: {subType: "AIRPORT"}
LGW: {subType: "AIRPORT", detailedName: "GATWICK"}
LHR: {subType: "AIRPORT", detailedName: "HEATHROW"}
LIM: {subType: "AIRPORT", detailedName: "JORGE CHAVEZ INTL"}
LIS: {subType: "AIRPORT", detailedName: "AIRPORT"}
LON: {subType: "CITY", detailedName: "LONDON"}
LPA: {subType: "AIRPORT", detailedName: "GRAN CANARIA"}
LUX: {subType: "AIRPORT", detailedName: "LUXEMBOURG"}
LYS: {subType: "AIRPORT", detailedName: "SAINT EXUPERY"}
MAD: {subType: "AIRPORT", detailedName: "ADOLFO SUAREZ BARAJAS"}
MAH: {subType: "AIRPORT"}
MAN: {subType: "AIRPORT", detailedName: "MANCHESTER AIRPORT"}
MDE: {subType: "AIRPORT", detailedName: "JOSE MARIA CORDOVA INT"}
MEX: {subType: "AIRPORT", detailedName: "BENITO JUAREZ INTL"}
MGA: {subType: "AIRPORT", detailedName: "AUGUSTO C.SANDINO INT"}
MIA: {subType: "AIRPORT", detailedName: "MIAMI INTL"}
MIL: {subType: "CITY", detailedName: "MILAN"}
MLA: {subType: "AIRPORT", detailedName: "LUQA INTERNATIONAL"}
MLE: {subType: "AIRPORT", detailedName: "VELANA INTERNATIONAL"}
MNL: {subType: "AIRPORT", detailedName: "NINOY AQUINO INTL"}
MOW: {subType: "CITY", detailedName: "MOSCOW"}
MRS: {subType: "AIRPORT", detailedName: "PROVENCE"}
MUC: {subType: "AIRPORT", detailedName: "MUNICH INTERNATIONAL"}
MVD: {subType: "AIRPORT", detailedName: "CARRASCO"}
MXP: {subType: "AIRPORT", detailedName: "MALPENSA"}
NAP: {subType: "AIRPORT", detailedName: "CAPODICHINO AIRPORT"}
NBO: {subType: "AIRPORT", detailedName: "JOMO KENYATTA INTL"}
NCE: {subType: "AIRPORT", detailedName: "COTE D AZUR"}
NTE: {subType: "AIRPORT", detailedName: "ATLANTIQUE"}
NYC: {subType: "CITY", detailedName: "NEW YORK"}
OPO: {subType: "AIRPORT", detailedName: "FRANCISCO SA CARNEIRO"}
ORL: {subType: "AIRPORT", detailedName: "EXECUTIVE"}
ORY: {subType: "AIRPORT", detailedName: "ORLY"}
OSL: {subType: "AIRPORT", detailedName: "GARDERMOEN"}
OTP: {subType: "AIRPORT", detailedName: "HENRI COANDA"}
OVD: {subType: "AIRPORT", detailedName: "ASTURIAS"}
PAR: {subType: "CITY", detailedName: "PARIS"}
PMI: {subType: "AIRPORT", detailedName: "PALMA DE MALLORCA"}
PMO: {subType: "AIRPORT", detailedName: "PUNTA RAISI"}
PRG: {subType: "AIRPORT", detailedName: "RUZYNE"}
PSA: {subType: "AIRPORT", detailedName: "GALILEO GALILEI"}
PTY: {subType: "AIRPORT", detailedName: "TOCUMEN INTL"}
PUJ: {subType: "AIRPORT", detailedName: "INTERNATIONAL"}
RAK: {subType: "AIRPORT", detailedName: "MENARA"}
RBA: {subType: "AIRPORT", detailedName: "SALE"}
REK: {subType: "CITY", detailedName: "REYKJAVIK"}
RIO: {subType: "CITY", detailedName: "RIO DE JANEIRO"}
ROM: {subType: "CITY", detailedName: "ROME"}
SAL: {subType: "AIRPORT", detailedName: "EL SALVADOR INTL"}
SAO: {subType: "CITY", detailedName: "SAO PAULO"}
SAP: {subType: "AIRPORT", detailedName: "RAMON V.MORALES INTL"}
SCL: {subType: "AIRPORT", detailedName: "A MERINO BENITEZ"}
SCQ: {subType: "AIRPORT"}
SDQ: {subType: "AIRPORT", detailedName: "LAS AMERICAS INTL"}
SDR: {subType: "AIRPORT", detailedName: "SANTANDER AIRPORT"}
SEL: {subType: "CITY", detailedName: "SEOUL"}
SFO: {subType: "AIRPORT", detailedName: "SAN FRANCISCO INTL"}
SGN: {subType: "AIRPORT", detailedName: "TAN SON NHAT INTL"}
SHA: {subType: "AIRPORT", detailedName: "HONGQIAO INTL"}
SIN: {subType: "AIRPORT", detailedName: "CHANGI"}
SJO: {subType: "AIRPORT", detailedName: "JUAN SANTAMARIA INTL"}
SOF: {subType: "AIRPORT", detailedName: "SOFIA"}
SPC: {subType: "AIRPORT", detailedName: "LA PALMA"}
STO: {subType: "CITY", detailedName: "STOCKHOLM"}
STR: {subType: "AIRPORT", detailedName: "STUTTGART AIRPORT"}
SVQ: {subType: "AIRPORT", detailedName: "SEVILLA AIRPORT"}
SYD: {subType: "AIRPORT", detailedName: "KINGSFORD SMITH"}
TCI: {subType: "CITY", detailedName: "TENERIFE"}
TFN: {subType: "AIRPORT", detailedName: "TENERIFE NORTE"}
TFS: {subType: "AIRPORT", detailedName: "TENERIFE SUR"}
TLS: {subType: "AIRPORT", detailedName: "BLAGNAC"}
TLV: {subType: "AIRPORT", detailedName: "BEN GURION INTL"}
TNG: {subType: "AIRPORT", detailedName: "IBN BATOUTA"}
TUN: {subType: "AIRPORT", detailedName: "CARTHAGE"}
TYO: {subType: "CITY", detailedName: "TOKYO"}
UIO: {subType: "AIRPORT", detailedName: "MARISCAL SUCRE INTL"}
VCE: {subType: "AIRPORT", detailedName: "MARCO POLO"}
VGO: {subType: "AIRPORT", detailedName: "VIGO AIRPORT"}
VIE: {subType: "AIRPORT", detailedName: "SCHWECHAT INTL"}
VLC: {subType: "AIRPORT", detailedName: "VALENCIA AIRPORT"}
WAS: {subType: "CITY", detailedName: "WASHINGTON"}
WAW: {subType: "AIRPORT", detailedName: "FREDERIC CHOPIN"}
XRY: {subType: "AIRPORT", detailedName: "JEREZ AIRPORT"}
YTO: {subType: "CITY", detailedName: "TORONTO"}
ZAG: {subType: "AIRPORT", detailedName: "FRANJO TUDMAN"}
ZRH: {subType: "AIRPORT", detailedName: "ZURICH AIRPORT"} */
