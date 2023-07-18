SELECT
    id, ebirdid, avatar, video, preview
    FROM public.bird_species
    WHERE latin = '{{bird_latin}}';