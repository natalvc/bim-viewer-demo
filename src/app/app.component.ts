import { Component } from '@angular/core';
import { VeldInfo } from '@wegenenverkeer/ng-kaart';
import * as kaart from '@wegenenverkeer/ng-kaart/lib/kaart/locatie-ingave/locatie-ingave-model';
import { option } from 'fp-ts';
import * as ol from '@wegenenverkeer/ng-kaart';


export class VeldInfos {
  public static readonly snelheidsregimesVeldinfos: VeldInfo[] = [
    {
      isBasisVeld: false,
      label: 'ID',
      naam: 'id',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Wegsegment ID',
      naam: 'wegsegmentId',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'ID vorige wegsegment',
      naam: 'vorigeWegsegmentId',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Bepalende bord',
      naam: 'bepalendBordCode',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Gescheiden rijbaan geen autostrade?',
      naam: 'gescheidenrijbaan',
      type: 'boolean',
    },
    {
      isBasisVeld: false,
      label: 'Wegcategorie autosnelweg?',
      naam: 'autosnelweg',
      type: 'boolean',
    },
    {
      isBasisVeld: false,
      label: 'Zone',
      naam: 'zones',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Ident8',
      naam: 'ident8',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Snelheid',
      naam: 'snelheid',
      type: 'integer',
    },
  ];

  public static readonly referentiepuntenVeldinfos: VeldInfo[] = [
    {
      isBasisVeld: false,
      label: 'ID',
      naam: 'id',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Ident8',
      naam: 'locatie.ident8',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Opschrift',
      naam: 'locatie.opschrift',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Positie',
      naam: 'locatie.positie',
      type: 'double',
    },
    {
      isBasisVeld: false,
      label: 'Opnamedatum',
      naam: 'opnamedatum',
      sqlFormat: 'DD/MM/YYYY',
      type: 'date',
    },
    {
      isBasisVeld: false,
      label: 'Wijzigingsdatum',
      naam: 'wijzigingsdatum',
      sqlFormat: 'DD/MM/YYYY',
      type: 'date',
    },
    {
      isBasisVeld: false,
      label: 'Materiaal',
      naam: 'materiaalpaal.naam',
      type: 'string',
      uniekeWaarden: [],
    },
    {
      isBasisVeld: true,
      label: 'Geldig beide richtingen',
      naam: 'geldigBeideRichtingen',
      type: 'boolean',
    },
    {
      isBasisVeld: false,
      label: 'Opmerking',
      naam: 'opmerking',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Begindatum',
      naam: 'begindatum',
      sqlFormat: 'DD/MM/YYYY',
      type: 'date',
    },
    {
      isBasisVeld: false,
      label: 'Creatiedatum',
      naam: 'creatiedatum',
      sqlFormat: 'DD/MM/YYYY',
      type: 'date',
    },
    {
      isBasisVeld: false,
      label: 'Gebruiker',
      naam: 'gebruiker',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Gebied',
      naam: 'gebied',
      type: 'string',
      uniekeWaarden: [],
    },
    {
      isBasisVeld: false,
      label: 'Bebouwde kom',
      naam: 'bebouwdekom',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Wegcategorie',
      naam: 'wegcategorie',
      type: 'string',
      uniekeWaarden: [],
    },
  ];

  public static readonly kunstwerkenVeldinfos: VeldInfo[] = [
    {
      isBasisVeld: false,
      label: 'UIDN',
      naam: 'UIDN',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'OIDN',
      naam: 'OIDN',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Type',
      naam: 'LBLTYPE',
      type: 'string',
      uniekeWaarden: [],
    },
    {
      isBasisVeld: true,
      label: 'Vorm',
      naam: 'LBLVORM',
      type: 'string',
      uniekeWaarden: [],
    },
    {
      isBasisVeld: false,
      label: 'Lengte (m)',
      naam: 'LENGTE',
      type: 'double',
    },
    {
      isBasisVeld: false,
      label: 'Opname datum',
      naam: 'OPNDATUM',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Oppervlakte (m^2)',
      naam: 'OPPERVL',
      type: 'double',
    },
  ];

