<script lang="ts">
    import { getLangFromPath, i18n, type Lang } from '../i18n/i18n.svelte';

    const other = $derived<Lang>(i18n.lang === 'en' ? 'es' : 'en');
    const otherHref = $derived(`/${other}/`);
    const otherHreflang = $derived(other === 'en' ? 'en-GB' : 'es');

    function toggle(event: MouseEvent) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
            return;
        }
        event.preventDefault();
        const next = other;
        history.pushState({ lang: next }, '', `/${next}/`);
        i18n.lang = next;
    }
</script>

<svelte:window
    onpopstate={() => {
        i18n.lang = getLangFromPath(location.pathname);
    }}
/>

<a
    class="lang-switch"
    href={otherHref}
    hreflang={otherHreflang}
    aria-label="Switch language to {other === 'en' ? 'English' : 'Spanish'}"
    onclick={toggle}
>
    <span class="opt" class:active={i18n.lang === 'en'}>EN</span>
    <span class="opt" class:active={i18n.lang === 'es'}>ES</span>
</a>

<style>
    .lang-switch {
        position: fixed;
        top: 1.25rem;
        right: 1.25rem;
        display: flex;
        gap: 0.25rem;
        padding: 0.25rem;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 999px;
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 10;
        cursor: pointer;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
    }

    .opt {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--text-dim);
        padding: 0.25rem 0.7rem;
        border-radius: 999px;
        line-height: 1;
        transition:
            color 0.2s var(--ease),
            background 0.2s var(--ease);
    }

    .lang-switch:hover .opt:not(.active) {
        color: var(--text);
    }

    .opt.active {
        background: var(--accent);
        color: #0b0e13;
    }
</style>
