ALTER TABLE IF EXISTS public.bird_species
    ADD video CHARACTER VARYING(30) NULL,
    ADD avatar CHARACTER VARYING(30) NULL DEFAULT 'undefined.jpg';