  public static readonly fietspadenVeldinfos: VeldInfo[] = [
    {
      isBasisVeld: false,
      label: 'ID',
      naam: 'id',
      type: 'string',
      isKopieerbaar: true,
    },
    {
      isBasisVeld: true,
      label: 'Ident8',
      naam: 'ident8',
      type: 'string',
      dataType: 'wegnummer',
    },
    {
      isBasisVeld: true,
      label: 'Open in Werf',
      naam: 'externeurl',
      type: 'string',
      constante:
        'https://{domain.name}/werf/schermen/werf/{werfid};werf=%2Fwerf%2Fapi%2Fwerf%2F{werfid}',
      html: 'WERF-{werfid}',
    },
    {
      isBasisVeld: true,
      label: 'Van refpunt',
      naam: 'locatie.begin.opschrift',
      type: 'double',
      dataType: 'vanRefpunt',
    },
    {
      isBasisVeld: true,
      label: 'Van afst',
      naam: 'locatie.begin.afstand',
      type: 'integer',
      dataType: 'vanAfstand',
    },
    {
      isBasisVeld: false,
      label: 'Van positie',
      naam: 'locatie.begin.positie',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Tot refpunt',
      naam: 'locatie.eind.opschrift',
      type: 'double',
      dataType: 'totRefpunt',
    },
    {
      isBasisVeld: true,
      label: 'Tot afst',
      naam: 'locatie.eind.afstand',
      type: 'integer',
      dataType: 'totAfstand',
    },
    {
      isBasisVeld: false,
      label: 'Tot Positie',
      naam: 'locatie.eind.positie',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Lengte',
      naam: 'locatie.lengte',
      type: 'double',
      dataType: 'lengte',
    },
    {
      isBasisVeld: false,
      label: 'Werkelijke lengte',
      naam: 'werkelijkelengte',
      type: 'double',
    },
    { isBasisVeld: false, label: 'Bron Id', naam: 'bronid', type: 'string' },
    {
      isBasisVeld: false,
      label: 'Opnamedatum',
      naam: 'opnamedatum',
      type: 'date',
      parseFormat: 'dd/LL/yyyy',
      sqlFormat: 'dd/MM/yyyy',
    },
    {
      isBasisVeld: false,
      label: 'Wijzigingsdatum',
      naam: 'wijzigingsdatum',
      type: 'date',
    }, // standaard sqlFormat
    {
      isBasisVeld: true,
      label: 'Zijde',
      naam: 'zijderijbaan',
      type: 'string',
      uniekeWaarden: ['R', 'L', 'M', 'NVT'],
      dataType: 'zijdeRijbaan',
    }, // niet alfabetisch!
    {
      isBasisVeld: true,
      label: 'Type',
      naam: 'typefietspad',
      type: 'string',
      isKopieerbaar: true,
      uniekeWaarden: [
        '',
        'AANLIGGEND',
        'Aanliggend',
        'Aanliggend Verhoogd',
        'Geen Fietspad',
        'VRIJLIGGEND',
        'Vrijliggend',
        'aanliggend',
        'vrijliggend',
      ],
    },
    {
      isBasisVeld: false,
      label: 'Verhoogd',
      naam: 'verhoogd',
      type: 'boolean',
    },
    {
      isBasisVeld: true,
      label: 'Afst rijbaan',
      naam: 'afstandrijbaan',
      type: 'string',
      dataType: 'afstandTotRijbaan',
    },
    {
      isBasisVeld: true,
      label: 'Breedte',
      naam: 'breedte',
      type: 'integer',
      dataType: 'breedte',
    },
    {
      isBasisVeld: true,
      label: 'Hoofdverharding',
      naam: 'wegverharding_1',
      type: 'string',
      uniekeWaarden: [
        'Andere en onbekend',
        'Asfalt',
        'Bestrating',
        'Beton',
        'Dunne Toplaag',
        'Ongebonden',
      ],
    },
    {
      isBasisVeld: false,
      label: 'Subverharding',
      naam: 'wegverharding_2',
      type: 'string',
      uniekeWaarden: [
        '--Ongekend--',
        'Andere',
        'Antisliplaag',
        'Asfaltbeton',
        'Bestrijking',
        'Betonstraatstenen',
        'Betontegels',
        'Dolomietverharding',
        'Doorgaand gewapend platenbeton',
        'Gebakken straatstenen',
        'Gekleurd platenbeton',
        'Gemengd',
        'Gietasfalt',
        'Grijs platenbeton',
        'Keien',
        'Mozaikkeien',
        'Onbekend',
        'Spitmastiekasfalt',
        'Steenslag',
        'Zeer open asfalt',
      ],
    },
    {
      isBasisVeld: false,
      label: 'Kleur',
      naam: 'kleur',
      type: 'string',
      uniekeWaarden: ['Andere', 'NVT', 'Rood'],
    },
    {
      isBasisVeld: true,
      label: 'Dubbelrichting',
      naam: 'dubbelerichting',
      type: 'boolean',
    },
    {
      isBasisVeld: false,
      label: 'Gemarkeerd',
      naam: 'gemarkeerd',
      type: 'boolean',
    },
    {
      isBasisVeld: false,
      label: 'Tussenstrook',
      naam: 'tussenstrook',
      type: 'string',
      uniekeWaarden: [
        '--Onbekend--',
        'Geen',
        'NVT',
        'Type 1',
        'Type 2',
        'Type 3',
      ],
    },
    {
      isBasisVeld: false,
      label: 'Opmerking',
      naam: 'opmerking',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Begindatum',
      naam: 'begindatum',
      type: 'date',
    },
    {
      isBasisVeld: false,
      label: 'Creatiedatum',
      naam: 'creatiedatum',
      type: 'date',
    },
    {
      isBasisVeld: false,
      label: 'Gebied',
      naam: 'gebied',
      type: 'string',
      isKopieerbaar: true,
    },
    {
      isBasisVeld: false,
      label: 'Bebouwde kom',
      naam: 'bebouwdekom',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Wegcategorie',
      naam: 'wegcategorie',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Gebruiker',
      naam: 'gebruiker',
      type: 'string',
    },
  ];

