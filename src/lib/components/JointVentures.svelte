<script lang="ts">
    import hyperiorLogo from '../assets/hyperior-logo.svg';
    import { i18n, translations } from '../i18n/i18n.svelte';
    import Card from './Card.svelte';

    const t = $derived(translations[i18n.lang]);
</script>

<p class="section-title">{t.jointVentures}</p>
<ul class="joint-ventures">
    <Card image={hyperiorLogo} alt="Hyperior logo">
        <div class="name">Hyperior Limited</div>
        <div class="detail">
            {t.hyperiorDetail}
            <a href="https://hyperior.io" target="_blank" rel="noopener">hyperior.io</a>
        </div>
        <div class="stake">
            50% Kodex Labs Ltd &middot; 50% <a
                href="https://www.atlanticcedar.com"
                target="_blank"
                rel="noopener"
            >
                Atlantic Cedar Limited
            </a>
        </div>
    </Card>
</ul>

<style>
    .joint-ventures {
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

    :global(.card:has(.stake a:hover)) .detail a {
        text-decoration: none;
    }

    .stake {
        color: var(--text-dim);
        font-size: 0.8rem;
        margin-top: 0.15rem;
        font-style: italic;
    }

    .stake a {
        position: relative;
        z-index: 1;
        color: var(--accent);
        text-decoration: none;
        transition: text-decoration 0.2s var(--ease);
    }

    .stake a:hover {
        text-decoration: underline;
    }
</style>
