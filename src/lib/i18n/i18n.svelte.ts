export type Lang = 'en' | 'es';

export const translations = {
    en: {
        htmlLang: 'en-GB',
        title: 'Kubix | Building Technology & Real Estate Ventures',
        metaLine: 'Panama 🇵🇦 · Company No. 155784730 · ',
        intro: 'Kubix Inc. is a Panama holding company that owns Kodex Labs Ltd (United Kingdom) and Kodex Labs S.R.L (Dominican Republic).',
        subsidiaries: 'Subsidiaries',
        ukDetail: 'United Kingdom 🇬🇧 · Company No. 16813371 · ',
        drDetail: 'Dominican Republic 🇩🇴 · ',
        ownership: 'Ownership structure',
        ownerPresident: 'Owner · President',
        ownerDirector: 'Owner · Director',
    },
    es: {
        htmlLang: 'es',
        title: 'Kubix | Creando Empresas de Tecnología e Inmobiliarias',
        metaLine: 'Panamá 🇵🇦 · Sociedad N.º 155784730 · ',
        intro: 'Kubix Inc. es una sociedad holding panameña propietaria de Kodex Labs Ltd (Reino Unido) y Kodex Labs S.R.L (República Dominicana).',
        subsidiaries: 'Filiales',
        ukDetail: 'Reino Unido 🇬🇧 · Sociedad N.º 16813371 · ',
        drDetail: 'República Dominicana 🇩🇴 · ',
        ownership: 'Estructura de propiedad',
        ownerPresident: 'Propietario · Presidente',
        ownerDirector: 'Propietario · Director',
    },
} as const;

export const DEFAULT_LANG: Lang = 'en';

export const langs = Object.keys(translations) as Lang[];

export const i18n = $state<{ lang: Lang }>({ lang: DEFAULT_LANG });

/**
 * Resolves the active language from the first segment of a URL path.
 *
 * Matches the segment exactly (e.g. `/es/`, `/es`) so unrelated paths such as
 * `/establishment` are not mistaken for the `es` locale. Falls back to
 * {@link DEFAULT_LANG} when no known locale segment is present.
 */
export function getLangFromPath(pathname: string): Lang {
    const segment = pathname.split('/').find(Boolean);
    return langs.find(lang => lang === segment) ?? DEFAULT_LANG;
}
