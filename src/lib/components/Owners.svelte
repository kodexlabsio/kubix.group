<script lang="ts">
    import andyAvatar from '../assets/andy-avatar.avif';
    import domAvatar from '../assets/dom-avatar.avif';
    import { i18n, translations } from '../i18n/i18n.svelte';
    import Card from './Card.svelte';

    const t = $derived(translations[i18n.lang]);
</script>

<p class="section-title">{t.ownership}</p>
<ul class="directors">
    <Card image={andyAvatar} alt="Andy Phillips" round>
        <div class="name">
            <a href="https://www.linkedin.com/in/andrew-p-739b0b26/" target="_blank" rel="noopener">
                Andy Phillips
            </a>
        </div>
        <div class="role">{t.ownerPresident}</div>
    </Card>
    <Card image={domAvatar} alt="Dom Robinson" round>
        <div class="name">
            <a href="https://www.linkedin.com/in/dcrdev/" target="_blank" rel="noopener">Dom Robinson</a>
        </div>
        <div class="role">{t.ownerDirector}</div>
    </Card>
</ul>

<style>
    .directors {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    .directors :global(.card) {
        flex: 1 1 200px;
    }

    .name {
        font-weight: 700;
    }

    .name a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s var(--ease);
    }

    .name a::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
    }

    :global(.card:hover) .name a {
        color: var(--accent);
    }

    .role {
        color: var(--text-dim);
        font-size: 0.9rem;
    }
</style>
