<script lang="ts">
    import type { Snippet } from 'svelte';

    let {
        image,
        alt,
        round = false,
        children,
    }: {
        image: string;
        alt: string;
        /** Render the media as a circular avatar (vs. a square logo). */
        round?: boolean;
        children: Snippet;
    } = $props();
</script>

<li class="card">
    <img class="media" class:round src={image} {alt} />
    <div class="body">
        {@render children()}
    </div>
</li>

<style>
    .card {
        position: relative;
        display: flex;
        align-items: center;
        gap: 1rem;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 1rem 1.25rem;
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition:
            transform 0.3s var(--ease),
            border-color 0.3s var(--ease),
            background 0.3s var(--ease),
            box-shadow 0.3s var(--ease);
    }

    .card:hover {
        transform: translateY(-3px);
        border-color: var(--border-hover);
        background: var(--surface-hover);
        box-shadow: var(--shadow-hover);
    }

    .media {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        transition:
            transform 0.3s var(--ease),
            border-color 0.3s var(--ease);
    }

    .media.round {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid var(--border);
    }

    .card:hover .media {
        transform: scale(1.06);
    }

    .card:hover .media.round {
        border-color: var(--border-hover);
    }
</style>
