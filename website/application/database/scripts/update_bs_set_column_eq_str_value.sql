BEGIN;
    UPDATE public.bird_species
        SET {{column}} = '{{value}}'
        WHERE id = {{bird_id}};
COMMIT;