  public static readonly telpostenInfos: VeldInfo[] = [
    {
      isBasisVeld: true,
      label: 'Ident8',
      naam: 'ident8',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Datum recentste meting',
      naam: 'datum_einde_laatste_bestand',
      type: 'date',
    },
    {
      isBasisVeld: true,
      label: 'Rapport 2',
      naam: 'rapport_url_2',
      type: 'url',
      html: '{telpost_code}-rapport 2',
    },
  ];

  public static readonly adviesInfos: VeldInfo[] = [
    {
      isBasisVeld: true,
      label: 'Nummer',
      naam: 'nummer',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Datum advies verzonden',
      naam: 'datumVerzonden',
      sqlFormat: 'YYYY-MM-DD',
      type: 'date',
    },
    {
      isBasisVeld: true,
      label: 'Bekijk in AV',
      naam: 'link',
      type: 'url',
      html: 'Open',
    },
    {
      isBasisVeld: true,
      label: 'Bekijk',
      naam: 'bekijk',
      constante:
        'https://localhost/av/test/{nummer};werf=werf%2Fapi%2Fwerf%2F{nummer}',
      type: 'url',
    },
    {
      isBasisVeld: true,
      label: '',
      html: '{nummer}',
      naam: 'dynamisch',
      type: 'url',
      constante:
        'https://localhost/av/test/{nummer};werf=werf%2Fapi%2Fwerf%2F{nummer}',
    },
  ];

  public static readonly staatVanDeWegVeldInfos: VeldInfo[] = [
    { isBasisVeld: false, label: 'ID', naam: 'id', type: 'string' },
    { isBasisVeld: true, label: 'Ident8', naam: 'ident8', type: 'string' },
    {
      isBasisVeld: true,
      label: 'Van refpunt',
      naam: 'locatie.begin.opschrift',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Van afst',
      naam: 'locatie.begin.afstand',
      type: 'integer',
    },
    {
      isBasisVeld: true,
      label: 'Van positie',
      naam: 'locatie.begin.positie',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Tot refpunt',
      naam: 'locatie.eind.opschrift',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Tot afst',
      naam: 'locatie.eind.afstand',
      type: 'integer',
    },
    {
      isBasisVeld: true,
      label: 'Tot Positie',
      naam: 'locatie.eind.positie',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Lengte',
      naam: 'locatie.lengte',
      type: 'double',
      displayFormat: '1.0-0',
    }, // custom formaat
    {
      isBasisVeld: false,
      label: 'Werkelijke lengte',
      naam: 'werkelijkelengte',
      type: 'double',
    },
    { isBasisVeld: false, label: 'Bron Id', naam: 'bronid', type: 'string' },
    {
      isBasisVeld: false,
      label: 'Globale Index',
      naam: 'globale_index.globaleIndex',
      type: 'integer',
    },
  ];

