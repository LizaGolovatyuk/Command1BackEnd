BEGIN;
    UPDATE public.bird_species
    SET (avatar, video, preview) = ('undefined.jpg', NULL, 'undefined.png');
COMMIT;