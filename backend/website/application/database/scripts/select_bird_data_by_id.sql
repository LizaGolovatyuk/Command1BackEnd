SELECT
    ebirdid, avatar, video, preview
    FROM public.bird_species
    WHERE id = '{{bird_id}}';