  public static readonly verkeersbordenVeldinfos: VeldInfo[] = [
    { isBasisVeld: false, label: 'ID', naam: 'id', type: 'integer' },
    { isBasisVeld: true, label: 'Ident8', naam: 'ident8', type: 'string' },
    { isBasisVeld: true, label: 'Refpunt', naam: 'opschrift', type: 'double' },
    { isBasisVeld: true, label: 'Afstand', naam: 'afstand', type: 'integer' },
    {
      isBasisVeld: true,
      label: 'Zijde van de rijweg',
      naam: 'zijdeVanDeRijweg',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Langs gewestweg',
      naam: 'langsGewestweg',
      type: 'boolean',
    },
    { isBasisVeld: false, label: 'Gebied', naam: 'gebied', type: 'string' },
    { isBasisVeld: false, label: 'UUID', naam: 'uuid', type: 'string' },
    { isBasisVeld: true, label: 'Status', naam: 'status', type: 'string' },
    {
      isBasisVeld: false,
      label: 'Wijzigingsdatum',
      naam: 'wijzigingsdatum',
      type: 'date',
      sqlFormat: 'DD/MM/YYYY',
    },
  ];

  public static readonly bordenVeldinfos: VeldInfo[] = [
    {
      isBasisVeld: false,
      label: 'Locatie X',
      naam: 'geometry.location.0',
      type: 'double',
    },
    {
      isBasisVeld: false,
      label: 'Locatie Y',
      naam: 'geometry.location.1',
      type: 'double',
    },
    { isBasisVeld: true, label: 'Type bord', naam: 'code', type: 'string' },
    {
      isBasisVeld: true,
      label: 'Breedte',
      naam: 'breedte',
      type: 'double',
    },
    { isBasisVeld: true, label: 'Hoogte', naam: 'hoogte', type: 'double' },
  ];

  public static readonly percelenVeldinfos: VeldInfo[] = [
    { isBasisVeld: true, label: 'Id', naam: 'OBJECTID', type: 'integer' },
    { isBasisVeld: true, label: 'Capakey', naam: 'CAPAKEY', type: 'string' },
    { isBasisVeld: true, label: 'Perceel', naam: 'PERCID', type: 'string' },
    { isBasisVeld: true, label: 'Jaar', naam: 'JAAR', type: 'integer' },
    { isBasisVeld: true, label: 'NIS code', naam: 'NIS_CODE', type: 'string' },
    {
      isBasisVeld: true,
      label: 'Gewest',
      naam: 'LIGGING_GEWEST',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Gemeente',
      naam: 'LIGGING_GEMEENTE',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Beheerder',
      naam: 'BEHEERDER_NAAM_KORT',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Beheerder (lang)',
      naam: 'BEHEERDER_NAAM_LANG',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Eigenaar',
      naam: 'EIGENAAR_NAAM_KORT',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Eigenaar (lang)',
      naam: 'EIGENAAR_NAAM_LANG',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Eigenaar KBO nr',
      naam: 'EIGENAAR_KBONR',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Perceel categorie',
      naam: 'PERCEEL_CATEGORIE',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Kadaster oppervlakte (m²)',
      naam: 'KADASTER_OPPERVLAKTE_M2',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Cadmap oppervlakte (m²)',
      naam: 'CADMAP_OPPERVLAKTE_M2',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Grb oppervlakte (m²)',
      naam: 'GRB_OPPERVLAKTE_M2',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Opgemeten oppervlakte (m²)',
      naam: 'OPGEMETEN_OPPERVLAKTE_M2',
      type: 'double',
    },
    { isBasisVeld: true, label: 'Rbh code', naam: 'RBH_CODE', type: 'string' },
    {
      isBasisVeld: false,
      label: 'Rbh code (lang)',
      naam: 'RBH_CODE_DESCR',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Percentage eigenaar',
      naam: 'PERCENTAGE_EIGENAAR',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Kadastrale aard ',
      naam: 'KADASTRALE_AARD_CODE',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Kadastrale aard (lang)',
      naam: 'KADASTRALE_AARD_DESCR',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Kadastraal recht',
      naam: 'KADASTRAAL_RECHT_CODE',
      type: 'string',
    },
    {
      isBasisVeld: false,
      label: 'Kadastraal recht (lang)',
      naam: 'KADASTRAAL_RECHT_DESCR',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Data beheerder vsgd',
      naam: 'DATA_BEHEERDER_VSGD',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Bebouwde oppervlakte',
      naam: 'BEBOUWDE_OPPERVLAKTE',
      type: 'double',
    },
    {
      isBasisVeld: true,
      label: 'Bron geometrie',
      naam: 'BRON_GEOMETRIE',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Bestemming symb',
      naam: 'BESTEMMING_SYMB',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Percentage bebouwd',
      naam: 'PERCENTAGE_BEBOUWD',
      type: 'double',
    },
    { isBasisVeld: true, label: 'Bebouwd', naam: 'BEBOUWD', type: 'boolean' },
    {
      isBasisVeld: false,
      label: 'Shape length',
      naam: 'SHAPE_Length',
      type: 'double',
    },
    {
      isBasisVeld: false,
      label: 'Shape area',
      naam: 'SHAPE_Area',
      type: 'double',
    },
  ];

