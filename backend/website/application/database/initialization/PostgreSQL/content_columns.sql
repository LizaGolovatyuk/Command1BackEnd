ALTER TABLE IF EXISTS public.bird_species
    ADD video CHARACTER VARYING(30) NULL,
    ADD preview CHARACTER VARYING(30) NULL DEFAULT 'undefined.png',
    ADD avatar CHARACTER VARYING(30) NULL DEFAULT 'undefined.jpg';