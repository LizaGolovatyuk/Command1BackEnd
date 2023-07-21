BEGIN;
    UPDATE public.bird_species
    SET (ebirdid, avatar, video, preview) = (NULL, 'undefined.jpg', NULL, 'undefined.png');
COMMIT;