  public static readonly wfsStratenVeldinfos: VeldInfo[] = [
    { isBasisVeld: true, label: 'ID', naam: 'id', type: 'string' },
    { isBasisVeld: true, label: 'Straatnaam', naam: 'name', type: 'string' },
    { isBasisVeld: true, label: 'Lengte', naam: 'meters', type: 'double' },
  ];

  public static readonly innamesVeldinfos: VeldInfo[] = [
    {
      isBasisVeld: true,
      label: 'Vanaf',
      naam: 'vandatum',
      type: 'date',
      parseFormat: 'yyyy-LL-dd\'T\'hh:mm:ss',
      displayFormat: 'dd/LL/yyyy hh:mm',
    },
    {
      isBasisVeld: true,
      label: 'Tot',
      naam: 'totdatum',
      type: 'date',
      parseFormat: 'yyyy-LL-dd\'T\'hh:mm:ss',
      displayFormat: 'dd/LL/yyyy hh:mm',
    },
    {
      isBasisVeld: true,
      label: 'Gewijzigd',
      naam: 'gewijzigd_op',
      type: 'date',
      parseFormat: 'yyyy-LL-dd\'T\'hh:mm:ss',
      displayFormat: 'dd/LL/yyyy hh:mm',
    },
  ];

  public static readonly verlichtingenVeldinfos: VeldInfo[] = [
    {
      isBasisVeld: true,
      label: 'ID',
      naam: 'bronid',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Onderdeel type',
      naam: 'typeNaam',
      type: 'string',
    },
    {
      isBasisVeld: true,
      label: 'Naampad',
      naam: 'installatieNaampad',
      type: 'string',
      isKopieerbaar: true,
    },
  ];

  public static readonly mechelenVeldInfos: VeldInfo[] = [
    {
      naam: 'vorm',
      label: 'Vorm',
      type: 'string',
      isBasisVeld: true,
      constante: undefined,
      template: undefined,
      uniekeWaarden: ['punt', 'lijn', 'cirkel', 'veelvlak'],
      html: '',
    },
    {
      naam: 'merk',
      label: 'Merk',
      type: 'string',
      isBasisVeld: true,
      constante: undefined,
      template: undefined,
      uniekeWaarden: ['ACME', 'Globex'],
      html: '',
    },
    {
      naam: 'lengte',
      label: 'Lengte',
      type: 'double',
      isBasisVeld: true,
      constante: undefined,
      template: undefined,
      uniekeWaarden: ['10', '20', '30', '1'],
      html: '',
    },
    {
      naam: 'gesloten',
      label: 'Gesloten',
      type: 'boolean',
      isBasisVeld: true,
      constante: undefined,
      template: undefined,
      uniekeWaarden: ['true', 'false'],
      html: '',
    },
  ];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly VeldInfos = VeldInfos;

