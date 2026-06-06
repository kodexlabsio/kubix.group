<script lang="ts">
    import kodexLogo from '../assets/kodex-logo.svg';
    import { i18n, translations } from '../i18n/i18n.svelte';
    import Card from './Card.svelte';

    const t = $derived(translations[i18n.lang]);
</script>

<p class="section-title">{t.subsidiaries}</p>
<ul class="subsidiaries">
    <Card image={kodexLogo} alt="Kodex Labs logo">
        <div class="name">Kodex Labs Ltd</div>
        <div class="detail">
            {t.ukDetail}
            <a href="https://kodexlabs.io">kodexlabs.io</a>
        </div>
    </Card>
    <Card image={kodexLogo} alt="Kodex Labs logo">
        <div class="name">Kodex Labs S.R.L</div>
        <div class="detail">
            {t.drDetail}
            <a href="https://kodexlabs.do">kodexlabs.do</a>
        </div>
    </Card>
</ul>

<style>
    .subsidiaries {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .name {
        font-weight: 700;
    }

    .detail {
        color: var(--text-dim);
        font-size: 0.9rem;
    }

    .detail a {
        color: var(--accent);
        text-decoration: none;
        transition: opacity 0.2s var(--ease);
    }

    .detail a::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
    }

    :global(.card:hover) .detail a {
        text-decoration: underline;
    }
</style>