  title = 'ng-kaart-demo';

  bestaandeLocaties: kaart.Locatie[] = [];

  zetBestaandeLocaties() {
    const genummerdeLocatie: kaart.GenummerdeLocatie = {
      type: 'GenummerdeLocatie',
      eindX: 154107.53,
      eindY: 208629.31,
      isGeldig: true,
      lijnLocatie: option.none,
      puntLocatie: option.none,
      startX: 154201.62,
      startY: 208488.19,
      totAfstand: '-48',
      totRefpunt: '37.4',
      vanAfstand: '-18',
      vanRefpunt: '37.2',
      wegnummer: 'N0010002',
      foutMelding: option.none,
      geometry: new ol.geom.MultiLineString([]),
    };
    const ongenummerdeLocatie: kaart.OngenummerdeLocatie = {
      eindX: 154486.21,
      eindY: 208719.18,
      foutMelding: option.none,
      geometry: new ol.geom.MultiLineString([
        [
          [154315.934, 208579.629],
          [154323.11, 208585.501],
          [154395.318, 208644.258],
          [154401.453, 208649.251],
          [154401.453, 208649.251],
          [154407.044, 208653.802],
          [154414.235, 208659.657],
          [154430.712, 208673.284],
          [154486.213, 208719.182],
        ],
      ]),
      isGeldig: true,
      lijnLocatie: option.none,
      puntLocatie: option.none,
      startX: 154314.69,
      startY: 208581.15,
      straatnaam: 'Jan Moorkensstraat',
      type: 'OngenummerdeLocatie',
      wegsegmentId: 442716,
    };

    const geenWegLocatie: kaart.GeenWegLocatie = {
      eindX: 154137.04,
      eindY: 208771.94,
      foutMelding: option.none,
      geometry: new ol.geom.MultiLineString([
        [
          [154424.13, 208771.94],
          [154137.04, 208771.94],
        ],
      ]),
      isGeldig: true,
      lijnLocatie: option.none,
      puntLocatie: option.none,
      startX: 154424.13,
      startY: 208771.94,
      type: 'GeenWegLocatie',
    };

    const wegPuntLocatie: kaart.WegPuntLocatie = {
      foutMelding: option.none,
      geometry: new ol.geom.Point([153887.29, 208644.81]),
      isGeldig: true,
      lijnLocatie: option.none,
      puntLocatie: option.some({
        type: 'WegsegmentPuntLocatie',
        geometry: {
          type: 'Point',
          coordinates: [153887.29, 208644.81, 0, 0],
          bbox: [153887.29, 208644.81, 153887.29, 208644.81],
          crs: {
            properties: {
              name: 'EPSG:31370',
            },
            type: 'name',
          },
        },
        projectie: {
          type: 'Point',
          coordinates: [153833.452, 208636.71, 0, 222.979],
          bbox: [153833.452, 208636.71, 153833.452, 208636.71],
          crs: {
            properties: {
              name: 'EPSG:31370',
            },
            type: 'name',
          },
        },
        wegsegmentId: {
          gidn: '514315_2',
          oidn: 514315,
          uidn: '514315_2',
        },
        relatief: {
          afstand: -37,
          referentiepunt: {
            opschrift: '0.4',
            wegnummer: {
              nummer: 'N1730002',
            },
          },
          wegnummer: {
            nummer: 'N1730002',
          },
        },
      }),
      type: 'WegPuntLocatie',
    };

    const vrijPuntLocatie: kaart.VrijePuntLocatie = {
      foutMelding: option.none,
      geometry: new ol.geom.Point([153983.88, 208521.66]),
      isGeldig: true,
      lijnLocatie: option.none,
      puntLocatie: option.none,
      type: 'VrijePuntLocatie',
    };

    this.bestaandeLocaties =  [
      genummerdeLocatie,
      ongenummerdeLocatie,
      geenWegLocatie,
      wegPuntLocatie,
      vrijPuntLocatie,
    ];
  }
}


